import { ArrowUp, Instagram, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-12">
        <div className="grid gap-10 md:grid-cols-2">
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
            <h4 className="text-base font-semibold text-white">Kontakt</h4>
            <div className="mt-4 space-y-3 text-sm text-white/75">
              <p className="flex items-center gap-3">
                <div className="flex items-center justify-center w-5 h-5">
                  <Phone size={16} />
                </div>
                <span>+387 62 409 253</span>
              </p>
              <a href="mailto:narodnabibliotekamostar@gmail.com" className="flex items-center gap-3 transition-colors hover:text-white">
                <div className="flex items-center justify-center w-5 h-5">
                  <Mail size={16} />
                </div>
                <span>narodnabibliotekamostar@gmail.com</span>
              </a>
              <p className="flex items-start gap-3">
                <div className="flex items-center justify-center w-5 h-5 mt-0.5">
                  <MapPin size={16} />
                </div>
                <span>Mostar, Bosna i Hercegovina</span>
              </p>

              <div className="mt-5 flex items-center gap-3">
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.instagram.com/5dana_bez_ekrana?igsh=aWtwbGF3d285dmEw" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all hover:bg-white hover:text-slate-950" aria-label="Instagram">
                      <Instagram size={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Instagram</TooltipContent>
                </Tooltip>
                
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="https://www.tiktok.com/@5dana_bez_ekrana" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all hover:bg-white hover:text-slate-950" aria-label="TikTok">
                      <TikTokIcon className="w-[18px] h-[18px]" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>TikTok</TooltipContent>
                </Tooltip>

                <Tooltip>
                  <TooltipTrigger asChild>
                    <a href="mailto:narodnabibliotekamostar@gmail.com" className="flex items-center justify-center w-10 h-10 rounded-full bg-white/10 transition-all hover:bg-white hover:text-slate-950" aria-label="Email">
                      <Mail size={18} />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>Email</TooltipContent>
                </Tooltip>
              </div>
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
