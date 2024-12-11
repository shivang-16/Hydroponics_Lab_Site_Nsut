import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaSeedling, FaMicroscope, FaGlobeAmericas } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
import { MdScience } from "react-icons/md";
import { BiSolidInstitution } from "react-icons/bi";
import {
  BsArrowRightCircle,
  BsChevronLeft,
  BsChevronRight,
} from "react-icons/bs";

// Update image paths to point to local files in public/slider folder
const sliderImages = [
  "/slider/hydroponic-1.jpg",
  "/slider/hydroponic-2.jpg",
  "/slider/hydroponic-3.jpg",
  "/slider/hydroponic-4.jpg",
  "/slider/hydroponic-5.jpg",
];

export const Vision = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-out",
    });

    // Auto-slide every 5 seconds
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % sliderImages.length);
  };

  const prevImage = () => {
    setCurrentImage(
      (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
    );
  };

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section - Adjusted padding and spacing */}
      <div className="relative min-h-screen w-full overflow-hidden flex items-center bg-[#07300f] pt-28 lg:pt-32">
        <div className="relative z-10 w-full h-full flex flex-col-reverse md:flex-row">
          {/* Left Column - Improved spacing and responsive text */}
          <div className="w-full md:w-1/2 flex items-center relative px-4 md:px-8 lg:px-16 py-12 md:py-0">
            <div className="max-w-[700px] mx-auto md:mx-0">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="mb-6 md:mb-4"
              >
                <h3 className="text-green-300 text-lg md:text-xl lg:text-2xl font-light tracking-[0.2em] uppercase">
                  Welcome to NSUT Hydroponics Lab
                </h3>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-6
                  bg-gradient-to-r from-white via-green-100 to-white bg-clip-text text-transparent"
              >
                VISION
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 leading-tight mb-6 md:mb-8"
              >
                We believe in sustainable agriculture
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-lg md:text-xl text-green-100 leading-relaxed mb-12"
              >
                Our vision is to revolutionize farming through advanced
                hydroponic solutions, empowering every organization to achieve
                sustainable food production.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 sm:gap-6"
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.95)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/90 backdrop-blur-sm px-8 py-4 rounded-lg text-xl font-medium 
                    text-[#07300f] transition-all duration-300 flex items-center gap-3 group shadow-lg"
                >
                  Explore Our Mission
                  <BsArrowRightCircle className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(255,255,255,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent px-8 py-4 rounded-lg text-xl font-medium text-white
                    border-2 border-white/30 hover:border-white/50 transition-all duration-300 
                    flex items-center gap-3 group"
                >
                  Learn More
                  <BsArrowRightCircle className="text-2xl group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
              </motion.div>
            </div>
          </div>

          {/* Right Column - Adjusted height for better mobile view */}
          <div className="w-full md:w-1/2 h-[40vh] md:h-full relative overflow-hidden flex items-center justify-center p-4 md:p-8">
            <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl">
              {sliderImages.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: currentImage === index ? 1 : 0,
                    scale: currentImage === index ? 1 : 1.1,
                  }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0"
                >
                  <img
                    src={img}
                    alt={`Hydroponics ${index + 1}`}
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </motion.div>
              ))}

              {/* Slider Controls */}
              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-20">
                <button
                  onClick={prevImage}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm"
                >
                  <BsChevronLeft className="text-white text-2xl" />
                </button>
                <div className="flex gap-2">
                  {sliderImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImage === index ? "bg-white" : "bg-white/50"
                      }`}
                    />
                  ))}
                </div>
                <button
                  onClick={nextImage}
                  className="p-2 rounded-full bg-white/20 hover:bg-white/30 transition-all backdrop-blur-sm"
                >
                  <BsChevronRight className="text-white text-2xl" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Cards - Improved spacing and responsive layout */}
      <div className="py-16 md:py-24 lg:py-40 w-full bg-gradient-to-b from-white via-[#07300f]/5 to-white">
        <div className="w-full px-4 sm:px-6 md:px-8 max-w-[2400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-20">
            {[
              {
                icon: <FaSeedling className="text-6xl" />,
                title: "Sustainable Innovation",
                description:
                  "Pioneering advanced hydroponic technologies that transform traditional farming practices while preserving our natural resources",
              },
              {
                icon: <FaMicroscope className="text-6xl" />,
                title: "Research Excellence",
                description:
                  "Conducting groundbreaking research in sustainable agriculture, focusing on efficiency and environmental stewardship",
              },
              {
                icon: <FaGlobeAmericas className="text-6xl" />,
                title: "Global Impact",
                description:
                  "Developing scalable solutions to address worldwide food security challenges and promote sustainable farming practices",
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="bg-white/90 backdrop-blur-lg p-6 sm:p-8 lg:p-12 rounded-3xl shadow-xl hover:shadow-2xl 
                  transition-all duration-500 border border-[#07300f]/10 flex flex-col items-center text-center"
              >
                <div className="text-[#07300f] mb-6 lg:mb-8">{card.icon}</div>
                <h3 className="text-xl sm:text-2xl font-bold text-[#07300f] mb-4 lg:mb-6">
                  {card.title}
                </h3>
                <p className="text-base lg:text-lg text-gray-600 leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Statistics Section - Improved responsive layout */}
      <div className="relative py-16 md:py-24 lg:py-48 overflow-hidden">
        <div className="absolute inset-0 bg-[#07300f]" />
        <div className="relative z-10 w-full px-4 sm:px-6 md:px-8 max-w-[2400px] mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 lg:gap-20">
            {[
              {
                icon: <IoStatsChart className="text-5xl mb-6" />,
                number: "1000+",
                label: "Research Hours",
                description: "Dedicated to advancing hydroponic technology",
              },
              {
                icon: <MdScience className="text-5xl mb-6" />,
                number: "100+",
                label: "Projects Completed",
                description: "Successfully implemented solutions",
              },
              {
                icon: <BiSolidInstitution className="text-5xl mb-6" />,
                number: "250+",
                label: "Students Trained",
                description: "Building future agricultural innovators",
              },
              {
                icon: <FaMicroscope className="text-5xl mb-6" />,
                number: "50+",
                label: "Research Papers",
                description: "Contributing to global knowledge",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white p-4 sm:p-6 lg:p-8"
              >
                {stat.icon}
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-3 lg:mb-4">
                  {stat.number}
                </div>
                <div className="text-lg sm:text-xl font-semibold mb-3 lg:mb-4">{stat.label}</div>
                <p className="text-white/80 text-base lg:text-lg">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Get In Touch Section - Improved spacing */}
      <div className="py-16 md:py-24 lg:py-40 bg-gradient-to-b from-[#07300f]/5 to-transparent">
        <div className="w-full px-4 sm:px-6 md:px-8 max-w-[2400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#07300f] mb-6 md:mb-12 lg:mb-16 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 md:mb-12 lg:mb-20 leading-relaxed max-w-[1000px] mx-auto font-normal px-4">
              We are continuously evolving and striving hard to better the
              system for our users. We would like to listen to your feedback and
              suggestions.
            </p>
            <motion.a
              href="/contactus"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-[#07300f] text-white px-8 sm:px-12 py-3 sm:py-4 rounded-lg
                text-lg sm:text-xl font-medium hover:bg-[#0a4015] transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              Contact Us <BsArrowRightCircle className="text-xl sm:text-2xl" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
