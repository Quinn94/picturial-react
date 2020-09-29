import React from 'react';


const Modal = ({selectedImg, setSelectedImg}) => {

  const clickHandler = (event) => {
    if (event.target.classList.contains('backdrop')) {
      setSelectedImg(null)
    }
  }

  return (
    <div className="backdrop" onClick={clickHandler}>
      <img src={selectedImg} alt="enlarged" />
    </div>
  )
};

export default Modal;