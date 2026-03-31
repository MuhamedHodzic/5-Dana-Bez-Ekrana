import { useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, CircleDot, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Dobrodošli na zvanični portal",
    description:
      "Informacije o projektu, aktivnostima i saradnji dostupne su na jednom mjestu.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa7121fe3105a44e9966ac04ced43013c%2F90d9b22f471d497296ed31e3e4c62393?format=webp&width=1600&height=1000",
    cta: "/o-projektu",
  },
  {
    title: "Učenje kroz aktivnosti",
    description:
      "Radionice, timski zadaci i kreativni sadržaji podstiču znanje i saradnju učenika.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa7121fe3105a44e9966ac04ced43013c%2F67a96c55c6d74909bd929b147eeb61c0?format=webp&width=1600&height=1000",
    cta: "/aktivnosti",
  },
  {
    title: "Zajedno sa partnerima",
    description:
      "Povezujemo školu, institucije i porodice radi kvalitetnijeg obrazovnog iskustva.",
    image:
      "https://cdn.builder.io/api/v1/image/assets%2Fa7121fe3105a44e9966ac04ced43013c%2F1d820c20fe084dce96d25de6a7e568b0?format=webp&width=1600&height=1000",
    cta: "/partneri",
  },
];

export default function HeroSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = () => emblaApi?.scrollPrev();
  const scrollNext = () => emblaApi?.scrollNext();

  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);

    const interval = window.setInterval(() => {
      emblaApi.scrollNext();
    }, 6500);

    return () => {
      window.clearInterval(interval);
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi]);

  const dots = useMemo(() => slides.map((_, index) => index), []);

  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-800" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        <div className="mb-6 flex items-center gap-3 text-white/80">
          <GraduationCap className="h-6 w-6" />
          <p className="text-sm md:text-base tracking-wide uppercase">
            Edukativni projekat i zvanični informativni portal
          </p>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl" ref={emblaRef}>
          <div className="flex">
            {slides.map((slide, index) => (
              <article key={slide.title} className="min-w-0 flex-[0_0_100%]">
                <div className="grid gap-0 lg:grid-cols-2">
                  <div className="relative min-h-[340px] md:min-h-[520px]">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-900/50 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-slate-950 to-transparent" />
                  </div>

                  <div className="flex items-center bg-slate-50 text-slate-900 px-6 py-10 md:px-10 lg:px-12">
                    <div className="max-w-xl">
                      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                        Zvanična objava
                      </span>
                      <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight text-slate-950">
                        {slide.title}
                      </h2>
                      <p className="mt-4 text-base md:text-lg leading-8 text-slate-700">
                        {slide.description}
                      </p>
                      <div className="mt-8 flex flex-wrap gap-3">
                        <Link to={slide.cta} className="btn-primary">
                          Saznaj više
                        </Link>
                        <Link to="/kontakt" className="btn-outline border-slate-300 text-slate-900 hover:bg-slate-100">
                          Kontakt
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={scrollPrev}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-slate-900"
              aria-label="Prethodni slajd"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white transition-all hover:bg-white hover:text-slate-900"
              aria-label="Sljedeći slajd"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          <div className="flex items-center gap-2">
            {dots.map((index) => (
              <button
                key={index}
                type="button"
                onClick={() => emblaApi?.scrollTo(index)}
                className={`transition-all ${selectedIndex === index ? "text-white" : "text-white/45"}`}
                aria-label={`Idi na slajd ${index + 1}`}
              >
                <CircleDot size={14} className={selectedIndex === index ? "fill-current" : ""} />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
