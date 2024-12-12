import { motion } from 'framer-motion'
import { type FC } from 'react'

export const AboutUs: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Who are we? Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-montserrat text-[#07300f] text-center mb-12">
              Who are we?
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-gray-700"
            >
              <p className="text-lg leading-relaxed">
                Netaji Subhas University of Technology (NSUT) is proud to announce the launch of its 709 square 
                meter cutting-edge "Hydroponic Horticulture and Research Facility," a groundbreaking initiative 
                aimed at advancing training and research in hydroponic crop production. This project, funded by 
                the Delhi Knowledge Development Foundation (DKDF) with a grant of ₹78 lakhs is poised to 
                revolutionize horticultural education and innovation.
              </p>

              <p className="text-lg leading-relaxed">
                The facility boasts a state-of-the-art setup for various training and research activities. Key 
                features include a classroom designed to accommodate students for theoretical sessions on hydroponics, 
                a polyhouse equipped with five distinct hydroponic systems tailored to different groups of horticultural 
                plants, a dedicated area for plant germination, and a well-equipped nursery for packaging and storage.
              </p>

              <p className="text-lg leading-relaxed">
                The primary goals of the Hydroponic Horticulture Facility are to establish a premier training and 
                research hub, empower aspiring entrepreneurs and local farmers with the skills needed to set up, 
                operate, and maintain hydroponic horticulture systems, focus on researching and developing 
                innovative hydroponic cultivation methods for new horticultural crops, and build an ecosystem 
                that significantly contributes to pollution control, water conservation, and the supply of fresh, 
                healthy produce to the local community.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section> 
    </div>
  )
} 