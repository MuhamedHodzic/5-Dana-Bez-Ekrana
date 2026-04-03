import { Link } from "react-router-dom";

export default function Logo() {
  const handleLogoClick = () => {
    // Always scroll to top when logo is clicked
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to="/" onClick={handleLogoClick} className="group flex items-center gap-3 transition-transform hover:scale-[1.02]">
      <div className="relative flex h-12 w-12 items-center justify-center md:h-14 md:w-14">
        <img 
          src="/5-Dana-Bez-Ekrana/images/5 dana.png" 
          alt="5 Dana Bez Ekrana Logo" 
          className="h-full w-full object-contain drop-shadow-lg hover:drop-shadow-xl transition-all"
        />
      </div>

      <div className="hidden sm:block leading-tight">
        <div className="flex items-center gap-2">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
            5 dana bez ekrana
          </span>
        </div>
        <div className="mt-1 flex items-center gap-2 text-xs text-slate-500">
          <span>Edukativni projektni portal</span>
        </div>
      </div>
    </Link>
  );
}
