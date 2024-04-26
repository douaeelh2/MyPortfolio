import React from "react";

const Button = ({ styles , text}) => (
  <button type="button" className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
    <a href="https://drive.google.com/file/d/1C9pqbcA2Q5qjNDyxX3Agq5tiU6EjTzRG/view?usp=sharing">{text}</a>
  </button>
);

export default Button;
