'use client';

import { hero } from '@wexelcode/assets';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useSession } from 'next-auth/react';

import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

export const HeroSection = () => {
  const { status } = useSession();

  const handleOnRegister = () => {
    // TODO: Implement registration logic
  };

  return (
    <div className="bg-gradient-to-r from-[#fef2f2] to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col-reverse md:flex-row items-center py-12 md:py-24">
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
            }}
            className="md:w-1/2 space-y-6 mt-8 md:mt-0 md:pr-8"
          >
            <h1 className="text-3xl md:text-5xl font-bold text-gray-800 leading-tight">
              Experience Optimal Health with{' '}
              <span className="text-[#a51008]">Wexelcode</span>
            </h1>
            <p className="text-lg text-gray-600">
              Professional physiotherapy services tailored to your needs. Get
              personalized treatment plans and expert care from certified
              physiotherapists.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Link href={Routes.doctors}>
                <button className="px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary transition duration-300">
                  Book an Appointment
                </button>
              </Link>
              {status === 'authenticated' ? (
                <Link href={Routes.dashboard}>
                  <button className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-[#fef2f2] transition duration-300">
                    Go to Dashboard
                  </button>
                </Link>
              ) : (
                <button
                  className="px-6 py-3 border border-primary text-primary rounded-md font-medium hover:bg-[#fef2f2] transition duration-300"
                  onClick={handleOnRegister}
                >
                  Register Now
                </button>
              )}
            </div>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.2,
            }}
            className="md:w-1/2"
          >
            <Image
              priority
              src={hero}
              alt="Patient having an online consultation with a Wexelcode"
              className="rounded-lg shadow-lg w-full h-auto object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
