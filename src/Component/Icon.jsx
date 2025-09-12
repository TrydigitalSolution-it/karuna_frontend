import React from 'react'
const Icon = ({name,className,src,onClick}) => {

  return (
    <div className='Icon_img'>
        <img
          src={src} 
          alt={name}
          className={className}
          onClick={onClick}
        />
     
    </div>
  )
}

export default Icon;
