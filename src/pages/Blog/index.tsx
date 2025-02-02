import { type FC } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export const Blog: FC = () => {
  const blogPosts = [
    {
      title: "The Role of AI in Modern Hydroponic Systems",
      excerpt: "Hydroponics is transforming agriculture by offering efficient, sustainable, and space-saving solutions for growing plants. With the...",
      author: "MUSKAN RAGHAV",
      date: "Nov 17",
      readTime: "2 min read",
      image: "/system19.png",
      views: 2,
      comments: 0
    },
    {
      title: "Sustainable Agriculture Through Smart Automation",
      excerpt: "Smart automation systems are revolutionizing hydroponic farming by optimizing resource usage and improving crop yields...",
      author: "DR. RAJESH KUMAR",
      date: "Nov 15",
      readTime: "3 min read",
      image: "/system20.png",
      views: 3,
      comments: 1
    },
    {
      title: "Future of Vertical Farming in Urban Areas",
      excerpt: "As cities grow and agricultural land becomes scarce, vertical farming presents a viable solution for sustainable urban agriculture...",
      author: "PRIYA SHARMA",
      date: "Nov 12",
      readTime: "4 min read",
      image: "/system21.png",
      views: 4,
      comments: 2
    }
    // Add more blog posts as needed
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Bar */}
      <div className="bg-[#E8F3E8]">
        <div className="container mx-auto px-4">
          <div className="py-3 flex justify-start">
            <Link 
              to="/blog"
              className="text-[#07300f] hover:text-[#07300f]/80 transition-colors duration-300 text-sm"
            >
              All Posts
            </Link>
          </div>
        </div>
      </div>

      {/* Blog Posts Container */}
      <div className="bg-[#07300f]">
        <div className="container mx-auto px-4 py-16">
          <div className="space-y-6 max-w-5xl mx-auto">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#E8F3E8] rounded-md overflow-hidden flex flex-col md:flex-row"
              >
                {/* Left Side - Image */}
                <div className="relative w-full md:w-1/2">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[400px] object-cover"
                  />
                </div>

                {/* Right Side - Content */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                  {/* Author Info - Updated Layout */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center">
                        M
                      </div>
                      <div className="flex flex-col">
                        <span className="font-medium text-sm">{post.author}</span>
                        <div className="flex items-center space-x-1 text-gray-600 text-sm">
                          <span>{post.date}</span>
                          <span>·</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <button>
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" />
                      </svg>
                    </button>
                  </div>

                  {/* Title and Content - Left Aligned */}
                  <h2 className="text-lg font-medium text-[#07300f] mb-3 text-left">
                    {post.title}
                  </h2>
                  <p className="text-gray-700 mb-6 text-left text-sm">
                    {post.excerpt}
                  </p>

                  {/* Stats - Removed border-t */}
                  <div className="mt-auto pt-4">
                    <div className="flex items-center justify-between text-gray-600 text-sm">
                      <div className="flex items-center">
                        <span>{post.views} views</span>
                        <span className="mx-2">·</span>
                        <span>{post.comments} comments</span>
                      </div>
                      <button>
                        <svg className="w-6 h-6 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 
