import React from 'react'

export default function JobFull( props ) { 
  return (
    <div key={ props.key }>
      <p>Worked as</p>
      <h3>{ props.title }</h3>
      <p>at { props.employer }{ !!props.location ? ", " + props.location : "" }</p>
      <p>from { props.startdate } to { props.enddate }.</p>
      <p>{ props.details }</p>
      <img src={ props.gallery } alt={"Working as " + props.title } />
    </div>
  )
}