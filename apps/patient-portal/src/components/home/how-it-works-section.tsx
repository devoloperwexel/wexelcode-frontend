import { motion } from 'framer-motion';
import { ActivitySquare, ClipboardList, Video } from 'lucide-react';
import React, { Children } from 'react';

export const HowItWorksSection = () => {
  const steps = [
    {
      icon: <ClipboardList className="w-12 h-12 text-[#a51008]" />,
      title: 'Initial Assessment',
      description:
        'Complete our comprehensive digital assessment form to help us understand your condition and needs.',
      number: 1,
    },
    {
      icon: <Video className="w-12 h-12 text-[#a51008]" />,
      title: 'Virtual Consultation',
      description:
        'Connect with a certified physiotherapist through a secure video call for a detailed evaluation.',
      number: 2,
    },
    {
      icon: <ActivitySquare className="w-12 h-12 text-[#a51008]" />,
      title: 'Personalized Treatment',
      description:
        'Receive a customized treatment plan designed specifically for your recovery and wellness goals.',
      number: 3,
    },
  ];
  const containerVariants = {
    initial: {
      opacity: 1,
    },
    animate: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  const itemVariants = {
    initial: {
      opacity: 0,
      y: 20,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our simple three-step process makes getting professional
            physiotherapy care easier than ever before.
          </p>
        </motion.div>
        <motion.div
          variants={containerVariants}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-lg p-8 shadow-md border border-gray-100 relative hover:shadow-xl transition-all duration-300"
            >
              <motion.div
                initial={{
                  scale: 0,
                }}
                animate={{
                  scale: 1,
                }}
                transition={{
                  delay: 0.2 + index * 0.1,
                  duration: 0.3,
                }}
                className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-[#a51008] flex items-center justify-center text-white font-bold"
              >
                {step.number}
              </motion.div>
              <motion.div
                initial={{
                  scale: 0,
                  rotate: -180,
                }}
                animate={{
                  scale: 1,
                  rotate: 0,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 200,
                  damping: 20,
                  delay: 0.3 + index * 0.1,
                }}
                className="flex justify-center mb-6"
              >
                {step.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">
                {step.title}
              </h3>
              <p className="text-gray-600 text-center">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
