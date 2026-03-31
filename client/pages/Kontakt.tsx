import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Instagram, Heart } from "lucide-react";
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

export default function Kontakt() {
  useScrollToTop();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // In a real app, you would send this data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

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
            Rado ćemo čuti od vas
          </motion.p>
        </div>
      </motion.section>

      {/* Contact Info Cards */}
      <motion.section 
        className="py-12 md:py-20 bg-gradient-to-br from-primary/5 to-sky-blue/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
            {/* Email */}
            <motion.div 
              className="group bg-white p-6 md:p-8 rounded-xl border border-gray-200 text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)", borderColor: "rgb(var(--primary))" }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <motion.div 
                className="w-14 h-14 bg-primary text-white rounded-lg flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Mail size={28} />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-3">Email</h3>
              <a
                href="mailto:narodnabibliotekamostar@gmail.com"
                className="text-primary hover:text-primary/80 transition-colors break-all text-sm md:text-base font-semibold hover:underline"
              >
                narodnabibliotekamostar@gmail.com
              </a>
            </motion.div>

            {/* Social Media */}
            <motion.div 
              className="group bg-white p-6 md:p-8 rounded-xl border border-gray-200 text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              <motion.div 
                className="w-14 h-14 bg-sky-blue text-white rounded-lg flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <Heart size={28} />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-4">
                Društvene mreže
              </h3>
              <div className="flex gap-3 md:gap-4 justify-center">
                <motion.a
                  href="https://www.instagram.com/5dana_bez_ekrana?igsh=aWtwbGF3d285dmEw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-pink-500 to-purple-500 text-white p-3 rounded-lg transition-all duration-300"
                  title="Instagram"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Instagram size={24} />
                </motion.a>
                <motion.a
                  href="https://www.tiktok.com/@5dana_bez_ekrana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white p-3 rounded-lg transition-all duration-300"
                  title="TikTok"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TikTokIcon className="w-6 h-6" />
                </motion.a>
              </div>
            </motion.div>

            {/* Location */}
            <motion.div 
              className="group bg-white p-6 md:p-8 rounded-xl border border-gray-200 text-center cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <motion.div 
                className="w-14 h-14 bg-nature-green text-white rounded-lg flex items-center justify-center mx-auto mb-4"
                whileHover={{ scale: 1.3, rotate: 10 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin size={28} />
              </motion.div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2">
                Gdje smo
              </h3>
              <p className="text-muted-foreground text-sm md:text-base">
                Mostar, Bosna i Hercegovina
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Form Section */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Pošalji nam poruku</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Popunite formu ispod i odgovorićemo u roku od 48 sati
          </p>

          <div className="bg-gradient-to-br from-primary/5 to-sky-blue/5 p-8 md:p-12 rounded-xl border border-primary/20">
            {submitted && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                <p className="font-semibold">✓ Hvala na vašoj poruci!</p>
                <p className="text-sm">
                  Odgovorićemo vam što je brže moguće na vašu email adresu.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Ime i prezime *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Vaše ime i prezime"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Email adresa *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="vasa@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Predmet *
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all bg-white"
                >
                  <option value="">Odaberite predmet</option>
                  <option value="prijava">Želim se prijaviti za kamp</option>
                  <option value="info">Trebam vise informacija</option>
                  <option value="partneri">Zainteresovan/a sam za partnerstvo</option>
                  <option value="fotografije">Želim poslati fotografije</option>
                  <option value="drugo">Drugo</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-foreground mb-2"
                >
                  Poruka *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Napišite vašu poruku..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full btn-primary bg-primary text-primary-foreground hover:bg-primary/90 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Pošalji poruku
              </button>
            </form>

            <p className="text-center text-muted-foreground text-sm mt-6">
              * Polja su obavezna
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
                a: "Kamp je namenjena učenicima od 10 do 19 godina. Posebne grupe mogu biti organizovane za druge uzraste.",
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
                q: "Šta ako budem bolestan/a tokom kampanja?",
                a: "Imamo medicinskog osoblja na licu mjesta i sve potrebne mjere sigurnosti.",
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

      {/* Response Time Section */}
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

      {/* Google Maps Section */}
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
            Narodne Biblioteke Mostar
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
