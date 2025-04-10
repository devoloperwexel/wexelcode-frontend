import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';

const ImprintEnPageContent = () => {
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
            Imprint
          </h1>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Company Information
            </h2>
            <div className="space-y-2 text-gray-600">
              <p>Wexelcode GmbH</p>
              <p>
                Represented by the Managing Directors: Andreas Sextl and Patrick
                Meister
              </p>
              <p>
                Address: Maisacherstraße 118/Rgb., 82256 Fürstenfeldbruck,
                Germany
              </p>
              <p>
                Registered in the Commercial Register of the District Court of
                Munich
              </p>
              <p>Commercial Register Number: HRB 285283</p>
              <p>Tax Number: 117/142/30923</p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Disclaimer
            </h2>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Liability for Content
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                As service providers, we are responsible for our own content on
                these pages according to § 7 Abs.1 TMG under general laws.
                However, according to §§ 8 to 10 TMG, we are not obligated to
                monitor transmitted or stored external information or
                investigate circumstances that indicate unlawful activity.
              </p>
              <p>
                Obligations to remove or block the use of information under
                general laws remain unaffected. However, liability in this
                regard is only possible from the time we are aware of a specific
                legal violation. Upon learning of such violations, we will
                promptly remove the relevant content.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Liability for Links
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Our offer contains links to external websites of third parties,
                over which we have no influence. Therefore, we cannot accept
                responsibility for their content. The provider or operator of
                the linked pages is always responsible for the content of the
                pages.
              </p>
              <p>
                The linked pages were checked for possible legal violations at
                the time of linking. Illegal content was not identifiable at the
                time of linking. However, a permanent content control of the
                linked pages is not reasonable without concrete evidence of a
                legal violation. Upon becoming aware of legal violations, we
                will promptly remove such links.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Copyright
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                The content and works created by the site operators on these
                pages are subject to German copyright law. Reproduction,
                editing, distribution, and any form of exploitation beyond the
                limits of copyright law require the written consent of the
                respective author or creator. Downloads and copies of this page
                are only permitted for private, non-commercial use.
              </p>
              <p>
                Insofar as the content on this page was not created by the
                operator, the copyrights of third parties are respected. In
                particular, third-party content is marked as such. Should you
                still become aware of a copyright infringement, we kindly ask
                you to notify us accordingly. Upon learning of legal violations,
                we will promptly remove such content.
              </p>
            </div>
          </section>
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Dispute Resolution
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The European Commission provides a platform for online dispute
                resolution (ODR), accessible at{' '}
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
                We are not willing and not obligated to participate in dispute
                resolution proceedings before consumer arbitration boards.
              </p>
              <p>
                We have subjected ourselves to the following extrajudicial
                complaint and redress procedure:
              </p>
              <p>
                General Consumer Arbitration Board of the Centre for
                Conciliation e.V.
                <br />
                Straßburger Straße 8
                <br />
                77694 Kehl am Rhein
                <br />
                Germany
              </p>
              <p>
                Link to the access requirements:{' '}
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

export default ImprintEnPageContent;
