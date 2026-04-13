import { Mail, MapPin, Phone } from "lucide-react";

export default function TopBar() {
  return (
    <div className="bg-slate-950 text-white text-xs md:text-sm border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-white/80">
            <span className="inline-flex items-center gap-2">
              <Phone size={14} />
              <span>+387 62 490 253</span>
            </span>
            <a
              href="mailto:narodnabibliotekamostar@gmail.com"
              className="inline-flex items-center gap-2 hover:text-white transition-colors"
            >
              <Mail size={14} />
              <span>narodnabibliotekamostar@gmail.com</span>
            </a>
            <span className="inline-flex items-center gap-2">
              <MapPin size={14} />
              <span>Mostar, Bosna i Hercegovina</span>
            </span>
          </div>

          <div className="text-white/70">
            Zvanična stranica edukativnog projekta "5 dana bez ekrana"
          </div>
        </div>
      </div>
    </div>
  );
}
