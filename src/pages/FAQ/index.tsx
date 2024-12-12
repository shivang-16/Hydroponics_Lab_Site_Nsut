import { type FC, useState } from 'react'
import { motion } from 'framer-motion'

export const FAQ: FC = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null)

  const faqItems = [
    {
      question: "What is hydroponics?",
      answer: "Hydroponic gardening is the process of growing plants and vegetables via a mineral-rich water solution, whereby the plants continuously draw on nutrients dissolved in water."
    },
    {
      question: "Is hydroponics a newer technology?",
      answer: "While modern hydroponics has evolved significantly, the basic concept dates back to ancient civilizations. The Hanging Gardens of Babylon, one of the Seven Wonders of the Ancient World, is believed to have used hydroponic principles."
    },
    {
      question: "What are the applications of hydroponics?",
      answer: "Hydroponics has wide-ranging applications including urban farming, commercial agriculture, research facilities, educational purposes, and even space farming experiments by NASA."
    },
    {
      question: "Can hydroponics produce all types of plants?",
      answer: "While many plants can be grown hydroponically, some are more suitable than others. Leafy greens, herbs, tomatoes, and strawberries are particularly well-suited for hydroponic systems."
    },
    {
      question: "Who can benefit from training at the Centre of Excellence in Hydroponics?",
      answer: "Our training programs are designed for students, farmers, entrepreneurs, researchers, and anyone interested in sustainable agriculture and modern farming techniques."
    },
    {
      question: "What type of plants are grown in the Centre's hydroponic systems?",
      answer: "The Centre grows a variety of plants including leafy greens, herbs, vegetables, and some fruits, demonstrating different hydroponic techniques and systems."
    },
    {
      question: "How does hydroponics contribute to sustainability?",
      answer: "Hydroponics uses up to 90% less water than traditional farming, requires less space, eliminates the need for soil, reduces transportation costs, and can provide fresh produce year-round."
    },
    {
      question: "What are the career opportunities after completing the training?",
      answer: "Graduates can pursue careers in commercial hydroponic farming, consulting, research, teaching, or start their own hydroponic business ventures."
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-[#07300f] text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-montserrat mb-4"
          >
            Growing Clarity:
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-3xl text-gray-200"
          >
            Your Questions, Our Answers
          </motion.p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#07300f] py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl font-montserrat text-white mb-8 text-center">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center text-white hover:bg-white/5 transition-colors"
                >
                  <span className="font-medium">{item.question}</span>
                  <svg
                    className={`w-5 h-5 transform transition-transform ${
                      openQuestion === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {openQuestion === index && (
                  <div className="px-6 py-4 text-gray-200">
                    {item.answer}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
} 