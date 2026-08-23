import { ExpandIcon, XIcon } from "lucide-react";
import { useState } from "react";
import FadeContent from "./FadeContent";
import AnimatedItem from "./AnimatedItem";

interface CertificateItemsStruct {
  id: number;
  img: string;
  alt: string;
  title: string;
}

const certificateItems: CertificateItemsStruct[] = [
  {
    id: 1,
    img: "img/sertifikat/web-development.jpg",
    alt: "sertifikat-web-development",
    title: "Peserta Web Development & Web Design Tingkat Provinsi 2025",
  },
  {
    id: 2,
    img: "img/sertifikat/lks-kabupaten.jpg",
    alt: "sertifikat-lks-kabupaten",
    title:
      "Juara I LKS IT Network Systems Administration Tingkat Kabupaten 2026",
  },
  {
    id: 3,
    img: "img/sertifikat/lks-jateng.png",
    alt: "sertifikat-lks-jateng",
    title:
      "Juara IV LKS IT Network Systems Administration Tingkat Provinsi 2026",
  },
];

const CertificateSection = () => {
  const [isClickedCertificate, setIsClickedCertificate] = useState(false);
  const [imgCertificate, setimgCertificate] = useState<string | undefined>(
    undefined,
  );

  const handleDetailCertificate = (img: string) => {
    setIsClickedCertificate(!isClickedCertificate);
    setimgCertificate(img);
  };
  return (
    <section
      id="sertifikat"
      className="flex flex-col py-20 md:py-30 items-center w-full min-h-screen"
    >
      <div className="w-11/12 md:w-xl text-center">
        <AnimatedItem direction="vertical" reverse={true} delay={0.3}>
          <h2 className="text-4xl font-semibold font-heading text-slate-900">
            Pencapaian & Sertifikat
          </h2>
        </AnimatedItem>
        <AnimatedItem direction="vertical" reverse={true} delay={0.1}>
          <p className="leading-relaxed mt-8 text-slate-600">
            Setiap sertifikat di sini punya ceritanya sendiri—mulai dari proses
            trial and error, malam-malam panjang untuk coding, hingga akhirnya
            berhasil menaklukkan tantangan baru. Intip beberapa pencapaian yang
            menandai perjalananku sejauh ini!
          </p>
        </AnimatedItem>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mt-10 md:mt-20">
        {certificateItems.map((item) => (
          <FadeContent
            key={item.id}
            blur={true}
            duration={2000}
            delay={0.2}
            initialOpacity={0}
            className="w-full h-80 p-3 rounded-2xl overflow-hidden bg-slate-900 text-white border border-slate-800 shadow-xl flex flex-col justify-between"
          >
            <div
              onClick={() => handleDetailCertificate(item.img)}
              className="w-full relative h-55 rounded-xl overflow-hidden bg-white group"
            >
              <img src={item.img} alt={item.alt} className="size-full" />
              <div className="size-full absolute flex justify-center items-center text-white cursor-pointer opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500  left-0 bottom-0 bg-black/50">
                <ExpandIcon className="size-10" />
              </div>
              <div
                className={`w-full h-screen bg-white/10 backdrop-blur-2xl fixed top-0 left-0 flex justify-center items-center transition-all duration-500 z-999 ${isClickedCertificate ? "opacity-100 visible" : "opacity-0 invisible"}`}
              >
                <div className="w-10/12 h-[80vh] rounded-xl relative shadow-xl bg-white">
                  <button
                    onClick={() =>
                      setIsClickedCertificate(!isClickedCertificate)
                    }
                    className="absolute transition-all duration-500 hover:rotate-360 -top-3 -right-3 size-8 bg-slate-600 text-white rounded-full flex justify-center items-center cursor-pointer p-2"
                  >
                    <XIcon />
                  </button>
                  <img
                    src={imgCertificate}
                    alt="foto-sertifikat"
                    className="size-full"
                  />
                </div>
              </div>
            </div>
            <h3 className="font-semibold w-10/12 mt-5">{item.title}</h3>
          </FadeContent>
        ))}
      </div>
    </section>
  );
};

export default CertificateSection;
