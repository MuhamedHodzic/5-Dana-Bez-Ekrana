import { motion } from "framer-motion";
import { ArrowRight, BellRing, CalendarDays, FileText, Newspaper, Users } from "lucide-react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { useScrollToTop } from "@/hooks/useScrollToTop";

const sectionVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const news = [
  {
    title: "Otvoren novi ciklus prijava",
    date: "12. septembar 2025.",
    text: "Objavljeni su uslovi i rokovi za prijavu učenika na projekat.",
    image: "/images/5cebf4cc-15d3-4223-a1c5-55c1b3542600.JPG",
  },
  {
    title: "Održana radionica za učenike",
    date: "18. septembar 2025.",
    text: "Učenici su učestvovali u radionici o timskom radu i savremenom učenju.",
    image: "/images/9b8cd32c-ae0d-4150-8d2c-4f2d7b640cf1.JPG",
  },
  {
    title: "Saradnja sa partnerima",
    date: "24. septembar 2025.",
    text: "Projektne aktivnosti dodatno su podržane saradnjom sa institucijama.",
    image: "/images/4ded0865-ae8b-46a0-a995-e1c47aeeb03e.JPG",
  },
];

const notices = [
  "Raspored aktivnosti objavljuje se svakog petka.",
  "Roditeljski sastanak će biti najavljen putem škole i web stranice.",
  "PDF dokumenti i obrasci dostupni su u sekciji Dokumenti na početnoj stranici.",
];

export default function Rezultati() {
  useScrollToTop();

  return (
    <div className="min-h-screen bg-slate-50">
      <NavBar />

      <motion.section
        className="bg-slate-950 text-white"
        initial="hidden"
        animate="visible"
        variants={sectionVariants}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <p className="text-sm uppercase tracking-[0.25em] text-white/60">Novosti</p>
          <h1 className="mt-4 text-4xl md:text-5xl font-bold">Obavještenja i aktuelnosti</h1>
          <p className="mt-4 max-w-3xl text-base md:text-lg leading-8 text-white/80">
            Pratite najnovije informacije, najave i kratke izvještaje sa školskih i projektnih
            aktivnosti.
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
          <div className="flex items-center gap-3">
            <Newspaper className="text-primary" size={28} />
            <h2 className="section-title mb-0">Novosti</h2>
          </div>
          <p className="section-subtitle mt-2 max-w-2xl">
            Tri najvažnije objave sa pregledom sadržaja i datumom objave.
          </p>

          <div className="grid gap-5 md:grid-cols-3">
            {news.map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -8 }}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl"
              >
                <img src={item.image} alt={item.title} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">{item.date}</p>
                  <h2 className="mt-3 text-xl font-semibold text-slate-950">{item.title}</h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                    Pročitaj više
                    <ArrowRight size={16} />
                  </span>
                </div>
              </motion.article>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <BellRing className="text-primary" size={26} />
              <h2 className="text-2xl font-bold text-slate-950">Obavještenja</h2>
            </div>
            <div className="mt-6 space-y-4">
              {notices.map((notice) => (
                <div key={notice} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700 shadow-sm">
                  {notice}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <CalendarDays className="text-primary" size={26} />
              <h2 className="text-2xl font-bold text-slate-950">Plan narednih aktivnosti</h2>
            </div>
            <div className="mt-6 space-y-4">
              {[
                "Radionica o medijskoj pismenosti",
                "Kreativni rad učenika i izložba radova",
                "Susret sa partnerima i prezentacija rezultata",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <Users size={18} className="mt-1 text-primary" />
                  <span className="text-sm leading-7 text-slate-700">{item}</span>
                </div>
              ))}
            </div>
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
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <FileText size={14} /> Dokumenti i najave
          </div>
          <h2 className="mt-4 text-3xl font-bold text-slate-950">Sve važne informacije na jednom mjestu</h2>
          <p className="mt-4 text-base leading-8 text-slate-600">
            Za detaljne PDF dokumente, obrazce i dodatne informacije pogledajte sekciju Dokumenti
            na početnoj stranici ili nas kontaktirajte direktno.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link to="/#dokumenti" className="btn-primary inline-flex items-center justify-center gap-2">
              Dokumenti
              <ArrowRight size={18} />
            </Link>
            <Link to="/kontakt" className="btn-outline inline-flex items-center justify-center gap-2 border-slate-300 text-slate-900 hover:bg-slate-100">
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
