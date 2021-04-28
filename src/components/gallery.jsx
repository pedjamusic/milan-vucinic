import React from 'react'

export default function Gallery( props ) {
  return (
    <img src={ props.src } alt={ props.alt } />
  )
}
