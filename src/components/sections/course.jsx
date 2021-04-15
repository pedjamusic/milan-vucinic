import React from 'react'

export default function Course(props) {
  return (
    <>
      <h3>{ props.coursename }</h3>
      { !!props.issuer ? <p>Issued by {props.issuer}.</p> : "" }
    </>
  )
}