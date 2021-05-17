import React from 'react'

export default function Gallery( props ) {
  return (
    <div className="column">
      <img className="galerry__img" src={ props.src } alt={ props.alt } />
    </div>    
  )
}
