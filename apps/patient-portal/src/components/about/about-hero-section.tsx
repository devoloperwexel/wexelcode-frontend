'use client';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
const AboutHeroSection = () => {
  const t = useTranslations('about');
  return (
    <section className="pt-20 px-4 sm:px-6 lg:px-8">
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
        className="max-w-7xl mx-auto"
      >
        <div className="text-center">
          {/* <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-2xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div> */}
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            {t('title')}
            <p className=" text-primary mt-1">{t('subTitle')}</p>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </div>
      </motion.main>
    </section>
  );
};

export default AboutHeroSection;
