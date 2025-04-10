import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const TermsEnPageContent = () => {
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
          className="prose prose-lg max-w-4xl mx-auto"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
            Wexelcode App - Terms of Use
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Provider and Scope of Terms of Use
            </h2>
            <p className="text-gray-600 mb-4">
              The provider of the Wexelcode app and the services offered through
              it (&quot;App&quot;) is Wexelcode GmbH, Maisacher Str. 118, 82256
              Fürstenfeldbruck (&quot;Wexelcode,&quot; &quot;we,&quot; or
              &quot;us&quot;).
            </p>
            <p className="text-gray-600 mb-4">
              These Terms of Use apply to the use of the App and all directly or
              indirectly related services provided by Wexelcode through the
              internet, mobile applications, and email.
            </p>
          </section>
          {/* Nature and Scope section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Nature and Scope of the App
            </h2>
            <p className="text-gray-600 mb-4">
              Wexelcode provides users with a solution through the Wexelcode App
              and its associated services for a digital screening process to
              prepare for potential physiotherapy treatment. The App allows
              patients to complete a questionnaire as part of the screening
              process.
            </p>
            {/* Add more content sections */}
          </section>
          {/* Permitted Use section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Permitted Use and User Obligations
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600">
                Users may use the App and the services offered through it
                exclusively for their intended purposes. Any other use of the
                App is prohibited without prior written consent from Wexelcode.
              </p>
              <p className="text-gray-600">
                Users may access content in the App only via its designated
                functionality through its user interface.
              </p>
              {/* Add more permitted use content */}
            </div>
          </section>
          {/* Continue with other sections... */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Privacy
            </h2>
            <p className="text-gray-600">
              Using the App and its services may require providing personal
              data, which will be processed locally within the App and on
              Wexelcode&apos;s systems. For more information on how your data is
              handled, refer to the privacy policy.
            </p>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Miscellaneous
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              <li>
                Intellectual property rights belong to Wexelcode or its
                licensors.
              </li>
              <li>
                Wexelcode reserves the right to modify or remove existing App
                functions or services and to add new ones.
              </li>
              <li>Users may terminate their use of the App at any time.</li>
              <li>
                German law applies. The place of jurisdiction is
                Wexelcode&apos;s registered office.
              </li>
            </ul>
          </section>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default TermsEnPageContent;
