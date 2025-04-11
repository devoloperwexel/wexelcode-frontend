import {
  Activity,
  AlertCircle,
  ArrowRight,
  Brain,
  Clock,
  Dumbbell,
  Heart,
  HelpCircle,
  Scale,
  UserX,
} from 'lucide-react';
import { RiskFactorCard } from './risk-factor-card';

const BackPainBlogEn = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="relative w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://ucarecdn.com/82eb540a-1a02-4a53-9e3a-4b217fc284cd/Gemini_Generated_Image_nvmu45nvmu45nvmu.avif"
            alt="Medical background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary bg-opacity-40"></div>
        </div>
        <div className="container mx-auto px-4 py-20 md:py-28 relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn text-white">
            Back Pain
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl animate-slideUp text-white/90">
            Understanding and managing non-specific back pain for a healthier,
            pain-free life
          </p>
          <div className="mt-10 animate-bounce">
            {/* <ArrowDown className="mx-auto text-white" size={32} /> */}
          </div>
        </div>
        {/* <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }
          @keyframes slideUp {
            from {
              transform: translateY(20px);
              opacity: 0;
            }
            to {
              transform: translateY(0);
              opacity: 1;
            }
          }
          .animate-fadeIn {
            animation: fadeIn 1s ease-out forwards;
          }
          .animate-slideUp {
            animation: slideUp 1s ease-out 0.3s forwards;
            opacity: 0;
          }
        `}</style> */}
      </header>
      {/* Content Section */}
      <main className="container mx-auto px-4 py-12 max-w-4xl">
        <article className="prose lg:prose-xl max-w-none">
          <section className="mb-12 bg-white rounded-lg p-6 shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <HelpCircle className="mr-2 text-primary" size={28} />
              Useful Information About Non-Specific Back Pain
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Have any of you ever experienced back pain without a clear cause?
              It appears suddenly and can disrupt our daily lives—whether at
              work, at home, or during leisure activities.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Around 85% of all back pain cases are non-specific back pain,
              which usually resolves within a few days to weeks. Unfortunately,
              it can recur and, in rare cases, become chronic if appropriate
              measures for relief and prevention are not taken.{' '}
              <span className="text-sm text-gray-500">[cite: 4]</span>
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              In this post, you will learn more about non-specific back pain,
              the risk factors involved, what you can do about it, and how to
              prevent it.
            </p>
          </section>
          <section className="mb-12 bg-white rounded-lg p-6 shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <AlertCircle className="mr-2 text-primary" size={28} />
              Definition
            </h2>
            <div className="p-5 bg-red-50 rounded-lg border-l-4 border-primary">
              <p className="text-gray-700 leading-relaxed">
                Non-specific back pain refers to pain in the back area for which
                no specific anatomical cause can be identified. It is the most
                common form of back pain and can affect people of all ages.
              </p>
            </div>
          </section>
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-primary mb-8 flex items-center">
              <Activity className="mr-2 text-primary" size={28} />
              General Risk Factors
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Non-specific back pain is often triggered by various interacting
              factors. Here are some of the most common risk factors:
            </p>
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <RiskFactorCard
                icon={<Clock />}
                title="Lack of Movement and Improper Load Bearing"
                description="In modern society, many people spend a large part of their day sitting. Prolonged sitting, especially in an unfavourable posture, puts strain on the spine and can lead to overworked muscles. Unilateral movements, as seen in certain work processes, can also result in improper loading and pain."
              />
              <RiskFactorCard
                icon={<Dumbbell />}
                title="Lack of Core Stability and Weak Muscles"
                description="Weak abdominal and back muscles mean that the spine is not adequately supported. An imbalance between muscle groups can cause poor posture, leading to back pain."
              />
              <RiskFactorCard
                icon={<Scale />}
                title="Overweight"
                description="Being overweight puts extra stress on the spine, especially the lower back."
              />
              <RiskFactorCard
                icon={<Brain />}
                title="Psychosocial Factors"
                description="Stress, anxiety, and depression are also important factors that can influence non-specific back pain."
              />
            </div>
            <div className="bg-gray-50 rounded-lg p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Additional Risk Factors May Include:
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-blue-500" size={16} />
                  Genetic predisposition
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-blue-500" size={16} />
                  Smoking
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-blue-500" size={16} />
                  Poor diet
                </li>
                <li className="flex items-center text-gray-700">
                  <ArrowRight className="mr-2 text-blue-500" size={16} />
                  Age between 35 and 50 years
                </li>
              </ul>
            </div>
          </section>
          <section className="mb-12 bg-white rounded-lg p-6 shadow-md transform transition-all hover:shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-6 flex items-center">
              <Heart className="mr-2 text-primary" size={28} />
              Measures for Non-Specific Back Pain
            </h2>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Even though non-specific back pain does not have a clearly
              identifiable cause, there are many measures to alleviate the
              discomfort and prevent further back pain.
            </p>
            <div className="p-6 bg-red-50 rounded-lg border-l-4 border-primary mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
                <UserX className="mr-2 text-primary" size={20} />
                Movement and Strengthening Exercises
              </h3>
              <p className="text-gray-700 leading-relaxed">
                It is important to stay active—start with small, slow movements
                and try to resume your usual activities. Long periods of rest
                are not beneficial and can even worsen the pain, lead to greater
                functional limitations, and delay recovery. In the long term,
                training is essential. The World Health Organization (WHO)
                recommends 150 minutes of exercise per week. There are no "best"
                back exercises—the key is to start and enjoy the activity to
                keep your motivation high.
              </p>
            </div>
          </section>
        </article>
      </main>
    </div>
  );
};

export default BackPainBlogEn;
