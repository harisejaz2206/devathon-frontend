import React from "react";
import { useTranslation } from "react-i18next";
const HeroSection = () => {
  const { t } = useTranslation("hero");
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 text-white">
        <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-5xl">
              {t("text1")}
              <span className="sm:block"> {t("text2")} </span>
            </h1>

            <p className="mx-auto mt-4 max-w-xl text-lg sm:text-xl text-gray-300">
              {t("text3")}
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <a
                className="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-opacity-75 sm:w-auto"
                href="#"
              >
                {t("text4")}
              </a>

              <a
                className="block w-full rounded border border-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto"
                href="#"
              >
                {t("text5")}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="bg-gray-800 py-16">
        <div className="mx-auto max-w-screen-xl px-4">
          <h2 className="text-center text-3xl font-extrabold text-white mb-12">
            {t("text6")}
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Card 1 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  {t("text7")}
                </h3>
                <p className="text-gray-300">{t("text8")}</p>
              </div>
              <div className="bg-blue-600 text-white text-center py-3">
                <a href="#" className="text-sm font-medium hover:underline">
                  {t("text9")}
                </a>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  {t("text10")}
                </h3>
                <p className="text-gray-300">{t("text11")}</p>
              </div>
              <div className="bg-blue-600 text-white text-center py-3">
                <a href="#" className="text-sm font-medium hover:underline">
                  {t("text12")}
                </a>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-blue-400 mb-4">
                  {t("text13")}
                </h3>
                <p className="text-gray-300">{t("text14")}</p>
              </div>
              <div className="bg-blue-600 text-white text-center py-3">
                <a href="#" className="text-sm font-medium hover:underline">
                  {t("text15")}
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
            {t("text16")}
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-gray-300 mb-4">{t("text17")}</p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-200 font-semibold">{t("text18")}</p>
                  <p className="text-blue-400">{t("text19")}</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg max-w-sm">
              <p className="text-gray-300 mb-4">{t("text20")}</p>
              <div className="flex items-center space-x-3">
                <img
                  src="https://via.placeholder.com/50"
                  alt="User"
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="text-gray-200 font-semibold">{t("text21")}</p>
                  <p className="text-blue-400">{t("text22")}</p>
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
            {t("text23")}
          </h2>
          <p className="text-gray-300 mb-8">{t("text24")}</p>
          <a
            href="#"
            className="inline-block rounded-lg bg-blue-600 px-8 py-3 text-lg font-semibold text-white hover:bg-blue-500"
          >
            {t("text25")}
          </a>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-gray-800 py-8">
        <div className="mx-auto max-w-screen-xl px-4 text-center text-gray-300">
          <p>
            &copy; {new Date().getFullYear()} {t("text26")}
          </p>
          <div className="mt-4">
            <a href="#" className="text-blue-400 hover:underline mx-2">
              {t("text27")}
            </a>
            <a href="#" className="text-blue-400 hover:underline mx-2">
              {t("text28")}
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default HeroSection;
