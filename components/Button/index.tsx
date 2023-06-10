import React from 'react';

interface ButtonProps {

}

const Button = () => {
  return (
    <button
      className='bg-primary'
      style={{
        width: '300px',
        height: '80px',
        filter: 'drop-shadow(0px 20px 40px rgba(89, 86, 233, 0.2))',
        borderRadius:'10px',
        fontWeight:'400',
        fontSize:'24px',
        color:'white',
        lineHeight:'29px',
      }}
    >
        View More
    </button>
  );
};

export default Button;
