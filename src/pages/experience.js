import React from 'react'

import JobFull from '../components/jobfull'

import jobsData from '../../content/jobs.json'

export default function Landing() { 
  return (
    <main className="w-full md:w-7/12 md:max-w-4xl mx-auto p-4 md:py-8 md:px-0">
      <article className="experience">
        <h2>Experience</h2>
        <section className="list-of-positions">
          <ul>
            { jobsData.jobs.map( ( data, index ) => { 
              return <JobFull key={ index } title={ data.title } employer={ data.employer } startdate={ data.startdate } enddate={ data.enddate } location={ data.location } details={ data.details } gallery={ data.gallery } />
             } ) }
          </ul>
        </section>
      </article>
    </main>
  )
}