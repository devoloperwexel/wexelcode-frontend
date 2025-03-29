import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from 'lucide-react';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/wmgqKWJNkJH7R7hjgDA42r/logo.png"
              alt="Wexelcode Logo"
              className="h-16 mb-4"
            />
            <p className="text-gray-300 mb-4">
              Professional physiotherapy services tailored to your needs,
              accessible from anywhere.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                aria-label="Instagram"
                className="text-gray-300 hover:text-white"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Facebook"
                className="text-gray-300 hover:text-white"
              >
                <Facebook size={20} />
              </Link>
              <Link
                href="#"
                aria-label="Twitter"
                className="text-gray-300 hover:text-white"
              >
                <Twitter size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={Routes.home}
                  className="text-gray-300 hover:text-white"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="#how-it-works"
                  className="text-gray-300 hover:text-white"
                >
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-gray-300 hover:text-white">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Data & Privacy</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={Routes.terms}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.imprint}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Imprint
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.privacy}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1" />
                <span>info@physiohealth.com</span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-3 mt-1" />
                <span>123 Wellness Street, Health City, HC 10001</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Wexelcode. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
