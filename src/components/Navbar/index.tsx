import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { IoClose } from 'react-icons/io5';
import { HiMenuAlt3 } from 'react-icons/hi';
import { GiPlantRoots } from 'react-icons/gi';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Training', path: '/training' },
    { name: 'Achievements', path: '/achievements' },
    { name: 'Blog', path: '/blog' },
    { name: 'FAQ', path: '/faq' },
    { name: 'News & Updates', path: '/news' },
    { name: 'Contact Us', path: '/contactus' }
  ];

  return (
    <>
      {/* Welcome Banner */}
      <motion.div 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-[#07300f] text-white py-2 text-center"
      >
        <p className="text-sm md:text-base font-light tracking-wide">
          Welcome to the Future of Farming: Where Innovation Meets Sustainability
        </p>
      </motion.div>

      {/* Main Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`sticky top-0 z-50 w-full ${
          scrolled 
            ? 'bg-white/80 backdrop-blur-md shadow-lg' 
            : 'bg-white'
        } transition-all duration-300`}
      >
        <div className="max-w-[2000px] mx-auto">
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <GiPlantRoots className="h-12 w-12 text-[#07300f]" />
              <span className="text-xl font-semibold text-[#07300f]">NSUT Hydroponics</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300
                    ${location.pathname === item.path 
                      ? 'text-[#07300f] bg-[#07300f]/10 font-semibold' 
                      : 'text-gray-700 hover:text-[#07300f] hover:bg-[#07300f]/5'
                    }
                  `}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-[#07300f] hover:bg-[#07300f]/5 transition-colors"
            >
              {isOpen ? (
                <IoClose className="h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="px-4 py-2 space-y-1">
                {navigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`block px-4 py-2 rounded-md text-base font-medium transition-all duration-300
                      ${location.pathname === item.path 
                        ? 'text-[#07300f] bg-[#07300f]/10 font-semibold' 
                        : 'text-gray-700 hover:text-[#07300f] hover:bg-[#07300f]/5'
                      }
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}; 
