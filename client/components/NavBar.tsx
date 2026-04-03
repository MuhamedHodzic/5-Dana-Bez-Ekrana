import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import Logo from "./Logo";
import TopBar from "./TopBar";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (href: string) => {
    // Scroll to top when clicking any nav link
    scrollToTop();
  };

  const navLinks = [
    { href: "/", label: "Početna" },
    { href: "/o-projektu", label: "O projektu" },
    { href: "/aktivnosti", label: "Aktivnosti" },
    { href: "/novosti", label: "Novosti" },
    { href: "/galerija", label: "Galerija" },
    { href: "/partneri", label: "Partneri" },
    { href: "/kontakt", label: "Kontakt" },
  ];

  return (
    <header className="sticky top-0 z-50 shadow-[0_10px_30px_rgba(15,23,42,0.08)]">
      <TopBar />

      <div className="bg-white/95 backdrop-blur-md border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between gap-4">
            <Logo />

            <nav className="flex items-center gap-1 overflow-x-auto">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="whitespace-nowrap rounded-full px-3 py-2 text-xs sm:text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:shadow-sm"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden sm:flex items-center gap-3">
              <Link
                to="/kontakt"
                className="btn-primary inline-flex items-center gap-2"
              >
                Prijava
                <ChevronRight size={18} />
              </Link>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition-all hover:border-primary/30 hover:text-primary hover:shadow-md md:hidden"
              aria-label="Otvori meni"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="border-t border-slate-200 bg-white md:hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="grid gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-primary/30 hover:bg-primary/5 hover:text-primary"
                  >
                    <span>{link.label}</span>
                    <ChevronRight size={16} />
                  </Link>
                ))}
                <Link
                  to="/kontakt"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary mt-2 inline-flex items-center justify-center gap-2"
                >
                  Prijava
                  <ChevronRight size={18} />
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
