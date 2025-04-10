import { motion } from 'framer-motion';
import React from 'react';

const TermsDePageContent = () => {
  return (
    <motion.main
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.5,
      }}
      className="py-16 bg-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.2,
            duration: 0.5,
          }}
          className="prose prose-lg max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Nutzungsbedingungen
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Anbieter und Geltung der Nutzungsbedingungen
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                {` Anbieter der Wexelcode App und der darüber angebotenen Services
                (im Folgenden auch 'App') ist die Wexelcode GmbH, Maisacher Str.
                118, 82256 Fürstenfeldbruck (im Folgenden auch „Wexelcode',
                „wir', 'uns').`}
              </p>
              <p>
                {`Diese Nutzungsbedingungen gelten für die Nutzung der App und
                alle unmittelbar und mittelbar von Wexelcode im Zusammenhang mit
                der Nutzung der Wexelcode App über das Internet, jegliche Art
                von mobilen Anwendungen und mobilen Endgeräten sowie per E-Mail
                angebotenen Dienstleistungen (Services).`}
              </p>
              <p>
                {`Mit der Installation und Gebrauch der Software bestätigt der
                Nutzer, dass er diese Nutzungsbedingungen gelesen und verstanden
                hat, ihnen zustimmt und sie verbindlich anerkennt.`}
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Art und Umfang der App
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Wexelcode stellt mit der Wexelcode App und den darüber
                erbrachten Services für den Nutzer eine Lösung für einen
                digitalen Screening-Prozess zur Vorbereitung auf eine mögliche
                physiotherapeutische Behandlung zur Verfügung. Die Wexelcode App
                ermöglicht Patienten im Rahmen eines Screening-Prozesses einen
                Fragebogen auszufüllen.
              </p>
              <p>
                Dies stellt jedoch lediglich einen ersten Hinweis dar und
                ersetzt weder eine fachgerechte Anamnese noch Diagnose durch
                Ihren Physiotherapeuten und/oder Arzt. Insbesondere soll die
                Wexelcode App nicht der Diagnose, Verhütung, Überwachung,
                Vorhersage, Prognose, Behandlung, Linderung oder Kompensierung
                von Krankheiten, Verletzungen oder Behinderungen dienen.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Zulässige Nutzung und Nutzerpflichten
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Der Nutzer darf die App und die darüber angebotenen Services
                ausschließlich für ihre bestimmungsgemäßen Zwecke nutzen. Jede
                andere Nutzung der App ist ohne vorherige schriftliche
                Zustimmung von Wexelcode untersagt.
              </p>
              <p>
                Der Nutzer verpflichtet sich, in der App und den darüber
                angebotenen Services nach bestem Wissen und Gewissen richtige
                Angaben zu machen.
              </p>
              <p>
                Der Nutzer versichert, das sechzehnte Lebensjahr vollendet zu
                haben.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Kosten
            </h2>
            <div className="space-y-4 text-gray-600">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                Zahlungsbedingungen
              </h3>
              <p>
                Wexel Code erhebt eine feste Gebühr für seine Dienstleistungen.
                Alle Gebühren werden in Euro angezeigt und sind nicht
                erstattungsfähig, es sei denn, es wird ausdrücklich etwas
                anderes angegeben.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Datenschutz
            </h2>
            <p className="text-gray-600">
              Um die App und die darüber angebotenen Services bestimmungsgemäß
              nutzen zu können, ist ggf. die Angabe von personenbezogenen Daten
              erforderlich. Weitere Informationen zur Verarbeitung Ihrer
              personenbezogenen Daten finden Sie in den Datenschutzhinweisen.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Sonstiges
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                Alle Rechte zum Schutz geistigen Eigentums liegen bei Wexelcode
                bzw. ihren Lizenzgebern.
              </li>
              <li>
                Wexelcode behält sich das Recht vor, jederzeit bestehende
                Funktionen der App zu ändern oder zu entfernen.
              </li>
              <li>Der Nutzer kann die Nutzung der App jederzeit beenden.</li>
              <li>Es gilt deutsches Recht.</li>
              <li>Gerichtsstand ist der Sitz von Wexelcode.</li>
            </ul>
          </section>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default TermsDePageContent;
