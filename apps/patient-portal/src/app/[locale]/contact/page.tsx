'use client';

import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Printer } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations('contact');
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
      className="py-16"
    >
      <div className="max-w-4xl mx-auto">
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
            {t('contactUs')}
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-600 mb-8">
              {t('sendYourConcerns')}
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {t('email')}
                  </p>
                  <a
                    href="mailto:service@wexelcode.de"
                    className="text-primary hover:underline"
                  >
                    service@wexelcode.de
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {t('telephone')}
                  </p>
                  <a
                    href="tel:+4981413538433"
                    className="text-primary hover:underline"
                  >
                    08141 3538 433
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Printer className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {t('fax')}
                  </p>
                  <p className="text-gray-600">08141 3538 434</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {t('businessHours')}
                  </p>
                  <p className="text-gray-600">
                    {t('mondayFriday')}: 09:00 - 17:00
                  </p>
                  <p className="text-gray-600">{t('saturdaySundayCloses')}</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    {t('address')}
                  </p>
                  <p className="text-gray-600">Maisacher Straße 118</p>
                  <p className="text-gray-600">82256 Fürstenfeldbruck</p>
                  <p className="text-gray-600">Germany</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {t('importantNote')}
            </h2>
            <p className="text-gray-600">{t('message')}</p>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
}
