import React from "react";
import Icon from "../component/Icon"
const TextInput = ({ name, type, value, className, placeholder, onChange,icon,inputWrapper }) => {
  return (
    <div className={inputWrapper}>
      <input
        name={name}
        type={type}
        value={value}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        
      />
      
      
       
    </div>
  );
};

export default TextInput;
