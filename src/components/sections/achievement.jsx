import React from 'react'

export default function Achievement( props ) {
  return (
    <li>
      <span>Achieved { props.achieved } on { props.eventname } <span className="text-sm text-gray-400">({ props.year })</span> { !!props.location ? "in " + props.location : "" }</span>
    </li>
  )
}