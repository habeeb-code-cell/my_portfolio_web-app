import React from "react";
import {
  Code,
  Palette,
  Zap,
  Heart,
  Award,
  BookOpen,
  Github,
  Mail,
} from "lucide-react";

const About: React.FC = () => {
  const skills = [
    { name: "React/Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
  ];

  const experiences = [
    {
      title: "Senior FrontEnd Developer",
      company: "Blue House Technologies.",
      period: "2025 - Present",
      description:
        "Leading development of enterprise web applications using React, Node.js, and next.js.",
    },
    {
      title: "Frontend Developer",
      company: "Blue House Technologies",
      period: "2020 - 2022",
      description:
        "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
    },
    {
      title: "Junior Developer",
      company: "Blue House Technologies",
      period: "2019 - 2020",
      description:
        "Built and maintained web applications while learning modern development practices and agile methodologies.",
    },
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of Jos, Nigeria",
      period: "2020 - 2025",
      description:
        "Graduated with honors, specializing in software engineering and web development.",
    },
    {
      degree: "Full Stack FrontEnd Development",
      school: "BlueHouse Technologies",
      period: "2025",
      description:
        "Intensive program covering modern web technologies and best practices.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              FrontEnd Developer
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              "More than just code—I build digital experiences that inform,
              inspire, and impact. My mission is to make the web more usable,
              beautiful, and human."
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="prose prose-lg dark:prose-invert">
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  With over 5 years of experience in web development, I've had
                  the privilege of working with diverse teams and clients to
                  bring innovative ideas to life. My journey started with a
                  curiosity about how websites work, and it has evolved into a
                  passion for creating seamless digital experiences.
                </p>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I believe in the power of clean code, thoughtful design, and
                  continuous learning. When I'm not coding, you'll find me
                  exploring new technologies, contributing to open-source
                  projects, or mentoring aspiring developers.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <Code className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Clean Code
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Writing maintainable, scalable solutions
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <Palette className="w-8 h-8 text-purple-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Design Focus
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    User-centered design approach
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <Zap className="w-8 h-8 text-yellow-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Performance
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Optimized for speed and efficiency
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <Heart className="w-8 h-8 text-red-600 mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    Passion
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Love what I do every day
                  </p>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    20+ Projects Completed
                  </h3>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    5+ Happy Clients
                  </h3>
                </div>
                <div className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    50+ Cups of Coffee
                  </h3>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="/WhatsApp Image 2025-06-24 at 14.33.18_c24123fe.jpg"
                alt="Habeeb working"
                className="w-full h-96 object-cover rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Skills & Expertise
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </span>
                  <span className="text-gray-600 dark:text-gray-400">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <div className="flex items-center mb-8">
                <Award className="w-8 h-8 text-blue-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Experience
                </h2>
              </div>
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-blue-600"
                  >
                    <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.company}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {exp.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center mb-8">
                <BookOpen className="w-8 h-8 text-purple-600 mr-3" />
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                  Education
                </h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-purple-600"
                  >
                    <div className="absolute w-4 h-4 bg-purple-600 rounded-full -left-2 top-0"></div>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">
                        {edu.school}
                      </p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                        {edu.period}
                      </p>
                      <p className="text-gray-600 dark:text-gray-300">
                        {edu.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GitHub Section */}
      <div className="flex justify-center mt-8 space-x-4">
        <a
          href="https://github.com/habeeb-code-cell"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href="mailto:mustaphahabeebullah2003@gmail.com"
          className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <Mail className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default About;
