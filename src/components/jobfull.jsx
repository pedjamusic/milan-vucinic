import React from 'react'

export default function JobFull( props ) {
  return (
    <div key={ props.key } className="mb-6">
      {/* Title */}
      <h3>{ props.title }</h3>
      {/* Employer and location conditional */}
      <p>at { props.employer }{ !!props.location ? ", " + props.location : "" }</p>
      {/* Duration */}
      <p>from { props.startdate } to { props.enddate }.</p>
      {/* Description conditional */}
      { !!props.details ? <p className="my-2">{ props.details }</p> : "" }
      {/* Gallery */}
      { !!props.gallery ? props.gallery.map( url => (<img src={ url } alt={ "Working as " + props.title } /> )) : "" }
    </div>
  )
}