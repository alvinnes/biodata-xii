import { createClient } from "@/utils/supabase/client";
import {
  CalendarIcon,
  ExpandIcon,
  XIcon,
  AwardIcon,
  SearchXIcon,
  PlusIcon,
  RotateCcwIcon,
} from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useMemo, useState } from "react";
import { LoginForm } from "./login-form";
import useCertificatesStore from "@/stores/useIsLoading";

const supabase = createClient();

interface CardCertificatesProps {
  setIsClicked: Dispatch<SetStateAction<boolean>>;
  isClicked: boolean;
  setIsClickedButton: Dispatch<SetStateAction<boolean>>;
  isClickedButton: boolean;
  searchQuery?: string;
  setSearchQuery?: Dispatch<SetStateAction<string>>;
  selectedCategory?: string;
  setSelectedCategory?: Dispatch<SetStateAction<string>>;
  sortBy?: "newest" | "oldest" | "title";
}

interface CertificatesData {
  id: number;
  title: string;
  category: string;
  certificate: string;
  created_at: string;
}

const CardCertificates = ({
  setIsClicked,
  isClicked,
  setIsClickedButton,
  isClickedButton,
  searchQuery = "",
  setSearchQuery,
  selectedCategory = "Semua",
  setSelectedCategory,
  sortBy = "newest",
}: CardCertificatesProps) => {
  const [dataCertificates, setDataCertificates] = useState<
    CertificatesData[] | null
  >(null);
  const setIsFetch = useCertificatesStore((data) => data.setIsFetch);
  const isFetch = useCertificatesStore((data) => data.isFetch);
  const setTotalCertificates = useCertificatesStore(
    (data) => data.setTotalCertificates,
  );
  const setCategories = useCertificatesStore((data) => data.setCategories);

  const [filteredCertificate, setFilteredCertificate] = useState<
    CertificatesData[] | undefined
  >(undefined);

  useEffect(() => {
    const fetchDataCertificates = async () => {
      try {
        setIsFetch(true);
        const { data: certificates, error } = await supabase
          .from("certificates")
          .select("*")
          .order("created_at", { ascending: false });

        if (!error && certificates) {
          setDataCertificates(certificates);
          setTotalCertificates(certificates.length);

          const cats = Array.from(
            new Set(certificates.map((c: any) => c.category).filter(Boolean)),
          ) as string[];
          setCategories(["Semua", ...cats]);
        } else {
          setDataCertificates([]);
          setTotalCertificates(0);
          setCategories(["Semua"]);
        }
      } catch (err) {
        console.error(err);
        setDataCertificates([]);
        setTotalCertificates(0);
        setCategories(["Semua"]);
      } finally {
        setIsFetch(false);
      }
    };
    fetchDataCertificates();
  }, [setIsFetch, setTotalCertificates, setCategories]);

  const filteredData = useMemo(() => {
    if (!dataCertificates) return null;
    let result = [...dataCertificates];

    if (selectedCategory && selectedCategory !== "Semua") {
      result = result.filter((item) => item.category === selectedCategory);
    }

    if (searchQuery && searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title?.toLowerCase().includes(q) ||
          item.category?.toLowerCase().includes(q),
      );
    }

    if (sortBy === "newest") {
      result.sort(
        (a, b) =>
          new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
      );
    } else if (sortBy === "oldest") {
      result.sort(
        (a, b) =>
          new Date(a.created_at).getTime() - new Date(b.created_at).getTime(),
      );
    } else if (sortBy === "title") {
      result.sort((a, b) => a.title.localeCompare(b.title));
    }

    return result;
  }, [dataCertificates, selectedCategory, searchQuery, sortBy]);

  const handlePreviewCertificate = (id: number) => {
    const filterCertificate = dataCertificates?.filter((data) => data.id == id);
    setFilteredCertificate(filterCertificate);
    setIsClicked(true);
  };

  const resetAllFilters = () => {
    if (setSelectedCategory) setSelectedCategory("Semua");
    if (setSearchQuery) setSearchQuery("");
  };

  return (
    <div className="w-full flex flex-col gap-6">
      {!isFetch && dataCertificates && dataCertificates.length === 0 && (
        <div className="w-full flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl border-2 border-dashed border-border/80 bg-card/60">
          <div className="size-16 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-4">
            <AwardIcon className="size-8" />
          </div>
          <h3 className="text-lg font-bold text-foreground">
            Belum Ada Sertifikat Tersimpan
          </h3>
          <p className="text-sm text-muted-foreground mt-1.5 max-w-md leading-relaxed">
            Database Anda saat ini masih kosong. Silakan klik tombol di bawah
            untuk menambahkan sertifikat pertama Anda.
          </p>
          <button
            type="button"
            onClick={() => setIsClickedButton(true)}
            className="mt-5 cursor-pointer inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-sm shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <PlusIcon className="size-4" />
            <span>Tambah Sertifikat Pertama</span>
          </button>
        </div>
      )}

      {!isFetch &&
        dataCertificates &&
        dataCertificates.length > 0 &&
        filteredData &&
        filteredData.length === 0 && (
          <div className="w-full flex flex-col items-center justify-center py-16 px-4 text-center rounded-2xl border-2 border-dashed border-border/80 bg-card/60">
            <div className="size-16 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-4">
              <SearchXIcon className="size-8" />
            </div>
            <h3 className="text-lg font-bold text-foreground">
              Sertifikat Tidak Ditemukan
            </h3>
            <p className="text-sm text-muted-foreground mt-1.5 max-w-md leading-relaxed">
              Tidak ada sertifikat yang cocok dengan kriteria pencarian atau
              kategori yang dipilih.
            </p>
            <button
              type="button"
              onClick={resetAllFilters}
              className="mt-5 cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-background hover:bg-muted text-foreground font-semibold text-xs transition-colors"
            >
              <RotateCcwIcon className="size-3.5" />
              <span>Reset Pencarian & Kategori</span>
            </button>
          </div>
        )}

      <div className="flex flex-wrap gap-6 justify-start w-full">
        {filteredData?.map((data: CertificatesData) => (
          <div
            key={data.id}
            onClick={() => handlePreviewCertificate(data.id)}
            className="w-90 h-80 p-4 rounded-xl shadow-xl hover:ring-2 hover:scale-98 transition-all duration-500 cursor-pointer ring group ring-border bg-card flex flex-col justify-between"
          >
            <div>
              <div className="relative w-full h-45 rounded-xl shadow-md overflow-hidden cursor-pointer">
                <img
                  src={data.certificate}
                  alt={data.title}
                  className="size-full object-cover group-hover:scale-95 transition-all duration-400"
                />
                <div className="size-full absolute top-0 flex opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 justify-center items-center left-0 bg-black/60">
                  <ExpandIcon className="text-white size-8" />
                </div>
              </div>
              <div className="mt-3.5 flex items-center justify-between">
                <span className="bg-blue-700/10 text-blue-700 dark:text-blue-400 text-[0.7em] font-semibold px-2 py-1 rounded-md border border-blue-500/20">
                  {data.category}
                </span>
                <span className="text-[0.8em] flex items-center gap-1.5 text-muted-foreground">
                  <CalendarIcon className="size-3 text-muted-foreground" />{" "}
                  {data.created_at}
                </span>
              </div>
              <h3 className="text-sm font-semibold mt-3 line-clamp-2 text-ellipsis text-foreground">
                {data.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {filteredCertificate?.map((data) => (
        <div
          key={data.id}
          className={`w-full h-screen fixed transition-all duration-500 animate-in fade-in flex justify-center items-center top-0 left-0 z-999 backdrop-blur-xl bg-black/20 ${
            isClicked ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <div
            className={`w-9/12 relative h-[75vh] bg-white transition-all duration-500 animate-in zoom-in-90 transform rounded-xl flex flex-col items-center p-2 ${
              isClicked ? "scale-100" : "scale-90"
            }`}
          >
            <img
              src={data.certificate}
              alt={data.title}
              className="w-full h-[90%] rounded-xl"
            />
            <span
              onClick={() => setIsClicked(false)}
              className="size-8 rounded-full bg-border -right-2 -top-2 absolute shadow-xl flex justify-center items-center cursor-pointer p-1.5 text-black transition-all duration-400 hover:rotate-360"
            >
              <XIcon />
            </span>
            <h3 className="font-semibold mt-4 font-montserrat text-md line-clamp-1">
              {data.title}
            </h3>
          </div>
        </div>
      ))}

      <div
        className={`w-full h-screen fixed transition-all duration-500 animate-in fade-in flex justify-center items-center top-0 left-0 z-999 backdrop-blur-xl bg-black/20 ${
          isClickedButton ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div
          className={`w-full relative max-w-sm md:max-w-5xl transition-all duration-500 animate-in zoom-in-90 transform ${
            isClickedButton ? "scale-100" : "scale-90"
          }`}
        >
          <span
            onClick={() => setIsClickedButton(false)}
            className="size-8 rounded-full bg-border z-3 -right-2 -top-2 absolute shadow-xl flex justify-center items-center cursor-pointer p-1.5 text-black transition-all duration-400 hover:rotate-360"
          >
            <XIcon />
          </span>
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default CardCertificates;
