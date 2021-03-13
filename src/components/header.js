import React from 'react'
import MilanPhoto from '../assets/milan.jpg'
import { Link } from 'gatsby'

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
            <nav className="md:text-center mt-4 md:mt-0">
                <h2 className="block md:hidden">Resume Sections</h2>
                <ul>
                <li>
                    <Link to="/">Experience</Link>
                </li>
                <li>
                    <Link to="/">Education</Link>
                </li>
                <li>
                    <Link to="/">Courses</Link>
                </li>
                <li>
                    <Link to="/">Achievements</Link>
                </li>
                <li>
                    <Link to="/">Notable experience</Link>
                </li>
                </ul>
            </nav>
        </header>
    )
}
