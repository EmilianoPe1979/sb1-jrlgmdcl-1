import React from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Home as HomeIcon,
  Lock,
  Cloud,
  Key,
  Bell,
  Cpu,
  Wifi,
  ChevronRight,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Login from "./Login";
import LanguageSelector from "../components/LanguageSelector";
import ThemeToggle from "../components/ThemeToggle";

const Home = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t("securityMonitoring"),
      description: t("securityMonitoringDesc"),
    },
    {
      icon: Bell,
      title: t("alertSystem"),
      description: t("alertSystemDesc"),
    },
    {
      icon: Cpu,
      title: t("smartAutomation"),
      description: t("smartAutomationDesc"),
    },
    {
      icon: Wifi,
      title: t("remoteAccess"),
      description: t("remoteAccessDesc"),
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="flex items-center">
            <div className="flex items-center text-blue-600 dark:text-blue-400">
              <Lock className="h-8 w-8" />
              <Cloud className="h-8 w-8 -ml-3" />
            </div>
            <span className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
              SENASEC
            </span>
          </div>

          {/* Navegación para escritorio */}
          <nav className="hidden md:flex space-x-10">
            <a
              href="#features"
              className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {t("features")}
            </a>
            <a
              href="#testimonials"
              className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {t("testimonials")}
            </a>
            <a
              href="#contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
            >
              {t("contact")}
            </a>
          </nav>

          {/* Opciones para escritorio */}
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0 space-x-4">
            {/* Selector de idioma */}
            <LanguageSelector />

            {/* Selector de tema */}
            <ThemeToggle />

            <Link
              to="/login"
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              {t("signIn")}
            </Link>
            <Link
              to="/register"
              className="ml-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-base font-medium text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600"
            >
              {t("register")}
            </Link>
          </div>

          {/* Opciones para móvil */}
          <div className="flex md:hidden items-center space-x-2">
            <LanguageSelector />
            <ThemeToggle />
            <Link to="/login" className="p-2 text-blue-600 dark:text-blue-400">
              {t("signIn")}
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center py-12 md:py-24">
          <div className="md:w-1/2 md:pr-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-tight">
              {t("smartSecurityForClassrooms")}
            </h1>
            <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
              {t("landingDescription")}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-8"
              >
                {t("getStarted")}
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <a
                href="#features"
                className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 dark:bg-gray-700 dark:text-white dark:border-gray-600 dark:hover:bg-gray-600 md:py-4 md:text-lg md:px-8"
              >
                {t("learnMore")}
              </a>
            </div>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-white dark:bg-gray-800 shadow-xl rounded-lg p-6 md:p-8">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center text-blue-600 dark:text-blue-400">
                  <Key className="h-6 w-6" />
                </div>
                <h2 className="ml-2 text-2xl font-bold text-gray-900 dark:text-white">
                  {t("signIn")}
                </h2>
              </div>
              <Login />
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {t("ourFeatures")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              {t("featuresDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="inline-flex items-center justify-center p-2 bg-blue-100 dark:bg-blue-900 rounded-md text-blue-600 dark:text-blue-300">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          className="py-12 md:py-20 bg-blue-50 dark:bg-gray-900 rounded-lg"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {t("testimonials")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              {t("testimonialsDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300">
                    <span className="text-lg font-bold">
                      {String.fromCharCode(65 + index)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                      {t(`testimonialName${index + 1}`)}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400">
                      {t(`testimonialRole${index + 1}`)}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "{t(`testimonialText${index + 1}`)}"
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
              {t("contactUs")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-300">
              {t("contactDescription")}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t("sendMessage")}
              </h3>
              <form className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("name")}
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("email")}
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    {t("message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {t("send")}
                </button>
              </form>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                {t("contactInfo")}
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <HomeIcon className="h-5 w-5 text-blue-500 mt-1" />
                  <div className="ml-3 text-gray-600 dark:text-gray-300">
                    <p>123 Security Street</p>
                    <p>Tech City, TC 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">
                    (123) 456-7890
                  </span>
                </div>
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-blue-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="ml-3 text-gray-600 dark:text-gray-300">
                    info@senasec.com
                  </span>
                </div>
              </div>
              <div className="mt-6">
                <h4 className="text-lg font-medium text-gray-900 dark:text-white mb-3">
                  {t("followUs")}
                </h4>
                <div className="flex space-x-4">
                  {["facebook", "twitter", "instagram", "linkedin"].map(
                    (social) => (
                      <a
                        key={social}
                        href={`#${social}`}
                        className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                      >
                        <span className="sr-only">{social}</span>
                        <div className="h-6 w-6 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                          <span className="text-blue-600 dark:text-blue-300 text-xs">
                            {social.charAt(0).toUpperCase()}
                          </span>
                        </div>
                      </a>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 mt-12">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center">
              <div className="flex items-center text-blue-600 dark:text-blue-400">
                <Lock className="h-6 w-6" />
                <Cloud className="h-6 w-6 -ml-2" />
              </div>
              <span className="ml-2 text-xl font-bold text-gray-900 dark:text-white">
                SENASEC
              </span>
            </div>
            <div className="mt-4 md:mt-0">
              <p className="text-center text-gray-500 dark:text-gray-400">
                &copy; {new Date().getFullYear()} SENASEC.{" "}
                {t("allRightsReserved")}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
