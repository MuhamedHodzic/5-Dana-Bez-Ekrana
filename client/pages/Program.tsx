import { motion } from "framer-motion";
import { ArrowRight, BookOpen, CalendarDays, CheckCircle2, PenTool, Users } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const activities = [
  {
    icon: <BookOpen size={26} />,
    title: "Edukativne radionice",
    text: "Radionice o medijskoj pismenosti, zdravim navikama i savremenom obrazovanju.",
  },
  {
    icon: <PenTool size={26} />,
    title: "Kreativne radionice",
    text: "Likovne, literarne i projektne aktivnosti koje razvijaju izražavanje i samopouzdanje.",
  },
  {
    icon: <Users size={26} />,
    title: "Timski rad",
    text: "Zajednički zadaci i igre koje jačaju saradnju, odgovornost i komunikaciju.",
  },
  {
    icon: <CalendarDays size={26} />,
    title: "Planirani raspored",
    text: "Jasan dnevni raspored aktivnosti prilagođen uzrastu i školskom okruženju.",
  },
];

const schedule = [
  ["08:00", "Jutarnji dolazak i prijem učesnika"],
  ["09:00", "Uvodna radionica i predstavljanje teme"],
  ["10:30", "Grupni zadaci i praktičan rad"],
  ["12:00", "Pauza i druženje"],
  ["13:00", "Kreativne ili istraživačke aktivnosti"],
  ["15:00", "Zajednička evaluacija i zaključci"],
];

export default function Program() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />

      <motion.section
        className="bg-gradient-to-r from-sky-blue to-primary text-white"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-white/70">Aktivnosti</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Projektne aktivnosti</h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-8 text-white/90">
            Aktivnosti su osmišljene tako da učesnicima ponude kvalitetan sadržaj, podstaknu
            saradnju i povežu formalno obrazovanje sa praktičnim iskustvom.
          </p>
        </div>
      </motion.section>

      <motion.section
        className="py-14 md:py-20"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {activities.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sky-blue text-white">
                  {item.icon}
                </div>
                <h2 className="mt-4 text-lg font-semibold text-slate-950">{item.title}</h2>
                <p className="mt-2 text-sm leading-7 text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-14 md:py-20 bg-white"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center">Primjer dnevnog rasporeda</h2>
          <div className="mt-10 space-y-3">
            {schedule.map(([time, title]) => (
              <div
                key={time}
                className="flex flex-col gap-2 rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 md:flex-row md:items-center md:gap-6"
              >
                <div className="min-w-28 text-sm font-bold text-primary">{time}</div>
                <div className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 size={18} className="mt-0.5 text-primary" />
                  <span>{title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        className="py-14 md:py-20 bg-slate-50"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-title">Želite više informacija?</h2>
          <p className="section-subtitle mx-auto max-w-2xl">
            Pogledajte novosti ili nas kontaktirajte za dodatna pojašnjenja o programu aktivnosti.
          </p>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/novosti" className="btn-outline inline-flex items-center justify-center gap-2 border-slate-300 text-slate-900 hover:bg-slate-100">
              Novosti
              <ArrowRight size={18} />
            </Link>
            <Link to="/kontakt" className="btn-primary inline-flex items-center justify-center gap-2">
              Kontakt
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </motion.section>

      <Footer />
    </div>
  );
}
