import { useState } from 'react';
import { motion } from 'framer-motion'; 

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submissionStatus, setSubmissionStatus] = useState<null | string>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionStatus("Thank you! We'll get back to you soon.");
    setTimeout(() => setSubmissionStatus(null), 5000);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen pt-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#07370f] mb-6">
            Contact the Hydroponics Lab
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We look forward to hearing from you! Please reach out with any questions or inquiries about our lab and projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-xl h-full"
          >
            <img
              src="/hydro4.jpg" 
              alt="Hydroponics Lab"
              className="w-full h-full object-cover"
            />
          </motion.div>

      
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 h-full"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-[#07370f] mb-2 text-left">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#07370f] 
                           focus:ring-2 focus:ring-[#07370f]/20 transition-all duration-300"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-[#07370f] mb-2 text-left">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#07370f] 
                           focus:ring-2 focus:ring-[#07370f]/20 transition-all duration-300"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-[#07370f] mb-2 text-left">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#07370f] 
                           focus:ring-2 focus:ring-[#07370f]/20 transition-all duration-300"
                  placeholder="Type your message here"
                  required
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#07370f] text-white py-4 px-8 rounded-lg text-lg font-medium
                         hover:bg-[#0a4815] transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </motion.button>

              {submissionStatus && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-[#07370f] text-lg text-center font-medium mt-4"
                >
                  {submissionStatus}
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-gray-600 max-w-3xl mx-auto mt-16 text-center"
        >
          Join us in pushing the boundaries of sustainable hydroponics. Our lab is committed to creating 
          greener solutions and invites all enthusiasts to connect with us.
        </motion.p>
      </div>
    </div>
  );
};
