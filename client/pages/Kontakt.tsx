import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Instagram } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

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

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.41c0-3.017 1.792-4.684 4.533-4.684 1.313 0 2.686.236 2.686.236v2.962H15.83c-1.49 0-1.955.931-1.955 1.887v2.262h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073Z" />
  </svg>
);

export default function Kontakt() {
  useScrollToTop();

  const openMap = "https://maps.google.com/?q=Mostar,Bosnia";

  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section */}
      <motion.section 
        className="bg-gradient-to-r from-nature-green to-sky-blue text-white py-16 md:py-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Kontaktiraj nas
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Pronađite nas putem društvenih mreža, emaila, telefona i lokacije
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-sky-blue/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <h2 className="section-title mb-4">Kontakt informacije</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Za sva pitanja i prijave najbrže nas možete pronaći na kanalima ispod.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 md:gap-6">
            <motion.a 
              href="mailto:narodnabibliotekamostar@gmail.com"
              aria-label="Pošalji email"
              className="group bg-white p-4 md:p-6 rounded-xl border border-sky-blue/20 text-center cursor-pointer flex flex-col items-center justify-center min-h-[220px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-sky-blue text-white rounded-lg flex items-center justify-center mx-auto mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={24} />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Email</h3>
              <span className="text-sky-blue hover:text-sky-blue/80 transition-colors break-all text-xs md:text-sm font-semibold group-hover:underline">
                narodnabibliotekamostar@gmail.com
              </span>
            </motion.a>

            <motion.a 
              href="tel:+38762490253"
              aria-label="Pozovi broj telefona"
              className="group bg-white p-4 md:p-6 rounded-xl border border-emerald-200 text-center cursor-pointer flex flex-col items-center justify-center min-h-[220px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05, duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-emerald-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Phone size={24} />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Telefon</h3>
              <span className="text-emerald-600 hover:text-emerald-700 transition-colors text-xs md:text-sm font-semibold group-hover:underline">
                +387 62 490 253
              </span>
            </motion.a>

            <motion.a 
              href={openMap}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otvori lokaciju na mapi"
              className="group bg-white p-4 md:p-6 rounded-xl border border-rose-200 text-center cursor-pointer flex flex-col items-center justify-center min-h-[220px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-rose-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3 hover:bg-rose-600 transition-colors"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin size={24} />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">Lokacija</h3>
              <span className="text-rose-600 hover:text-rose-700 transition-colors text-xs md:text-sm font-semibold group-hover:underline">
                Otvori mapu
              </span>
            </motion.a>

            <motion.a 
              href="https://www.instagram.com/5dana_bez_ekrana?igsh=aWtwbGF3d285dmEw"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otvori Instagram profil"
              className="group bg-white p-4 md:p-6 rounded-xl border border-pink-200 text-center cursor-pointer flex flex-col items-center justify-center min-h-[220px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 text-white rounded-lg flex items-center justify-center mx-auto mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Instagram size={24} />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                Instagram
              </h3>
              <span className="text-pink-500 hover:text-pink-600 transition-colors text-xs md:text-sm font-semibold group-hover:underline">
                Posjetite
              </span>
            </motion.a>

            <motion.a 
              href="https://www.tiktok.com/@5dana_bez_ekrana"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otvori TikTok profil"
              className="group bg-white p-4 md:p-6 rounded-xl border border-slate-300 text-center cursor-pointer flex flex-col items-center justify-center min-h-[220px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mx-auto mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <TikTokIcon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                TikTok
              </h3>
              <span className="text-black hover:text-gray-700 transition-colors text-xs md:text-sm font-semibold group-hover:underline">
                Posjetite
              </span>
            </motion.a>

            <motion.a 
              href="https://www.facebook.com/p/5-dana-bez-ekrana-61556377697361/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Otvori Facebook stranicu"
              className="group bg-white p-4 md:p-6 rounded-xl border border-[#1877F2]/20 text-center cursor-pointer flex flex-col items-center justify-center min-h-[220px] shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              whileTap={{ scale: 0.98 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.5 }}
            >
              <motion.div 
                className="w-12 h-12 bg-[#1877F2] text-white rounded-lg flex items-center justify-center mx-auto mb-3"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <FacebookIcon className="w-6 h-6" />
              </motion.div>
              <h3 className="text-base md:text-lg font-bold text-foreground mb-2">
                Facebook
              </h3>
              <span className="text-[#1877F2] hover:text-[#1668d4] transition-colors text-xs md:text-sm font-semibold group-hover:underline">
                Posjetite
              </span>
            </motion.a>
          </div>
        </div>
      </motion.section>

      <section className="py-12 md:py-20 bg-gradient-to-br from-warm-beige/20 to-warm-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-8 md:mb-12">
            Često postavljana pitanja
          </h2>

          <div className="space-y-4 md:space-y-6">
            {[
              {
                q: "Koliko košta kamp?",
                a: "Cijena kampa varira zavisno od lokacije i vremena. Kontaktirajte nas za detaljne informacije.",
              },
              {
                q: "Koja je minimalna i maksimalna starost za učešće?",
                a: "Kamp je namijenjen učenicima od 10 do 19 godina. Posebne grupe mogu biti organizovane za druge uzraste.",
              },
              {
                q: "Šta ako nemam iskustva?",
                a: "Nema problema! Naš kamp je za sve nivoe iskustva. Pružamo sve potrebne instrukcije i podršku.",
              },
              {
                q: "Da li mogu doći bez prijatelja?",
                a: "Apsolutno! Veliki broj učesnika dolaze sami i brže se druže sa drugima.",
              },
              {
                q: "Kako mogu biti vršnjački edukator?",
                a: "Kontaktirajte nas nakon završetka kampa ako ste zainteresovani. Imamo poseban program za to.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="group bg-white p-4 md:p-6 rounded-lg border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <h3 className="font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300 text-sm md:text-base">{faq.q}</h3>
                <p className="text-muted-foreground text-xs md:text-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-primary/10 to-sky-blue/10 p-8 rounded-xl border border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Vrijeme odgovora
            </h3>
            <div className="space-y-3 text-muted-foreground">
              <p>
                <strong>Email poruke:</strong> Odgovaramo u roku od 24-48 sati
              </p>
              <p>
                <strong>Poruke na društvenim mrežama:</strong> Odgovaramo u roku
                od 24 sata
              </p>
              <p>
                <strong>Hitne poruke:</strong> Molimo označite kao "HITNO" u
                predmetu
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8"
          >
            <h2 className="section-title text-center">Naša lokacija</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
              Narodna biblioteka Mostar
            </p>
          </motion.div>

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
              title="Narodna biblioteka Mostar"
            />
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
