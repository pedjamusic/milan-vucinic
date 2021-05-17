import React from 'react'
import Gallery from './gallery'

export default function JobFull( props ) {

  return (
    <div key={ props.key } className="mb-6">
      {/* Title */}
      <h3>{ props.title }</h3>

      {/* Employer and location (if any) */}
      <p>at { props.employer }{ !!props.location ? ", " + props.location : "" }</p>

      {/* Duration */}
      <p className="mb-2">from { props.startdate } to { props.enddate }.</p>

      {/* Description (if any) */}
      { !!props.details ? <p className="mb-4">{ props.details }</p> : "" }

      {/* Gallery (if any) */}
      {/* <div className="row flex flex-row flex-wrap"> */}
      <div className={`row gallery grid grid-cols-${props.gallerysrc.length} grid-rows-1`}>
      { props.gallerysrc &&
          props.gallerysrc.length > 1 ? props.gallerysrc.map( url => (
            <Gallery src={ url } alt={ "Working as " + props.title } /> ))
            : <img className="column" src={ props.gallerysrc } alt={ "Working as " + props.title } />
      }
      </div>
    </div>
  )
}