import { AnimateOnScroll } from '@wexelcode/components';
import { motion } from 'framer-motion';

export const SneakPeek = () => {
  const features = [
    {
      title: 'Only pay if our service is right for you',
    },
    {
      title: 'Wearable integrations',
    },
    {
      title: 'AI automation',
    },
    {
      title: 'Pain level monitoring',
    },
    {
      title: 'Personalized plan',
    },
    {
      title: 'Smart exercise recommendations',
    },
    {
      title: 'Progress tracking & analysis',
    },
    {
      title: 'Real-time monitoring',
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <AnimateOnScroll className="md:w-1/2">
            <img
              src="https://uploadthingy.s3.us-west-1.amazonaws.com/xgFBS9bWeYj3ShsQhqASRo/DALL%C2%B7E_2025-03-29_17.27.31_-_A_modern_physiotherapy_clinic_with_some_advanced_technology._A_patient_is_receiving_therapy_using_a_smart_exercise_machine_with_digital_feedback._A_th.webp"
              alt="Advanced physiotherapy technology with digital monitoring system"
              className="rounded-lg shadow-lg w-full object-cover h-[400px]"
            />
          </AnimateOnScroll>
          <div className="md:w-1/2">
            <AnimateOnScroll>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                Here&apos;s a sneak peek of what&apos;s being developed
              </h2>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-center gap-3"
                  >
                    <div className="w-3 h-3 rounded-full bg-[#a51008] opacity-75"></div>
                    <span className="text-gray-700">{feature.title}</span>
                  </motion.div>
                ))}
              </motion.div>
            </AnimateOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
};
