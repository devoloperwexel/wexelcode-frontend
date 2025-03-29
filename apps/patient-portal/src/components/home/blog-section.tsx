import { AnimateOnScroll } from '@wexelcode/components';
import { motion } from 'framer-motion';

export const BlogSection = () => {
  const blogPosts = [
    {
      title: 'Autumn Is Hiking Season',
      description:
        'Autumn is here, marking the peak of the hiking season. Hiking has long been a popular leisure activity among young and old alike and continues to be a growing trend.',
      image:
        'https://images.unsplash.com/photo-1526772662000-3f88f10405ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
    },
    {
      title: 'Modern Physiotherapy',
      description:
        'Physiotherapy has evolved significantly over the past decades and has become an essential part of healthcare today.',
      image:
        'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80',
    },
    {
      title: 'Back Pain',
      description:
        'Have any of you ever experienced back pain without a clear cause? It appears suddenly and can disrupt our daily lives—whether at work, at home, or during leisure activities.',
      image:
        'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80',
    },
  ];
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.2,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    }),
  };
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll variants="fadeUp">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Learn More on Our Blog
          </h2>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.div
              key={index}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{
                once: true,
                margin: '-20%',
              }}
              variants={cardVariants}
              whileHover={{
                y: -8,
              }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="overflow-hidden">
                <motion.img
                  whileHover={{
                    scale: 1.05,
                  }}
                  transition={{
                    duration: 0.4,
                  }}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <motion.a
                  whileHover={{
                    x: 5,
                  }}
                  href="#"
                  className="inline-flex items-center text-[#a51008] font-medium hover:text-[#8a0d07] transition duration-300"
                >
                  Learn More
                  <motion.span
                    className="ml-1"
                    initial={{
                      opacity: 0,
                      x: -5,
                    }}
                    whileHover={{
                      opacity: 1,
                      x: 0,
                    }}
                  >
                    →
                  </motion.span>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
