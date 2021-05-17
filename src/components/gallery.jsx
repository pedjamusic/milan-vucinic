import React from 'react'

export default function Gallery( props ) {
  return (
    <div className="row flex flex-row flex-wrap">
      <div className="column">
        <img src={ props.src } alt={ props.alt } />
      </div>
    </div>
    
  )
}
