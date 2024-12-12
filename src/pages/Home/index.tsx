import { type FC } from 'react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { motion } from 'framer-motion'
import { BsHourglassSplit } from 'react-icons/bs'


export const Home: FC = () => {
  return (
    <div className="min-h-screen">
     

    
      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center">
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("/hero-bg.avif")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)'
          }}
        />
        
        {/* Green Overlay */}
        <div 
          className="absolute inset-0 z-0 bg-[#0A3622]/30" 
          style={{ mixBlendMode: 'multiply' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat mb-6 leading-tight"
          >
            Centre of Excellence,
            <br />
            Hydroponics Horticulture
            <br />
            Training and Research Facility
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-12"
          >
            Cultivating Knowledge, Growing Green Solutions
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-white text-white px-6 py-2.5 rounded-md 
                hover:bg-white hover:text-black transition-all duration-300 bg-transparent"
            >
              Know More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* 2. About Us Section */}
      <section className="py-20 bg-[#e8f5e9]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl font-montserrat text-[#0A3622] text-left mb-12"
            >
              About Us
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-left text-gray-700 leading-relaxed text-lg">
                The Centre of Excellence in Hydroponics at NSUT is a pioneering initiative designed to drive innovation, research, and 
                education in hydroponic farming practices. Established with support from DKDF, our center aims to be a hub for 
                sustainable agriculture, advanced horticultural training, and community outreach. With a state-of-the-art polyhouse, 
                germination area, and a spacious classroom for theoretical learning, we are committed to nurturing future leaders in 
                sustainable cultivation.
              </p>

              {/* Social Media Links */}
              <div className="flex justify-start space-x-6 my-8">
                <a href="#" className="text-[#0A3622] hover:text-[#07370f] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-[#0A3622] hover:text-[#07370f] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="text-[#0A3622] hover:text-[#07370f] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" className="text-[#0A3622] hover:text-[#07370f] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>

              {/* Read More Button */}
              <div className="mt-8 flex justify-start">
                <Link
                  to="/about"
                  className="inline-block px-8 py-3 bg-[#07370f] text-white font-medium hover:bg-[#0A3622] transition-colors duration-300"
                >
                  Read More
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      
      {/* Vision and Mission Section */}
      <section className="flex flex-col md:flex-row min-h-[70vh]">
        {/* Left Side - Dark Green Background with Title */}
        <div className="w-full md:w-[30%] bg-[#0A3622] text-white flex items-center justify-center p-8 md:p-12">
          <div className="max-w-[400px] text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-serif leading-tight"
            >
              OUR VISION
              <br />
              AND
              <br />
              MISSION
            </motion.h2>
          </div>
        </div>

        {/* Right Side - Video Background with Content */}
        <div className="w-full md:w-[70%] relative min-h-[50vh] md:min-h-[70vh] overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 w-full h-full">
            <iframe
              src="https://www.youtube.com/embed/Woo-9cduWiE?autoplay=1&mute=1&loop=1&playlist=Woo-9cduWiE&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&version=3&playsinline=1&playlist=Woo-9cduWiE"
              title="Hydroponics Video Background"
              className="absolute w-[300%] h-[300%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{ 
                pointerEvents: 'none',
                border: 'none'
              }}
            />
          </div>

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content Over Video */}
          <div className="relative z-10 h-full flex items-center justify-center p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-[600px] text-left"
            >
              <p className="text-lg leading-relaxed text-white mb-8">
                To transform the future of agriculture by empowering individuals and communities through 
                sustainable and innovative hydroponic practices.
              </p>

              <div>
                <p className="text-base mb-4 text-white">Our mission is to:</p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-2 text-white">
                    <span className="mt-1.5">•</span>
                    <span>Advance research in hydroponics and sustainable agriculture.</span>
                  </li>
                  <li className="flex items-start gap-2 text-white">
                    <span className="mt-1.5">•</span>
                    <span>Educate and train the next generation of hydroponics experts, from students to local farmers 
                    and entrepreneurs.</span>
                  </li>
                  <li className="flex items-start gap-2 text-white">
                    <span className="mt-1.5">•</span>
                    <span>Create a positive social impact by promoting sustainable agricultural practices.</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>


      {/* 4. Facility Highlights Section */}
      <section className="bg-[#e8f5e9] py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Highlights Grid */}
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                {
                  image: "/hero-bg.avif",
                  title: "709 square metres area",
                  subtitle: "facility"
                },
                {
                  image: "/polyhouse.avif",
                  title: "Polyhouse with 5",
                  subtitle: "hydroponics systems"
                },
                {
                  image: "/germination.avif",
                  title: "Dedicated Germination",
                  subtitle: "and Cold room"
                },
                {
                  image: "/classroom.avif",
                  title: "Classroom for theoretical",
                  subtitle: "sessions"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="aspect-square rounded-full overflow-hidden mb-4 mx-auto max-w-[200px] border-4 border-white shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-[#0A3622] font-medium mb-1">
                    {item.title}
                  </h3>
                  <p className="text-[#0A3622]/80">
                    {item.subtitle}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Title and Button */}
            <div className="md:w-1/4 text-right mt-12 md:mt-0">
              <motion.h2
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl font-serif text-[#0A3622] mb-8"
              >
                Facility
                <br />
                Highlights
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Link
                  to="/facility"
                  className="inline-block bg-[#0A3622] text-white px-8 py-3 rounded hover:bg-[#0A3622]/90 transition-colors duration-300"
                >
                  Know More
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-[#07300f] py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto text-center"
          >
            <p 
              className="text-white/90 text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-relaxed 
                font-dancing-script" // You'll need to import this font in your CSS
            >
              Empowering minds through hands-on discovery, we foster a deeper 
              understanding of sustainable agriculture and inspire the future 
              leaders of green innovation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="bg-[#e8f5e9] py-20">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-serif text-[#0A3622] text-center mb-6"
          >
            Our Training Programs
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center text-gray-700 max-w-3xl mx-auto mb-16"
          >
            Gain practical skills and scientific insight into sustainable hydroponics. Our training programs empower you to 
            lead in innovative, soil-free agriculture.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto mb-12">
            {/* Two Day Course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-[#0A3622]">
                  {/* Butterfly-like icon */}
                  <path d="M12 2C8 2 4 3 4 6c0 2 2 3 2 3s-2 1-2 3c0 3 4 4 8 4s8-1 8-4c0-2-2-3-2-3s2-1 2-3c0-3-4-4-8-4zm0 2c3.3 0 6 .7 6 2 0 1.3-2.7 2-6 2s-6-.7-6-2c0-1.3 2.7-2 6-2zm0 12c-3.3 0-6-.7-6-2 0-1.3 2.7-2 6-2s6 .7 6 2c0 1.3-2.7 2-6 2z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-[#0A3622] mb-4">Two Day Course</h3>
              <p className="text-gray-600">Introduction and basic operational skills</p>
            </motion.div>

            {/* 1-week course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6">
                <svg viewBox="0 0 24 24" className="w-full h-full fill-[#0A3622]">
                  {/* Pie chart-like icon */}
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" />
                  <path d="M12 5.5v6.5h6.5c0-3.58-2.92-6.5-6.5-6.5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-medium text-[#0A3622] mb-4">1-week course</h3>
              <p className="text-gray-600">In-depth training on hydroponic systems</p>
            </motion.div>

            {/* 8-week course */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center"
            >
              <div className="w-24 h-24 mx-auto mb-6">
                <BsHourglassSplit className="w-full h-full text-[#0A3622]" />
              </div>
              <h3 className="text-2xl font-medium text-[#0A3622] mb-4">8-week course</h3>
              <p className="text-gray-600">Comprehensive training with hands-on experience</p>
            </motion.div>
          </div>

          {/* Know More Button */}
          <div className="text-center">
            <Link
              to="/trainings"
              className="inline-block bg-[#0A3622] text-white px-8 py-3 rounded hover:bg-[#0A3622]/90 transition-colors duration-300"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Section - Our Garden of Success */}
      <section className="bg-[#002105] py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-montserrat text-white text-center mb-16">
            Our Garden of Success
          </h2>

          <div className="relative">
            {/* Gallery Container */}
            <div 
              className="flex gap-8 overflow-x-auto pb-12 no-scrollbar"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
            >
              {[
                {
                  src: "/public/system1.jpg",
                  alt: "Outdoor Garden View",
                },
                {
                  src: "/public/system2.jpg",
                  alt: "Hydroponic Lettuce Plants",
                },
                {
                  src: "/public/system3.jpg",
                  alt: "Vertical Growing Setup",
                },
                {
                  src: "/public/system4.jpg",
                  alt: "Indoor Hydroponic Facility",
                },
                {
                  src: "/public/system1.jpg",
                  alt: "Growing Stations",
                },
                {
                  src: "/public/system2.jpg",
                  alt: "Hydroponic Flower",
                },
                {
                  src: "/public/system3.jpg",
                  alt: "Facility Interior",
                }
              ].map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex-shrink-0 w-[300px] snap-center group"
                >
                  <div className="relative h-[400px] overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View More Button */}
            <div className="absolute bottom-0 right-4">
              <Link
                to="/gallery"
                className="inline-flex items-center gap-2 bg-black/80 text-white px-6 py-2.5 rounded-md hover:bg-black transition-all duration-300 group"
              >
                View More
                <BsArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              <div className="w-16 h-1 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-white"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                    ease: 'linear'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative min-h-[10vh] w-[100%]">
        {/* Video Background */}
        <div className="absolute inset-0 w-screen h-full overflow-hidden">
          <iframe
            src="https://www.youtube.com/embed/DK-XTP7eiaw?autoplay=1&mute=1&loop=1&playlist=DK-XTP7eiaw&controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1&version=3&playsinline=1&iv_load_policy=3&disablekb=1&fs=0&color=white&playlist=DK-XTP7eiaw"
            title="Why Choose Us Background"
            className="absolute w-[100vw] h-[100vh] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-150"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{ 
              pointerEvents: 'none',
              border: 'none',
              opacity: 0.8,
              width: '100%',
              maxWidth: '100%',
              objectFit: 'cover'
            }}
            frameBorder="0"
          />
        </div>

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 w-full px-4 py-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl font-montserrat text-white text-center mb-6"
          >
            Why Choose Us?
          </motion.h2>

          {/* Rest of your Why Choose Us content */}
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-20 bg-[#07300f] text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-5 gap-8 text-center"
          >
            {/* Feature 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center p-6"
            >
              <span className="text-4xl font-bold text-[#ffffff] mb-2">01.</span>
              <h3 className="text-lg font-medium mb-2">Focus on Indian Medicinal Plants</h3>
              <div className="w-12 h-0.5 bg-[#ffffff] mb-4"></div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex flex-col items-center p-6"
            >
              <span className="text-4xl font-bold text-[#ffffff] mb-2">02.</span>
              <h3 className="text-lg font-medium mb-2">State-of-the-Art Facilities</h3>
              <div className="w-12 h-0.5 bg-[#ffffff] mb-4"></div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col items-center p-6"
            >
              <span className="text-4xl font-bold text-[#ffffff] mb-2">03.</span>
              <h3 className="text-lg font-medium mb-2">Entrepreneurial Support</h3>
              <div className="w-12 h-0.5 bg-[#ffffff] mb-4"></div>
            </motion.div>

            {/* Feature 4 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col items-center p-6"
            >
              <span className="text-4xl font-bold text-[#ffffff] mb-2">04.</span>
              <h3 className="text-lg font-medium mb-2">Holistic Training Programs</h3>
              <div className="w-12 h-0.5 bg-[#ffffff] mb-4"></div>
            </motion.div>

            {/* Feature 5 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center p-6"
            >
              <span className="text-4xl font-bold text-[#ffffff] mb-2">05.</span>
              <h3 className="text-lg font-medium mb-2">Sustainability at the Core</h3>
              <div className="w-12 h-0.5 bg-[#ffffff] mb-4"></div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 8. Events and News Section */}
      <section className="bg-[#E8F3E8] py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-start mb-12">
            <h2 className="text-5xl font-montserrat text-[#0A3622] text-left">
              Events and
              <br />
              News
            </h2>
            <Link
              to="/news"
              className="mt-4 inline-flex items-center px-6 py-2 bg-[#002105] text-white hover:bg-[#002105]/90 transition-colors text-sm"
            >
              View More
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event 1 - Facility Inauguration */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col md:flex-row bg-[#8B9B76] overflow-hidden group relative"
            >
              <div className="p-8 flex-1 flex flex-col items-start">
                <span className="text-white/90 text-sm">Event</span>
                <h3 className="text-2xl font-light mt-2 mb-4 text-white text-left">
                  Facility Inauguration
                </h3>
                <p className="text-white/90 leading-relaxed text-sm text-left">
                  The grand opening of the Centre of Excellence in Hydroponics was a resounding success! 
                  We were thrilled to officially unveil our state-of-the-art facility dedicated to advancing 
                  sustainable agriculture and hydroponic research.
                </p>
                <Link
                  to="/news/facility-inauguration"
                  className="mt-auto pt-4 inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
                >
                  Read More <BsArrowRight />
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/inauguration.avif"
                  alt="Facility Inauguration"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Event 2 - School Students Event */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col md:flex-row bg-black overflow-hidden group relative"
            >
              <div className="p-8 flex-1 flex flex-col items-start">
                <span className="text-white/90 text-sm">Event</span>
                <h3 className="text-2xl font-light mt-2 mb-4 text-white text-left">
                  Hydroponics Event for School Students
                </h3>
                <p className="text-white/90 leading-relaxed text-sm text-left">
                  As part of our commitment to inspiring the next generation of sustainable 
                  agriculture leaders, we recently hosted a special event for school students 
                  at the Centre of Excellence in Hydroponics.
                </p>
                <Link
                  to="/news/school-students-event"
                  className="mt-auto pt-4 inline-flex items-center gap-2 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:underline"
                >
                  Read More <BsArrowRight />
                </Link>
              </div>
              <div className="w-full md:w-1/2">
                <img 
                  src="/students-event.avif"
                  alt="School Students Event"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
