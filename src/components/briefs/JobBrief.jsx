import React from 'react'

export default function JobBrief( props ) {
  return (
    <li key={ props.key }><span className="text-sm text-gray-400">From { props.startdate } to { props.enddate } as </span><br />{ props.title } <span className="block lg:float-right text-gray-500"><span className="inline lg:hidden">@</span>{ props.employer }{ !!props.location ? ", " + props.location : "" }</span></li>
  )
}