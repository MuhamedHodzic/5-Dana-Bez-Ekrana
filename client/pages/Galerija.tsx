import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  X,
  Heart,
  Camera,
  Instagram,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

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

export default function Galerija() {
  useScrollToTop();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [hoveredImageId, setHoveredImageId] = useState<number | null>(null);

  const galleryImages = [
    { id: 1, title: "Radionica", alt: "Učesnik", height: "tall", src: "/5-Dana-Bez-Ekrana/images/3892c298-0e56-43f0-a24d-035d13f7b1fb.JPG" },
    { id: 2, title: "Grupna fotografija", alt: "Grupa", height: "normal", src: "/5-Dana-Bez-Ekrana/images/3a213116-f3a8-4d8d-aa81-a01dd926edb6.JPG" },
    { id: 3, title: "Aktivnosti na terenu", alt: "Aktivnost", height: "normal", src: "/5-Dana-Bez-Ekrana/images/45becd75-d2c8-46c2-a582-5e6b3c4c1f66.JPG" },
    { id: 4, title: "Priroda", alt: "Priroda", height: "tall", src: "/5-Dana-Bez-Ekrana/images/4ded0865-ae8b-46a0-a995-e1c47aeeb03e.JPG" },
    { id: 5, title: "Učesnici", alt: "Učesnici", height: "normal", src: "/5-Dana-Bez-Ekrana/images/5ba5c770-8ada-41ef-8dec-636d510aaee3.JPG" },
    { id: 6, title: "Intervju", alt: "Intervju", height: "normal", src: "/5-Dana-Bez-Ekrana/images/5cebf4cc-15d3-4223-a1c5-55c1b3542600.JPG" },
    { id: 7, title: "Dodjela priznanja", alt: "Priznanja", height: "tall", src: "/5-Dana-Bez-Ekrana/images/6d88c565-9e77-4164-8b54-912933d96788.JPG" },
    { id: 8, title: "Medijska pažnja", alt: "Mediji", height: "normal", src: "/5-Dana-Bez-Ekrana/images/9b6dc1b4-f6d8-4033-a288-5b4e44a2d291.JPG" },
    { id: 9, title: "Saradnja", alt: "Saradnja", height: "normal", src: "/5-Dana-Bez-Ekrana/images/9b8cd32c-ae0d-4150-8d2c-4f2d7b640cf1.JPG" },
    { id: 10, title: "Razgovor", alt: "Razgovor", height: "normal", src: "/5-Dana-Bez-Ekrana/images/9f82f356-0af5-4305-a772-641b33c82d6d.JPG" },
    { id: 11, title: "Diplome", alt: "Diplome", height: "tall", src: "/5-Dana-Bez-Ekrana/images/a2fae47a-efdc-4100-800c-53c6ebaed90b.JPG" },
    { id: 12, title: "Radionica u sali", alt: "Soba", height: "normal", src: "/5-Dana-Bez-Ekrana/images/ab476010-6829-4fc3-bb5d-33e8d6f305a5.JPG" },
    { id: 13, title: "Zajednički trenutak", alt: "Zajednica", height: "normal", src: "/5-Dana-Bez-Ekrana/images/bc96b28c-578a-44a0-9ad9-487981e74895.JPG" },
    { id: 14, title: "Radionica 2", alt: "Radionica", height: "tall", src: "/5-Dana-Bez-Ekrana/images/c017f780-06f6-4f55-9d70-1dca0570567f.JPG" },
    { id: 15, title: "Priznanja i osmijesi", alt: "Osmijesi", height: "normal", src: "/5-Dana-Bez-Ekrana/images/c6ced443-1061-4395-a3bd-4def19b1c911.JPG" },
    { id: 16, title: "Razigrani tim", alt: "Tim", height: "normal", src: "/5-Dana-Bez-Ekrana/images/cb3db15e-2ed1-456b-85e5-a0fd9f6f2e15.JPG" },
    { id: 17, title: "Medijski intervju", alt: "Intervju", height: "tall", src: "/5-Dana-Bez-Ekrana/images/ce387052-94a1-4a70-8e4b-3af0111b5a74.JPG" },
    { id: 18, title: "Radionica u krugu", alt: "Krug", height: "normal", src: "/5-Dana-Bez-Ekrana/images/E6319E56-C3CD-46C0-9FBC-7113FC6CB97D.JPG" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary/2 to-sky-blue/5">
      <NavBar />

      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-br from-nature-green via-primary to-sky-blue text-white py-12 md:py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-10 left-10 w-56 h-56 bg-white rounded-full blur-3xl"
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <Camera className="w-8 h-8 md:w-10 md:h-10" />
            </motion.div>
            <span className="text-lg md:text-xl font-semibold">Naša galerija</span>
          </motion.div>
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Galerija
          </motion.h1>
          <motion.p 
            className="text-lg md:text-xl text-white/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Vizuelna putovanja kroz naše kampove
          </motion.p>
        </div>
      </motion.section>

      {/* Photo Gallery Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 md:mb-12">
            <h2 className="section-title flex items-center gap-3 mb-2">
              <Camera className="text-primary" size={32} />
              Fotografije
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Kroz ove fotografije vidite ljepotu kampova, autentične trenutke zajedništva i rast
            </p>
          </div>

          {/* Masonry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 auto-rows-max">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                onClick={() => setSelectedImage(image.id)}
                onMouseEnter={() => setHoveredImageId(image.id)}
                onMouseLeave={() => setHoveredImageId(null)}
                className={`group cursor-pointer relative overflow-hidden rounded-xl border-2 border-transparent hover:border-primary/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                  image.height === "tall" ? "lg:row-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Real Image */}
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end justify-between p-3 md:p-4">
                  <div className="flex-1">
                    <p className="text-white font-semibold text-sm md:text-base mb-1">
                      {image.title}
                    </p>
                    <p className="text-white/70 text-xs md:text-sm">Kliknite za veći prikaz</p>
                  </div>
                  <Heart 
                    className={`transition-all duration-300 flex-shrink-0 ml-2 ${
                      hoveredImageId === image.id 
                        ? "text-red-500 scale-110 fill-red-500" 
                        : "text-white/70"
                    }`} 
                    size={20} 
                  />
                </div>

                {/* Badge */}
                <div className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm text-white px-2 py-1 rounded-full text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  #{image.id}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-4 backdrop-blur-sm"
          onClick={() => setSelectedImage(null)}
        >
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl animate-fadeInUp">
            <div className="flex justify-between items-center p-4 md:p-6 border-b border-gray-200">
              <div>
                <h3 className="font-bold text-foreground text-lg md:text-xl">
                  {galleryImages.find(img => img.id === selectedImage)?.title}
                </h3>
                <p className="text-muted-foreground text-sm">Slika #{selectedImage}</p>
              </div>
              <button
                onClick={() => setSelectedImage(null)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            <div className="w-full bg-gray-100 flex items-center justify-center max-h-[70vh]">
              <img
                src={galleryImages.find(img => img.id === selectedImage)?.src}
                alt={galleryImages.find(img => img.id === selectedImage)?.alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>
        </div>
      )}

      {/* Social Media Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8 md:mb-12 flex items-center justify-center gap-3">
            Prati nas na društvenim mrežama
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/5dana_bez_ekrana?igsh=aWtwbGF3d285dmEw"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-400 via-pink-500 to-purple-600 p-8 md:p-12 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <Instagram className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 group-hover:scale-125 transition-transform duration-500" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Instagram</h3>
                <p className="text-white/90 mb-4">Dnevni ažuriranja i posebni trenutci</p>
                <span className="text-lg font-semibold inline-block group-hover:translate-x-2 transition-transform duration-300">
                  @5dana_bez_ekrana →
                </span>
              </div>
            </a>

            {/* TikTok */}
            <a
              href="https://www.tiktok.com/@5dana_bez_ekrana"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-black to-slate-800 p-8 md:p-12 text-white text-center hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative z-10">
                <TikTokIcon className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 group-hover:scale-125 transition-transform duration-500 text-white" />
                <h3 className="text-2xl md:text-3xl font-bold mb-2">TikTok</h3>
                <p className="text-white/90 mb-4">Kratke, energične i zabavne poruke</p>
                <span className="text-lg font-semibold inline-block group-hover:translate-x-2 transition-transform duration-300">
                  @5dana_bez_ekrana →
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Photo Upload CTA */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-nature-green to-sky-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
            <Camera size={32} />
            Imate li fotografije?
          </h2>
          <p className="text-lg md:text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Delite vaša iskustva i specijalne trenutke sa zajednicom
          </p>
          <Link
            to="/kontakt"
            className="inline-flex items-center gap-2 btn-primary bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-transform duration-300"
          >
            <Camera size={20} />
            Pošalji nam fotografije
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
