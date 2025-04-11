const PhysiotherapyBlogEn = () => {
  return (
    <main className="container max-w-6xl px-4 py-4 mx-auto">
      <article className="prose prose-lg max-w-none">
        <div className="relative w-full h-[400px] mb-8 rounded-xl overflow-hidden animate-fade-in">
          <img
            src="https://ucarecdn.com/6387592e-9694-46f4-abf3-ef315d829aef/photo15760911605502173dba999ef1.avif"
            alt="Modern physiotherapy facility with equipment"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
            <div
              className="p-8 animate-slide-in"
              style={{
                animationDelay: '300ms',
              }}
            >
              <h1 className="text-4xl font-bold text-white mb-4">
                Modern Physiotherapy: What Does It Mean?
              </h1>
            </div>
          </div>
        </div>
        <div
          className="mb-8 animate-fade-up"
          style={{
            animationDelay: '400ms',
          }}
        >
          <p className="text-lg text-gray-700 leading-relaxed">
            Physiotherapy has evolved significantly over the past decades and
            has become an essential part of healthcare today.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            While it used to include many passive measures such as massage,
            electrotherapy, and heat or cold applications—often applied without
            much consideration of their evidence—modern physiotherapy has
            developed into an independent field that follows a holistic approach
            and is much more than just the aforementioned treatments.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mt-4">
            In this essay, you will learn what makes modern physiotherapy stand
            out and how it uses scientific and evidence-based findings to
            address individual needs, promoting health in a sustainable way.
          </p>
        </div>
        <section className="mb-10">
          {[
            'Holistic Approach',
            'Individual Therapy Plan',
            'Evidence-Based Practice',
            'Prevention and Health Promotion',
            'Interdisciplinary Collaboration',
            'Technological Innovations and Digitalization',
            'Patient Education and Personal Responsibility',
          ].map((title, index) => (
            <div
              key={title}
              className={`${
                index % 2 === 0 ? 'bg-primary/5' : ''
              } rounded-lg p-6 mb-8 animate-fade-up`}
              style={{
                animationDelay: `${(index + 4) * 100}ms`,
              }}
            >
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                {title}
              </h2>
              <p className="text-gray-700">
                {title === 'Holistic Approach' ? (
                  <span>
                    {`  One of the core aspects of modern physiotherapy is its
                    holistic approach. This means that the physiotherapist takes
                    the entire body and the patient's lifestyle into account
                    during treatment. It's not just about addressing specific
                    symptoms or conditions but also the underlying causes and
                    factors that may worsen or promote the problem. The goal is
                    to improve the functionality of the entire musculoskeletal
                    system in the long term rather than just alleviating a
                    single symptom.`}
                  </span>
                ) : title === 'Individual Therapy Plan' ? (
                  <span>
                    {`Lying down and having your pain and symptoms massaged away
                    simply doesn't work. Modern physiotherapy places great
                    importance on creating an individual therapy plan. Every
                    treatment starts with a personal assessment, including a
                    medical history (anamnesis) and a physical examination. Only
                    then does the physiotherapist choose appropriate measures
                    and develop a customized therapy plan. This approach makes
                    modern physiotherapy particularly effective since the
                    patient is not treated according to a rigid scheme but
                    receives therapy tailored to their specific needs.`}
                  </span>
                ) : title === 'Evidence-Based Practice' ? (
                  <span>
                    {` A modern physiotherapist develops their treatment methods
                    based on current scientific research and proven clinical
                    experience. To stay up to date with the latest research, it
                    is essential to regularly read and analyze studies, often
                    using professional journals and online platforms. The
                    challenge lies in applying scientific findings to an
                    individual patient's situation. Here, the therapist's
                    experience and professional judgment play an essential role.`}
                  </span>
                ) : title === 'Prevention and Health Promotion' ? (
                  <span>
                    {`Prevention is becoming increasingly important in modern
                    physiotherapy. The therapy doesn't just focus on addressing
                    existing problems but also aims to prevent future injuries
                    or illnesses. This benefits the patient in everyday life,
                    sports, and work. Physiotherapists also help increase
                    general physical activity, thereby reducing the risk of
                    chronic conditions such as back pain, cardiovascular
                    diseases, or joint problems.`}
                  </span>
                ) : title === 'Interdisciplinary Collaboration' ? (
                  <span>
                    Collaboration with other healthcare professionals, such as
                    doctors, occupational therapists, sports scientists, and
                    psychologists, has become standard practice. This
                    multidisciplinary approach allows for the holistic treatment
                    of complex health issues, providing patients with the best
                    possible support during recovery.
                  </span>
                ) : title === 'Technological Innovations and Digitalization' ? (
                  <span>
                    New technologies, such as video therapy, physiotherapy apps,
                    digital health applications, biofeedback devices, and
                    wearable sensors, offer physiotherapists modern tools to
                    further modernize and enhance physiotherapy. Precise
                    diagnostics and therapy help patients perform exercises
                    correctly and track their progress efficiently.
                  </span>
                ) : title ===
                  'Patient Education and Personal Responsibility' ? (
                  <span>
                    Active participation of the patient in the healing process
                    has become indispensable. Patients learn how to manage their
                    symptoms long-term through targeted measures, active
                    training plans, and education, taking personal
                    responsibility for their health. Promoting self-reliance and
                    personal responsibility is crucial for sustainable recovery
                    and leads to an improved quality of life.
                  </span>
                ) : null}
              </p>
            </div>
          ))}
        </section>
        <div
          className="bg-gray-100 border-l-4 border-primary p-6 rounded-lg animate-fade-up  mb-4"
          style={{
            animationDelay: '1100ms',
          }}
        >
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Conclusion
          </h2>
          <p className="text-gray-700">
            Modern physiotherapy is much more than just treating pain. It has
            become an integral part of our healthcare system in an increasingly
            sedentary and aging society.
          </p>
          <p className="text-gray-700 mt-4">
            Through an individualized and evidence-based approach, combined with
            technological innovations, interdisciplinary collaboration, and
            promoting patient responsibility, modern physiotherapy can care for
            its patients more effectively and sustainably than ever before.
          </p>
        </div>
      </article>
    </main>
  );
};
export default PhysiotherapyBlogEn;
