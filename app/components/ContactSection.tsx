const ContactSection = () => {
  return (
    <section id="kontak" className="w-11/12 mx-auto flex flex-col items-center py-30">
      <div className="w-xl mb-20 self-start">
        <h2 className="text-4xl font-semibold font-heading text-slate-900">
          Let's Get In Touch
        </h2>
        <p className="leading-relaxed mt-8 text-slate-600">
          Punya ide proyek yang menarik, tawaran kerja sama, atau sekadar ingin
          menyapa? Jangan ragu untuk mengirim pesan. Aku selalu terbuka untuk
          obrolan seru dan peluang baru!
        </p>
      </div>
      <div className="w-full flex justify-center h-150 rounded-xl overflow-hidden">
        <div className="w-1/2 h-full bg-slate-900 relative before:absolute before:size-full before:left-0 before:bottom-0 before:bg-linear-to-t before:from-black/60 before:via-black/30 before:to-transparent">
          <img
            src="img/contact.jpg"
            alt="foto-contact"
            className="size-full object-cover"
          />
        </div>
        <div className="w-1/2 px-15 flex flex-col justify-center gap-10">
          <h2 className="text-3xl ml-1 font-semibold font-heading text-slate-900">
            Hubungi Sekarang!
          </h2>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Masukkan nama anda"
            className="outline-0 ring-[#80808050] transition-all duration-500 hover:ring-4 hover:ring-blue-500/20 focus:ring-blue-500/30 text-sm focus:ring-4 ring-2 px-6 py-4 w-full rounded-full"
          />
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Masukkan email anda"
            className="outline-0 ring-[#80808050] transition-all duration-500 hover:ring-4 hover:ring-blue-500/20 focus:ring-blue-500/30 text-sm focus:ring-4 ring-2 px-6 py-4 w-full rounded-full"
          />
          <textarea
            placeholder="Tulis pesanmu disini"
            name="message"
            id="message"
            className="h-60 outline-0 ring-[#80808050] transition-all duration-500 hover:ring-4 hover:ring-blue-500/20 focus:ring-blue-500/30 text-sm focus:ring-4 ring-2 px-6 py-4 w-full rounded-xl"
          ></textarea>
          <button className="bg-blue-600 hover:bg-blue-700 transition-colors text-white rounded-full font-semibold px-8 py-4 shadow-lg shadow-blue-600/30">
            Kirim Pesan
          </button>
        </div>
      </div>
      <div className="w-full h-150 mt-20 rounded-xl overflow-hidden shadow-xl">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2434.0613355956916!2d110.72507331911086!3d-6.622921316226032!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1787333785494!5m2!1sid!2sid"
          allowFullScreen
          loading="lazy"
          referrerPolicy="strict-origin-when-cross-origin"
          className="size-full"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactSection;
