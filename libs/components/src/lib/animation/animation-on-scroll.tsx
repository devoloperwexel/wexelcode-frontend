import { motion, useAnimation, useInView } from 'framer-motion';
import React, { useEffect, useRef } from 'react';

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  variants?: 'fadeUp' | 'fadeIn' | 'scaleUp' | 'slideInLeft' | 'slideInRight';
}

export const AnimateOnScroll = ({
  children,
  className,
  variants = 'fadeUp',
}: AnimateOnScrollProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-20%',
  });
  const controls = useAnimation();
  const animationVariants = {
    fadeUp: {
      hidden: {
        opacity: 0,
        y: 40,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
    fadeIn: {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      },
    },
    scaleUp: {
      hidden: {
        opacity: 0,
        scale: 0.95,
      },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.6,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
    slideInLeft: {
      hidden: {
        opacity: 0,
        x: -40,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
    slideInRight: {
      hidden: {
        opacity: 0,
        x: 40,
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        },
      },
    },
  };
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants[variants]}
      className={className}
    >
      {children}
    </motion.div>
  );
};
