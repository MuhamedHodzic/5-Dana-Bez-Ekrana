import { useState, useEffect, Suspense, lazy } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Mail, MapPin, Instagram, BookOpen, Users, Zap, Link as LinkIcon } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

// TikTok SVG Icon
const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.1 1.82 2.9 2.9 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-.95-.1z"/>
  </svg>
);


const galleryImages = [
  "/5-Dana-Bez-Ekrana/images/9b6dc1b4-f6d8-4033-a288-5b4e44a2d291.JPG",
  "/5-Dana-Bez-Ekrana/images/4ded0865-ae8b-46a0-a995-e1c47aeeb03e.JPG",
  "/5-Dana-Bez-Ekrana/images/5cebf4cc-15d3-4223-a1c5-55c1b3542600.JPG",
  "/5-Dana-Bez-Ekrana/images/9b8cd32c-ae0d-4150-8d2c-4f2d7b640cf1.JPG",
  "/5-Dana-Bez-Ekrana/images/a2fae47a-efdc-4100-800c-53c6ebaed90b.JPG",
  "/5-Dana-Bez-Ekrana/images/6d88c565-9e77-4164-8b54-912933d96788.JPG",
  "/images/3892c298-0e56-43f0-a24d-035d13f7b1fb.JPG",
  "/images/3a213116-f3a8-4d8d-aa81-a01dd926edb6.JPG",
  "/images/45becd75-d2c8-46c2-a582-5e6b3c4c1f66.JPG",
];

const slideVariants = {
  enter: { opacity: 0 },
  center: { opacity: 1, transition: { duration: 0.6 } },
  exit: { opacity: 0, transition: { duration: 0.6 } }
};

export default function Index() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isAutoPlay]);

  const next = () => {
    setCurrent((current + 1) % galleryImages.length);
    setIsAutoPlay(false);
  };

  const prev = () => {
    setCurrent((current - 1 + galleryImages.length) % galleryImages.length);
    setIsAutoPlay(false);
  };

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Main Slideshow - Responsive Height */}
      <div className="relative w-full h-[400px] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* Animated gradient background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-secondary/20 animate-pulse" />
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0"
          >
            <img
              src={galleryImages[current]}
              alt="Slika iz projekta"
              className="w-full h-full object-contain bg-black/50"
              loading="lazy"
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors backdrop-blur-sm"
          aria-label="Prethodna slika"
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8" />
        </motion.button>

        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors backdrop-blur-sm"
          aria-label="Sljedeća slika"
        >
          <ChevronRight size={24} className="md:w-8 md:h-8" />
        </motion.button>

        {/* Slide Counter Badge */}
        <motion.div
          className="absolute top-4 right-4 z-20 bg-black/60 text-white px-3 py-2 rounded-full backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <span className="text-sm font-semibold">{current + 1} / {galleryImages.length}</span>
        </motion.div>

        {/* Slide Indicators */}
        <motion.div
          className="absolute bottom-4 left-0 right-0 z-20 flex justify-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {galleryImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => {
                setCurrent(index);
                setIsAutoPlay(false);
              }}
              whileHover={{ scale: 1.2 }}
              className={`h-2 rounded-full transition-all ${
                index === current
                  ? "bg-white w-6"
                  : "bg-white/50 w-2"
              }`}
              aria-label={`Slika ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Autoplay toggle */}
        <motion.button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 z-20 px-3 py-1 md:px-4 md:py-2 rounded-full bg-white/20 text-white text-xs md:text-sm hover:bg-white/40 transition-colors backdrop-blur-sm font-semibold"
        >
          {isAutoPlay ? "║║" : "▶"}
        </motion.button>
      </div>

      {/* O Projektu Sekcija */}
      <motion.section
        className="py-12 md:py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              O Projektu
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              "5 Dana Bez Ekrana" je edukativni projekat koji učenicima nudi mogućnost da iskuse pet dana u prirodi bez digitalnih uređaja, 
              sa fokusom na zajedništvo, kreativnost i pronalaženje unutrašnjeg mira.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Digitalni Detoks",
                desc: "Oslobodite se digitalnih lanaca i iskusite prave slobode bez ekrana"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Zajedništvo",
                desc: "Izgradite prave veze i prijateljstva sa vršnjacima"
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Kreativnost",
                desc: "Razvijajte nove vještine i samopouzdanje kroz aktivnosti"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gradient-to-br from-primary/10 to-sky-blue/10 p-6 rounded-lg border border-primary/20"
              >
                <div className="text-primary mb-3">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Aktivnosti Sekcija */}
      <motion.section
        className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-sky-blue/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Naše Aktivnosti
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              "Edukativne radionice o medijskoj pismenosti",
              "Kreativne radionice (likovne, literarne)",
              "Timski rad i zajedničke igre",
              "Aktivnosti u prirodi",
              "Razgovori i refleksija",
              "Izveštaji i zaključci"
            ].map((activity, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 5 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />
                <p className="text-foreground font-semibold">{activity}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/program"
              className="btn-primary inline-block"
            >
              Pogledaj Detaljniji Program
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Kontakt Sekcija sa Google Maps */}
      <motion.section
        className="py-12 md:py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Kontaktiraj Nas
          </motion.h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex gap-4">
                <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Email</h3>
                  <a href="mailto:narodnabibliotekamostar@gmail.com" className="text-primary hover:underline">
                    narodnabibliotekamostar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-foreground">Lokacija</h3>
                  <p className="text-muted-foreground">
                    Narodna Biblioteka Mostar<br />
                    Mostar, Bosna i Hercegovina
                  </p>
                </div>
              </div>

              <div className="pt-4">
                <h3 className="font-bold text-foreground mb-3">Prati nas</h3>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/5dana_bez_ekrana?igsh=aWtwbGF3d285dmEw"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
                    title="Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/@5dana_bez_ekrana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white hover:shadow-lg transition-all"
                    title="TikTok"
                  >
                    <TikTokIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>

              <Link to="/kontakt" className="btn-primary inline-block mt-4">
                Pošalji Poruku
              </Link>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2894.843550780359!2d17.8137735!3d43.3444754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134b431becf0147f%3A0xa5b16ffc2a2197f6!2sNarodna%20biblioteka%20Mostar!5e0!3m2!1sen!2sba!4v1709134800000"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Národna biblioteka Mostar"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
