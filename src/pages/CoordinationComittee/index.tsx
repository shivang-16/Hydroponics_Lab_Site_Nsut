import { type FC, useEffect } from 'react'
import { FaEnvelope, FaLinkedin, FaPhone } from 'react-icons/fa'

interface CommitteeMember {
  name: string;
  role: string;
  department: string;
  description: string;
  email: string;
  phone: string;
  profileLink: string;
  image: string;
}

const committeeMembers: CommitteeMember[] = [
  {
    name: "Dr. John Doe",
    role: "Chairman",
    department: "Department of Biotechnology",
    description: "Dr. John Doe brings over 20 years of experience in hydroponics and sustainable agriculture. Leading groundbreaking research in plant science and mentoring the next generation of agricultural innovators.",
    email: "john.doe@nsut.ac.in",
    phone: "+91 98765 43210",
    profileLink: "https://nsut.ac.in/faculty/john-doe",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Dr. Jane Smith",
    role: "Co-Chairman",
    department: "Department of Environmental Science",
    description: "An expert in environmental sustainability and hydroponic systems, Dr. Smith has contributed significantly to developing eco-friendly growing solutions and resource optimization techniques.",
    email: "jane.smith@nsut.ac.in",
    phone: "+91 98765 43211",
    profileLink: "https://nsut.ac.in/faculty/jane-smith",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  },
  {
    name: "Dr. Robert Wilson",
    role: "Technical Advisor",
    department: "Department of Electronics Engineering",
    description: "Specializing in automation and IoT solutions for hydroponic systems. Leading the development of smart monitoring and control systems for optimal plant growth.",
    email: "robert.wilson@nsut.ac.in",
    phone: "+91 98765 43212",
    profileLink: "https://nsut.ac.in/faculty/robert-wilson",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
  }
];

export const CoordinatonComittee: FC = () => {
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
    const cards = document.querySelectorAll('.committee-card');
    const photos = document.querySelectorAll('.photo-animate');
    
    cards.forEach((card) => observer.observe(card));
    photos.forEach((photo) => observer.observe(photo));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-inter">
      <div className="bg-gradient-to-r from-primary/90 to-primary py-16 animate-fadeIn shadow-lg">
        <h1 className="text-4xl font-bold text-center font-montserrat mb-6 text-white">
          Coordination Committee
        </h1>
        <p className="text-center mt-4 max-w-3xl mx-auto px-4 text-lg text-white/90">
          Meet our dedicated team of faculty members who coordinate and oversee the Hydroponics Lab activities at NSUT
        </p>
      </div>

      <div className="max-w-5xl mx-auto py-20 px-4">
        <div className="space-y-12">
          {committeeMembers.map((member, index) => (
            <div 
              key={index}
              className="committee-card opacity-0 translate-y-8 overflow-hidden transition-all duration-700 hover:shadow-2xl border border-gray-100 rounded-xl"
            >
              <div className="bg-gradient-to-br from-white via-primary/5 to-primary/10 p-8 hover:bg-gradient-to-br hover:from-primary/5 hover:via-white hover:to-primary/10 transition-all duration-500">
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Profile Image */}
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
                    <p className="text-primary font-medium font-montserrat mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 mb-4">
                      {member.department}
                    </p>
                    <p className="text-gray-500 mb-6 leading-relaxed">
                      {member.description}
                    </p>

                    {/* Contact Information */}
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors duration-300">
                        <FaEnvelope className="text-primary" />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center justify-center md:justify-start gap-2 text-gray-600 hover:text-primary transition-colors duration-300">
                        <FaPhone className="text-primary" />
                        <span>{member.phone}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                      <a
                        href={member.profileLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-full hover:bg-primary/90 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 hover:-translate-y-1"
                      >
                        <FaLinkedin />
                        View Profile
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
