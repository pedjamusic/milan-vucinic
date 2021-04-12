import React from 'react'

export default function Edu(props) {
  return (
    <>
      <h3>{props.degree}</h3>
      <p>{props.fieldofstudies}, {props.university}</p>
    </>
  )
}