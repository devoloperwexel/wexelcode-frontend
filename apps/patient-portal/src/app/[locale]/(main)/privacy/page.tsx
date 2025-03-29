'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
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
            Privacy Policy
          </h1>
          <p className="text-gray-600 mb-8">
            This privacy policy provides information about the processing of
            your data when using the Wexelcode App.
          </p>
          <p className="text-gray-600 mb-8">
            The Wexelcode App allows patients to complete a questionnaire before
            their first visit to a physiotherapy practice (Professional) to
            determine whether a physiotherapy treatment can be initiated without
            prior consultation with a doctor. The results of the screening
            process can be shared with the Professional to help digitize and
            optimize the onboarding process, improving accessibility to
            physiotherapy services.
          </p>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              1. Data Controller
            </h2>
            <div className="space-y-2 text-gray-600">
              <p>Wexelcode GmbH</p>
              <p>Maisacher Straße 118, 82256 Fürstenfeldbruck</p>
              <p>Email: contact@wexelcode.de</p>
              <p>Represented by: Andreas Sextl and Patrick Meister</p>
              <p className="mt-4">
                Our Data Protection Officer can be contacted at
                privacy@wexelcode.de.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              2. Data, Processing Purposes, Legal Bases
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Installation and Use of the App
            </h3>
            <p className="text-gray-600 mb-4">
              You can download the Wexelcode App from the Google Play Store and
              Apple App Store. We have no control over any personal data
              processed during the download. For details, refer to the
              respective App Store&apos;s privacy policy.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Push Notifications
            </h3>
            <p className="text-gray-600 mb-4">
              If you allow push notifications, they may be sent to remind you of
              incomplete screening processes. Push notifications require
              specific device identifiers (e.g., Push Token) and are only sent
              with your explicit consent (Art. 6(1)(a) GDPR). You can disable
              them via your device settings at any time.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Registration and Login
            </h3>
            <p className="text-gray-600 mb-4">
              To register and create an account, we process your name, email
              address, and password. This enables full access to the App and its
              functionalities (e.g., running the screening process). Data
              processing here is based on Art. 6(1)(b) GDPR.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Screening Process
            </h3>
            <p className="text-gray-600 mb-4">
              During the screening, we collect health-related information, such
              as:
            </p>
            <ul className="list-disc pl-6 text-gray-600 mb-4">
              <li>Age, gender, weight</li>
              <li>Medical history, regular medication</li>
              <li>Family medical history, lifestyle factors</li>
            </ul>
            <p className="text-gray-600 mb-4">
              Processing this data is based on your explicit consent (Art.
              6(1)(a) and Art. 9(2)(a) GDPR). The screening result is available
              within the App and can be saved as a PDF.
            </p>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Data Transfer to Physiotherapists
            </h3>
            <p className="text-gray-600 mb-4">
              You can opt to share your screening data and results with a
              selected Professional. This data sharing is based on your explicit
              consent (Art. 6(1)(a) and Art. 9(2)(a) GDPR). Once shared, the
              Professional assumes responsibility for further data processing.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              3. Automated Decision-Making Including Profiling
            </h2>
            <p className="text-gray-600">
              The App analyzes your answers during the screening to provide an
              initial recommendation (e.g., consult a doctor first). This
              analysis does not replace professional medical advice and does not
              constitute a legally binding decision.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              4. Is the Use of the App Voluntary?
            </h2>
            <p className="text-gray-600">
              Yes, using the Wexelcode App and providing your data is voluntary.
              However, certain features (e.g., the screening process) may not
              function without providing specific information.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              5. Data Recipients and Transfers to Third Countries
            </h2>
            <p className="text-gray-600">
              Data transfers are limited to cases where legally permissible. No
              data is transferred outside the EU/EEA unless appropriate
              safeguards (e.g., EU Standard Contractual Clauses) are in place.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              6. Data Retention Periods
            </h2>
            <p className="text-gray-600">
              Screening data is stored for six months unless manually deleted.
              Other personal data is retained as long as your account remains
              active. Communication data is stored as necessary for legal
              obligations or dispute resolution.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              7. Your Data Protection Rights
            </h2>
            <p className="text-gray-600">
              You have rights to access, rectify, delete, restrict, and port
              your data. Consent can be revoked at any time. Complaints can be
              filed with the relevant supervisory authority (e.g., Bavarian Data
              Protection Authority).
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              8. Amendments
            </h2>
            <p className="text-gray-600">
              We may update this privacy policy to reflect changes in services
              or legal requirements.
            </p>
          </section>
          <p className="text-sm text-gray-500 mt-12">
            Last updated: February 2024
          </p>
        </motion.div>
      </div>
    </motion.main>
  );
}
