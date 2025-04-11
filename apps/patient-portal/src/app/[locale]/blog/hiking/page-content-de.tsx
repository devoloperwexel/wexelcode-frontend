const HikingBlogDe = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="relative w-full">
        <div
          className="w-full h-[50vh] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/70" />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative -mt-24">
          <div className="animate-fade-in-up bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <span className="h-0.5 w-10 bg-primary mr-3"></span>
              <span className="text-primary font-medium tracking-wider text-sm uppercase">
                Wandern & Wellness
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4 leading-tight">
              Herbstzeit ist Wanderzeit
              <span className="block text-primary">
                Was bringt es unserem Körper und worauf ist zu achten?
              </span>
            </h1>
          </div>
        </div>
      </header>
      {/* Content Section */}
      <main className="container px-4 sm:px-6 lg:px-8 mx-auto py-12">
        <article className="max-w-3xl mx-auto">
          <div className="motion-safe:animate-fade-in-up">
            <p className="text-xl leading-relaxed mb-8">
              Es wird Herbst und somit startet die Hochsaison des Wanderns.
            </p>
            <p className="mb-6">
              Seit langem erfreut sich diese Freizeitbeschäftigung über große
              Beliebtheit bei Alt und Jung und liegt immer mehr voll im Trend.
            </p>
            <p className="mb-10">
              In einer Zeit, in der unser Alltag oft von Stress und
              Bewegungsmangel geprägt ist, bietet Wandern eine ausgezeichnete
              Möglichkeit seinem Körper und Seele etwas Gutes zu tun.
            </p>
            <p className="mb-10">
              Dieser Essay beleuchtet die wichtigsten wissenschaftlich
              erwiesenen positiven Effekte es Wanderns und auf was man vor allem
              als Beginner achten sollte.
            </p>
          </div>
          <div className="motion-safe:animate-fade-in-up motion-safe:delay-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center">
              <span className="w-12 h-12 bg-red-50 rounded-full mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              Auswirkungen auf den Körper
            </h2>
            <p className="mb-6">
              Wandern gleich Gehen ist für uns Menschen die natürlichste
              Bewegungsform.
            </p>
            <p className="mb-6">
              Durch den zunehmenden Bewegungsmangel in unserer Gesellschaft
              können viele Folgeerkrankungen wie Übergewicht, Herz-
              Kreislauferkrankungen oder Erkrankungen des Bewegungsapparates
              entstehen.
            </p>
            <p className="mb-6">
              Die betroffenen leiden darunter sehr aber auch unser
              Gesundheitssystem.
            </p>
            <p className="mb-6">
              Regelmäßiges Wandern ist ein gutes Gegenmittel, denn:
            </p>
            <div className="space-y-6 mb-10">
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Wandern verbrennt Kalorien
                </h3>
                <p>
                  Wie viele Kalorien verbrannt werden, hängt von Geschlecht,
                  Alter, Körpergröße, Gewicht und Fitnesslevel, länge der
                  Strecke und Höhenmeter ab.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Wandern stabilisiert und stärkt
                </h3>
                <p>
                  Wandern stabilisiert und stärkt unsere Knochen, Sehnen, Bänder
                  und Gelenke. Durch eine trainierte Beinmuskulatur werden Knie-
                  und Hüftgelenke entlastet. Aber auch die gesamte
                  Rumpfmuskulatur wird beansprucht und führt zu einer
                  verbesserten Haltung.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Wandern ist ein moderates Ausdauertraining
                </h3>
                <p>
                  Mehrere Studien belegen, dass regelmäßiges Wandern den
                  Blutdruck senkt und die Kondition verbessert.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Wandern wirkt positiv auf das Immunsystem
                </h3>
                <p>
                  Bei moderater Bewegung werden Killerzellen gebildet, das
                  Immunsystem aktiviert. Außerdem wird in Bewegung das
                  Stresshormon Cortisol abgebaut, welches das Immunsystem hemmt.
                  Positiv auf das Immunsystem wirkt sich zusätzlich der
                  Aufenthalt im Freien aus – Sonnenlicht aktiviert die Bildung
                  von Vitamin D.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Wandern macht glücklich
                </h3>
                <p>
                  Wandern wird sogar in der Therapie gegen Depressionen
                  eingesetzt. Je mehr man dabei in der Natur ist, desto
                  intensiver die Wirkung. Hierbei kommen mehrere positive
                  Effekte zusammen. Es werden Stresshormone abgebaut und durch
                  das Tageslicht das Glückshormon Serotonin gebildet. Auch die
                  körperliche Erschöpfung nach einer langen Wanderung trägt dazu
                  bei, dass viele Menschen abends besser schlafen und erholter
                  aufwachen.
                </p>
              </div>
            </div>
          </div>
          <div className="my-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-50 rounded-lg"></div>
            <div
              className="relative rounded-lg overflow-hidden h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')",
              }}
            ></div>
          </div>
          <div className="motion-safe:animate-fade-in-up motion-safe:delay-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center">
              <span className="w-12 h-12 bg-red-50 rounded-full mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </span>
              Wichtige Aspekte beim Wandern
            </h2>
            <p className="mb-6">
              Wandern ist von den Anforderungen her stufenlos verstellbar,
              spezielle Ausrüstung ist meist nicht erforderlich.
            </p>
            <p className="mb-6">
              Trotzdem ist Wandern auch Sport und sollte nicht unterschätzt
              werden.
            </p>
            <p className="mb-6">
              Deshalb gibt es hier einige Tipps für gesundes Wandern:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Richtige Ausrüstung
                  </h3>
                  <p className="text-sm">
                    Trage Wanderschuhe mit gutem Profil und optional mit hohem
                    Schaft, um Blasen, Verstauchungen und Ermüdung vorzubeugen.
                    Wettergerechte Kleidung im Zwiebellook ist ein Muss. Sie
                    schützt dich vor Nässe und Kälte.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Planung der Route
                  </h3>
                  <p className="text-sm">
                    Wähle eine Route, die deinem Fitnesslevel entspricht.
                    Übernimm dich nicht, besonders bei den ersten Touren.
                    Informiere dich über Länge und den Schwierigkeitsgrad des
                    Weges.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Flüssigkeitszufuhr und Ernährung
                  </h3>
                  <p className="text-sm">
                    Nimm ausreichend Wasser mit, um deine Hydration
                    sicherzustellen. Leichte Snacks wie Nüsse und Obst geben dir
                    schnelle Energie.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Sonnenschutz
                  </h3>
                  <p className="text-sm">
                    Denke an Sonnencreme, Kopfbedeckung und Sonnenbrille. Die
                    UV-Strahlung ist in der Höhe intensiver.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Pausen machen
                  </h3>
                  <p className="text-sm">
                    Gönn dir regelmäßig Pausen, um Erschöpfung und Verletzungen
                    vorzubeugen.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Wetterbedingungen
                  </h3>
                  <p className="text-sm">
                    Prüfe den Wetterbericht im Vorfeld. Vermeide Wanderungen bei
                    extremen Wetterlagen wie Gewitter oder starker Hitze.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Notfallausrüstung
                  </h3>
                  <p className="text-sm">
                    Eine kleine Erste-Hilfe-Ausrüstung, ein Handy mit vollem
                    Akku und eine Karte oder ein GPS-Gerät können im Notfall
                    lebensrettend sein.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="motion-safe:animate-fade-in-up motion-safe:delay-900">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center">
              <span className="w-12 h-12 bg-red-50 rounded-full mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              Fazit
            </h2>
            <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-lg shadow-sm mb-12">
              <p className="mb-4">
                Wandern ist eine ganzheitliche Aktivität. Es fördert die
                körperliche Fitness, stärkt das Immunsystem und unseren Körper,
                verbessert die mentale Gesundheit und baut Stress ab.
              </p>
              <p className="mb-4">
                Damit diese positiven Effekte voll ausgeschöpft werden können,
                ist es wichtig sich gut vorzubereiten und auf die richtige
                Ausrüstung sowie die eignen Grenze zu achten.
              </p>
              <p className="font-medium text-primary">
                Viel Spaß bei deiner nächsten Tour!
              </p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};
export default HikingBlogDe;
