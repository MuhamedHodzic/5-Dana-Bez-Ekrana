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
  "/5-Dana-Bez-Ekrana/images/9b8cd32c-ae0d-4150-8d2c-4f2d7b640cf1.JPG",
  "/5-Dana-Bez-Ekrana/images/a2fae47a-efdc-4100-800c-53c6ebaed90b.JPG",
  "/5-Dana-Bez-Ekrana/images/6d88c565-9e77-4164-8b54-912933d96788.JPG",
  "/5-Dana-Bez-Ekrana/images/3892c298-0e56-43f0-a24d-035d13f7b1fb.JPG",
  "/5-Dana-Bez-Ekrana/images/3a213116-f3a8-4d8d-aa81-a01dd926edb6.JPG",
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

      {/* Main Slideshow - Full Screen Height on Mobile */}
      <div className="relative w-screen h-[80vh] sm:h-[450px] md:h-[550px] lg:h-[600px] overflow-hidden bg-gradient-to-b from-white via-gray-50 to-white shadow-inner">
        {/* Subtle animated gradient background */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/5 animate-pulse" />
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
              className="w-full h-full object-contain object-center bg-white"
              loading="lazy"
            />
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <motion.button
          onClick={prev}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors backdrop-blur-sm shadow-lg border border-gray-200"
          aria-label="Prethodna slika"
        >
          <ChevronLeft size={24} className="md:w-8 md:h-8" />
        </motion.button>

        <motion.button
          onClick={next}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors backdrop-blur-sm shadow-lg border border-gray-200"
          aria-label="Sljedeća slika"
        >
          <ChevronRight size={24} className="md:w-8 md:h-8" />
        </motion.button>

        {/* Slide Counter Badge */}
        <motion.div
          className="absolute top-4 right-4 z-20 bg-white/90 text-gray-800 px-3 py-2 rounded-full backdrop-blur-sm shadow-lg border border-gray-200"
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
                  ? "bg-primary w-6"
                  : "bg-gray-400 w-2"
              }`}
              aria-label={`Slika ${index + 1}`}
            />
          ))}
        </motion.div>

        {/* Autoplay toggle */}
        <motion.button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute bottom-4 right-4 z-20 px-3 py-2 md:px-4 md:py-3 rounded-full bg-white/90 text-gray-800 hover:bg-white transition-colors backdrop-blur-sm font-semibold flex items-center gap-2 shadow-lg border border-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          aria-label={isAutoPlay ? "Zaustavi autoplay" : "Pokreni autoplay"}
        >
          {isAutoPlay ? (
            <>
              <span className="text-sm">⏸️</span>
              <span className="hidden sm:inline text-xs">PAUSE</span>
            </>
          ) : (
            <>
              <span className="text-sm">▶️</span>
              <span className="hidden sm:inline text-xs">PLAY</span>
            </>
          )}
        </motion.button>
      </div>

      {/* O Projektu Sekcija */}
      <motion.section
        className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-white to-gray-50"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
            >
              O Projektu
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-blue to-primary mx-auto mb-8 rounded-full"></div>
            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
            >
              "5 Dana Bez Ekrana" je edukativni projekat koji učenicima pruža jedinstvenu priliku da provedu pet dana u prirodi,
              daleko od digitalnih uređaja, fokusirajući se na zajedništvo, kreativnost i unutrašnji mir.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {[
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Digitalni Detoks",
                desc: "Oslobodite se digitalnih lanaca i iskusite prave slobode bez ekrana"
              },
              {
                icon: <Users className="w-10 h-10" />,
                title: "Zajedništvo",
                desc: "Izgradite prave veze i prijateljstva sa vršnjacima"
              },
              {
                icon: <BookOpen className="w-10 h-10" />,
                title: "Kreativnost",
                desc: "Razvijajte nove vještine i samopouzdanje kroz aktivnosti"
              }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -12, scale: 1.03 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.18 + Math.random() * 0.2, type: "spring", stiffness: 250 + Math.random() * 50, damping: 20 }}
                className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 relative overflow-hidden hover:border-sky-blue/30"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-sky-blue/5 via-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-sky-blue/10 to-transparent rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700" />
                <div className="relative z-10">
                  <div className="text-sky-blue mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-sky-blue transition-colors duration-300">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <Link
              to="/o-projektu"
              className="inline-flex items-center gap-3 bg-sky-blue hover:bg-sky-blue/90 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform hover:-rotate-1 hover:shadow-sky-blue/25 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Saznaj Više o Projektu</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Aktivnosti Sekcija */}
      <motion.section
        className="py-16 md:py-24 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 200 }}
          >
            Naše Aktivnosti
          </motion.h2>
          <div className="w-24 h-1 bg-sky-blue mx-auto mb-16 rounded-full"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
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
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 12, scale: 1.02 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 + Math.random() * 0.2, type: "spring", stiffness: 200 + Math.random() * 30, damping: 25 }}
                className="group flex items-center gap-6 p-6 bg-gradient-to-r from-white to-gray-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden hover:border-sky-blue/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-sky-blue/3 to-primary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-sky-blue/5 to-transparent rounded-full -ml-8 -mt-8 group-hover:scale-125 transition-transform duration-600" />
                <div className="relative z-10 flex items-center gap-6">
                  <div className="w-3 h-3 bg-sky-blue rounded-full flex-shrink-0 group-hover:scale-150 transition-transform duration-300" />
                  <p className="text-gray-800 font-semibold text-lg group-hover:text-sky-blue transition-colors duration-300">{activity}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link
              to="/aktivnosti"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-sky-blue to-primary hover:from-sky-blue/90 hover:to-primary text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-xl hover:scale-105 transform hover:rotate-1 hover:shadow-primary/25 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Pogledaj Detaljniji Program</span>
              <ChevronRight className="w-5 h-5 relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
