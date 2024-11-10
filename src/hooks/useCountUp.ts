import { useState, useEffect } from 'react';

interface UseCountUpProps {
  end: number;
}

export const useCountUp = ({ end }: UseCountUpProps) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / 50; // Divide the end value into 50 steps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 40); // Update every 40ms for smooth animation

    return () => clearInterval(timer);
  }, [end]);

  return count;
}; 
