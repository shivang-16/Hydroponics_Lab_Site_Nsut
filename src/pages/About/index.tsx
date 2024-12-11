import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaFlask, FaUsers, FaHandshake, FaNewspaper, FaGraduationCap, FaIndustry } from "react-icons/fa";
import { BsGraphUp, BsArrowRightCircle } from "react-icons/bs";
import { MdOutlineScience } from "react-icons/md";

export const About = () => {
  const features = [
    {
      icon: <FaFlask className="text-4xl" />,
      title: "Research Facilities",
      description: "State-of-the-art hydroponic systems and research equipment for advanced agricultural studies."
    },
    {
      icon: <FaUsers className="text-4xl" />,
      title: "Expert Team",
      description: "Dedicated team of researchers, scientists, and technical staff providing expert guidance."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Collaboration Hub",
      description: "Platform for academic-industry partnerships fostering innovation in sustainable agriculture."
    },
    {
      icon: <BsGraphUp className="text-4xl" />,
      title: "Innovation Hub",
      description: "Driving technological advancement in agriculture through IoT integration and automation."
    }
  ];

  const achievements = [
    {
      number: "15+",
      title: "Research Projects",
      description: "Active research projects in hydroponic technology",
      icon: <FaFlask className="text-3xl text-[#07300f] group-hover:text-white" />
    },
    {
      number: "25+",
      title: "Publications",
      description: "Research papers published in international journals",
      icon: <FaNewspaper className="text-3xl text-[#07300f] group-hover:text-white" />
    },
    {
      number: "500+",
      title: "Students Trained",
      description: "Students trained in hydroponic farming techniques",
      icon: <FaGraduationCap className="text-3xl text-[#07300f] group-hover:text-white" />
    },
    {
      number: "10+",
      title: "Industry Partners",
      description: "Collaborations with leading agricultural companies",
      icon: <FaIndustry className="text-3xl text-[#07300f] group-hover:text-white" />
    }
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative bg-[#07300f] text-white pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-8">
              <div className="p-3 bg-white/10 rounded-full">
                <MdOutlineScience className="text-4xl" />
              </div>
            </div>
            <h1 className="text-7xl font-bold mb-8 bg-gradient-to-r from-white via-green-100 to-white 
                          bg-clip-text text-transparent">About Us</h1>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              At NSUT Hydroponics, we're pioneering the future of sustainable agriculture through 
              cutting-edge research, innovation, and education. Our state-of-the-art facilities and 
              expert team are dedicated to advancing hydroponic technology and practices.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Features Section with Improved Cards */}
      <div className="py-32 bg-gradient-to-b from-white via-[#07300f]/5 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-[#07300f] mb-6">What Sets Us Apart</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our comprehensive facilities and expertise drive innovation in sustainable 
              agriculture through research, education, and industry collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          group hover:-translate-y-1 border border-gray-100"
              >
                <div className="p-4 bg-[#07300f]/10 rounded-xl text-[#07300f] mb-6 w-fit
                              group-hover:bg-[#07300f] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* New Achievements Section */}
      <div className="py-32 bg-gradient-to-b from-white to-[#07300f]/5">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold text-[#07300f] mb-6">Our Achievements</h2>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Our commitment to excellence has led to significant achievements in research, 
              education, and industry collaboration.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
                          border border-gray-100 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-center mb-6">
                  <div className="p-4 bg-[#07300f]/5 rounded-full group-hover:bg-[#07300f] 
                                transition-all duration-300">
                    {achievement.icon}
                  </div>
                </div>
                <h3 className="text-4xl font-bold text-[#07300f] mb-4 text-center">
                  {achievement.number}
                </h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-center">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline Section with Enhanced Design */}
      <div className="py-32 bg-[#07300f] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full bg-[url('/pattern.png')] bg-repeat"></div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              From our establishment to present day, we've been committed to advancing
              agricultural research and education.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                year: "2023",
                title: "Foundation",
                description: "Established with a vision to revolutionize agricultural research."
              },
              {
                year: "2024 Q1",
                title: "Research Launch",
                description: "Initiated groundbreaking research projects in hydroponics."
              },
              {
                year: "2024 Q2",
                title: "Education Program",
                description: "Launched comprehensive training programs for next-gen researchers."
              }
            ].map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 
                          hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white/50 mb-6">{milestone.year}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{milestone.title}</h3>
                <p className="text-gray-300 leading-relaxed">{milestone.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#07300f] mb-8">Join Our Journey</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Be part of our mission to revolutionize agricultural research and education. 
              Connect with us to explore collaboration opportunities.
            </p>
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 bg-[#07300f] text-white px-12 py-4 
                        rounded-lg text-xl font-medium hover:bg-[#0a4015] transition-all 
                        duration-300 group"
            >
              Get In Touch
              <BsArrowRightCircle className="text-2xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
