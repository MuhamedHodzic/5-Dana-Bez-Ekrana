import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Heart,
  Target,
  Users,
  Zap,
  Eye,
  Smile,
  ArrowRight,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

export default function OProjeKtu() {
  useScrollToTop();
  const visionPoints = [
    {
      icon: <Zap size={28} />,
      title: "Sloboda bez stalne tehnologije",
      desc: "Oslobodite se digitalnih lanaca i iskusite prave slobode",
    },
    {
      icon: <Users size={28} />,
      title: "Razvoj ličnih vještina i samopouzdanja",
      desc: "Jačajte svoje sposobnosti kroz praktičnu primjenu i zajednicu",
    },
    {
      icon: <Heart size={28} />,
      title: "Ljepota života bez digitalnih distrakcija",
      desc: "Otkrijte ljepotu jednostavnijih stvari i autentičnih iskustava",
    },
    {
      icon: <Users size={28} />,
      title: "Zajedništvo i međusobna podrška",
      desc: "Izgradite duboke veze sa ljudima koji dijele vaše vrijednosti",
    },
    {
      icon: <Heart size={28} />,
      title: "Dijeljenje emocija i lični rast",
      desc: "Dozvolite sebi da osjećate i rastete kroz iskrene razgovore",
    },
    {
      icon: <Eye size={28} />,
      title: "Pronalaženje unutrašnjeg mira",
      desc: "Umirite um i pronađite mir kroz refleksiju i prirodu",
    },
  ];

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
            O projektu
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Saznajte više o misiji i viziji koja nas vodi
          </motion.p>
        </div>
      </motion.section>

      {/* Main Idea */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Naša ideja
            </motion.h2>
            <motion.div 
              className="space-y-6 text-muted-foreground text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p>
                <strong>Mladi provode previše vremena uz ekrane</strong> što
                utiče na njihovu pažnju, mentalno zdravlje, fizičku aktivnost i
                komunikaciju. Konstantna povezanost sa digitalnim svijetom dovodi
                do gubitka kontakta sa realnim svijetom i sa samima sobom.
              </p>
              <p>
                Naš <strong>kamp nudi pet dana u prirodi bez digitalnih
                uređaja</strong>, sa fokusom na zajedništvo, kreativnost i pronalaženje
                unutrašnjeg mira. To je mogućnost da se mladi ponovo povežu sa
                životom, sa prirodom i sa samima sobom.
              </p>
              <p>
                Kroz edukativne radionice, takmičarske izazove i trenutke
                relaksacije, učesnici stiču nove vještine, samosvijest i dragocjene
                uspomene koje će trajati cijeli život.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="bg-gradient-to-r from-primary/10 to-sky-blue/10 p-8 rounded-xl border border-primary/20"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-start gap-4">
              <motion.div
                whileHover={{ rotate: 10, scale: 1.1 }}
                transition={{ duration: 0.3 }}
              >
                <Target className="text-primary flex-shrink-0 mt-1" size={32} />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-3">
                  Naša vizija
                </h3>
                <p className="text-muted-foreground">
                  Promovisati digitalni detoks i mentalno zdravlje mladih kroz
                  inovativne programe koji povezuju prirodu, kreativnost i
                  zajedništvo.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Vision Section */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary/5 to-sky-blue/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="section-title text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Naša vizija
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visionPoints.map((point, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-xl border border-gray-200 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(15, 23, 42, 0.1)" }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-primary/20 text-primary rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 10, scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  {point.icon}
                </motion.div>
                <h3 className="text-lg font-bold text-foreground mb-3">
                  {point.title}
                </h3>
                <p className="text-muted-foreground">{point.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Why Digital Detox */}
      <motion.section 
        className="py-20 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="section-title mb-12"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Zašto je digitalni detoks važan?
          </motion.h2>

          <div className="space-y-8">
            {[
              {
                icon: <Zap size={24} />,
                color: "bg-primary",
                title: "Poboljšana pažnja i fokus",
                desc: "Bez konstantnih notifikacija i distrakcija, mozak može da se koncentriše dublje i duže."
              },
              {
                icon: <Heart size={24} />,
                color: "bg-sky-blue",
                title: "Mentalno zdravlje",
                desc: "Smanjenje anksioznosti, depresije i nesigurnosti izazvane socijalnim mrežama."
              },
              {
                icon: <Users size={24} />,
                color: "bg-nature-green",
                title: "Bolje komunikacijske vještine",
                desc: "Direktan kontakt jača sposobnost slušanja, empatije i stvarnog razumijevanja."
              },
              {
                icon: <Smile size={24} />,
                color: "bg-warm-beige",
                title: "Više vremena za sebe",
                desc: "Mogućnost da razmislite, da budete kreativni i da uživate u prostim, svakodnevnim radostima."
              }
            ].map((item, i) => (
              <motion.div 
                key={i}
                className="flex gap-6 p-6 rounded-lg hover:bg-primary/5 transition-colors"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                whileHover={{ x: 10 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <motion.div 
                  className={`w-12 h-12 ${item.color} text-white rounded-lg flex items-center justify-center flex-shrink-0`}
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        className="py-20 bg-gradient-to-r from-nature-green to-sky-blue text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Želite da čujete više?
          </motion.h2>
          <motion.p 
            className="text-xl mb-8 text-white/90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Pogledajte detaljno naš program i rezultate koje postižemo
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex justify-center"
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/novosti"
                className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center justify-center transition-all duration-300"
              >
                Pogledaj rezultate
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
