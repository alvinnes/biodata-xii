"use client";

import { cn } from "cn";

import { Button } from "@/app/components/ui/button";
import { Card, CardContent } from "@/app/components/ui/card";
import { Field, FieldGroup, FieldLabel } from "@/app/components/ui/field";
import { Input } from "@/app/components/ui/input";
import { CheckCircle2Icon, Image } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { useForm, UseFormRegister, type SubmitHandler } from "react-hook-form";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { createClient } from "@/utils/supabase/client";
import { Spinner } from "./ui/spinner";

const MAX_FILE_SIZE = 4 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/webp",
];
const supabase = createClient();

const schemaCertificate = z.object({
  title: z
    .string()
    .min(5, "Certificate is required and minimal have 5 characters")
    .max(150, "Certificate maximal have 150 characters")
    .trim(),
  category: z
    .string()
    .min(4, "Category is required and minimal have 4 characters")
    .max(100, "Category maximal have 100 characters")
    .trim(),
  certificateDate: z.string().min(1, "Date is required!"),
  certificate: z
    .custom<FileList>()
    .refine((files) => files && files.length > 0, "Certificate is required!")
    .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, "File max 5MB!")
    .refine(
      (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
      "Type of certificate must be jpg/jpeg/png/webp",
    ),
});

type SchemaCertificateValues = z.infer<typeof schemaCertificate>;
type SchemaCertificateInput = z.input<typeof schemaCertificate>;

interface LoginFormProps {
  className?: string;
}

export function LoginForm({ className }: LoginFormProps) {
  const [imageCertificate, setImageCertificate] = useState<
    Blob | string | undefined
  >(undefined);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      category: "",
    },
    resolver: zodResolver(schemaCertificate),
  });

  const onSubmit: SubmitHandler<SchemaCertificateValues> = async (data) => {
    try {
      setIsLoading(true);
      const file = data.certificate?.[0];
      const fileExt = file.name.split(".").pop();
      const filenameRaw = file.name.split(".")[0];
      const filename = `${Date.now()}-${filenameRaw}.${fileExt}`;
      const filePath = `sertifikat/${filename.toUpperCase()}`;

      const { error: UploadError } = await supabase.storage
        .from("alvinnes_storage")
        .upload(filePath, file, {
          upsert: true,
          cacheControl: "3600",
        });

      const {
        data: { publicUrl },
      } = supabase.storage.from("alvinnes_storage").getPublicUrl(filePath);

      const { error: dbError } = await supabase.from("certificates").insert([
        {
          title: data.title,
          category: data.category,
          certificate: publicUrl,
          created_at: data.certificateDate,
        },
      ]);

      if (dbError) {
        await supabase.storage.from("alvinnes_storage").remove([filePath]);
      }
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 1000);
    }
  };

  const handleShowCertificate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImageCertificate(url);
    }
  };

  return (
    <div className={cn("flex flex-col relative gap-6", className)}>
      <Card className="overflow-hidden p-0 rounded-xl shadow-xl">
        <CardContent className="flex p-0">
          <form onSubmit={handleSubmit(onSubmit)} className="p-6 md:p-8 w-6/12">
            <FieldGroup>
              <div className="flex flex-col items-center gap-2 text-center mb-4">
                <h1 className="text-2xl font-bold">Cerftificate Form</h1>
                <p className="text-balance text-muted-foreground">
                  Add your certificate here
                </p>
              </div>
              <InputItem
                label="Title"
                id="title"
                placeholder="Certificate Title"
                register={register}
                errors={errors.title?.message}
              />

              <InputItem
                label="Category"
                id="category"
                placeholder="Category"
                register={register}
                errors={errors.category?.message}
              />

              <InputItem
                label="Certificate Date"
                id="certificateDate"
                type="date"
                register={register}
                errors={errors.certificateDate?.message}
              />

              <Field className="-mt-6">
                <div className="flex items-center">
                  <FieldLabel htmlFor="password">Certificate Image</FieldLabel>
                </div>
                <div
                  className={`w-full relative flex overflow-hidden flex-col items-center justify-center h-30 rounded-xl border-3 border-border border-dashed ${errors.certificate?.message && "border-red-400"}`}
                >
                  <Image className="size-8" />
                  <p className="text-[0.8em] mt-2">
                    Drag and drop your image here
                  </p>
                  <input
                    type="file"
                    id="certificate-img"
                    className="size-full opacity-0 cursor-pointer z-5 absolute top-0 left-0"
                    {...register("certificate", {
                      required: "Certificate is required",
                      onChange: (e) => handleShowCertificate(e),
                    })}
                  />
                  {imageCertificate != undefined && (
                    <img
                      src={imageCertificate}
                      alt="certificate image"
                      className="size-full object-cover cursor-pointer absolute top-0 left-0 z-4"
                    />
                  )}
                </div>
                <p className="text-red-500 text-[0.8em] -mt-2 ml-1">
                  {errors.certificate?.message || ""}
                </p>
              </Field>
              <Field>
                <Button
                  type="submit"
                  className={`${isLoading ? "cursor-not-allowed" : "cursor-pointer"} rounded-md shadow-sm`}
                  disabled={isLoading}
                >
                  Submit
                </Button>
              </Field>
            </FieldGroup>
          </form>
          <div className="relative hidden bg-muted md:block w-8/12">
            <img
              src="/img/bg-certificate-form.jpg"
              alt="Image"
              className="absolute inset-0 h-full w-full object-cover object-left dark:brightness-[0.2] dark:grayscale"
            />
          </div>
        </CardContent>
      </Card>
      <div
        className={`fixed text-sm gap-3 font-semibold transition-all duration-500 left-1/2 flex items-center px-6 -translate-x-1/2 bg-white rounded-xl shadow-xl w-xs h-12 ${isLoading ? "opacity-100 visible top-10" : "opacity-0 invisible top-5"}`}
      >
        <Spinner /> Loading.........
      </div>
      <div
        className={`fixed transition-all duration-500 text-sm gap-2 font-semibold left-1/2 flex items-center px-6 -translate-x-1/2 bg-white rounded-xl shadow-xl w-xs h-12 ${isSuccess ? "opacity-100 visible top-10" : "opacity-0 invisible top-5"}`}
      >
        <CheckCircle2Icon className="text-green-700 size-5" /> Success add
        certificate!
      </div>
    </div>
  );
}

interface InputItemProps {
  label: string;
  id: keyof SchemaCertificateValues;
  type?: string;
  placeholder?: string;
  errors: string | undefined;
  register: UseFormRegister<SchemaCertificateInput>;
}

const InputItem = (props: InputItemProps) => {
  const { label, id, type = "text", errors, register, placeholder } = props;
  return (
    <Field className="-mt-6">
      <FieldLabel htmlFor={id}>{label}</FieldLabel>
      <Input
        id={id}
        type={type}
        placeholder={placeholder}
        {...register(id)}
        className={` ${errors && "border-red-400 focus:border-red-400"}`}
      />
      <p className="text-red-500 text-[0.8em] -mt-2 ml-1">{errors || ""}</p>
    </Field>
  );
};
