import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Building2, Users, Heart, Handshake, ArrowRight } from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function Partneri() {
  useScrollToTop();
  const partners = [
    {
      name: "Narodna biblioteka Mostar",
      role: "Osnivač",
      icon: <Building2 size={40} />,
      desc: "Ključni partner koji je osnovao i vodi projekt. Imaju bogatu historiju edukativnog rada sa mladima.",
      color: "primary",
    },
    {
      name: "Nastavnički fakultet Mostar",
      role: "Edukativni partner",
      icon: <Users size={40} />,
      desc: "Pruža stručnjake resurse, obuku za edukatore i akademsku podršku programu.",
      color: "sky-blue",
    },
    {
      name: "Yunus Emre institut",
      role: "Kulturni partner",
      icon: <Heart size={40} />,
      desc: "Podržava kreativne komponente programa i pomaže u promoviranju kulturnog sadržaja.",
      color: "nature-green",
    },
    {
      name: "Centar za izgradnju mira Sanski Most",
      role: "Partner za društveni mir",
      icon: <Handshake size={40} />,
      desc: "Omogućava nam da organizujemo kampove i pruža duhovnu podršku zajedničkim vrijednostima.",
      color: "primary",
    },
  ];

  const colors = {
    primary: {
      bg: "from-primary/10 to-primary/5",
      border: "border-primary/20",
      icon: "bg-primary text-white",
      text: "text-primary",
    },
    "sky-blue": {
      bg: "from-sky-blue/10 to-sky-blue/5",
      border: "border-sky-blue/20",
      icon: "bg-sky-blue text-white",
      text: "text-sky-blue",
    },
    "nature-green": {
      bg: "from-nature-green/10 to-nature-green/5",
      border: "border-nature-green/20",
      icon: "bg-nature-green text-white",
      text: "text-nature-green",
    },
    "warm-beige": {
      bg: "from-warm-beige/40 to-warm-beige/20",
      border: "border-warm-beige/30",
      icon: "bg-warm-beige text-foreground",
      text: "text-warm-beige",
    },
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
            Naši partneri
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Institucije i organizacije koje čine naš rad mogućim
          </motion.p>
        </div>
      </motion.section>

      {/* Partnership Intro */}
      <motion.section 
        className="py-16 bg-gradient-to-br from-primary/5 to-sky-blue/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-2xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Snaga zajednice
          </motion.h2>
          <motion.p 
            className="text-muted-foreground text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Naš projekt ne bi bio moguć bez podrške i saradnje naših partnera.
            Zajedno kreiramo program koji mijenja živote mladih i promoviše
            digitalni detoks kao neophodnu praksu za mentalno zdravlje.
          </motion.p>
        </div>
      </motion.section>

      {/* Partners Grid */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="section-title text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Naši ključni partneri
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {partners.map((partner, index) => {
              const colorScheme = colors[partner.color as keyof typeof colors];
              return (
                <motion.div
                  key={index}
                  className={`bg-gradient-to-br ${colorScheme.bg} p-8 rounded-xl border ${colorScheme.border} cursor-pointer`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <motion.div
                    className={`w-16 h-16 ${colorScheme.icon} rounded-lg flex items-center justify-center mb-6`}
                    whileHover={{ rotate: 10, scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    {partner.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {partner.name}
                  </h3>
                  <p className={`font-semibold ${colorScheme.text} mb-4`}>
                    {partner.role}
                  </p>
                  <p className="text-muted-foreground">{partner.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* How We Collaborate */}
      <section className="py-20 bg-gradient-to-br from-warm-beige/20 to-warm-beige/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">Kako saradujemo?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl mb-4">📋</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Planiranje
              </h3>
              <p className="text-muted-foreground">
                Zajedno dizajniramo program koji zadovoljava potrebe i standarde
                svih partnera
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Izvršavanje
              </h3>
              <p className="text-muted-foreground">
                Proporcionalno ulažu resurse, stručnjake, i logističku podršku
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Evaluacija
              </h3>
              <p className="text-muted-foreground">
                Zajedno mjerimo rezultate i planiramo unapređenja za sledeće
                godine
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-12">
            Zašto biti partner?
          </h2>

          <div className="space-y-6">
            <div className="flex gap-6 p-6 bg-gradient-to-r from-primary/5 to-primary/10 rounded-lg border border-primary/20">
              <div className="text-3xl flex-shrink-0">🎯</div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Doprinos društvu
                </h3>
                <p className="text-muted-foreground">
                  Biti dio pokreta koji pozitivno mijenja život mladih i brine o
                  njihovom mentalnom zdravlju
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gradient-to-r from-sky-blue/5 to-sky-blue/10 rounded-lg border border-sky-blue/20">
              <div className="text-3xl flex-shrink-0">📈</div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Vidljivost i prepoznatljivost
                </h3>
                <p className="text-muted-foreground">
                  Biti asociran sa nacionalnim projektom koji dobija sve veću
                  pažnju
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gradient-to-r from-nature-green/5 to-nature-green/10 rounded-lg border border-nature-green/20">
              <div className="text-3xl flex-shrink-0">🤓</div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Razvoj novih talenta
                </h3>
                <p className="text-muted-foreground">
                  Pronalazak i obuka budućih lidera i edukadora iz zajednice
                </p>
              </div>
            </div>

            <div className="flex gap-6 p-6 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg border border-primary/20">
              <div className="text-3xl flex-shrink-0">🌱</div>
              <div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Sinergija i saradnja
                </h3>
                <p className="text-muted-foreground">
                  Mogućnost saradnje sa drugim instituciajama i proširenja mreže
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Inquiry */}
      <section className="py-20 bg-gradient-to-r from-nature-green to-sky-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Zainteresovani za saradnju?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Kontaktirajte nas da diskutujemo kako vaša organizacija može biti
            dio našeg projekta
          </p>
          <Link
            to="/kontakt"
            className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center"
          >
            Kontaktiraj nas
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
