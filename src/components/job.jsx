import React from 'react'

export default function Job(props) {
  return (
    <li key={props.key}><span className="text-xs text-gray-400">From {props.startdate} to {props.enddate} as </span><br />{props.title} <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>{props.employer}{!!props.location ? ", " + props.location : ""}</span></li>
  )
}


// {!!headerInfo.quote ? <q className="font-serif italic text-gray-300">{headerInfo.quote}</q> : <br />}