import React from 'react'
import { Link } from 'gatsby'

export default function NotFound() {
  return (
    <div>
      <h1>Page not found.</h1>
      <p><Link to="/">Go back</Link> to homepage.</p>
    </div>
  )
}