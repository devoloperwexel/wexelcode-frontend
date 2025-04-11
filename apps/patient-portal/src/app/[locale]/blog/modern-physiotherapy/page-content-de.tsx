const sections = [
  {
    title: 'Ganzheitlicher Ansatz',
    content:
      'Ein wesentlicher Aspekt der modernen Physiotherapie ist der ganzheitliche Ansatz. Das bedeutet, dass der Physiotherapeut den gesamten Körper sowie Lebensstil des Patienten in die Behandlung einbezieht. Es werden nicht nur spezifischen Symptome und Erkrankungen behandelt, sondern auch die zugrunde liegenden Ursachen und Faktoren, die das Problem verschlimmern oder begünstigen können. Ziel ist es, die Funktionalität des gesamten Bewegungsapparats langfristig zu verbessern anstatt nur ein Symptom zu lindern.',
  },
  {
    title: 'Individueller Therapieplan',
    content:
      'Hinlegen und seine Schmerzen und Symptome wegmassieren lassen, funktioniert einfach nicht. In der modernen Physiotherapie wird großer Wert auf einen individuellen Therapieplan gelegt. Jede Therapie beginnt mit einem persönlichen Befund, bestehend aus einer Anamnese und einer körperlichen Untersuchung. Erst dann entscheidet sich der Physiotherapeut für geeignete Maßnahmen und erstellt einen maßgeschneiderten Therapieplan. Dieses Vorgehen macht die Physiotherapie mittlerweile besonders effektiv, da der Patient nicht nach einem starren Schema behandelt wird, sondern genau die Therapie erhält, die seinen Bedürfnissen entspricht.',
  },
  {
    title: 'Evidenzbasierte Praxis',
    content:
      'Ein moderner Physiotherapeut entwickelt seine Behandlungsansätze aus der Grundlage aktueller wissenschaftlicher Forschung und bewährter klinischer Erfahrung. Um auf dem neuesten Stand der Forschung zu bleiben, sollten Studien regelmäßig gelesen und analysiert werden. Hierbei helfen den Physiotherapeuten Fachzeitschriften und bestimmte Plattformen im Internet. Die Herausforderung besteht dann die Ergebnisse der wissenschaftlichen Forschung auf die individuelle Situation eines Patienten anzuwenden. Dabei helfen den Therapeuten seine Erfahrung und ein professionelles Urteilsvermögen.',
  },
  {
    title: 'Prävention und Gesundheitsförderung',
    content:
      'Die Prävention spielt in der modernen Physiotherapie eine immer größere Rolle. Die Therapie konzentriert sich nicht nur auf bestehende Probleme, sondern beinhaltet auch zukünftige Verletzungen oder Erkrankungen zu verhindern. Dies kommt dem Patienten im Alltag, Sport und Arbeitsleben zu gute. Des Weiteren helfen Physiotherapeuten die allgemeine körperliche Aktivität zu steigern und damit das Risiko für chronischer Erkrankungen wie Rückenschmerzen, Herz-Kreislauf- Erkrankungen oder Gelenksproblemen zu senken.',
  },
  {
    title: 'Interdisziplinäre Zusammenarbeit',
    content:
      'Die Zusammenarbeit mit anderen Gesundheitsberufen, wie Ärzte, Ergotherapeuten, Sportwissenschaftlern und Psychologen ist mittlerweile Selbstverständlich. Dadurch schafft man es auch komplexe Gesundheitsprobleme ganzheitlich zu behandeln und den Patienten bei seiner Genesung bestmöglich zu unterstützen.',
  },
  {
    title: 'Technologische Innovationen und Digitalisierung',
    content:
      'Neue Technologien wie Videotherapie, Physio APPs, digitale Gesundheitsanwendungen, Biofeedback Geräte und tragbare Sensoren bieten Physiotherapeuten zusätzliche moderne Werkzeuge, um die Physiotherapie weiter zu Modernisieren und zu Verbessern. Präzisere Diagnostik und Therapie helfen den Patienten, ihre Übungen korrekt auszuführen und ihre Fortschritte zu verfolgen.',
  },
  {
    title: 'Patientenschulung und Eigenverantwortung',
    content:
      'Die aktive Teilnahme des Patienten am Heilungsprozess ist nicht mehr wegzudenken. Die Patienten lernen, wie sie durch gezielte Maßnahmen, aktive Trainingspläne und Aufklärung ihre Beschwerden langfristig in den Griff bekommen und Eigenverantwortung für ihre Gesundheit übernehmen. Diese Förderung der Selbstständigkeit und Eigenverantwortung ist entscheidend für eine nachhaltige Genesung und führt zu einer verbesserten Lebensqualität.',
  },
];

const PhysiotherapyBlogDe = () => {
  return (
    <main className="container max-w-6xl px-4 py-4 mx-auto">
      <article className="prose prose-lg max-w-none">
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden animate-fade-in">
          <img
            src="https://ucarecdn.com/6387592e-9694-46f4-abf3-ef315d829aef/photo15760911605502173dba999ef1.avif"
            alt="Moderne Physiotherapie-Einrichtung mit Geräten"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div
              className="p-8 animate-slide-in"
              style={{
                animationDelay: '300ms',
              }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Moderne Physiotherapie: Was bedeutet das?
              </h1>
            </div>
          </div>
        </div>
        <div
          className="mb-8 animate-fade-up"
          style={{
            animationDelay: '400ms',
          }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Die Physiotherapie hat sich in den letzten Jahrzehnten enorm
            weiterentwickelt und ist heute ein unverzichtbarer Bestandteil des
            Gesundheitswesens.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            Während sie früher viele passive Maßnahmen wie Massage,
            Elektrotherapie, Wärme- und Kälteanwendungen beinhaltete und
            Therapeuten diese Anwendungen in ihrer Evidenz wenig hinterfragten,
            hat sich die moderne Physiotherapie zu einem eigenständigen
            Fachgebiet entwickelt, das einen ganzheitlichen Ansatz verfolgt und
            viel mehr ist als die obengenannten Maßnahmen.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            In diesem Essay erfahren Sie, was moderne Physiotherapie ausmacht
            und wie sie mit wissenschaftlichen und evidenzbasierten
            Erkenntnissen auf individuelle Bedürfnisse eingeht, um Gesundheit
            nachhaltig zu fördern.
          </p>
        </div>
        <section className="mb-10">
          {sections.map((section, index) => (
            <div
              key={section.title}
              className={`${
                index % 2 === 0 ? 'bg-primary/5' : ''
              } rounded-lg p-6 mb-8 animate-fade-up`}
              style={{
                animationDelay: `${(index + 4) * 100}ms`,
              }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {section.title}
              </h2>
              <p className="text-gray-700">{section.content}</p>
            </div>
          ))}
        </section>
        <div
          className="bg-gray-100 border-l-4 border-primary p-6 rounded-lg animate-fade-up"
          style={{
            animationDelay: '1100ms',
          }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Fazit</h2>
          <p className="text-gray-700">
            Die moderne Physiotherapie ist mehr als nur die Behandlung von
            Schmerzen. Sie hat sich zu einem wichtigen Teil unseres
            Gesundheitssystems in einer zunehmend bewegungsarmen und alternden
            Gesellschaft entwickelt.
          </p>
          <p className="text-gray-700 mt-4">
            Durch einen individuellen und evidenzbasierten Ansatz in Kombination
            mit technologischen Innovationen, einer interdisziplinären
            Zusammenarbeit und Förderung der Eigenverantwortung des Patienten
            gelingt es der modernen Physiotherapie effektiver und nachhaltiger
            den je seine Patienten zu betreuen.
          </p>
        </div>
      </article>
    </main>
  );
};
export default PhysiotherapyBlogDe;
