import React from "react";

const HeroSection = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              Streamline Patient Management.
              <span className="sm:block"> Enhance Care Efficiency. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-lg sm:text-xl text-gray-300">
              Simplify the management of patient information, appointments, and
              medical records with our advanced system. Streamline your workflow
              and improve patient care.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                Get Started
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-white mb-12">
            Our Key Features
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Patient Records
                </h3>
                <p className="text-gray-300">
                  Maintain comprehensive and up-to-date patient records with
                  ease. Access medical history, treatment plans, and more in one
                  place.
                </p>
              </div>
              <div className="bg-blue-600 text-white text-center py-3">
                <a href="#" className="text-sm font-medium hover:underline">
                  Learn More
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Appointment Scheduling
                </h3>
                <p className="text-gray-300">
                  Easily schedule and manage appointments. Send reminders and
                  track upcoming visits to ensure timely patient care.
                </p>
              </div>
              <div className="bg-blue-600 text-white text-center py-3">
                <a href="#" className="text-sm font-medium hover:underline">
                  Learn More
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  Secure Data Management
                </h3>
                <p className="text-gray-300">
                  Protect patient data with our secure management system. Ensure
                  compliance and safeguard sensitive information.
                </p>
              </div>
              <div className="bg-blue-600 text-white text-center py-3">
                <a href="#" className="text-sm font-medium hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-white mb-12">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-gray-300 mb-4">
                "The patient management system has transformed our clinic. It's
                intuitive, efficient, and has improved our workflow significantly."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-200 font-semibold">Dr. Jane Doe</p>
                  <p className="text-blue-400">Clinic Manager</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-gray-300 mb-4">
                "A game-changer for patient record management. The ease of use and
                robust features make it indispensable."
              </p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-200 font-semibold">Dr. John Smith</p>
                  <p className="text-blue-400">Family Doctor</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-gray-900 py-16">
        <div className="mx-auto max-w-screen-xl px-4 text-center">
          <h2 className="text-3xl font-extrabold text-white mb-4">
            Ready to Transform Your Practice?
          </h2>
          <p className="text-gray-300 mb-8">
            Join countless others who have enhanced their patient management with our system.
          </p>
          <a
            href="#"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-500"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8">
        <div className="mx-auto max-w-screen-xl px-4 text-center text-gray-300">
          <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:underline mx-2">Privacy Policy</a>
            <a href="#" className="text-blue-400 hover:underline mx-2">Terms of Service</a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HeroSection;
