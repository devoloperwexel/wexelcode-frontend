import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Printer } from 'lucide-react';

const ContactEnPageContent = () => {
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
            Contact Us
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <p className="text-lg text-gray-600 mb-8">
              Please send us your concerns preferably by email to:
            </p>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Email</p>
                  <a
                    href="mailto:contact@wexelcode.de"
                    className="text-primary hover:underline"
                  >
                    contact@wexelcode.de
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Telephone</p>
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
                  <p className="text-lg font-medium text-gray-800">Fax</p>
                  <p className="text-gray-600">08141 3538 434</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">
                    Business Hours
                  </p>
                  <p className="text-gray-600">
                    Monday - Friday: 09:00 - 17:00
                  </p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <p className="text-lg font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">Maisacher Straße 118</p>
                  <p className="text-gray-600">82256 Fürstenfeldbruck</p>
                  <p className="text-gray-600">Germany</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 rounded-lg p-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Important Note
            </h2>
            <p className="text-gray-600">
              For the fastest response, we recommend contacting us via email.
              Our team typically responds within 24 business hours. For urgent
              matters, please call us directly during business hours.
            </p>
          </div>
        </motion.div>
      </div>
    </motion.main>
  );
};

export default ContactEnPageContent;
