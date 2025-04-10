import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const ImprintDePageContent = () => {
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
            Impressum
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Unternehmensangaben
            </h2>
            <div className="space-y-2 text-gray-600">
              <p>Wexelcode GmbH</p>
              <p>
                Vertr. d. d. Geschäftsführer: Andreas Sextl und Patrick Meister
              </p>
              <p>
                Adresse: Maisacherstraße 118/Rgb., 82256 Fürstenfeldbruck,
                Deutschland
              </p>
              <p>Eingetragen im Handelsregister des Amtsgerichtes München</p>
              <p>Handelsregisternummer: HRB 285283</p>
              <p>Steuernummer: 117/142/30923</p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Haftungsausschluss (Disclaimer)
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Haftung für Inhalte
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Haftung für Links
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Unser Angebot enthält Links zu externen Webseiten Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Deshalb können wir für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
              <p>
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
                inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
                konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar.
                Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
                Links umgehend entfernen.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Urheberrecht
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                Downloads und Kopien dieser Seite sind nur für den privaten,
                nicht kommerziellen Gebrauch gestattet.
              </p>
              <p>
                Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet. Insbesondere
                werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie
                trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden
                von Rechtsverletzungen werden wir derartige Inhalte umgehend
                entfernen.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Streitbeilegung
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Die Europäische Kommission stellt eine Plattform für die
                außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit,
                aufrufbar unter{' '}
                <Link
                  href="https://ec.europa.eu/odr"
                  target="_blank"
                  className="text-primary hover:text-primary/60 transition-colors duration-20"
                >
                  https://ec.europa.eu/odr
                </Link>
                .
              </p>
              <p>
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor Verbraucherschlichtungsstellen
                teilzunehmen.
              </p>
              <p>
                Wir haben uns folgendem außergerichtlichem Beschwerde- und
                Rechtsbehelfsverfahren unterworfen:
              </p>
              <p>
                Allgemeine Verbraucherschlichtungsstelle des Zentrums für
                Schlichtung e.V.
                <br />
                Straßburger Straße 8
                <br />
                77694 Kehl am Rhein
                <br />
                Deutschland
              </p>
              <p>
                Link zu den Zugangsvoraussetzungen:{' '}
                <Link
                  href="http://www.verbraucher-schlichter.de"
                  target="_blank"
                  className="text-primary hover:text-primary/60 transition-colors duration-20"
                >
                  www.verbraucher-schlichter.de
                </Link>
              </p>
            </div>
          </section>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default ImprintDePageContent;
