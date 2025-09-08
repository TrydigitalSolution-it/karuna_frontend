import React from 'react'

interface ButtonProps{
  text: string;
  onClick:(event:React.MouseEvent<HTMLButtonElement>) =>void;
  type?: "submit" | "reset" | "button" | undefined;
  className: string;
  
}

const Button: React.FC<ButtonProps> = ({ text,type,onClick,className}) => {
  return (
    <div>
      <button  type={type} onClick={onClick} className={className}>{text}</button>
    </div>
  )
}

export default Button
