import React, { useState, useEffect } from 'react';

function Slider() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/731022/pexels-photo-731022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/20787/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/372166/pexels-photo-372166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/164446/pexels-photo-164446.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 7000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="slider-container">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt="Pet"
          className={`image ${currentImageIndex === index ? 'active' : ''}`}
          style={{height:"50vh",width:"100%",objectFit:"cover", borderRadius:"20px"}}
        />
      ))}
    </div>
  );
}

export default Slider;
