//import { ArrowDown } from "lucide-react";
import {
  Activity,
  AlertCircle,
  ArrowRight,
  Clock,
  Heart,
  HelpCircle,
  Scale,
  UserX,
  Dumbbell,
  Brain,
  Target,
  Briefcase,
} from 'lucide-react';
import { RiskFactorCard } from './risk-factor-card';
const BackPainBlogDe = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ucarecdn.com/82eb540a-1a02-4a53-9e3a-4b217fc284cd/Gemini_Generated_Image_nvmu45nvmu45nvmu.avif"
            alt="Medical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-50"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn text-white">
            Rückenschmerzen
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl animate-slideUp text-white/90">
            Unspezifische Rückenschmerzen verstehen und behandeln für ein
            gesünderes, schmerzfreies Leben
          </p>
          <div className="mt-10 animate-bounce">
            {/* <ArrowDown className="mx-auto text-white" size={32} /> */}
          </div>
        </div>
        {/* <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 1s ease-out 0.3s forwards;
            opacity: 0;
          }
        `}</style> */}
      </header>
      {/* Content Section */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose lg:prose-xl max-w-none">
          <section className="mb-12 bg-white rounded-lg p-6 shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <HelpCircle className="mr-2 text-primary" size={28} />
              Wissenswertes über unspezifische Rückenschmerzen
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Wer von euch hatte schon einmal Rückenschmerzen ohne klare
              Ursache? Sie treten plötzlich auf und beeinträchtigen unseren
              Alltag, sei es bei der Arbeit, im Haushalt oder in der Freizeit.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              85 Prozent aller Rückenschmerzen sind unspezifische
              Rückenschmerzen, die in der Regel nach einigen Tagen bis Wochen
              wieder verschwinden. Leider können sie aber wiederkehren und in
              seltenen Fällen auch chronisch werden, wenn keine angemessenen
              Maßnahmen zur Linderung und Prävention ergriffen werden.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              In diesem Beitrag erfahren Sie mehr über unspezifischen
              Rückenschmerzen, welche Risikofaktoren es gibt, was Sie dagegen
              tun können und wie Sie sie vermeiden können.
            </p>
          </section>
          <section className="mb-12 bg-white rounded-lg p-6 shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <AlertCircle className="mr-2 text-primary" size={28} />
              Definition
            </h2>
            <div className="p-5 bg-red-50 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 leading-relaxed">
                Unspezifischer Rückenschmerz bezieht sich auf Schmerzen im
                Bereich des Rückens, für die keine spezifische anatomische
                Ursache gefunden werden kann. Es ist die häufigste Form von
                Rückenschmerzen und betrifft Menschen jeden Alters.
              </p>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Activity className="mr-2 text-primary" size={28} />
              Allgemeine Risikofaktoren
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Unspezifische Rückenschmerzen werden oft durch verschiedene
              Faktoren begünstigt, die miteinander in Wechselwirkung stehen.
              Hier sind eine der häufigsten Risikofaktoren:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <RiskFactorCard
                icon={<Clock />}
                title="Bewegungsmangel und Fehlbelastungen"
                description="In unserer modernen Gesellschaft verbringen viele Menschen einen Großteil ihres Tagessitzend. Langes Sitzen, insbesondre in einer ungünstigen Körperhaltung, belastet die Wirbelsäule und kann zu überlasteter Muskulatur führen."
              />
              <RiskFactorCard
                icon={<Dumbbell />}
                title="Mangelnde Rumpfstabilität"
                description="Eine schwache Bauch– und Rückenmuskulatur führt dazu, dass die Wirbelsäule nicht ausreichend gestützt wird. Das Ungleichgewicht zwischen den einzelnen Muskelgruppen kann zu Fehlhaltungen führen."
              />
              <RiskFactorCard
                icon={<Scale />}
                title="Übergewicht"
                description="Übergewicht stellt eine zusätzliche Belastung für die Wirbelsäule dar, hauptsächlich für den unteren Rücken."
              />
              <RiskFactorCard
                icon={<Brain />}
                title="Psychosoziale Faktoren"
                description="Stress, Angst und Depressionen sind ebenfalls wichtige Faktoren, die unspezifische Rückenschmerzen beeinflussen können."
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Zusätzliche Risikofaktoren können sein:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-primary" size={16} />
                  Genetische Disposition
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-primary" size={16} />
                  Rauchen
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-primary" size={16} />
                  Falsche Ernährung
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-primary" size={16} />
                  Alter zwischen 35- 50 Jahre
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-12 bg-white rounded-lg p-6 shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <Heart className="mr-2 text-primary" size={28} />
              Maßnahmen bei unspezifischen Rückenschmerzen
            </h2>
            <div className="space-y-6">
              <div className="p-6 bg-red-50 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <UserX className="mr-2 text-primary" size={20} />
                  Bewegung und Kräftigungsübungen
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Es ist wichtig in Bewegung zu bleiben, starten Sie mit kleinen
                  langsamen Bewegungen und versuchen Sie in ihre gewohnten
                  Aktivitäten zurück zu finden. Die WHO empfiehlt 150 Minuten
                  Training pro Woche vor. Es gibt nicht die besten
                  Rückenübungen, wichtig ist, dass Sie damit anfangen und auch
                  Spaß dabeihaben.
                </p>
              </div>
              <div className="p-6 bg-red-50 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="mr-2 text-primary" />
                  Medikamente
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Vermeiden Sie einen hohen Konsum an Schmerztabletten, wenn Sie
                  sich regelmäßig bewegen, ist dass die beste Schmerztherapie.
                  Wenn Sie dennoch Hilfe benötigen, wenden Sie sich am besten an
                  Ihren Physiotherapeuten.
                </p>
              </div>
              <div className="p-6 bg-red-50 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <Briefcase className="mr-2 text-primary" size={20} />
                  Ergonomische Anpassungen am Arbeitsplatz
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Wenn Sie viel Zeit am Schreibtisch verbringen, ist es sehr
                  wichtig den Arbeitsplatz ergonomisch sinnvoll zu gestalten. Am
                  besten wechseln Sie häufig die Positionen zwischen Sitzen,
                  Stehen und Gehen.
                </p>
              </div>
              <div className="p-6 bg-red-50 rounded-lg border-l-4 border-primary">
                <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                  <div className="mr-2 text-primary" />
                  Stressbewältigung und Entspannung
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Da sie psychosozialen Faktoren wie Stress einen großen
                  Einfluss auf unspezifische Rückenschmerzen nehmen, ist es
                  wichtig Stressbewältigungstechniken zu erlernen. Hierfür gibt
                  es viele Ansätze wie Yoga, Meditation, Atemübungen.
                </p>
              </div>
            </div>
          </section>
          <section className="mb-12 bg-white rounded-lg p-6 shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <Target className="mr-2 text-primary" size={28} />
              Fazit
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Unspezifische Rückenschmerzen sind weit verbreitet und können
              unser Leben stark beeinträchtigen. Bewegungsmangel, eine schwache
              Muskulatur, psychische Belastung und Übergewicht sind häufige
              Risikofaktoren, die die Entstehung dieser Beschwerden begünstigen.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Glücklicherweise gibt es zahlreiche Selbsthilfemaßnahmen, die
              effektiv zur Linderung und Vorbeugung beitragen können.
              Regelmäßige Bewegung, Kräftigungsübungen, Stressbewältigung und
              ergonomische Anpassung am Arbeitsplatz sind dabei entscheidende
              Ansätze.
            </p>
          </section>
        </article>
      </main>
    </div>
  );
};
export default BackPainBlogDe;
