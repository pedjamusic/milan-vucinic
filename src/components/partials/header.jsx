import React from 'react'
import { Link } from 'gatsby'

export default function Header( props ) {
  return (
    <header>
      <figure className="flex md:block items-center md:items-start">
        <img className="rounded-none md:rounded-md md:mx-auto" src={ props.imgsrc } alt="Portrait of the user" />
        <div className="text-left md:text-center px-2 md:p-0">
          <figcaption>
            <Link to="/" className="text-2xl">{ props.name }</Link>
            <h1 className="text-base text-gray-400 text-bold">{ props.vocation }</h1>
          </figcaption>
          { !!props.quote ? <q className="font-serif italic text-gray-300">{ props.quote }</q> : <br /> }
        </div>
      </figure>
    </header>
  )
}
