import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaLeaf, FaBars, FaTimes } from 'react-icons/fa';

type MenuItem = {
  title: string;
  path: string;
  children?: MenuItem[];
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const menuItems: MenuItem[] = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Vision', path: '/vision' },
    { title: 'Mission', path: '/mission' },
    { title: 'Training', path: '/training' },
    { title: 'Contact', path: '/contactus' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActivePath = (path: string) => {
    return location.pathname === path;
  };

  // Update the isActiveDropdown function to handle optional children
  const isActiveDropdown = (children: MenuItem[] | undefined): boolean => {
    if (!children) return false;
    return children.some(child => isActivePath(child.path));
  };

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between h-20">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3">
              <div className="p-2 bg-[#07370f] rounded-full">
                <FaLeaf className="text-white text-2xl" />
              </div>
              <div>
                <div className="text-xl font-bold text-[#07370f]">NSUT HYDROPONICS</div>
                <div className="text-sm text-gray-600">SHAPING YOUR RESEARCH</div>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              'children' in item ? (
                <div key={index} className="relative group" ref={dropdownRef}>
                  <button
                    onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                    className={`w-full text-gray-600 hover:text-[#07370f] px-3 py-2 rounded-md text-sm font-medium 
                      inline-flex items-center justify-center gap-2 ${isActiveDropdown(item.children) ? 'text-[#07370f] font-semibold' : ''}`}
                  >
                    <span className="text-center">{item.title}</span>
                    <svg 
                      className={`h-4 w-4 transition-transform ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === item.title && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                      {item.children?.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.path}
                          className={`block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                            ${isActivePath(child.path) ? 'bg-gray-50 text-[#07370f] font-semibold' : ''}`}
                          onClick={() => setActiveDropdown(null)}
                        >
                          {child.title}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  to={item.path}
                  className={`text-gray-600 hover:text-[#07370f] px-3 py-2 rounded-md text-sm font-medium
                    ${isActivePath(item.path) ? 'text-[#07370f] font-semibold border-b-2 border-[#07370f]' : ''}`}
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-[#07370f] p-2"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item, index) => (
                'children' in item ? (
                  <div key={index} className="space-y-1">
                    <button
                      onClick={() => setActiveDropdown(activeDropdown === item.title ? null : item.title)}
                      className={`w-full px-3 py-2 text-base font-medium flex items-center justify-center gap-2
                        ${isActiveDropdown(item.children) ? 'text-[#07300f] font-semibold' : 'text-gray-700'}`}
                    >
                      <span>{item.title}</span>
                      <svg 
                        className={`h-4 w-4 transition-transform duration-300 ${activeDropdown === item.title ? 'rotate-180' : ''}`} 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {activeDropdown === item.title && (
                      <div className="pl-4 bg-gray-50 rounded-lg mt-1">
                        {item.children?.map((child, childIndex) => (
                          <Link
                            key={childIndex}
                            to={child.path}
                            className={`block w-full text-center px-4 py-3 text-sm rounded-lg
                              ${isActivePath(child.path) 
                                ? 'text-[#07300f] font-semibold bg-[#07370f]/5' 
                                : 'text-gray-600 hover:text-[#07370f] hover:bg-[#07370f]/5'}`}
                            onClick={() => {
                              setIsOpen(false);
                              setActiveDropdown(null);
                            }}
                          >
                            {child.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    key={index}
                    to={item.path}
                    className={`block w-full text-center px-3 py-2 text-base font-medium rounded-lg
                      ${isActivePath(item.path)
                        ? 'text-[#07370f] font-semibold bg-[#07370f]/5'
                        : 'text-gray-700 hover:text-[#07370f] hover:bg-[#07370f]/5'}`}
                    onClick={() => {
                      setIsOpen(false);
                    }}
                  >
                    {item.title}
                  </Link>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar; 
