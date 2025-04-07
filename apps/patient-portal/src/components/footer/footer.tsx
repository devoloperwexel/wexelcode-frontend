'use client';

import { logo } from '@wexelcode/assets';
import { Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Routes from '../../constants/routes';
import { Link, usePathname } from '../../i18n/routing';

export const Footer = () => {
  const t = useTranslations('footer');
  const pathname = usePathname();
  const hideLayout = /^\/appointments\/[0-9a-fA-F-]+\/video-call$/.test(
    pathname
  );
  if (hideLayout) {
    return <></>;
  }
  return (
    <footer id="contact" className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-1">
            <Link href={Routes.home}>
              <Image
                src={logo}
                alt="Wexelcode Logo"
                className="h-16 mb-4"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </Link>
            <p className="text-gray-300 mb-4">{t('description')}</p>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/wexel_code"
                aria-label="Instagram"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <Instagram size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/85636861"
                aria-label="Linkedin"
                target="_blank"
                className="text-gray-300 hover:text-white"
              >
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('links.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={Routes.home}
                  className="text-gray-300 hover:text-white"
                >
                  {t('links.home')}
                </Link>
              </li>
              <li>
                <Link
                  href={`${Routes.home}/#how-it-works`}
                  className="text-gray-300 hover:text-white"
                >
                  {t('links.howItWorks')}
                </Link>
              </li>
              <li>
                <Link
                  href={`${Routes.home}/#faq`}
                  className="text-gray-300 hover:text-white"
                >
                  {t('links.faq')}
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.contact}
                  className="text-gray-300 hover:text-white"
                >
                  {t('links.contact')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('legal.title')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href={Routes.terms}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('legal.terms')}
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.imprint}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('legal.imprint')}
                </Link>
              </li>
              <li>
                <Link
                  href={Routes.privacy}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {t('legal.privacy')}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t('contact.title')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <Phone size={18} className="mr-3 mt-1" />
                <Link href="tel:+15551234567">+1 (555) 123-4567</Link>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="mr-3 mt-1" />
                <Link href="mailto:info@physiohealth.com">
                  info@physiohealth.com
                </Link>
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
