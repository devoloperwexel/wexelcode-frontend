'use client';

import { AnimateOnScroll } from '@wexelcode/components';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useMessages, useTranslations } from 'next-intl';
import { useState } from 'react';

export const FAQSection = () => {
  const t = useTranslations('home.faqSection');
  const messages = useMessages();

  const keys = Object.keys(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (messages as any)['home']['faqSection']['questions']
  );

  const questions = keys.map((key) => ({
    question: t(`questions.${key}.question`),
    answer: t(`questions.${key}.answer`),
  }));

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll variants="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </AnimateOnScroll>
        <div className="max-w-3xl mx-auto">
          {questions.map((faq, index) => (
            <AnimateOnScroll key={index} variants="fadeUp" className="mb-4">
              <button
                className="flex justify-between items-center w-full p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-left transform hover:scale-[1.01]"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-800">
                  {faq.question}
                </span>
                <motion.div
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                >
                  <ChevronDown className="w-5 h-5 text-primary" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: 'auto',
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white border-t border-gray-100 rounded-b-lg">
                      <p className="text-gray-600">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
