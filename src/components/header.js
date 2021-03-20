import React from 'react'
import { Link } from 'gatsby'
import MilanPhoto from '../assets/milan.jpg'

export default function Header() {
  return (
    <header>
      <figure className="flex md:block items-center md:items-start">
        <img className="rounded-none md:rounded-md md:mx-auto" src={MilanPhoto} alt="Milan smiling on his portrait" />
        <div className="text-left md:text-center px-2 md:p-0">
          <figcaption>
          <Link to="/" className="text-2xl">Milan Vucinic</Link>
          <h1 className="text-base text-gray-400 text-bold">Strength &amp; Conditioning Coach</h1>
          </figcaption>
          <q className="font-serif italic text-gray-300">Lorem ipsum, dolor sit amet consectetur adipisicing elit.</q>
        </div>
      </figure>
    </header>
  )
}
