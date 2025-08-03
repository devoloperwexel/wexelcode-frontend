import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const PrivacyDePageContent = () => {
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
            Datenschutzhinweise
          </h1>
          <p className="text-gray-600 mb-8">
            In diesen Datenschutzhinweisen informieren wir Sie über die
            Datenverarbeitung bei der Nutzung der Wexelcode App.
          </p>
          <p className="text-gray-600 mb-8">
            Die Wexelcode App ermöglicht Patienten vor dem ersten Besuch einer
            Praxis für Physiotherapie (Professional) einen Fragebogen
            auszufüllen, um anhand dessen einen ersten Hinweis zu erhalten, ob
            eine physiotherapeutische Behandlung ohne vorherige Konsultation
            eines Arztes in Betracht kommt. Die Ergebnisse des
            Screening-Prozesses können Sie dem Professional zur Verfügung
            stellen. Dies hilft dabei, den Aufnahmeprozess zu digitalisieren und
            zu optimieren und so die Verfügbarkeit und Zugänglichkeit der
            physiotherapeutischen Versorgung zu verbessern.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Inhaltsverzeichnis
            </h2>
            <div className="space-y-2 text-gray-600">
              <div className="flex justify-between">
                <span>VERANTWORTLICHER</span>
                <span>1</span>
              </div>
              <div className="flex justify-between">
                <span>DATEN, ZWECKE DER VERARBEITUNG, RECHTSGRUNDLAGEN</span>
                <span>2</span>
              </div>
              <div className="flex justify-between">
                <span>INSTALLATION UND NUTZUNG DER WEXELCODE APP</span>
                <span>2</span>
              </div>
              <div className="flex justify-between">
                <span>PUSH-BENACHRICHTIGUNGEN</span>
                <span>2</span>
              </div>
              <div className="flex justify-between">
                <span>REGISTRIERUNG UND LOGIN</span>
                <span>2</span>
              </div>
              <div className="flex justify-between">
                <span>SCREENING-PROZESS</span>
                <span>3</span>
              </div>
              <div className="flex justify-between">
                <span>ÜBERMITTLUNG AN PHYSIOTHERAPEUTEN</span>
                <span>3</span>
              </div>
              <div className="flex justify-between">
                <span>AUTOM. ENTSCHEIDUNGSFINDUNG EINSCHL. PROFILING</span>
                <span>3</span>
              </div>
              <div className="flex justify-between">
                <span>NUTZUNGSANALYSE</span>
                <span>4</span>
              </div>
              <div className="flex justify-between">
                <span>SCREENING-DATEN-ANALYSE</span>
                <span>4</span>
              </div>
              <div className="flex justify-between">
                <span>KONTAKTAUFNAHME</span>
                <span>4</span>
              </div>
              <div className="flex justify-between">
                <span>IST DIE NUTZUNG DER APP FREIWILLIG?</span>
                <span>4</span>
              </div>
              <div className="flex justify-between">
                <span>EMPFÄNGER, DRITTLAND</span>
                <span>4</span>
              </div>
              <div className="flex justify-between">
                <span>SPEICHERDAUER</span>
                <span>5</span>
              </div>
              <div className="flex justify-between">
                <span>IHRE DATENSCHUTZ-RECHTE (BETROFFENENRECHTE)</span>
                <span>6</span>
              </div>
              <div className="flex justify-between">
                <span>ÄNDERUNGEN</span>
                <span>6</span>
              </div>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Verantwortlicher
            </h2>
            <div className="space-y-2 text-gray-600">
              <p>
                Verantwortlich für die Verarbeitung Ihrer personenbezogenen
                Daten in der Wexelcode App ist die Wexelcode GmbH
              </p>
              <p>Maisacher Straße 118 82256 Fürstenfeldbruck</p>
              <p>
                <Link
                  href="mailto:service@wexelcode.de"
                  className="text-primary hover:text-primary/60 transition-colors duration-20"
                >
                  service@wexelcode.de
                </Link>
                <br />
                <Link
                  href="/"
                  className="text-primary hover:text-primary/60 transition-colors duration-20"
                >
                  www.wexelcode.de
                </Link>
              </p>
              <p>
                {`Vertreten durch: Andreas Sextl und Patrick Meister ("wir", uns")`}
              </p>
              <p>
                Unseren Datenschutzbeauftragten erreichen Sie unter
                <Link
                  href="mailto:privacy@wexelcode.de"
                  className="text-primary hover:text-primary/60 transition-colors duration-20 ml-1"
                >
                  privacy@wexelcode.de
                </Link>
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Daten, Zwecke der Verarbeitung, Rechtsgrundlagen
            </h2>
            <h4 className="font-semibold text-gray-800 mb-4">
              Installation und Nutzung der Wexelcode App Daten
            </h4>
            <div className="space-y-4 text-gray-600">
              <p>
                Die Wexelcode App kann über die App-Stores von Google (Play
                Store) und Apple (AppStore) heruntergeladen werden. Auf die
                personenbezogenen Daten, die hierbei von Ihnen möglicherweise
                verarbeitet werden, haben wir keinerlei Einfluss. Weitere
                Informationen hierzu finden Sie in den Datenschutzhinweisen des
                jeweiligen App Store-Anbieters.
              </p>
              <p>
                ZZur Nutzung des vollen Funktionsumfangs benötigt die Wexelcode
                App Netzwerkzugriff. Bei jedem Datenaustausch der App mit
                unseren Servern über das Internet werden vom Server sogenannte
                Zugriffsdaten (z.B. IP-Adresse, Datum und Uhrzeit des Abrufs,
                übertragene Datenmenge) verarbeitet. Dies ist erforderlich,
                damit die App aktuelle Daten abrufen oder bestimmte auf dem
                Smartphone gespeicherte Daten an das Serversystem übermitteln
                kann. Diese Zugriffsdaten werden verarbeitet, um den technischen
                Betrieb der App und der Server aufrechtzuerhalten und
                abzusichern. Sie werden dabei noch nicht als Nutzer der App
                persönlich identifiziert und es wird kein Nutzungsprofil
                erstellt. Für den Betrieb notwendige Verarbeitungen erfolgen auf
                Grundlage unseres berechtigten Interesses gemäß Art. 6 Abs. 1
                lit. f DSGVO daran, die Basisfunktionen unserer App
                bereitzustellen und ihre Nutzbarkeit sicherzustellen bzw. zu
                verbessern. In bestimmten Fällen können diese auch für die
                Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher
                Maßnahmen erforderlich sein, dann erfolgt die Verarbeitung gemäß
                Art. 6 Abs. 1 lit. b DSGVO. Der Zugriff auf und die Speicherung
                von Informationen im Endgerät ist in diesen Fällen unbedingt
                erforderlich und erfolgt auf Grundlage der Umsetzungsgesetze der
                ePrivacy-Richtlinie der EU-Mitgliedsländer, in Deutschland nach
                § 25 Abs. 2 TTDSG
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">
              Push-Benachrichtigungen
            </h4>
            <div className="space-y-4 text-gray-600">
              <p>
                Im Rahmen der Nutzung der App erhalten Sie möglicherweise
                Push-Benachrichtigungen von uns, wenn Sie beim Start der App
                hierfür der App die nötige Berechtigung erteilt haben. Die
                Push-Benachrichtigungen werden von uns auch ausgespielt, wenn
                Sie die App gerade nicht aktiv nutzen.
              </p>
              <p>
                Dabei kann es sich bspw. um Benachrichtigungen handeln, die wir
                Ihnen zukommen lassen, um Sie an einen noch nicht
                abgeschlossenen Screening-Prozess zu erinnern. Zur Versendung
                der Push-Benachrichtigungen genau für Ihr Gerät bzw. Ihre App
                werden Anmeldezeitpunkt, Installations- bzw. App-ID oder
                GeräteID sowie Push-Token verarbeitet. Push-Benachrichtigungen
                werden nur an Sie versendet, wenn Sie hierin eingewilligt haben,
                Art. 6 Abs. 1 lit. a DSGVO
              </p>
              <p>
                Sie können die Push-Benachrichtigungen jederzeit über die
                Einstellung Ihres mobilen Endgeräts deaktivieren. Eine Anleitung
                hierzu finden Sie beispielsweise unter folgenden Adressen:
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h4 className="font-semibold text-gray-800 mb-4">
              Registrierung und Login
            </h4>
            <div className="space-y-4 text-gray-600">
              <p>
                Sie können sich in der App registrieren und so ein Nutzerkonto
                anlegen (Registrierung). Hierfür erheben wir Ihren Namen, Ihre
                E-Mail-Adresse sowie ein Passwort und ob sie sich als Patient
                oder Professional (z. B. Physiotherapeut) registrieren. Das
                Passwort wird selbstverständlich verschlüsselt gespeichert und
                liegt uns niemals im Klartext vor.
              </p>
              <p>
                Über diese Zugangsdaten können Sie sich zukünftig in der App und
                den darüber erbrachten Services anmelden (Login). Nach erfolgtem
                Login können Sie die App vollumfänglich verwenden und als
                Patient den Screening-Prozess durchlaufen.
              </p>
              <p>
                Rechtsgrundlage dieser Verarbeitung ist Art. 6 Abs. 1 lit. b
                DSGVO.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Screening-Prozess
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Im Rahmen des Screening-Prozesses wird anhand bestimmter
                Kriterien geprüft, ob eine physiotherapeutische Behandlung für
                Sie in Betracht kommt oder sicherheitshalber zunächst ein Arzt
                konsultiert werden sollte. Dies stellt jedoch lediglich einen
                ersten Hinweis dar und ersetzt weder eine fachgerechte Anamnese
                noch Diagnose durch Ihren Physiotherapeuten und/oder Arzt.
              </p>
              <p>
                Zur Durchführung des Screening-Prozesses erheben wir über die
                durch sie zu beantwortenden Fragen Daten zu Ihrem
                Gesundheitszustand und weitere behandlungsrelevante
                Informationen (Screening-Daten) z.B.
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Geburtsdatum/Alter</li>
                <li>Geschlecht</li>
                <li>Körpergewicht</li>
                <li>regelmäßige Medikamenteneinnahme</li>
                <li>Vorerkrankungen und Allergien</li>
                <li>Erkrankungs- und Behandlungsgeschichte</li>
                <li>Erkrankungsgeschichte der Familie</li>
                <li>
                  Schmerzen und andere verschiedene Symptome, die auf
                  vorliegende Krankheiten hinweisen oder anderweitig
                  Auswirkungen darauf haben können, ob/inwieweit eine
                  physiotherapeutische Behandlung möglicherweise nicht ohne
                  vorherige ärztliche Konsultation durchgeführt werden sollte
                </li>
                <li>Fragen zum Lebenswandel (z.B. Rauchereigenschaft)</li>
              </ul>
              <p>
                Die Beantwortung dieser Fragen hilft uns dabei, eine erste
                Einschätzung abzugeben, wie sicher die Einleitung der
                Physiotherapie in Ihrem Fall wäre.
              </p>
              <p>
                Die Screening-Daten werden durch die App nur erhoben und zur
                Auswertung und weiteren Verarbeitung an unsere Server
                übermittelt, wenn Sie dies hierfür vor Beginn des
                Screening-Prozesses Ihre freiwillige Einwilligung gemäß Art. 6
                Abs. 1 lit. a, Art. 9 Abs. 2 lit. a DSGVO erteilt haben.
              </p>
              <p>
                Das Ergebnis dieser Einschätzung (Screening-Ergebnis) wird Ihnen
                nach Abschluss des Screening-Prozesses in der App angezeigt und
                Sie haben die Möglichkeit, es als PDF-Datei auf Ihrem Endgerät
                zu speichern.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Übermittlung an Professionals
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Nach Abschluss des Screening-Prozesses können Sie sich auch dazu
                entscheiden, Ihre Screening-Daten und das Screening-Ergebnis
                direkt an einen Professional zu übermitteln, den Sie entweder
                vor oder nach dem Screening-Prozess in der App auswählen können.
              </p>
              <p>
                Die Übermittlung an einen Professional erfolgt nur dann, wenn
                Sie hierin gesondert nach Art. 6 Abs. 1 lit. a, Art. 9 Abs. 2
                lit. a DSGVO eingewilligt haben.
              </p>
              <p>
                Die weitere Verarbeitung der Daten durch den jeweiligen
                Professional erfolgt sodann in dessen eigener
                datenschutzrechtlicher Verantwortlichkeit.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Autom. Entscheidungsfindung einschl. Profiling
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Das am Ende des Screening-Prozesses ausgegebene
                Screening-Ergebnis beruht auf den im Screening-Prozess gegebenen
                Antworten, die anhand eines Katalogs von möglichen
                Ausschlussgründen geprüft werden, welche darauf hindeuten
                können, dass eine physiotherapeutische Behandlung möglicherweise
                gefährlich bzw. nicht sachgerecht sein könnte und stattdessen
                zunächst ein Arzt konsultiert werden sollte.
              </p>
              <p>
                Dies stellt lediglich einen Hinweis für den Nutzer bzw. den
                Professional dar und ersetzt in keinem Falle eine ärztliche
                und/oder physiotherapeutische Anamnese oder Diagnose. Eine
                automatisierte Einzelfallentscheidung mit rechtlicher oder in
                ähnlicher Weise erheblich beeinträchtigender Wirkung i.S.d. Art.
                22 DSGVO wird nicht getroffen.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nutzungsanalyse
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Um unsere App und die darüber angebotenen Services zu verbessern
                und das Nutzungserlebnis angenehmer zu machen, werten wir
                Informationen zum allgemeinen Nutzungsverhalten statistisch aus.
                Die erhobenen Nutzungsinformationen werden aggregiert
                aufbereitet und ermöglichen uns, Nutzungsgewohnheiten unserer
                Nutzer nachzuvollziehen.
              </p>
              <p>
                Rechtgrundlage für die Nutzungsanalyse ist Ihre Einwilligung
                nach Art. 6 Abs. 1 lit. a DSGVO. Der Zugriff auf und die
                Speicherung von Informationen im Endgerät erfolgt dann auf
                Grundlage der Umsetzungsgesetze der ePrivacy-Richtlinie der
                EU-Mitgliedsländer, in Deutschland nach § 25 Abs. 1 TTDSG.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Screening-Daten-Analyse
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Nur mit Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a, Art. 9
                Abs. 2 lit. a DSGVO werden wir Daten aus dem Screening-Prozess
                anonymisieren und die anonymisierten Informationen zur
                Verbesserung unseres Screening-Prozesses und ggf. für
                statistische oder wissenschaftliche Zwecke verwenden. Diese
                anonymisierten Daten weisen keinen Personenbezug mehr auf,
                sodass keinerlei Rückschlüsse auf Sie als einzelne Person
                gezogen werden können.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Kontaktaufnahme
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Für Anfragen, Feedback oder andere Nachrichten, die sich auf
                unsere Services beziehen, können Sie uns per E-Mail unter
                support@wexelcode.de erreichen.
              </p>
              <p>
                Die unter dieser E-Mail-Adresse oder unter den o.g. Kontaktdaten
                eingehenden Anfragen und damit einhergehenden personenbezogenen
                Daten (z.B. Kontaktdaten) verarbeiten wir zu deren Bearbeitung
                und ggf. Beantwortung. Rechtsgrundlage hierfür ist Art. 6 Abs. 1
                lit. b DSGVO, soweit die Verarbeitung zur Erfüllung oder
                Anbahnung eines Vertrages erforderlich ist, Art. 6 Abs. 1 lit. c
                DSGVO, sofern wir zur Verarbeitung rechtlich verpflichtet sind,
                und in allen übrigen Fällen Art. 6 Abs. 1 lit. f DSGVO auf
                Grundlage unseres berechtigten Interesses daran, Ihre Anfragen
                zu beantworten.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ist die Nutzung der App freiwillig?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Ja, die Nutzung der Wexelcode App und die Eingabe Ihrer Daten
                ist freiwillig. Sie sind auch nicht verpflichtet, bestimmte
                Daten in der App anzugeben oder sich anzumelden. Wenn Sie sich
                nicht anmelden, können Sie jedoch nicht alle Funktionen der App
                nutzen (z.B. den Screening-Prozess oder die Datenübermittlung an
                Physiotherapeuten).
              </p>
              <p>
                Ohne vollständige Angaben im Screening-Prozess kann zu diesem
                kein Ergebnis ermittelt werden und die Screening-Daten und das
                Screening-Ergebnis können nicht an den von Ihnen gewählten
                Professional übermittelt werden.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Empfänger, Drittland
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Eine Weitergabe der von uns erhobenen Daten erfolgt
                grundsätzlich nur, wenn hierfür im konkreten Fall eine
                datenschutzrechtliche Rechtsgrundlage vorliegt, insbesondere
                wenn:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  Sie nach Art. 6 Abs. 1 lit. a DSGVO Ihre ausdrückliche
                  Einwilligung dazu erteilt haben,
                </li>
                <li>
                  die Weitergabe nach Art. 6 Abs. 1 lit. f DSGVO zur
                  Geltendmachung, Ausübung oder Verteidigung von
                  Rechtsansprüchen erforderlich ist und kein Grund zur Annahme
                  besteht, dass Sie ein überwiegendes schutzwürdiges Interesse
                  am Unterbleiben der Weitergabe Ihrer Daten haben,
                </li>
                <li>
                  wir nach Art. 6 Abs. 1 lit. c DSGVO zur Weitergabe gesetzlich
                  verpflichtet sind, insbesondere wenn dies aufgrund von
                  behördlichen Anfragen, Gerichtsbeschlüssen und Rechtsverfahren
                  für die Rechtsverfolgung oder -durchsetzung erforderlich ist,
                  oder
                </li>
                <li>
                  dies gesetzlich zulässig und nach Art. 6 Abs. 1 lit. b DSGVO
                  für die Abwicklung von Vertragsverhältnissen mit Ihnen oder
                  für die Durchführung vorvertraglicher Maßnahmen erforderlich
                  ist, die auf Ihre Anfrage hin erfolgen.
                </li>
              </ul>
              <p>
                Ein Teil der Datenverarbeitung kann durch unsere Dienstleister
                erfolgen. Neben den in dieser Datenschutzerklärung erwähnten
                Dienstleistern können hierzu insbesondere Rechenzentren, die
                unsere Website und Datenbanken speichern, Softwareanbieter,
                IT-Dienstleister, die unsere Systeme warten, Agenturen und
                Beratungsunternehmen gehören.
              </p>
              <p>
                Sofern wir Daten an unsere Dienstleister weitergeben, dürfen
                diese die Daten ausschließlich zur Erfüllung ihrer Aufgaben
                verwenden. Die Dienstleister wurden von uns sorgfältig
                ausgewählt und beauftragt. Sie sind vertraglich an unsere
                Weisungen gebunden, verfügen über geeignete technische und
                organisatorische Maßnahmen zum Schutz der Rechte der betroffenen
                Personen und werden von uns regelmäßig kontrolliert.
              </p>
              <p>
                Eine Übermittlung in Drittländer außerhalb Deutschlands, der
                Europäischen Union oder des Europäischen Wirtschaftsraums findet
                grds. nicht statt. Soweit dies ausnahmsweise der Fall sein
                sollte und die Europäische Kommission für diese Länder keinen
                Angemessenheitsbeschluss (Art. 45 DSGVO) erlassen hat, werden
                wir entsprechende Vorkehrungen treffen, um ein angemessenes
                Datenschutzniveau für etwaige Datenübertragungen zu
                gewährleisten.
              </p>
              <p>
                Die Wexelcode App und die darüber erhobenen Daten werden bei dem
                deutschen Hostinganbieter Hetzner Online GmbH, Industriestr. 25,
                91710 Gunzenhausen gehostet.
              </p>
              <p>
                Sofern Sie Ihre Einwilligung erteilen, erhalten die von Ihnen
                ausgewählten Professionals Ihre Screening-Daten und das
                Screening-Ergebnis.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Speicherdauer
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Grundsätzlich speichern wir personenbezogene Daten nur so lange,
                wie zur Erfüllung der Zwecke erforderlich, zu denen wir die
                Daten erhoben haben. Danach löschen wir die Daten unverzüglich,
                es sei denn, wir benötigen die Daten noch bis zum Ablauf der
                gesetzlichen Verjährungsfrist zu Beweiszwecken für
                zivilrechtliche Ansprüche, wegen gesetzlicher
                Aufbewahrungspflichten oder es besteht im konkreten Einzelfall
                eine sonstige datenschutzrechtliche Rechtsgrundlage für die
                fortdauernde Verarbeitung Ihrer Daten. Zu Beweiszwecken müssen
                wir insbesondere Vertragsdaten noch drei Jahre ab Ende des
                Jahres, in dem die Geschäftsbeziehungen mit Ihnen enden,
                aufbewahren. Etwaige Ansprüche verjähren nach der gesetzlichen
                Regelverjährungsfrist frühestens zu diesem Zeitpunkt. Auch
                danach müssen wir Ihre Daten teilweise noch aus buchhalterischen
                Gründen speichern. Wir sind dazu wegen gesetzlicher
                Dokumentationspflichten verpflichtet, die sich aus dem
                Handelsgesetzbuch, der Abgabenordnung, dem Kreditwesengesetz,
                dem Geldwäschegesetz und dem Wertpapierhandelsgesetz ergeben
                können. Die dort vorgegebenen Fristen zur Aufbewahrung von
                Unterlagen betragen zwei bis zehn Jahre.
              </p>
              <p>
                Ihre Screening-Daten und das Screening-Ergebnis werden für 6
                Monate in Ihrer App und in Ihrem Nutzerkonto gespeichert, sofern
                Sie es nicht vorher manuell löschen oder durch Durchlaufen eines
                erneuten Screening-Prozesses überschreiben. Anschließend werden
                die Daten gelöscht oder anonymisiert.
              </p>
              <p>
                Ihr Nutzerkonto und die darin enthaltenen Daten (außer
                Screening-Daten, -Ergebnis) werden grundsätzlich so lange
                gespeichert, wie das Nutzerkonto besteht. Sie können Ihr
                Nutzerkonto jederzeit löschen. Die auf unseren Systemen
                vorliegenden Daten werden sodann ebenfalls unverzüglich gelöscht
                oder anonymisiert, sofern nicht ein weiterer Grund für die
                Aufbewahrung besteht (s.o.).
              </p>
              <p>
                Personenbezogene Daten, die sich aus Ihrer Kommunikation mit uns
                ergeben (z.B. Kontaktdaten und Kommunikationsinhalte) werden
                grds. so lange aufbewahrt, wie dies für die Zwecke der
                Kommunikation erforderlich ist. Ggf. ergibt sich ein darüber
                hinausgehender Aufbewahrungsgrund aus o.g. Gründen.
              </p>
              <p>
                Zu Zwecken der Nutzungsanalyse erhobene Daten werden so früh wie
                möglich anonymisiert und anschließend nur noch anonym
                weiterverarbeitet. Gleiches gilt im Falle von anonymisierten
                Screening-Daten.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ihre Datenschutz-Rechte (Betroffenenrechte)
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                Sie haben bei Vorliegen der rechtlichen Voraussetzungen das
                Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der
                Verarbeitung sowie Datenübertragbarkeit.
              </p>
              <p>
                Sie haben außerdem das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns
                zuständige Datenschutz-Aufsichtsbehörde ist das Bayerische
                Landesamt für Datenschutzaufsicht.
              </p>
              <h4 className="font-semibold text-gray-800 mb-4">
                Widerruf von Einwilligungen:
              </h4>
              <p>
                Sie haben auch das Recht, eine einmal erteilte Einwilligung
                jederzeit mit Wirkung für die Zukunft zu widerrufen. Ihren
                Widerruf können Sie gern über die o.g. Kontaktdaten mitteilen.
                Sie können von Ihnen erteilte Einwilligungen auch in den
                Einstellungen unter XXXX jederzeit widerrufen bzw. anpassen,
                worin Sie Ihre Einwilligung erteilen möchten. Nach erfolgtem
                Widerruf wird die bis dahin auf die Einwilligung gestützte
                Verarbeitung nicht fortgesetzt. Verarbeitungen vor dem Widerruf
                der Einwilligung werden von diesem nicht berührt.
              </p>
              <p>
                Wenden Sie sich für die Geltendmachung dieser Rechte an die o.g.
                Kontaktdaten.
              </p>
              <p>
                Sie haben außerdem das Recht, sich bei einer
                Datenschutz-Aufsichtsbehörde zu beschweren. Die für uns
                zuständige Datenschutz-Aufsichtsbehörde ist das Bayerische
                Landesamt für Datenschutzaufsicht (
                <Link
                  href="https://lda.bayern.de"
                  target="_blank"
                  className="text-primary hover:text-primary/60 transition-colors duration-20"
                >
                  lda.bayern.de
                </Link>
                ).
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Änderungen
            </h2>
            <p className="space-y-4 text-gray-600">
              Gelegentlich aktualisieren wir diese Datenschutzhinweise,
              beispielsweise wenn wir unsere App oder die darüber erbrachten
              Services anpassen oder sich die gesetzlichen oder behördlichen
              Vorgaben ändern.
            </p>
          </section>
          <p className="text-sm text-gray-500 mt-12">Stand: Februar 2024</p>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default PrivacyDePageContent;
