import React from 'react'

const Card = ({ children, className }) => {
  return (
    <div className={`card-wrapper`}>
      <div className={`content p-0 ${className}`}>
        {children}
      </div></div>
  )
}

export default Card