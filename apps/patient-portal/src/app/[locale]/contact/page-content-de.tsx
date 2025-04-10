import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Printer, Clock, MapPin } from 'lucide-react';
const ContactDePageContent = () => {
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Kontakt
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-600 mb-8">
              Bitte senden Sie uns Ihre Anliegen vorzugsweise per E-Mail an:
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-[#a51008] mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">E-Mail</p>
                  <a
                    href="mailto:contact@wexelcode.de"
                    className="text-[#a51008] hover:underline"
                  >
                    contact@wexelcode.de
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-[#a51008] mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Telefon</p>
                  <a
                    href="tel:+4981413538433"
                    className="text-[#a51008] hover:underline"
                  >
                    08141 3538 433
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Printer className="w-6 h-6 text-[#a51008] mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Fax</p>
                  <p className="text-gray-600">08141 3538 434</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-[#a51008] mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    Geschäftszeiten
                  </p>
                  <p className="text-gray-600">
                    Montag - Freitag: 09:00 - 17:00 Uhr
                  </p>
                  <p className="text-gray-600">
                    Samstag - Sonntag: Geschlossen
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-[#a51008] mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Adresse</p>
                  <p className="text-gray-600">Maisacher Straße 118</p>
                  <p className="text-gray-600">82256 Fürstenfeldbruck</p>
                  <p className="text-gray-600">Deutschland</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Wichtiger Hinweis
            </h2>
            <p className="text-gray-600">
              Für die schnellste Antwort empfehlen wir die Kontaktaufnahme per
              E-Mail. Unser Team antwortet in der Regel innerhalb von 24
              Arbeitsstunden. Bei dringenden Angelegenheiten rufen Sie uns bitte
              während der Geschäftszeiten direkt an.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};
export default ContactDePageContent;
