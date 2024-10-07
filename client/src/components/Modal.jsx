import React, { useEffect, useRef } from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

//   useEffect(() => {
//     const handleEscape = (event) => {
//       if (event.key === 'Escape') {
//         onClose();
//       }
//     };

//     const handleClickOutside = (event) => {
//       if (modalRef.current && !modalRef.current.contains(event.target)) {
//         onClose();
//       }
//     };

//     if (isOpen) {
//       document.addEventListener('keydown', handleEscape);
//       document.addEventListener('mousedown', handleClickOutside);
//     }

//     return () => {
//       document.removeEventListener('keydown', handleEscape);
//       document.removeEventListener('mousedown', handleClickOutside);
//     };
//   }, [isOpen, onClose]);

//   if (!isOpen) return null;

  return (
    <div className={`${isOpen ? "fixed" : "hidden"} inset-0 z-50 flex items-center justify-center`}>
      <div className="fixed inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
      <div ref={modalRef} className="bg-[#292929] rounded-lg p-6 z-50  mx-4 ">
        {/* <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          X
        </button> */}
        {children}
      </div>
    </div>
  );
};

export default Modal;