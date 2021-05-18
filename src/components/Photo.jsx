import React from 'react'

export default function Photo( props ) {
  return (
    <img className="galerry__img" src={ props.src } alt={ props.alt } />
  )
}
