import React from 'react'

export default function Achievement( props ) {
  return (
    <>
      <h3>{ props.eventname } <span className="text-sm text-gray-400">({ props.year })</span></h3>
      <p>Achieved { props.achieved } in { props.location }</p>
    </>
  )
}