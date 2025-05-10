import React from 'react'

const ContactButton = ({ text, variant = 'dark', onClick }) => {
  const variantClasses =
    variant === 'light'
      ? 'bg-white text-black border-black hover:bg-[#0c0c0c] hover:text-white'
      : 'bg-[#0c0c0c] text-white border-white hover:bg-white hover:text-black';

  return (
    <button
      onClick={onClick}
      className={`contact-button w-[250px] border px-4 py-6 uppercase text-button transition-colors duration-300 ${variantClasses}`}
    >
      {text}
    </button>
  );
};

export default ContactButton