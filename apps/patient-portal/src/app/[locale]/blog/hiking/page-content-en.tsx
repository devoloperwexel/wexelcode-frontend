const HikingBlogEn = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <header className="relative w-full">
        <div
          className="w-full h-[50vh] bg-cover bg-center relative"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/70" />
        </div>
        <div className="container px-4 sm:px-6 lg:px-8 mx-auto relative -mt-24">
          <div className="animate-fade-in-up bg-white p-6 sm:p-8 rounded-lg shadow-xl max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <span className="h-0.5 w-10 bg-primary mr-3"></span>
              <span className="text-primary font-medium tracking-wider text-sm uppercase">
                Hiking & Wellness
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-stone-800 mb-4 leading-tight">
              Autumn Is Hiking Season
              <span className="block text-primary">
                What Does It Do for Our Body and What Should You Watch Out For?
              </span>
            </h1>
          </div>
        </div>
      </header>
      {/* Content Section */}
      <main className="container px-4 sm:px-6 lg:px-8 mx-auto py-12">
        <article className="max-w-3xl mx-auto">
          <div className="motion-safe:animate-fade-in-up">
            <p className="text-xl leading-relaxed mb-8">
              Autumn is here, marking the peak of the hiking season.
            </p>
            <p className="mb-6">
              Hiking has long been a popular leisure activity among young and
              old alike and continues to be a growing trend.
            </p>
            <p className="mb-10">
              In a time when our daily lives are often marked by stress and lack
              of physical activity, hiking offers an excellent way to do
              something good for both body and mind.
            </p>
            <p className="mb-10">
              This essay highlights the most important scientifically proven
              positive effects of hiking and what beginners, in particular,
              should be mindful of.
            </p>
          </div>
          <div className="motion-safe:animate-fade-in-up motion-safe:delay-300">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center">
              <span className=" w-12 h-12 bg-red-50 rounded-full mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </span>
              Effects on the Body
            </h2>
            <p className="mb-6">
              Hiking—essentially walking—is the most natural form of movement
              for humans.
            </p>
            <p className="mb-6">
              Due to the increasing lack of physical activity in our society,
              many secondary conditions such as obesity, cardiovascular
              diseases, or musculoskeletal disorders can develop.
            </p>
            <p className="mb-6">
              Those affected suffer greatly, and the burden on our healthcare
              system increases.
            </p>
            <p className="mb-6">
              Regular hiking is an effective remedy because:
            </p>
            <div className="space-y-6 mb-10">
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Hiking Burns Calories
                </h3>
                <p>
                  The number of calories burned depends on factors such as
                  gender, age, height, weight, fitness level, distance, and
                  elevation gain.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Hiking Strengthens Bones, Tendons, Ligaments, and Joints
                </h3>
                <p>
                  A trained leg musculature relieves stress on the knee and hip
                  joints. Additionally, the entire core musculature is engaged,
                  leading to improved posture.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Hiking Is Moderate Endurance Training
                </h3>
                <p>
                  Multiple studies show that regular hiking lowers blood
                  pressure and improves endurance.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Hiking Boosts the Immune System
                </h3>
                <p>
                  Moderate physical activity stimulates the production of killer
                  cells and activates the immune system. It also reduces
                  cortisol levels, the stress hormone that weakens the immune
                  system. Being outdoors further benefits the immune
                  system—sunlight activates the production of vitamin D.
                </p>
              </div>
              <div className="bg-red-50 p-5 border-l-4 border-primary rounded-r shadow-sm transform transition-all duration-300 hover:scale-[1.02]">
                <h3 className="font-semibold text-primary mb-2">
                  Hiking Makes You Happy
                </h3>
                <p>
                  It is even used as a therapeutic approach to combat
                  depression. The more time spent in nature, the stronger the
                  effect. Several positive aspects come together here: stress
                  hormones are broken down, daylight boosts serotonin levels
                  (the happiness hormone), and the physical exhaustion after a
                  long hike helps many people sleep better and wake up more
                  refreshed.
                </p>
              </div>
            </div>
          </div>
          <div className="my-12 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-100 to-red-200 opacity-50 rounded-lg"></div>
            <div
              className="relative rounded-lg overflow-hidden h-64 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80')",
              }}
            ></div>
          </div>
          <div className="motion-safe:animate-fade-in-up motion-safe:delay-600">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center">
              <span className=" w-12 h-12 bg-red-50 rounded-full mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                  />
                </svg>
              </span>
              Important Aspects of Hiking
            </h2>
            <p className="mb-6">
              Hiking is highly adaptable in terms of intensity, and special
              equipment is usually not required.
            </p>
            <p className="mb-6">
              Nevertheless, hiking is a form of exercise and should not be
              underestimated.
            </p>
            <p className="mb-6">
              Here are some tips for safe and healthy hiking:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Proper Equipment
                  </h3>
                  <p className="text-sm">
                    Wear hiking boots with good grip and, optionally, high ankle
                    support to prevent blisters, sprains, and fatigue. Layered,
                    weather-appropriate clothing is essential to protect against
                    moisture and cold.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Route Planning
                  </h3>
                  <p className="text-sm">
                    {`Choose a route suitable for your fitness level. Don't
                    overexert yourself, especially on your first hikes. Check
                    the length and difficulty of the trail beforehand.`}
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Hydration and Nutrition
                  </h3>
                  <p className="text-sm">
                    Carry enough water to stay hydrated. Light snacks like nuts
                    and fruit provide quick energy.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Sun Protection
                  </h3>
                  <p className="text-sm">
                    {`Don't forget sunscreen, a hat, and sunglasses—UV radiation
                    is stronger at higher altitudes.`}
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Take Breaks
                  </h3>
                  <p className="text-sm">
                    Regular breaks help prevent exhaustion and injuries.
                  </p>
                </div>
              </div>
              <div className="bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Weather Conditions
                  </h3>
                  <p className="text-sm">
                    Check the weather forecast in advance. Avoid hiking in
                    extreme conditions like thunderstorms or intense heat.
                  </p>
                </div>
              </div>
              <div className="md:col-span-2 bg-red-50 p-5 rounded shadow-sm flex items-start transform transition-all duration-300 hover:-translate-y-1">
                <span className="text-red-600 mr-3 mt-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </span>
                <div>
                  <h3 className="font-semibold text-primary mb-1">
                    Emergency Equipment
                  </h3>
                  <p className="text-sm">
                    Carry a small first aid kit, a fully charged phone, and a
                    map or GPS device—these can be lifesaving in an emergency.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="motion-safe:animate-fade-in-up motion-safe:delay-900">
            <h2 className="text-2xl sm:text-3xl font-bold text-primary mb-6 flex items-center">
              <span className="w-12 h-12 bg-red-50 rounded-full mr-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              Conclusion
            </h2>
            <div className="bg-gradient-to-r from-red-100 to-red-50 p-6 rounded-lg shadow-sm mb-12">
              <p className="mb-4">
                Hiking is a holistic activity that promotes physical fitness,
                strengthens the immune system and body, improves mental
                well-being, and reduces stress.
              </p>
              <p className="mb-4">
                {`To fully enjoy these positive effects, it's crucial to be
                well-prepared and pay attention to proper equipment and personal
                limits.`}
              </p>
              <p className="font-medium text-primary">Enjoy your next hike!</p>
            </div>
          </div>
        </article>
      </main>
    </div>
  );
};
export default HikingBlogEn;
