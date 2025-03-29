'use client';

import {
  BlogSection,
  CTASection,
  FAQSection,
  HeroSection,
  HowItWorksSection,
  ServicesSection,
  SneakPeek,
  TestimonialsSection,
} from '../../components/home';

export default function IndexPageContent() {
  return (
    <main>
      <HeroSection />
      <HowItWorksSection />
      <ServicesSection />
      <TestimonialsSection />
      <SneakPeek />
      <BlogSection />
      <FAQSection />
      <CTASection />
    </main>
  );
}
