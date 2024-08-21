import React from 'react';

const StyledButton = ({ children, variant, as: Component = 'button', ...props }) => {
  const baseClasses = "text-xl border-2 transition-transform duration-300 ease-in-out rounded-full p-4 mt-14 mr-4 font-bold inline-block"; // Added inline-block for scale to work
  const hoverClasses = "hover:scale-105"; // Hover effect for scaling
  const variantClasses = {
    white: "bg-white text-black", 
    transparent: "text-white", 
  };

  return (
    <Component className={`${baseClasses} ${variantClasses[variant]} ${hoverClasses}`} {...props}>
      {children}
    </Component>
  );
};

export default StyledButton;
