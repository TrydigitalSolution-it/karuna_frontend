import React from 'react'

interface ButtonProps{
  text: string;
  onClick:(event:React.MouseEvent<HTMLButtonElement>) =>void;
  type?: "submit" | "reset" | "button" | undefined;
  className: string;
  buttonWrapper: string
  
}

const Button: React.FC<ButtonProps> = ({ text,type,onClick,className,buttonWrapper}) => {
  return (
    <div className={buttonWrapper}>
      <button  type={type} onClick={onClick} className={className}>{text}</button>
    </div>
  )
}

export default Button
