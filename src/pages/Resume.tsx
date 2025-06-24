import React from 'react';
import { Download, Mail, Phone, MapPin, ExternalLink, Award, Briefcase, GraduationCap } from 'lucide-react';

const Resume: React.FC = () => {
  const skills = {
    'Frontend': ['React', 'TypeScript', 'Next.js', 'Vue.js', 'Tailwind CSS', 'SASS'],
  };

  const experience = [
    {
      title: 'Senior Frontend Developer',
      company: 'Blue House Technologies.',
      location: 'Jos, Plateau State. Nigeria',
      period: 'Jan 2022 - Present',
      achievements: [
        'Led development of 5+ enterprise web applications serving 10,000+ users',
        'Improved application performance by 40% through code optimization',
        'Mentored 3 junior developers and established coding standards',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ]
    },
    {
      title: 'Frontend Developer',
      company: 'Blue House Technologies',
      location: 'Jos, Plateau State. Nigeria',
      period: 'Jun 2020 - Dec 2021',
      achievements: [
        'Developed 15+ responsive websites using React and modern CSS',
        'Collaborated with design team to implement pixel-perfect UIs',
        'Reduced page load times by 35% through performance optimization',
        'Integrated third-party APIs and payment gateways'
      ]
    },
    {
      title: 'Junior Developer',
      company: 'Bluehouse Technologies',
      location: 'Jos, Plateau State. Nigeria',
      period: 'Mar 2019 - May 2020',
      achievements: [
        'Built and maintained web applications using JavaScript and PHP',
        'Participated in agile development processes and code reviews',
        'Learned modern development practices and frameworks',
        'Contributed to open-source projects and team knowledge sharing'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Computer Science',
      school: 'University of Jos',
      location: 'Jos, Plateau State. Nigeria',
      period: '2020-2026',
      details: 'Graduated with  Second Class Upper Honors. Specialized in Software Engineering and Web Development.'
    },
  ];

  const certifications = [
    'AWS Certified Developer Associate',
    'Google Analytics Certified',
    'React Developer Certification',
    'Scrum Master Certified'
  ];

  const projects = [
    {
      name: '007_Autos',
      description: 'Full-fontend Car deals both Foreign and Faily with payment integration',
      tech: 'React, TypeScript, Next JS, Tailwind CSS',
      url: 'https://github.com/habeeb-code-cell/007_autos'
    },
    {
      name: 'Chat Bridge',
      description: 'Chat Bridge is a clean, responsive, and fully frontend React chat application. It allows users to send messages and receive simulated bot responses',
      tech: 'React, TypeScript, Next Js, Tailwind CSS',
      url: 'https://github.com/habeeb-code-cell/chat-bridge'
    },
    {
      name: 'Weather Dashboard',
      description: 'Beautiful weather app with location-based forecasts',
      tech: 'React, TypeScript, Next Js, Tailwind CSS, API Integration, OpenWeatherMap API',
      url: 'https://github.com/habeeb-code-cell/weather-app'
    }
  ];

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-xl">
              <img
                src="/WhatsApp Image 2025-06-24 at 14.33.18_c24123fe.jpg"
                alt="Habeeb"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">Habeeb</h1>
            <h2 className="text-2xl text-blue-600 dark:text-blue-400 font-semibold mb-6">
              Frontend Developer
            </h2>
            
            <div className="flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 mb-8">
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2" />
                Mustaphahabeebullah2003@gmail.com
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2" />
                +234 9031195135
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Jos,Plateau State. Nigeria
              </div>
            </div>
            
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <Download className="w-5 h-5 mr-2" />
              Download PDF Resume
            </a>
          </div>
        </div>
      </section>

      {/* Resume Content */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Professional Summary */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg mr-3"></div>
              Professional Summary
            </h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
              Passionate Front End Developer with 5+ years of experience creating scalable web applications 
              and exceptional user experiences. Proven track record of leading development teams, optimizing 
              application performance, and delivering high-quality solutions. Expertise in modern JavaScript 
              frameworks, cloud technologies, and agile methodologies.
            </p>
          </div>

          {/* Skills */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg mr-3"></div>
              Technical Skills
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              {Object.entries(skills).map(([category, skillList]) => (
                <div key={category} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-4">{category}</h4>
                  <div className="space-y-2">
                    {skillList.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-block bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm mr-2 mb-2"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Briefcase className="w-8 h-8 text-blue-600 mr-3" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="border-l-4 border-blue-600 pl-8 relative">
                  <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-2 top-0"></div>
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold">{job.company}</p>
                        <p className="text-gray-500 dark:text-gray-400 text-sm">{job.location}</p>
                      </div>
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{job.period}</span>
                    </div>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li key={achievementIndex} className="flex items-start text-gray-700 dark:text-gray-300">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h4>
                      <p className="text-purple-600 dark:text-purple-400 font-semibold">{edu.school}</p>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">{edu.location}</p>
                    </div>
                    <span className="text-gray-600 dark:text-gray-400 font-medium">{edu.period}</span>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300">{edu.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <Award className="w-8 h-8 text-yellow-600 mr-3" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div key={index} className="flex items-center bg-gray-50 dark:bg-gray-900 rounded-xl p-4">
                  <Award className="w-6 h-6 text-yellow-600 mr-3" />
                  <span className="text-gray-700 dark:text-gray-300 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
              <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-lg mr-3"></div>
              Key Projects
            </h3>
            <div className="space-y-6">
              {projects.map((project, index) => (
                <div key={index} className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">{project.name}</h4>
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      View Project
                    </a>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{project.description}</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Technologies:</span> {project.tech}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Resume;