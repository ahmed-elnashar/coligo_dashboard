import React from 'react';

const Button = ({ icon, color, bgColor, text, size, borderRadius, onClick }) => {
  return (
    <div>
      <button
        type='button'
        style={{ backgroundColor: bgColor, color, borderRadius }}
        className={`text-${size} p-3 hover:drop-shadow-xl`}
        onClick={onClick}
      >
        {icon && icon} {text}
      </button>
    </div>
  );
};

export default Button;