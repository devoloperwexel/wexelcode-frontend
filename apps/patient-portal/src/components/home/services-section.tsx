import { service } from '@wexelcode/assets';
import { AnimateOnScroll } from '@wexelcode/components';
import { Award, FlaskConical,HeartHandshake, ThumbsUp } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import React from 'react';

export const ServicesSection = () => {
  const t = useTranslations('home.servicesSection');

  const benefits = [
    {
      id: 'fairAndSimple',
      icon: (
        <ThumbsUp className="w-10 h-10 text-primary bg-[#fef2f2] p-2 rounded-full" />
      ),
    },
    {
      id: 'quality',
      icon: (
        <Award className="w-10 h-10 text-primary bg-[#fef2f2] p-2 rounded-full" />
      ),
    },
    {
      id: 'personalized',
      icon: (
        <HeartHandshake className="w-10 h-10 text-primary bg-[#fef2f2] p-2 rounded-full" />
      ),
    },
    {
      id: 'rigorousScience',
      icon: (
        <FlaskConical className="w-10 h-10 text-primary bg-[#fef2f2] p-2 rounded-full" />
      ),
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <AnimateOnScroll className="md:w-1/2 mb-10 md:mb-0 md:pr-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              {t('title')}
            </h2>
            <p className="text-lg text-gray-600 mb-8">{t('description')}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="mr-4 mt-1">{benefit.icon}</div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-1">
                      {t(`benefits.${benefit.id}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`benefits.${benefit.id}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateOnScroll>
          <AnimateOnScroll className="md:w-1/2">
            <Image
              src={service}
              alt="Physiotherapist working with patient"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
};
