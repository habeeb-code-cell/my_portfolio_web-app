import React from "react";
import { Code, Smartphone, Globe, Zap, Shield } from "lucide-react";

const Services: React.FC = () => {
  const services = [
    {
      icon: Code,
      title: "Full Front End Development",
      description:
        "End-to-end web application development using modern technologies like React, Tailwind CSS, and Next Js.",
      features: [
        "Custom Web Applications",
        "API Development",
        "Database Design",
        "Cloud Deployment",
      ],
      price: "Starting at ₦500,000", // Updated with Naira sign
    },
    
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Cross-platform mobile applications that work seamlessly on iOS and Android devices.",
      features: [
        "React Native Apps",
        "Progressive Web Apps",
        "App Store Deployment",
        "Performance Optimization",
      ],
      price: "Starting at ₦3,000,000", // Updated with Naira sign
    },
    {
      icon: Globe,
      title: "Website Development",
      description:
        "Professional websites that are fast, responsive, and optimized for search engines.",
      features: [
        "Responsive Design",
        "SEO Optimization",
        "Content Management",
        "Analytics Integration",
      ],
      price: "Starting at ₦1,500,000", // Updated with Naira sign
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description:
        "Improving website speed, performance, and user experience through technical optimization.",
      features: [
        "Speed Optimization",
        "Code Refactoring",
        "Database Optimization",
        "Monitoring Setup",
      ],
      price: "Starting at ₦750,000", // Updated with Naira sign
    },
    {
      icon: Shield,
      title: "Maintenance & Support",
      description:
        "Ongoing maintenance, updates, and technical support to keep your applications running smoothly.",
      features: [
        "Regular Updates",
        "Security Monitoring",
        "Bug Fixes",
        "24/7 Support",
      ],
      price: "Starting at ₦200,000/month", // Updated with Naira sign
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "Tech Startup Inc.",
      image:
        "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Habeeb delivered an exceptional web application that exceeded our expectations. His attention to detail and technical expertise are outstanding.",
    },
    {
      name: "Michael Chen",
      company: "Digital Agency Pro",
      image:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "Working with Habeeb was a pleasure. He understood our vision perfectly and delivered a beautiful, functional website on time and within budget.",
    },
    {
      name: "Emily Rodriguez",
      company: "E-commerce Solutions",
      image:
        "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150",
      text: "The mobile app Habeeb developed for us has been a game-changer. Our customers love the user experience and functionality.",
    },
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              I offer comprehensive digital solutions to help businesses and
              individuals achieve their goals through technology and design.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:scale-105 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="border-t border-gray-200 dark:border-gray-700 pt-6">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                    {service.price}
                  </p>
                  <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105">
                    Get Started
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              My Process
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              How I work with clients to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "Understanding your goals, requirements, and target audience",
              },
              {
                step: "02",
                title: "Planning",
                description:
                  "Creating detailed project roadmap and technical specifications",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Building your solution with regular updates and feedback",
              },
              {
                step: "04",
                title: "Launch",
                description:
                  "Deploying your project and providing ongoing support",
              },
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-white">
                    {phase.step}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {phase.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              What Clients Say
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Testimonials from satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.text}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how I can help bring your ideas to life
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
            <a
              href="/portfolio"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
