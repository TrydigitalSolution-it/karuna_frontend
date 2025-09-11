import React from "react";

interface ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "submit" | "reset" | "button" | undefined;
  className: string;
  buttonWrapper: string;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setInputs: React.Dispatch<
    React.SetStateAction<{
      name: string;
      email: string;
      id: number;
    }>
  >;
}

const Button: React.FC<ButtonProps> = ({
  text,
  type = "button",
  onClick,
  className,
  buttonWrapper,
  setIsOpen,
  setInputs,
}) => {
  return (
    <div className={buttonWrapper}>
      <button type={type} onClick={onClick} className={className}>
        {text}
      </button>
    </div>
  );
};

export default Button;
