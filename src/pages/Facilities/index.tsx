import { type FC } from 'react'
import { motion } from 'framer-motion'

export const Facilities: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-[#07300f] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-montserrat mb-4"
          >
            Facilities at the Centre
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-200"
          >
            Providing Everything You Need
          </motion.p>
        </div>
      </div>

      {/* NFT Horizontal Beds Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <img
                src="/public/system6.png"
                alt="NFT Horizontal Beds"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8">
                NFT Horizontal Beds
              </h2>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Plants are grown in long horizontal beds or troughs filled with a growing medium or in nutrient-rich water.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Nutrient solution flows evenly across the beds.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Suitable for crops with larger root systems.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Ideal for larger areas, allowing more plant varieties.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Easy to manage and scale up in greenhouses or large areas.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Best For: Tomatoes, cucumbers, peppers.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Advantages: Higher plant yield, easy monitoring of plant health.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* A-Frame Systems Section */}
      <section className="py-20 bg-[#E8F3E8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column - Now left aligned */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left order-2 lg:order-1"
            >
              <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8">
                A-Frame Systems
              </h2>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Plants are arranged on angled, triangular frames, allowing vertical stacking</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Maximizes light exposure for all plants.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Ideal for compact spaces or greenhouses.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Efficient water flow from the top to bottom rows.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Multiple levels increase growing capacity per square foot.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Easy access for maintenance and harvesting.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Best For: Leafy greens, herbs, and strawberries.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Advantages: Cost-effective, good for high-density planting.</span>
                </li>
              </ul>
            </motion.div>

            {/* Image Column - Now on the right */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px] order-1 lg:order-2"
            >
              <img
                src="/public/system7.png"
                alt="A-Frame Systems"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vertical Towers Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <img
                src="/public/system8.png"
                alt="Vertical Tower Systems"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8">
                Vertical Towers
              </h2>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Plants are grown in stacked vertical columns or towers, with nutrient-rich water pumped from the base to the top and trickling down to all levels.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Maximizes vertical space and reduces footprint.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Gravity-fed nutrient flow reduces energy consumption.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Allows for high-density planting in urban settings.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Best For: Lettuce, herbs, and small vegetables.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Advantages: Space-saving, energy-efficient, and sustainable.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Germination Room Section */}
      <section className="py-20 bg-[#E8F3E8]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8">
                Germination Room
              </h2>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Dedicated space for germinating seeds in a carefully controlled environment before transferring them to larger hydroponic systems.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Adjustable LED grow lights tailored for optimal light spectrums to encourage rapid germination and root development.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>High-density shelving units that maximize space for starting a large number of plants, enabling efficient crop cycling.</span>
                </li>
              </ul>
            </motion.div>

            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <img
                src="/public/system9.png"
                alt="Germination Room"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Classrooms Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[400px] lg:h-[500px]"
            >
              <img
                src="/public/system10.png"
                alt="Hydroponic Classrooms"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6 text-left"
            >
              <h2 className="text-4xl font-montserrat text-[#0A3622] mb-8">
                Classrooms
              </h2>
              
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>These rooms are designed for theoretical training, seminars, and workshops on hydroponics fundamentals, advanced techniques, and sustainability practices.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Seating capacity for small or large groups, with adjustable seating arrangements to support interactive learning.</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary text-xl">•</span>
                  <span>Resources like whiteboards, interactive displays, and lab benches for hands-on learning with small-scale models or seedlings.</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
} 