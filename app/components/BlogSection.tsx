import AnimatedItem from "./AnimatedItem";
import FadeContent from "./FadeContent";

interface BlogItmesStruct {
  id: number;
  img: string;
  title: string;
  description: string;
  link: string;
}

const blogItems: BlogItmesStruct[] = [
  {
    id: 1,
    img: "img/blogs/thumbnail-mikrotik-dasar.jpg",
    title:
      "🚀 TUTORIAL LENGKAP MIKROTIK: SETTINGVLSM, MANAJEMEN USER & BACKUP/RESTORE",
    description:
      " Di video kali ini, kami akan membagikan tutorial lengkap dan cara mudah untuk melakukan konfigurasi pada router MikroTik.",
    link: "https://youtu.be/onFCSXHfUJU?si=crVHrR8AEr-rdtuE",
  },
  {
    id: 2,
    img: "img/blogs/thumbnail-mikrotik-bridge.png",
    title: "🚀 PART 2: TUTORIAL KONFIGURASI DASAR & BRIDGE DI MIKROTIK",
    description:
      " Di video Part 2 kali ini kami akan membagikan tutorial cara mudah untuk melakukan Konfigurasi Dasar dan setting Bridge pada router MikroTik.",
    link: "https://youtu.be/9MZSN8HErLY?si=__E11LDZMmj7v708",
  },
  {
    id: 3,
    img: "img/blogs/thumbnail-mikrotik-firewall.png",
    title:
      "🚀 PART 3: TUTORIAL SETTING FIREWALL FILTER RULES DAN MANAGEMENT CONTENT DI MIKROTIK",
    description:
      "Melanjutkan seri video sebelumnya, di video Part 3 kali ini kami akan membagikan tutorial tentang setting firewall rules dan management content di mikrotik.",
    link: "https://youtu.be/ctfWu_J4PJs?si=gAMvJILmVQRgSjcE",
  },
  {
    id: 4,
    img: "img/blogs/thumbnail-reverse-proxy.png",
    title: "🚀 PART 4: TUTORIAL VPN L2TP & REVERSE PROXY DI MIKROTIK",
    description:
      "Melanjutkan seri video sebelumnya, di video Part 4 kali ini kami akan membagikan tutorial cara mudah untuk melakukan konfigurasi VPN L2TP dan Reverse Proxy di router MikroTik.",
    link: "https://youtu.be/rimhDZ4t7OY?si=dYb9Htg83zqntN7P",
  },
];

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="w-11/12 mx-auto py-20 md:py-30 mt-10 md:mt-30"
    >
      <div className="w-full md:w-xl">
        <AnimatedItem direction="horizontal" reverse={true}>
          <h2 className="text-4xl font-semibold font-heading text-slate-900">
            Blog Eksplorasi
          </h2>
        </AnimatedItem>
        <AnimatedItem direction="horizontal" reverse={true} delay={0.3}>
          <p className="leading-relaxed mt-8 text-slate-600">
            Ruang untuk menuliskan apa yang sedang kupelajari saat ini. Di blog
            ini, kamu akan menemukan berbagai tulisan, mulai dari tutorial
            sederhana hingga rekam jejak eksplorasiku di dunia teknologi
            digital.
          </p>
        </AnimatedItem>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center gap-x-10 gap-y-15 mt-10 md:mt-20 md:-ml-1">
        {blogItems.map((item) => (
          <FadeContent
            key={item.id}
            blur={true}
            duration={2000}
            delay={0.3}
            initialOpacity={0}
            className="w-full h-auto min-h-85 md:h-85 rounded-md bg-slate-100 shadow-sm p-3"
          >
            <a target="_blank" href={item.link}>
              <img
                src={item.img}
                alt="foto-blog"
                className="w-full h-50 object-cover rounded-md"
              />
              <h3 className="font-semibold line-clamp-2 text-ellipsis overflow-hidden mt-4">
                {item.title}
              </h3>
              <p className="text-sm line-clamp-2 text-ellipsis overflow-hidden mt-2">
                {item.description}
              </p>
            </a>
          </FadeContent>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
