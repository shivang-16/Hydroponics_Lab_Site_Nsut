import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaLightbulb, FaHandshake, FaChalkboardTeacher } from "react-icons/fa";
import { MdBiotech } from "react-icons/md";
import { BsArrowRightCircle } from "react-icons/bs";
import { GiPlantRoots } from "react-icons/gi";

export const Mission = () => {
  const missions = [
    {
      icon: <FaLightbulb className="text-4xl" />,
      title: "Research Excellence",
      description: "Drive innovative research in hydroponic technology and sustainable agriculture through state-of-the-art facilities and expert guidance."
    },
    {
      icon: <MdBiotech className="text-4xl" />,
      title: "Technology Integration",
      description: "Integrate cutting-edge technology and IoT solutions to advance hydroponic farming practices and optimize resource utilization."
    },
    {
      icon: <FaHandshake className="text-4xl" />,
      title: "Industry Collaboration",
      description: "Foster strong partnerships with industry leaders to bridge the gap between academic research and practical applications."
    },
    {
      icon: <FaChalkboardTeacher className="text-4xl" />,
      title: "Education & Training",
      description: "Provide comprehensive training programs to nurture the next generation of agricultural innovators and researchers."
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
                <GiPlantRoots className="text-4xl" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-8">Our Mission</h1>
            <p className="text-xl text-gray-200 leading-relaxed">
              To advance sustainable agriculture through innovative hydroponic research, 
              cutting-edge technology, and comprehensive education programs that empower 
              the next generation of agricultural pioneers.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission Cards Section */}
      <div className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {missions.map((mission, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all 
                          duration-300 border border-gray-100 group"
              >
                <div className="p-4 bg-[#07300f]/5 rounded-xl w-fit mb-6 
                              group-hover:bg-[#07300f]/10 transition-all duration-300">
                  <div className="text-[#07300f]">{mission.icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{mission.title}</h3>
                <p className="text-gray-600 leading-relaxed">{mission.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Goals Section */}
      <div className="py-24 bg-[#07300f]">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white max-w-4xl mx-auto mb-16"
          >
            <h2 className="text-4xl font-bold mb-8">Strategic Goals</h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Our mission is supported by clear strategic goals that guide our research, 
              education, and community engagement initiatives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Research Innovation",
                description: "Lead groundbreaking research in hydroponic technology and sustainable farming practices."
              },
              {
                number: "02",
                title: "Knowledge Transfer",
                description: "Share expertise through comprehensive training programs and industry collaborations."
              },
              {
                number: "03",
                title: "Sustainable Impact",
                description: "Create lasting positive impact on agricultural practices and food security."
              }
            ].map((goal, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 
                          hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-4xl font-bold text-white/50 mb-6">{goal.number}</div>
                <h3 className="text-2xl font-bold text-white mb-4">{goal.title}</h3>
                <p className="text-gray-300 leading-relaxed">{goal.description}</p>
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
            <h2 className="text-4xl font-bold text-[#07300f] mb-8">Join Our Mission</h2>
            <p className="text-xl text-gray-600 mb-12 leading-relaxed">
              Be part of our journey to revolutionize sustainable agriculture through 
              innovative hydroponic research and technology.
            </p>
            <Link
              to="/contactus"
              className="inline-flex items-center gap-2 bg-[#07300f] text-white px-12 py-4 
                        rounded-lg text-xl font-medium hover:bg-[#0a4015] transition-all 
                        duration-300 group"
            >
              Get Involved
              <BsArrowRightCircle className="text-2xl group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
