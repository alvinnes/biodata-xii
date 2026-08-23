import InfiniteMenu from "./InfiniteMenu";

const itemsProject = [
  {
    image: "img/projects/website-furniture.png",
    link: "https://furniture.craftiacode.my.id/",
    title: "Modern Furniture Catalog",
    description:
      "Katalog digital perabotan rumah berdesain minimalis yang dirancang untuk menonjolkan visual produk.",
  },
  {
    image: "img/projects/website-coffeeshop.png",
    link: "https://coffee.craftiacode.my.id/",
    title: "Coffee Shop Landing Page",
    description:
      "Website profil kedai kopi dengan desain hangat dan estetik untuk menonjolkan menu serta suasana tempat.",
  },
  {
    image: "img/projects/website-sekolah.png",
    link: "https://school.craftiacode.my.id/",
    title: "SMK Digital Platform",
    description:
      "Pusat informasi sekolah yang responsif, rapi, dan mudah dinavigasi oleh siswa maupun calon pendaftar.",
  },
];

const ProjectSection = () => {
  return (
    <section
      id="proyek"
      className="flex flex-col pt-30 items-center w-full h-screen"
    >
      <div className="w-xl text-center">
        <h2 className="text-4xl font-semibold font-heading text-slate-900">
          Arsip Proyek Terbaik
        </h2>
        <p className="leading-relaxed mt-8 text-slate-600">
          Bagiku, setiap proyek adalah kesempatan baru untuk memecahkan sebuah
          masalah. Di bawah ini adalah kumpulan aplikasi web, studi kasus, dan
          eksperimen yang telah aku kembangkan. Jangan ragu untuk melihat
          demonya atau mengintip ke dalam repository kodenya!
        </p>
      </div>
      <div className="w-11/12 relative text-white mt-20">
        <InfiniteMenu items={itemsProject} scale={1} />
      </div>
    </section>
  );
};

export default ProjectSection;
