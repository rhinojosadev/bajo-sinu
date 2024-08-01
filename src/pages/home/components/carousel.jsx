import  Hero1  from '../../../assets/images/hero1.png';
import React, { useState } from 'react';

import './style.css';

export const Carousel = ({children}) => {

    const [scrollAmount, setScrollAmount] = useState(0);
    const carouselRef = React.createRef();
  
    const handleNext = () => {
      if (carouselRef.current) {
        if (scrollAmount < (carouselRef.current.scrollWidth - carouselRef.current.clientWidth)) {
          setScrollAmount(scrollAmount + carouselRef.current.clientWidth);
          carouselRef.current.scrollTo({
            top: 0,
            left: scrollAmount + carouselRef.current.clientWidth,
            behavior: 'smooth'
          });
        }
      }
    };
    const handlePrev = () => {
        if (carouselRef.current) {
          if (scrollAmount > 0) {
            setScrollAmount(scrollAmount - carouselRef.current.clientWidth);
            carouselRef.current.scrollTo({
              top: 0,
              left: scrollAmount - carouselRef.current.clientWidth,
              behavior: 'smooth'
            });
          }
        }
      };

    return (
        <div className="relative w-full">
            <div ref={carouselRef} className="carousel flex overflow-hidden scroll-snap-x mandatory">
                <div className="carousel-item min-w-full scroll-snap-start">
                <img src={Hero1} className="w-full" alt="Slide 1" />
                </div>
                <div className="carousel-item min-w-full scroll-snap-start">
                <img src={Hero1} className="w-full" alt="Slide 2" />
                </div>
                <div className="carousel-item min-w-full scroll-snap-start">
                <img src={Hero1} className="w-full" alt="Slide 3" />
                </div>
            </div>
            <button onClick={handlePrev} className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">Prev</button>
            <button onClick={handleNext} className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg">Next</button>
            {children}
        </div>
    )
}