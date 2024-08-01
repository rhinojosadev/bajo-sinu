import { useRef, useState } from 'react'

import './style.css';

export const Cubo  = ({images}) => {

  let cube = useRef(null);
  let scene = useRef(null);
  const [ isDragging, setIsDragging ] = useState(false);
  const [ startX, setStartX ] = useState(0);
  const [ startY, setStartY ] = useState(0);
  const [ currentX, seCurrentX ] = useState(0);
  const [ currentY, setCurrentY ] = useState(0);

const handleMouseDownScene = (e) => {
  setIsDragging(true)
  setStartX(e.pageX - currentX);
  setStartY(e.pageY - currentY);
}

const handleMouseUpScene = (e) => {
  setIsDragging(false);
}

const handleMouseMoveScene = (e) => {
  if (isDragging) {
    seCurrentX(e.pageX - startX);
    setCurrentY(e.pageY - startY);
    cube.current.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
  }
}

const handleTouchStartScene = (e) => {
  setIsDragging(true);
  setStartX(e.touches[0].pageX - currentX);
  setStartY(e.touches[0].pageY - currentY);
}


const handleOnTouchedScene = () => {
  setIsDragging(false);
}

const handleOnTouchMoveScene = (e) => {
  if (isDragging) {
    seCurrentX(e.touches[0].pageX - startX);
    setCurrentY(e.touches[0].pageY - startY);
    cube.current.style.transform = `rotateX(${currentY}deg) rotateY(${currentX}deg)`;
  }
}


    return (
    <div 
      ref={scene} 
      onMouseDown={handleMouseDownScene}
      onMouseUp={handleMouseUpScene}
      onMouseMove={handleMouseMoveScene}
      onTouchEnd={handleOnTouchedScene}
      onTouchMove={handleOnTouchMoveScene}
      onTouchStart={handleTouchStartScene}
      className="scene">
        <div ref={cube} className="cube">
          <div className="face front">
            <img src={images} />
          </div>
          <div className="face back">
            <img src={images} />
          </div>
          <div className="face left">
            <img src={images} />
          </div>
          <div className="face right">
            <img src={images} />
          </div>
          <div className="face top">
            <img src={images} />
          </div>
          <div className="face bottom">
            <img src={images} />
          </div>
        </div>
    </div>
    )
}