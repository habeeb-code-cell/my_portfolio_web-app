import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Award,
} from "lucide-react";

const Home: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="space-y-4">
                <p className="text-blue-600 dark:text-blue-400 font-medium text-lg">
                  👋 Hello, I'm
                </p>
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Habeeb
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-semibold text-gray-700 dark:text-gray-300">
                  FrontEnd Developer
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg leading-relaxed">
                  I’m a frontend developer focused on building clean,
                  responsive, and accessible interfaces. From landing pages to
                  complex dashboards, I turn ideas into engaging digital
                  experiences using React, JavaScript, and modern UI frameworks.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  View My Work
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 hover:scale-105 transition-all duration-300"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </a>
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://github.com/habeeb-code-cell"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                >
                  <Github className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                </a>
                <a
                  href="www.linkedin.com/in/habeebullah-mustapha-969ba237b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                >
                  <Linkedin className="w-6 h-6 text-blue-600" />
                </a>
                <a
                  href="https://twitter.com/habeeb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                >
                  <Twitter className="w-6 h-6 text-blue-400" />
                </a>
                <a
                  href="mailto:mustaphahabeebullah2003@gmail.com"
                  className="p-3 bg-gray-100 dark:bg-gray-800 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 hover:scale-110 transition-all duration-300"
                >
                  <Mail className="w-6 h-6 text-red-500" />
                </a>
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
                  <img
                    src="/WhatsApp Image 2025-06-24 at 14.33.18_c24123fe.jpg"
                    alt="Habeeb"
                    className="w-full h-full object-cover rounded-full border-8 border-white dark:border-gray-800 shadow-2xl"
                  />
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
