import { FaFlask, FaMicroscope, FaUsers, FaArrowRight } from 'react-icons/fa';
import { GiPlantRoots, GiSprout } from 'react-icons/gi';
import { MdBiotech, MdOutlineScience } from 'react-icons/md';
import { ImageSlider } from '../../components/ImageSlider';
import { useCountUp } from '../../hooks/useCountUp';

export const Home = () => {
  const facilitiesCount = useCountUp({ end: 80 });
  const usersCount = useCountUp({ end: 7800 });

  return (
    <div className="min-h-screen bg-gray-50 w-full">
      {/* Hero Section */}
      <div className="w-full pt-20">
        <div className="bg-[#07370f] text-white py-32 w-full">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="flex flex-col items-start">
                <h1 className="text-5xl font-bold leading-tight mb-8 text-left">
                  Welcome to the NSUT Hydroponics Lab
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-12 text-left">
                  The NSUT Hydroponics Lab caters to the needs of researchers within the Institute as well as outside; 
                  both academic and industrial users enjoy the benefits of the sophisticated facilities housed here.
                </p>
                <button className="bg-white text-[#07370f] px-8 py-3.5 rounded-lg text-lg font-semibold 
                                 hover:bg-gray-100 transition-all duration-300 flex items-center group">
                  Explore Facilities
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              <div className="block">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
                  <div className="aspect-video bg-white/5 rounded-lg">
                    <ImageSlider />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative bg-gradient-to-b from-gray-100 to-white py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <h2 className="text-4xl font-bold text-[#07370f] mb-6">Our Impact</h2>
            <p className="text-xl text-gray-700 leading-relaxed">
              We combine the best of research instruments and operators.
              That's why we are a gateway to great research careers and opportunities to add your name to the growing
              list of users success stories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {/* Facilities Stats */}
            <div className="relative bg-white rounded-3xl shadow-xl p-10 transform hover:scale-105 transition-all duration-500 
                          border border-gray-100 hover:border-[#07370f]/20 group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 p-4 bg-[#07370f] rounded-2xl 
                            shadow-lg group-hover:shadow-[#07370f]/30 transition-all duration-500">
                <div className="flex items-center justify-center">
                  <GiPlantRoots className="w-8 h-8 text-white" />
                  <MdBiotech className="w-6 h-6 text-white -ml-1 mt-2" />
                </div>
              </div>
              <div className="mt-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-[#07370f] to-[#0a4815] 
                              bg-clip-text text-transparent mb-4 animate-fade-in">
                  {facilitiesCount}
                  <span className="text-4xl">+</span>
                </div>
                <div className="text-2xl font-semibold text-gray-700">FACILITIES</div>
                <p className="mt-4 text-gray-600">State-of-the-art equipment and research spaces</p>
              </div>
            </div>

            {/* Users Stats */}
            <div className="relative bg-white rounded-3xl shadow-xl p-10 transform hover:scale-105 transition-all duration-500 
                          border border-gray-100 hover:border-[#07370f]/20 group">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 p-4 bg-[#07370f] rounded-2xl 
                            shadow-lg group-hover:shadow-[#07370f]/30 transition-all duration-500">
                <div className="flex items-center justify-center">
                  <GiSprout className="w-8 h-8 text-white" />
                  <MdOutlineScience className="w-6 h-6 text-white -ml-1 mt-2" />
                </div>
              </div>
              <div className="mt-8">
                <div className="text-6xl font-bold bg-gradient-to-r from-[#07370f] to-[#0a4815] 
                              bg-clip-text text-transparent mb-4 animate-fade-in">
                  {usersCount}
                  <span className="text-4xl">+</span>
                </div>
                <div className="text-2xl font-semibold text-gray-700">USERS</div>
                <p className="mt-4 text-gray-600">Researchers and students benefiting from our facilities</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 lg:px-8 py-24 space-y-32">
        {/* Facilities Section */}
        <section>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-[#07370f] mb-6">Our Facilities</h2>
            <p className="text-gray-600 text-lg">
              Discover our state-of-the-art facilities designed to support cutting-edge research in hydroponics
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <FaFlask />,
                title: "Research Equipment",
                description: "State-of-the-art equipment for advanced research and experimentation"
              },
              {
                icon: <FaMicroscope />,
                title: "Laboratory Space",
                description: "Modern laboratory spaces equipped with essential research tools"
              },
              {
                icon: <FaUsers />,
                title: "Training Programs",
                description: "Comprehensive training programs for students and researchers"
              }
            ].map((facility, index) => (
              <div key={index} className="group bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="flex items-center justify-center text-[#07370f] text-4xl mb-6 
                               w-16 h-16 rounded-full bg-[#07370f]/5 mx-auto group-hover:scale-110 transition-transform">
                  {facility.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-4">{facility.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* About Section */}
        <section className="bg-white rounded-2xl p-16 shadow-sm border border-gray-100">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-4xl font-bold text-[#07370f]">About Our Facility</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                While a number of tools are housed in the main campus, our newly constructed building 
                boasts of state-of-the-art equipment that are already functional and a number of others in the pipeline.
              </p>
              <p>
                We feel proud to offer these services to everyone through a complete online booking system 
                with minimal human interventions.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-[#07370f] mb-6">Get In Touch</h2>
          <p className="text-gray-600 text-lg mb-12 leading-relaxed">
            We are continuously evolving and striving hard to better the system for our users. 
            We would like to listen to your feedback and suggestions.
          </p>
          <button className="group bg-[#07370f] text-white px-10 py-4 rounded-lg text-lg font-semibold 
                           hover:bg-[#0a4815] transition-all duration-300 flex items-center mx-auto">
            Contact Us
            <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </section>
      </main>
    </div>
  )
}
