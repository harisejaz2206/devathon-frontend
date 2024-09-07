import React from "react";

const PatientSection = () => {
  return (
    <>
      {/* Page Header */}
      <header className="bg-gray-900 py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center text-white">
          <h1 className="text-4xl font-extrabold sm:text-5xl">
            Our Approach to Patient Care
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-300">
            We prioritize personalized and compassionate care for every patient.
          </p>
        </div>
      </header>

      {/* Treatment Philosophy Section */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">
            Our Treatment Philosophy
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            At our clinic, we believe in a holistic approach to patient care.
            Our treatment philosophy is centered around understanding each
            patient’s unique needs and providing comprehensive care to promote
            long-term well-being.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 - Personalized Care */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Personalized Care Plans
              </h3>
              <p className="text-gray-300">
                Every patient receives a personalized treatment plan, tailored
                to their unique health needs, preferences, and medical history.
              </p>
            </div>

            {/* Card 2 - Compassionate Care */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Compassionate Support
              </h3>
              <p className="text-gray-300">
                Our medical team is here to provide emotional and physical
                support throughout your treatment journey, ensuring a
                comfortable experience.
              </p>
            </div>

            {/* Card 3 - Advanced Technology */}
            <div className="bg-gray-900 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                Cutting-Edge Technology
              </h3>
              <p className="text-gray-300">
                We use the latest medical technology to provide accurate
                diagnoses and innovative treatments, enhancing patient outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process Section */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-8">
            Our Patient Treatment Process
          </h2>
          <p className="text-gray-300 mb-12 max-w-3xl mx-auto text-lg">
            Our patient treatment process is designed to be smooth and
            stress-free, ensuring that you receive the care you need when you
            need it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                1. Initial Consultation
              </h3>
              <p className="text-gray-300">
                During your first visit, we’ll discuss your medical history,
                current symptoms, and treatment goals to create a tailored care
                plan.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                2. Diagnostic Testing
              </h3>
              <p className="text-gray-300">
                We perform comprehensive diagnostic tests to accurately assess
                your condition and provide the most effective treatment options.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-gray-800 rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">
                3. Ongoing Treatment and Monitoring
              </h3>
              <p className="text-gray-300">
                Your treatment plan will be monitored closely, and adjustments
                will be made to ensure optimal progress and health improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Call to Action */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Start Your Treatment?
          </h2>
          <p className="text-gray-300 mb-8">
            Get in touch with our expert medical team to schedule your
            consultation today and take the first step toward better health.
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-500"
          >
            Contact Us
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="mx-auto max-w-screen-xl px-4 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} Your Clinic Name. All rights
            reserved.
          </p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:underline mx-2">
              Privacy Policy
            </a>
            <a href="#" className="text-blue-400 hover:underline mx-2">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default PatientSection;
