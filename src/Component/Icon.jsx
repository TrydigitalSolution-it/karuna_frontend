import React from 'react'
const Icon = ({name,className,src}) => {

  return (
    <div className='Icon_img'>
        <img
          src={src} 
          alt={name}
          className={className}
        />
     
    </div>
  )
}

export default Icon;
