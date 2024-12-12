import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <div className="bg-[#003300] text-white py-16">
      <div className="container mx-auto px-16 grid grid-cols-5 gap-8">
        {/* Contact */}
        <div className="text-left">
          <h3 className="text-2xl font-['Marcellus'] mb-6">Contact</h3>
          <div className="space-y-2 font-['Questrial']">
            <p>Centre of Excellence</p>
            <p>Hydroponics Project</p>
            <p>NSUT</p>
            <p>Dwarka, Delhi</p>
            <p>110078</p>
          </div>
        </div>

        {/* About Us */}
        <div className="text-left">
          <h3 className="text-2xl font-['Marcellus'] mb-6">About Us</h3>
          <div className="space-y-2 font-['Questrial']">
            <Link to="/mission-vision" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Mission & Vision</span>
            </Link>
            <Link to="/team" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Our Team</span>
            </Link>
            <Link to="/facility" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Facility Overview</span>
            </Link>
            <Link to="/training" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Training Programs</span>
            </Link>
            <Link to="/research" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Research</span>
            </Link>
            <Link to="/community" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Community Outreach</span>
            </Link>
          </div>
        </div>

        {/* Helpful Links */}
        <div className="text-left">
          <h3 className="text-2xl font-['Marcellus'] mb-6">Helpful Links</h3>
          <div className="space-y-2 font-['Questrial']">
            <Link to="/faq" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">FAQ</span>
            </Link>
            <Link to="/blog" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Blog</span>
            </Link>
            <Link to="/news" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">News and Updates</span>
            </Link>
          </div>
        </div>

        {/* Get Involved */}
        <div className="text-left">
          <h3 className="text-2xl font-['Marcellus'] mb-6">Get Involved</h3>
          <div className="space-y-2 font-['Questrial']">
            <Link to="/partnerships" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Partnerships</span>
            </Link>
            <Link to="/volunteer" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Volunteer Opportunities</span>
            </Link>
            <Link to="/careers" className="block w-fit hover:text-gray-300">
              <span className="border-b border-white inline-block">Career Opportunities</span>
            </Link>
          </div>
        </div>

        {/* Opening Hours */}
        <div className="text-left bg-black bg-opacity-30 p-6">
          <h3 className="text-2xl font-['Marcellus'] mb-6">Opening Hours</h3>
          <div className="space-y-2 font-['Questrial']">
            <p>Mon - Fri: 7am - 7pm</p>
            <p>Saturday: 8am - 5pm</p>
            <p>Sunday: 8am - 5pm</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 