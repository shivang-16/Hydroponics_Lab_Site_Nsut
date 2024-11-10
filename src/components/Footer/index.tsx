import { Link } from 'react-router-dom';
import { FaLeaf, FaFacebook, FaTwitter, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-[#07370f] text-white w-full mt-32">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-3 gap-20 py-16">
          {/* Brand Column */}
          <div className="flex flex-col max-w-xs">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <FaLeaf className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold">NSUT Hydroponics</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-8 text-left">
              Shaping the future of agricultural research through innovation and sustainability
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <FaFacebook className="text-xl" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <FaTwitter className="text-xl" />
              </a>
              <a href="#" className="p-2.5 bg-white/5 rounded-lg hover:bg-white/10 transition-all">
                <FaInstagram className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col items-start w-full">
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <div className="flex flex-col items-start w-full space-y-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-all">Home</Link>
              <Link to="/about" className="text-gray-300 hover:text-white transition-all">About</Link>
              <Link to="/coordinationcommittee" className="text-gray-300 hover:text-white transition-all">
                Coordination Committee
              </Link>
              <Link to="/studentcommittee" className="text-gray-300 hover:text-white transition-all">
                Student Committee
              </Link>
              <Link to="/contactus" className="text-gray-300 hover:text-white transition-all">Contact</Link>
            </div>
          </div>

          {/* Contact Info Column */}
          <div className="flex flex-col items-start">
            <h3 className="text-xl font-bold mb-6">Contact Info</h3>
            <div className="space-y-6 w-full">
              <a href="mailto:contact@nsuthydroponics.com" 
                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-all group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all">
                  <FaEnvelope className="text-lg" />
                </div>
                <span>contact@nsuthydroponics.com</span>
              </a>
              <a href="tel:+91XXXXXXXXXX" 
                 className="flex items-center gap-3 text-gray-300 hover:text-white transition-all group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all">
                  <FaPhone className="text-lg" />
                </div>
                <span>+91 XXXXXXXXXX</span>
              </a>
              <div className="flex items-center gap-3 text-gray-300 group">
                <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-all">
                  <FaMapMarkerAlt className="text-lg" />
                </div>
                <span>New Delhi, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 py-8 mt-8">
          <p className="text-center text-gray-400 text-sm">
            © {new Date().getFullYear()} NSUT Hydroponics. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}; 