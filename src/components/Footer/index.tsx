import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-[#07300f] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-montserrat mb-6">Contact</h3>
            <div className="space-y-2">
              <p>Centre of Excellence</p>
              <p>Hydroponics Project</p>
              <p>NSUT</p>
              <p>Dwarka, Delhi</p>
              <p>110078</p>
            </div>
          </div>

          {/* About Us Column */}
          <div>
            <h3 className="text-xl font-montserrat mb-6">About Us</h3>
            <ul className="space-y-2">
              <li><Link to="/mission" className="hover:underline">Mission & Vision</Link></li>
              <li><Link to="/team" className="hover:underline">Our Team</Link></li>
              <li><Link to="/facility" className="hover:underline">Facility Overview</Link></li>
              <li><Link to="/training" className="hover:underline">Training Programs</Link></li>
              <li><Link to="/research" className="hover:underline">Research</Link></li>
              <li><Link to="/community" className="hover:underline">Community Outreach</Link></li>
            </ul>
          </div>

          {/* Helpful Links Column */}
          <div>
            <h3 className="text-xl font-montserrat mb-6">Helpful Links</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
              <li><Link to="/news" className="hover:underline">News and Updates</Link></li>
            </ul>
          </div>

          {/* Get Involved Column */}
          <div>
            <h3 className="text-xl font-montserrat mb-6">Get Involved</h3>
            <ul className="space-y-2">
              <li><Link to="/partnerships" className="hover:underline">Partnerships</Link></li>
              <li><Link to="/volunteer" className="hover:underline">Volunteer Opportunities</Link></li>
              <li><Link to="/careers" className="hover:underline">Career Opportunities</Link></li>
            </ul>
          </div>

          {/* Opening Hours Column */}
          <div>
            <h3 className="text-xl font-montserrat mb-6">Opening Hours</h3>
            <div className="space-y-2">
              <p>Mon - Fri: 7am - 7pm</p>
              <p>Saturday: 8am - 5pm</p>
              <p>Sunday: 8am - 5pm</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 