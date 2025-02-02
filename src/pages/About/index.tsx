import { type FC } from 'react'
import { motion } from 'framer-motion'

export const About: FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative min-h-[60vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/system5.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
            filter: 'brightness(0.7)'
          }}
        />
        
        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-montserrat text-white text-center mb-6"
          >
            About Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-white/90 text-center max-w-3xl mx-auto"
          >
            Pioneering Sustainable Agriculture Through Innovation
          </motion.p>
        </div>
      </div>

      {/* Who are we? Section */}
      <div className="relative min-h-screen">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hydroponic-plants-bg.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        />

        {/* Content Overlay */}
        <div className="relative z-10 container mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl md:text-6xl font-montserrat text-[#07300f] mb-12 text-center">
              Who are we?
            </h2>
            
            <div className="bg-white/90 backdrop-blur-sm p-8 md:p-12 rounded-lg space-y-6 text-gray-800">
              <p className="text-lg md:text-xl leading-relaxed">
                Netaji Subhas University of Technology (NSUT) is proud to announce the launch of its 709 square meter cutting-edge "Hydroponic Horticulture and Research Facility," a groundbreaking initiative aimed at advancing training and research in hydroponic crop production. This project, funded by the Delhi Knowledge Development Foundation (DKDF) with a grant of ₹78 lakhs is poised to revolutionize horticultural education and innovation. The facility boasts a state-of-the-art setup for various training and research activities. Key features include a classroom designed to accommodate students for theoretical sessions on hydroponics, a polyhouse equipped with five distinct hydroponic systems tailored to different groups of horticultural plants, a dedicated area for plant germination, and a well-equipped nursery for packaging and storage.
              </p>
              
              <p className="text-lg md:text-xl leading-relaxed">
                The primary goals of the Hydroponic Horticulture Facility are to establish a premier training and research hub, empower aspiring entrepreneurs and local farmers with the skills needed to set up, operate, and maintain hydroponic horticulture systems, focus on researching and developing innovative hydroponic cultivation methods for new horticultural crops, and build an ecosystem that significantly contributes to pollution control, water conservation, and the supply of fresh, healthy produce to the local community.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Our Story Section */}
      <section className="min-h-screen grid grid-cols-1 md:grid-cols-3">
        {/* Left Column - Title and Subtitle */}
        <div className="bg-[#E8F3E8] p-12 md:p-16 flex flex-col justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[300px] text-center"
          >
            <h2 className="text-5xl font-montserrat text-[#0A3622] mb-8">
              Our
              <br />
              Story
            </h2>
            <div className="w-12 h-1 bg-[#0A3622] mb-8 mx-auto" />
            <p className="text-[#0A3622] text-xl font-medium">
              From Vision to Reality: Shaping
              <br />
              the Future of Sustainable
              <br />
              Agriculture
            </p>
          </motion.div>
        </div>

        {/* Middle Column - Image */}
        <div className="relative h-[400px] md:h-auto">
          <img 
            src="/system5.png"
            alt="Our Story"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="bg-[#0A3622] p-12 md:p-16 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-[300px] mx-auto text-center"
          >
            <p className="text-white/90 leading-relaxed">
              Our journey began with a simple yet powerful vision: to revolutionize urban farming 
              through innovative hydroponic solutions. Today, we stand as a testament to that vision, 
              having created a state-of-the-art facility that serves as a beacon of sustainable agriculture.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What do we offer? Section */}
      <section className="bg-[#e8f5e9] py-24">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-montserrat text-[#07300f] text-center mb-20"
          >
            What do we offer?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-16 max-w-7xl mx-auto">
            {[
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#07300f]">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                ),
                title: "Comprehensive Training Programs",
                description: "From beginners to advanced practitioners, we offer tailored training programs that provide theoretical knowledge and practical experience in hydroponics"
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#07300f]">
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10zm0-15v5l4.33 2.5" />
                  </svg>
                ),
                title: "Cutting-Edge Research",
                description: "Our facility is equipped with modern technology for conducting in-depth research on plant growth, nutrient optimization, and abiotic stress management."
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#07300f]">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3zM14 14h7v7h-7z" />
                  </svg>
                ),
                title: "Space for Cultivation",
                description: "We provide individuals and organizations with dedicated spaces within the center to grow plants of their choice using hydroponic systems."
              },
              {
                icon: (
                  <svg viewBox="0 0 24 24" className="w-16 h-16 mx-auto mb-6 fill-[#07300f]">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                    <path d="M12 8l-4 4h3v4h2v-4h3z" />
                  </svg>
                ),
                title: "Industry and Community Engagement",
                description: "We collaborate with industries, academic institutions, and local communities to promote the adoption of hydroponic farming."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center px-4"
              >
                {item.icon}
                <h3 className="text-[#07300f] text-xl font-semibold mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section className="bg-[#07300f] py-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-montserrat text-white mb-4">
              MEET OUR TEAM
            </h2>
            <p className="text-xl text-white/80">
              Our Driving Force
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">
            {[
              {
                name: "Dr. Akhilesh Dubey",
                role: "Principal Investigator",
                image: "/system25.png"
              },
              {
                name: "Prof. Sushma Nagpal",
                role: "Co-Principal Investigator",
                image: "/system26.png"
              },
              {
                name: "Prof. Jyotsna Singh",
                role: "Co-Principal Investigator",
                image: "/system27.png"
              },
              {
                name: "Dr. Akhilesh K. Dubey",
                role: "Co-Principal Investigator",
                image: "/system28.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white/80">{member.role}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                name: "Dr. Nisha Kandhoul",
                role: "Co-Principal Investigator",
                image: "/system29.png"
              },
              {
                name: "Dr. Gaurav Singal",
                role: "Co-Principal Investigator",
                image: "/system30.png"
              },
              {
                name: "Dr. Jyoti Yadav",
                role: "Co-Principal Investigator",
                image: "/system31.png"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/10">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-white text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white/80">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirational Quote Section */}
      <section className="bg-[#e8f5e9] py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p 
              className="text-[#07300f] text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed 
                font-dancing-script italic" 
            >
              In every seed of innovation, there lies the promise of a sustainable future. 
              Together, we cultivate the change the world needs
            </p>
          </motion.div>
        </div>
      </section>

    </div>
  )
}
