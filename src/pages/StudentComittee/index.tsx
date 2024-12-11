import { type FC, useEffect } from 'react'
import { FaEnvelope, FaPhone, FaGithub } from 'react-icons/fa'

interface StudentMember {
  name: string;
  role: string;
  branch: string;
  year: string;
  description: string;
  email: string;
  phone: string;
  github: string;
  image: string;
}

const studentMembers: StudentMember[] = [
  {
    name: "Rahul Kumar",
    role: "President",
    branch: "B.Tech Biotechnology",
    year: "4th Year",
    description: "Leading research on automated nutrient delivery systems and developing IoT solutions for hydroponic farming. Passionate about making sustainable agriculture accessible to all.",
    email: "rahul.kumar@nsut.ac.in",
    phone: "+91 98765 43210",
    github: "https://github.com/rahulk/automated-nutrient-system",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Priya Sharma",
    role: "Vice President",
    branch: "B.Tech Environmental Engineering",
    year: "3rd Year",
    description: "Specializing in water conservation techniques and sustainable nutrient recycling systems. Currently working on optimizing growth parameters for leafy greens.",
    email: "priya.sharma@nsut.ac.in",
    phone: "+91 98765 43211",
    github: "https://github.com/priyas/water-conservation",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Aditya Patel",
    role: "Technical Head",
    branch: "B.Tech Electronics",
    year: "4th Year",
    description: "Developing smart monitoring systems using IoT sensors and machine learning for optimal plant growth. Leading the automation team for climate control systems.",
    email: "aditya.patel@nsut.ac.in",
    phone: "+91 98765 43212",
    github: "https://github.com/adityap/smart-monitoring",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Zara Khan",
    role: "Research Coordinator",
    branch: "B.Tech Chemical Engineering",
    year: "3rd Year",
    description: "Researching innovative nutrient formulations and conducting experiments on various plant species. Focused on maximizing yield through optimal nutrient combinations.",
    email: "zara.khan@nsut.ac.in",
    phone: "+91 98765 43213",
    github: "https://github.com/zarak/nutrient-research",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Dev Singh",
    role: "Documentation Lead",
    branch: "B.Tech Computer Science",
    year: "2nd Year",
    description: "Managing project documentation and developing web applications for data visualization. Creating user-friendly interfaces for monitoring system parameters.",
    email: "dev.singh@nsut.ac.in",
    phone: "+91 98765 43214",
    github: "https://github.com/devsingh/data-visualization",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  }
];

export const StudentComittee: FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px'
      }
    );

    // Observe both cards and photos
    const cards = document.querySelectorAll('.student-card');
    const photos = document.querySelectorAll('.photo-animate');
    
    cards.forEach((card) => observer.observe(card));
    photos.forEach((photo) => observer.observe(photo));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-inter pt-20">
      <div className="bg-gradient-to-r from-primary/90 to-primary py-16 animate-fadeIn shadow-lg">
        <h1 className="text-4xl font-bold text-center font-montserrat mb-6 text-white">
          Student Committee
        </h1>
        <p className="text-center mt-4 max-w-3xl mx-auto px-4 text-lg text-white/90">
          Meet our passionate team of student innovators driving research and development in hydroponics technology
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-4">
        <div className="grid grid-cols-1 gap-12">
          {studentMembers.map((member, index) => (
            <div 
              key={index}
              className="student-card opacity-0 translate-y-8 bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-700 hover:shadow-2xl border border-gray-100"
            >
              <div className="bg-gradient-to-r from-primary/5 to-primary/10 p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Image - Removed scaling animations */}
                  <div className="mx-auto md:mx-0">
                    <div className="photo-animate opacity-0 w-48 h-48 rounded-full bg-white p-2 shadow-lg transition-all duration-700">
                      <img 
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full rounded-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl font-semibold text-gray-900 font-montserrat mb-2">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium font-montserrat mb-2">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-2">
                      {member.branch}
                    </p>
                    <p className="text-gray-400 text-sm mb-4">
                      {member.year}
                    </p>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Contact Information */}
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                        <FaEnvelope className="text-primary" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600">
                        <FaPhone className="text-primary" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                      <a
                        href={member.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors shadow-md hover:shadow-lg"
                      >
                        <FaGithub />
                        View Project
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
