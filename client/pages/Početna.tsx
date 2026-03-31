import { Link } from "react-router-dom";
import {
  Trees,
  Heart,
  Users,
  Lightbulb,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export default function Početna() {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-nature-green via-primary to-sky-blue text-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full -ml-40 -mb-40"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            5 dana bez ekrana
          </h1>
          <p className="text-xl md:text-3xl mb-8 text-white/90 animate-fadeInUp font-light">
            Poveži se sa životom, prirodom i samim sobom
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/80 max-w-2xl mx-auto animate-fadeInUp">
            Digitalne uređaje smo prepustili na stranu za pet dana ispunjenih
            prirodom, kreativnošću i pravim ljudskim vezama.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadeInUp">
            <Link
              to="/kontakt"
              className="btn-primary bg-white text-primary hover:bg-gray-100"
            >
              Prijavi se
              <ArrowRight className="inline ml-2" size={20} />
            </Link>
            <Link to="/kontakt" className="btn-outline border-white text-white hover:bg-white/10">
              Saznaj više
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-16">
            Zašto učestvovati?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-sky-blue/10 to-sky-blue/5 p-8 rounded-xl card-hover border border-sky-blue/20">
              <div className="w-14 h-14 bg-sky-blue text-white rounded-lg flex items-center justify-center mb-4">
                <Trees size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Priroda i mir
              </h3>
              <p className="text-muted-foreground">
                Provedite pet dana u prirodi, daleko od buke i digitalnih
                distrakcija, pronalazići mir i harmoniju.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-nature-green/10 to-nature-green/5 p-8 rounded-xl card-hover border border-nature-green/20">
              <div className="w-14 h-14 bg-nature-green text-white rounded-lg flex items-center justify-center mb-4">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Zajedništvo
              </h3>
              <p className="text-muted-foreground">
                Izgradite prave veze i prijateljstva sa vršnjacima koji dele
                vašu želju za authentičnim doživljajima.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-gradient-to-br from-warm-beige/40 to-warm-beige/20 p-8 rounded-xl card-hover border border-warm-beige/40">
              <div className="w-14 h-14 bg-warm-beige text-foreground rounded-lg flex items-center justify-center mb-4">
                <Lightbulb size={28} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                Kreativnost i rast
              </h3>
              <p className="text-muted-foreground">
                Otkrijte nove mogućnosti kroz radionice, izazove i aktivnosti
                koje jačaju samopouzdanje i lične veštine.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-sky-blue/5 to-nature-green/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-center mb-4">Pozitivni efekti</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Učesnici koji su prošli kroz naš kamp izveštavaju o značajnim
            promenama u njihovim životima
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">300+</div>
              <p className="text-muted-foreground font-semibold">Učesnika</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-sky-blue mb-2">3</div>
              <p className="text-muted-foreground font-semibold">
                Godine kampanja
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-nature-green mb-2">
                ↑50%
              </div>
              <p className="text-muted-foreground font-semibold">
                Bolja koncentracija
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-warm-beige mb-2">
                ↓45%
              </div>
              <p className="text-muted-foreground font-semibold">Manja anksioznost</p>
            </div>
            <div className="bg-white p-6 rounded-lg text-center border border-gray-200 hover:shadow-lg transition-shadow">
              <div className="text-4xl font-bold text-primary mb-2">💪</div>
              <p className="text-muted-foreground font-semibold">
                Jaču društvenost
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 md:p-12 rounded-xl border border-red-200">
            <div className="flex items-start gap-4">
              <Smartphone className="text-red-500 flex-shrink-0 mt-1" size={32} />
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Problem koji rešavamo
                </h3>
                <p className="text-muted-foreground mb-4">
                  <strong>Mladi danas provode previše vremena uz ekrane</strong> što
                  negativno utiče na njihovu pažnju, mentalno zdravlje, fizičku
                  aktivnost i sposobnost komunikacije. Konstantna izloženost
                  digitalnom sadržaju dovodi do anksioznosti, depresije i lošijeg
                  kvaliteta vida.
                </p>
                <p className="text-muted-foreground">
                  Naš kamp nudi rešenje: pet dana u prirodi bez digitalnih
                  uređaja, sa fokusom na zajedništvo, kreativnost i pronalaženje
                  unutrašnjeg mira. To je mogućnost da se mladi ponovo povežu sa
                  životom i samima sobom.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-nature-green to-sky-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Spremni za promenu?
          </h2>
          <p className="text-xl mb-8 text-white/90">
            Prijavite se za sledeću kampanju i budi deo zajednice koja se brine
            o stvarnom životu
          </p>
          <Link
            to="/kontakt"
            className="btn-primary bg-white text-primary hover:bg-gray-100 inline-flex items-center"
          >
            Prijavi se sada
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
