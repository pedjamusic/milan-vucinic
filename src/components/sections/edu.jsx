import React from 'react'

export default function Edu( props ) {
  return (
    <>
      <h3>{ props.degree } <span className="text-sm text-gray-400 font-normal">(from { props.startdate } to { props.enddate })</span></h3>
      <p>{ props.fieldofstudies }, { props.university }</p>
    </>
  )
}