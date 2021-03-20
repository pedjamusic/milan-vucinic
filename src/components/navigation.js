import React from 'react'
import { Link } from 'gatsby'

export default function Header() {
  return (
    <nav className="md:text-center mt-4 md:mt-0">
      <h2 className="block md:hidden">Resume Sections</h2>
      <ul>
        <li><Link to="/">Experience</Link></li>
        <li><Link to="/">Education</Link></li>
        <li><Link to="/">Courses</Link></li>
        <li><Link to="/">Achievements</Link></li>
        <li><Link to="/">Notable experience</Link></li>
      </ul>
    </nav>
  )
}