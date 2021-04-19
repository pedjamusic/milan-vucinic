import React from 'react'

export default function Course(props) {
  return (
    <li>
      <span>{ props.coursename }</span>
      { !!props.issuer ? <span className="text-sm text-gray-400"> Issued by {props.issuer}.</span> : "" }
    </li>
  )
}