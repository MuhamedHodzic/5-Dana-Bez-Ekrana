import { ArrowUp, Facebook, Instagram, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 bg-slate-950 text-white hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-bold uppercase tracking-[0.18em] text-white">
              5 dana bez ekrana
            </h3>
            <p className="mt-4 max-w-sm text-sm leading-7 text-white/70">
              Edukativni projektni portal posvećen digitalnom odmoru, učenju,
              saradnji i zdravijem odnosu prema tehnologiji.
            </p>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white">Brzi linkovi</h4>
            <ul className="mt-4 space-y-3 text-sm text-white/75">
              <li><Link to="/o-projektu" className="transition-colors hover:text-white">O projektu</Link></li>
              <li><Link to="/aktivnosti" className="transition-colors hover:text-white">Aktivnosti</Link></li>
              <li><Link to="/novosti" className="transition-colors hover:text-white">Novosti</Link></li>
              <li><Link to="/galerija" className="transition-colors hover:text-white">Galerija</Link></li>
              <li><Link to="/kontakt" className="transition-colors hover:text-white">Kontakt</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-base font-semibold text-white">Kontakt</h4>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <p className="flex items-center gap-2">
                <Phone size={16} />
                <span>+387 36 000 000</span>
              </p>
              <a href="mailto:narodnabibliotekamostar@gmail.com" className="flex items-center gap-2 transition-colors hover:text-white">
                <Mail size={16} />
                <span>narodnabibliotekamostar@gmail.com</span>
              </a>
              <p className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5" />
                <span>Mostar, Bosna i Hercegovina</span>
              </p>
            </div>

            <div className="mt-5 flex items-center gap-3">
              <a href="https://www.instagram.com/5dana_bez_ekrana?igsh=aWtwbGF3d285dmEw" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 transition-all hover:bg-white hover:text-slate-950" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 transition-all hover:bg-white hover:text-slate-950" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="rounded-full bg-white/10 p-3 transition-all hover:bg-white hover:text-slate-950" aria-label="YouTube">
                <Youtube size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-white/10 pt-6 md:flex-row md:items-center md:justify-between">
          <p className="text-sm text-white/60">© {currentYear} 5 dana bez ekrana. Sva prava zadržana.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-white hover:text-slate-950"
          >
            <ArrowUp size={16} />
            Nazad na vrh
          </button>
        </div>
      </div>
    </footer>
  );
}
