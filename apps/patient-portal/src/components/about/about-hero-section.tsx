'use client';
import { motion } from 'framer-motion';
import { Brain } from 'lucide-react';
const AboutHeroSection = () => {
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
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-2xl">
              <Brain className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Built by Healthcare Professionals,
            <p className="bg-gradient-to-r from-primary to-[#D4251A] bg-clip-text text-transparent">
              Engineered by Experts
            </p>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
            {`What separates WexelCode from other health-tech startups is that we
            are the brainchild of a successful physiotherapy practice.
            Comprising of over 30 trained professionals, we seek to solve
            challenges faced by healthcare professionals and their patients
            alike, developing multiple products in the process.`}
          </p>
        </div>
      </motion.main>
    </section>
  );
};

export default AboutHeroSection;
