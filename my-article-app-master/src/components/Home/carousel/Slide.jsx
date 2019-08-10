import React from 'react';
const Slide = ({slide,activeClass}) => {
    return ( 
          <div className={activeClass ? "carousel-item active" : "carousel-item" }>
            <img className="image" src={slide.img} alt="" />
            <h1 className="caption">{slide.caption}</h1>
          </div>
     );
}
 
export default Slide;
