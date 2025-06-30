import { AnimateOnScroll } from '@wexelcode/components';
import { useLocale } from 'next-intl';

import { TESTIMONIALS } from './constant';

export const TestimonialsSection = () => {
  const local = useLocale();
  //
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {TESTIMONIALS[local as keyof typeof TESTIMONIALS].title}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {TESTIMONIALS[local as keyof typeof TESTIMONIALS].description}
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS[local as keyof typeof TESTIMONIALS].list.map(
            (testimonial, index) => (
              <AnimateOnScroll
                key={index}
                className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center mb-4">
                  {/* <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  /> */}
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    {/* <p className="text-sm text-gray-500">{testimonial.title}</p> */}
                  </div>
                </div>
                <p className="text-gray-600 italic line-clamp-6">
                  &quot;{testimonial.quote}&quot;
                </p>
              </AnimateOnScroll>
            )
          )}
        </div>
      </div>
    </section>
  );
};
