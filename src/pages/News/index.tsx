import { type FC } from 'react'
import { motion } from 'framer-motion'

interface NewsItem {
  title: string
  description: string
  image: string
  link: string
  video?: string
}

export const News: FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: "Call for Interviews: TA and SSA Positions",
      description: "The Centre is excited to announce interview calls for the positions of Teaching Assistant (TA) and Senior Scientific Associate (SSA). These roles are pivotal in supporting our training programs, research projects, and community outreach initiatives. If you are passionate about hydroponics and sustainable agriculture, visit nsut.ac.in",
      image: "/system56.avif",
      link: "https://nsut.ac.in"
    },
    {
      title: "Inauguration of the Centre",
      description: "Our state-of-the-art facility was officially inaugurated, marking a new chapter in hydroponics research and training. Equipped with advanced systems and technology, we're ready to redefine modern agriculture.",
      image: "/inauguration.avif",
      link: "/news/inauguration"
    }
  ]

  return (
    <div className="min-h-screen bg-[#E8F3E8]">
      {/* Left Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
        <div className="p-12 lg:p-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-playfair text-[#07300f] mb-8"
          >
            News and
            <br />
            Updates
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-700 leading-relaxed"
          >
            Stay connected with the latest happenings at the Centre of Excellence in Hydroponics! 
            From groundbreaking research to inspiring events, we bring you updates that showcase 
            our journey toward sustainable agricultural innovation. Explore our news and achievements 
            to see how we're making an impact, one green initiative at a time.
          </motion.p>
        </div>

        {/* Right Section - News Items */}
        <div className="bg-white p-12 lg:p-24 space-y-16">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-2xl font-playfair text-[#07300f] mb-4">
                {item.title}
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {item.description}
              </p>
              {item.image && (
                <div className="mb-6 aspect-[16/9] overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}
              {item.video && (
                <div className="mb-6 relative aspect-[16/9]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-lg"
                    src={item.video}
                    title={item.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
} 
