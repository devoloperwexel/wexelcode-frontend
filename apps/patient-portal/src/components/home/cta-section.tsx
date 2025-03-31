import Routes from '../../constants/routes';
import { Link } from '../../i18n/routing';

export const CTASection = () => {
  const handleOnRegister = () => {
    // TODO: Implement registration logic
  };

  return (
    <section className="py-16 bg-[#f7eeed]">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800">
          Start Your Recovery Journey Today
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-600">
          Take the first step towards better health and mobility. Our expert
          physiotherapists are ready to help you achieve your wellness goals.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link href={Routes.doctors}>
            <button className="px-8 py-3 bg-[#a51008] text-white rounded-md font-medium hover:bg-[#8a0d07] transition duration-300">
              Book an Appointment
            </button>
          </Link>
          <button
            className="px-8 py-3 bg-transparent border-2 border-[#a51008] text-[#a51008] rounded-md font-medium hover:bg-[#fef2f2] transition duration-300"
            onClick={handleOnRegister}
          >
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};
