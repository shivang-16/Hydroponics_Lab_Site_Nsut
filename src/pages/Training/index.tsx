import { motion } from "framer-motion";
import { BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const Training = () => {
  const trainingPrograms = [
    {
      image:
        "https://static.wixstatic.com/media/769cbd_5989abe750bf45008c20b958d91ead5a~mv2.jpeg",
      title: "2-Day Introductory Workshop",
      instructor: "Dr. Akhilesh Dubey",
      details: "10 lectures | 2 hours Hands on sessions",
      price: "Rs. 499",
      rating: 5,
      idealFor:
        "Beginners, curious hobbyists, and enthusiasts looking to get a taste of hydroponics.",
      overview:
        "This immersive 2-day workshop is designed to introduce you to the basics of hydroponic gardening. You'll learn essential techniques, from setting up simple systems to understanding nutrient management. This workshop combines theoretical sessions and hands-on exercises, helping you experience hydroponic cultivation from seed to harvest.",
    },
    {
      image:
        "https://static.wixstatic.com/media/769cbd_5989abe750bf45008c20b958d91ead5a~mv2.jpeg",
      title: "1-Week Intensive Program",
      instructor: "Dr. Akhilesh Dubey",
      details: "10 lectures | 2 hours daily Hands on sessions",
      price: "Rs. 999",
      rating: 5,
      idealFor:
        "Aspiring hydroponics entrepreneurs, agriculture students, and professionals seeking a deeper understanding of hydroponic systems.",
      overview:
        "Our 1-week program offers an in-depth exploration of hydroponic farming techniques and system management. Through a blend of classroom learning and practical exercises, participants will gain comprehensive knowledge on hydroponic setups, crop management, pest control, and more advanced nutrient strategies.",
    },
    {
      image:
        "https://static.wixstatic.com/media/769cbd_5989abe750bf45008c20b958d91ead5a~mv2.jpeg",
      title: "8-Week Advanced Training Program",
      instructor: "Dr. Akhilesh Dubey",
      details: "10 lectures | 2 hours Hands on sessions",
      price: "Rs. 1499",
      rating: 5,
      idealFor:
        "Entrepreneurs, researchers, and serious practitioners aiming to master hydroponics and develop professional-level expertise.",
      overview:
        "Our 8-week training is an advanced, all-encompassing course that dives deeply into all aspects of hydroponic horticulture. Participants will gain expertise in hydroponic system design, crop optimization, nutrient formulation, and data-driven plant management using innovative technologies.",
    },
  ];

  return (
    <div className="min-h-screen w-full relative">
      {/* Full Page Background */}
      <div className="fixed inset-0 -z-20">
        <img
          src="https://static.wixstatic.com/media/827f22493d8f45b7831fa81f0706d5d4.jpg"
          alt="Page Background"
          className="w-full h-screen object-cover"
        />
      </div>

      {/* Hero Section with Lettuce Background */}
      <div className="relative h-[400px] md:h-[600px]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://static.wixstatic.com/media/11062b_6a9ea93ab87a43bf9b7b0e23cb831954~mv2.jpg"
            alt="Hydroponics Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Green Box Overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90%] md:w-[900px] bg-[#003300] px-4 py-8 md:px-16 md:py-12">
          <h1 className="text-4xl md:text-5xl font-['Marcellus'] text-white mb-4 md:mb-8 text-center tracking-wide">
            Training Programs
          </h1>

          <p className="text-sm md:text-base text-white leading-relaxed font-['Questrial'] text-center">
            At the Centre of Excellence in Hydroponics, we offer diverse
            training programs to cater to all levels of interest and
            experience—from newcomers to seasoned practitioners. Each program is
            tailored to provide a hands-on understanding of hydroponic
            horticulture, plant management, and sustainable cultivation
            practices.
          </p>

          <p className="text-sm md:text-base text-white mt-2 md:mt-4 font-['Questrial'] text-center">
            Explore our training options below:
          </p>
        </div>
      </div>

      {/* Programs Section */}
      <div className="bg-[#003300] py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-40">
          {trainingPrograms.map((program, index) => (
            <div key={index} className="mb-8 last:mb-0">
              <div className="flex flex-col md:grid md:grid-cols-[355px,1fr,auto] gap-4 md:gap-16 items-start">
                {/* Image Column */}
                <div className="w-full md:w-[355px]">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-auto aspect-[4/3] md:w-[355px] md:h-[364px] object-cover"
                  />
                </div>

                {/* Content Column */}
                <div className="text-white w-full md:pr-16">
                  <div className="mb-4">
                    <h2 className="text-2xl md:text-[28px] font-['Marcellus'] font-extrabold tracking-wide mb-0.5 text-center md:text-left">
                      {program.title}
                    </h2>
                    <p className="text-base font-['Questrial'] text-white/90 mb-1 text-center md:text-left">
                      {program.instructor} | {program.details}
                    </p>
                    <div className="flex gap-1 justify-center md:justify-start">
                      {[...Array(5)].map((_, i) => (
                      <BsStarFill key={i} className="text-yellow-400" size={14} />
                      ))}
                    </div>  
                  </div>

                  <div className="space-y-4">
                    <p className="font-['Questrial'] text-white/90 leading-snug">
                      <span className="font-['Marcellus'] font-extrabold text-base">
                        Ideal for:
                      </span>{" "}
                      {program.idealFor}
                    </p>

                    <div>
                      <h3 className="text-lg font-['Marcellus'] font-extrabold tracking-wide mb-1">
                        Overview:
                      </h3>
                      <p className="font-['Questrial'] text-white/90 leading-snug">
                        {program.overview}
                      </p>
                    </div>

                    <Link
                      to="/apply"
                      className="inline-block border border-white px-5 py-1.5 hover:bg-white hover:text-[#003300]
                               transition-colors duration-300 font-['Questrial'] text-sm mt-2"
                    >
                      Read More ›
                    </Link>
                  </div>
                </div>

                {/* Price Column */}
                <div className="hidden md:block text-[40px] font-['Marcellus'] text-white">
                  {program.price}
                </div>
                <div className="md:hidden text-2xl font-['Marcellus'] text-white mb-4 w-full text-center">
                  {program.price}
                </div>
              </div>

              {index !== trainingPrograms.length - 1 && (
                <div className="md:grid md:grid-cols-[355px,1fr,auto] gap-16 mt-8">
                  <div className="col-span-full h-[2px] bg-white"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Start Today Section */}
      <div className="bg-[#e6ffe6] text-[#003300] py-10 md:py-20">
        <div className="container mx-auto px-4 md:px-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-['Marcellus'] mb-4 md:mb-8"
          >
            Start Today, Make an Impact Tomorrow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl font-['Questrial'] italic max-w-5xl mx-auto"
          >
            No matter your background, you can make a meaningful contribution to
            the future of agriculture. Begin your journey with us and become a
            leader in sustainable farming!
          </motion.p>
        </div>
      </div>
    </div>
  );
};
