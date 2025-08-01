'use client';

import { Badge, Card, CardContent } from '@wexelcode/components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import { Link } from '../../i18n/routing';
import { TEAM_MEMBERS } from './constant';

const TeamSection = () => {
  const t = useTranslations('about');
  const local = useLocale() as 'en' | 'de';
  return (
    <section id="team" className="pb-20 pt-16 px-4 sm:px-6 lg:px-8">
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
        className="max-w-7xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('meetOurExperts')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          {t('slogan')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-6">
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 mb-4 ring-3 ring-primary/20 shadow-xl group-hover:ring-primary/40 transition-all duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 ${
                        member.name === 'Majeed Hussain'
                          ? 'object-[center_20%]'
                          : ''
                      }`}
                    />
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3 justify-center">
                    {member.badges.map((badge, badgeIndex) => (
                      <Badge
                        key={badgeIndex}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {member.name}
                  </h3>
                  <p className="text-sm font-medium text-primary mb-3">
                    {member.position?.[local ?? 'en']}
                  </p>
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {member.description?.[local ?? 'en']}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-[#8B1309] rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">{t('joinOurMission')}</h3>
            <p className="text-red-100 mb-6 max-w-2xl mx-auto">
            {t('weAreLooking')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors">
                {t('viewOpenPositions')}
              </button>
              <Link href="/contact">
                <button className="border border-white/30 text-white px-6 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors">
                  {t('contact')}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TeamSection;
