'use client';

import { AnimateOnScroll } from '@wexelcode/components';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const faqs = [
    {
      question: 'What conditions do you treat?',
      answer:
        'Our physiotherapists treat a wide range of conditions including back pain, neck pain, sports injuries, post-surgical rehabilitation, arthritis, and more. We offer both in-person and virtual consultations to address your specific needs.',
    },
    {
      question: 'How long does a typical physiotherapy session last?',
      answer:
        'Initial consultations typically last 45-60 minutes, while follow-up sessions are usually 30-45 minutes. The exact duration may vary based on your specific condition and treatment requirements.',
    },
    {
      question: 'Do I need a referral from a doctor?',
      answer:
        "No, you don't need a doctor's referral to book an appointment with our physiotherapists. However, some insurance providers may require a referral for coverage, so we recommend checking with your insurance company first.",
    },
    {
      question: 'How many sessions will I need?',
      answer:
        'The number of sessions varies depending on your condition, its severity, and how your body responds to treatment. After your initial assessment, your physiotherapist will provide a recommended treatment plan with an estimated number of sessions.',
    },
    {
      question: 'Do you accept insurance?',
      answer:
        'Yes, we accept most major insurance plans. We can provide you with the necessary documentation to submit to your insurance provider for reimbursement. We recommend verifying your coverage before your first appointment.',
    },
    {
      question: 'What should I wear to my appointment?',
      answer:
        'Please wear comfortable, loose-fitting clothing that allows easy access to the area requiring treatment. For lower body issues, shorts are recommended, and for upper body concerns, a tank top or t-shirt is appropriate.',
    },
  ];
  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section id="faq" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll variants="fadeUp" className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our physiotherapy services.
          </p>
        </AnimateOnScroll>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
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
                  <ChevronDown className="w-5 h-5 text-[#a51008]" />
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
