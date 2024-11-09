import { useState, useEffect } from 'react';

const images = [
  '/hydroponics1.jpg',  // Make sure these images are in your public folder
  '/hydroponics2.jpg',
  '/hydroponics3.jpg'
];

export const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden rounded-lg">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ease-in-out
            ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <img
            src={image}
            alt={`Hydroponics Lab ${index + 1}`}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      ))}
      
      {/* Dots indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 
              ${index === currentIndex ? 'bg-white w-4' : 'bg-white/50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}; 