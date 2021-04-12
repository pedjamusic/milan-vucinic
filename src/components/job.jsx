import React from 'react'

export default function Job(props) {
  return (
    <li key={props.key}>{props.title} <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>{props.employer}{", " + props.location}</span></li>
  )
}