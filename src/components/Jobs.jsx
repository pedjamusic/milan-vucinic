import React, { useState } from 'react'

import Photo from './Photo'

import FsLightbox from 'fslightbox-react'


export default function Jobs( props ) {
  
  const [toggler, setToggler] = useState(false);

  if ( props.gallerysrc ) {
    if ( props.gallerysrc.length > 1 ) {
      var galleryRender = (
        <>
          <button className="underline hover:text-blue-500 text-left" onClick={() => setToggler(!toggler)}>(englarge photo gallery)</button>
          <div className={`row gallery grid grid-rows-1 grid-cols-${props.gallerysrc.length}`}>
            { props.gallerysrc.map( url => ( <Photo src={ url } alt={ "Working as " + props.title } /> )) }
          </div>
          <FsLightbox 
            toggler={ toggler } 
            sources={ props.gallerysrc }
          />
        </>
      )
    } else {
      var galleryRender = <Photo src={ props.gallerysrc } alt={ "Working as " + props.title } />
    }
  } else {
    var galleryRender = null
  }

  return (
    <div key={ props.key } className="mb-6">
      {/* Title */}
      <h3>{ props.title }</h3>

      {/* Employer and location (if any) */}
      <p className="text-gray-500">at { props.employer }{ !!props.location && ", " + props.location }</p>

      {/* Duration */}
      <p className="mb-2 text-gray-400">from { props.startdate } to { props.enddate }.</p>

      {/* Description (if any) */}
      { props.details && <p className="mb-4 text-sm max-w-prose">{ props.details }</p> }

      {/* Gallery (if any) */}
      { galleryRender }
    </div>
  )
}