import { AnimateOnScroll } from '@wexelcode/components';
import { useTranslations } from 'next-intl';

export const TestimonialsSection = () => {
  const t = useTranslations('home.testimonialsSection');

  const testimonials = [
    {
      quote:
        "The personalized treatment plan has made a huge difference in my recovery. I'm back to hiking pain-free!",
      name: 'Sarah Johnson',
      title: 'Recovery Patient',
      image:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      quote:
        'The convenience of virtual sessions combined with expert guidance helped me recover from my sports injury faster than expected.',
      name: 'Michael Chen',
      title: 'Sports Enthusiast',
      image:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
      quote:
        "As someone with a busy schedule, the flexibility of PhysioHealth's services has been invaluable for managing my chronic back pain.",
      name: 'Emma Rodriguez',
      title: 'Busy Professional',
      image:
        'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80',
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <AnimateOnScroll className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t('description')}
          </p>
        </AnimateOnScroll>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimateOnScroll
              key={index}
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">
                &quot;{testimonial.quote}&quot;
              </p>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};
