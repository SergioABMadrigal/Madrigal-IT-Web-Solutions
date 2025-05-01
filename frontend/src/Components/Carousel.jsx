import { useState, useEffect, useCallback } from 'react';

const Carousel = () => {
  // Array of image paths to be displayed in the carousel
const images = [
    'assets/carouselPhotos/IMG_0051.webp',
    'assets/carouselPhotos/IMG_0054.webp',
];

  // State to keep track of the currently displayed image index
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false); // State to handle sliding animation

  // Function to handle the "Previous" button click
  // It updates the currentIndex to show the previous image
  const handlePrev = () => {
    if (isSliding) return; // Prevent interaction during sliding
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      setIsSliding(false);
    }, 500); // Match the CSS animation duration
  };

  // Function to handle the "Next" button click
  // It updates the currentIndex to show the next image
  const handleNext = useCallback(() => {
    if (isSliding) return; // Prevent interaction during sliding
    setIsSliding(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      setIsSliding(false);
    }, 500); // Match the CSS animation duration
  }, [isSliding, images.length]);

  // Automatically change to the next image every 7 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 7000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [currentIndex, handleNext]);

  return (
    <div className="relative w-full h-64 overflow-hidden"> {/* Main container for the carousel */}
      <button 
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none" 
        onClick={handlePrev}
      >
        &lt; {/* Left arrow for the "Previous" button */}
      </button>
      <div className="relative w-full h-full"> {/* Container for the current image */}
        <div 
          className={`flex transition-transform duration-500 ease-in-out ${isSliding ? 'sliding' : ''}`} 
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <img 
              key={index} 
              src={image} 
              alt={`Slide ${index + 1}`} 
              className="w-full h-full object-cover flex-shrink-0" 
            />
          ))}
        </div>
      </div>
      <button 
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 focus:outline-none" 
        onClick={handleNext}
      >
        &gt; {/* Right arrow for the "Next" button */}
      </button>
    </div>
  );
};

export default Carousel; // Exporting the Carousel component for use in other parts of the application