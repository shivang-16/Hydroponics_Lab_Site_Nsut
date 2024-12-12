import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  BsChevronLeft,
  BsChevronRight,
  BsArrowRightCircle,
  BsArrowRight,
} from "react-icons/bs";

export const Achievements = () => {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center bg-[#e6ffe6]">
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left side - Dark green box with text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-[#003300] p-12 rounded-lg shadow-xl"
            >
              <h1 className="text-5xl text-white mb-8 font-['Marcellus']">
                Achievements
              </h1>
              <p className="text-white/90 text-lg leading-relaxed font-['Questrial']">
                The Centre of Excellence in Hydroponics has become a leading
                force in advancing sustainable agriculture through innovation,
                research, and community engagement. We are proud to highlight
                our key achievements that reflect our dedication to reshaping
                modern farming and promoting hydroponics as a viable solution
                for food security, environmental sustainability, and community
                impact.
              </p>
            </motion.div>

            {/* Right side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden shadow-xl"
            >
              <img
                src="https://static.wixstatic.com/media/769cbd_0625ada7ffc2463a9e80d74651aa6bc0~mv2.jpeg"
                alt="Hydroponics Lab"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* R&D Projects Section */}
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Title Section */}
            <div className="w-full md:w-1/3">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[#003300] text-6xl font-['Marcellus'] leading-tight sticky top-24"
              >
                Ongoing R&D Projects
              </motion.h2>
            </div>

            {/* Projects Grid - Changed to 3 columns */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Focus on Medicinal Plants",
                    description:
                      "Establishing protocols for the efficient cultivation of Indian medicinal plants such as Ashwagandha, Tulsi, and Brahmi.",
                  },
                  {
                    title: "Abiotic Stress Response Studies",
                    description:
                      "Studying how plants in hydroponic systems respond to environmental stresses such as heat, cold, and nutrient deficiencies.",
                  },
                  {
                    title: "Hyperspectral Imaging",
                    description:
                      "Creating predictive models to assess plant health, growth, and quality without destructive sampling.",
                  },
                  {
                    title: "Comprehensive Database",
                    description:
                      "Compiling a unique repository of plant images, growth parameters, and metabolite profiles for medicinal plants",
                  },
                  {
                    title: "Plant Microbe Interaction",
                    description:
                      "Investigating the role of beneficial microbes in promoting plant growth and enhancing nutrient uptake in hydroponic systems.",
                  },
                  {
                    title: "Plant Interactions on Animal Models",
                    description:
                      "Studying the therapeutic effects of hydroponically grown medicinal plants in animal models.",
                  },
                ].map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#003300] p-6 flex flex-col min-h-[200px] group cursor-pointer hover:shadow-xl transition-all duration-300"
                  >
                    <div>
                      <h3 className="text-white text-xl font-medium mb-4 font-['Marcellus']">
                        {project.title}
                      </h3>
                      <p className="text-yellow-400 text-sm font-['Questrial']">
                        {project.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Slider Section */}
      <div className="py-24">
        {/* Title Container */}
        <div className="container mx-auto px-4 lg:px-8 mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#003300] text-6xl font-['Marcellus'] leading-tight"
          >
            Our Impact in Action
          </motion.h2>
        </div>

        {/* Full Width Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-[400px] w-full overflow-hidden"
        >
          {[
            "https://static.wixstatic.com/media/769cbd_3e21d465e00e4729a38223615a80ecef~mv2.jpeg",
            "https://static.wixstatic.com/media/769cbd_42cddcaadc964accbb4d85bd5c8d9525~mv2.jpg",
            "https://static.wixstatic.com/media/769cbd_3f753daf065c4b159395a1633d8b560f~mv2.jpeg",
          ].map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 w-full h-full"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: index * 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                },
              }}
            >
              <img
                src={image}
                alt={`Achievement Highlight ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}

          {/* Navigation Dots */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
            {[0, 1, 2].map((_, index) => (
              <div
                key={index}
                className="w-3 h-3 rounded-full bg-white/50 transition-all duration-300"
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Research Papers Section */}
      <div className="py-24 bg-[#f5f9f5]">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex flex-col md:flex-row gap-16">
            {/* Title Section */}
            <div className="w-full md:w-1/3">
              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-[#003300] text-6xl font-['Marcellus'] leading-tight sticky top-24"
              >
                Our Published Research Papers
              </motion.h2>
            </div>

            {/* Papers Grid */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  {
                    journal:
                      "International Journal of Food Science & Technology",
                    title:
                      "Effect of selected elicitors on phytochemical content and antioxidant activity of Buckwheat sprouts obtained from seeds cultivated using the hydroponics technology.",
                  },
                  {
                    journal: "Biochemical Systematics and Ecology",
                    title:
                      "Study of the phytochemical profile of hydroponically cultivated buckwheat at different phenological stages",
                  },
                  {
                    journal: "Journal of Horticulture",
                    title:
                      "Comparison of Growth Indices, Biomass, Anatomy, Phytochemical and Elemental Activity of Hydroponically Grown and Soil Grown Amaranthus",
                  },
                  {
                    journal: "Materials Today: Proceedings",

                    title:
                      "Phytoremediation of selected heavy metals contaminated water by Amaranthus hybridus in hydroponic system",
                  },
                ].map((paper, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-[#003300] p-8 rounded-lg flex flex-col min-h-[300px] justify-between group cursor-pointer hover:shadow-xl transition-all duration-300 relative"
                  >
                    <div>
                      <h3 className="text-yellow-400 text-2xl font-medium mb-6 text-center font-['Marcellus']">
                        {paper.journal}
                      </h3>
                      <p className="text-white/90 text-base line-clamp-4 text-center font-['Questrial']">
                        {paper.title}
                      </p>
                    </div>
                    <div className="mt-6">
                      <div className="flex items-center justify-center gap-2 text-yellow-400 group-hover:gap-4 transition-all duration-300">
                        <span className="text-sm font-medium">Read More</span>
                        <BsArrowRightCircle className="text-xl" />
                      </div>
                      <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
