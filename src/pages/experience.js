import React from 'react'

import Layout from '../components/layout/layout'
import JobFull from '../components/jobfull'

import jobsData from '../../content/jobs.json'

export default function Experience() {
  return (
    <Layout>
      <article className="experience">
        <h2>Experience</h2>
        <section className="list-of-positions">
          { jobsData.jobs.map( ( data, index ) => {
            return <JobFull key={ index } title={ data.title } employer={ data.employer } startdate={ data.startdate } enddate={ data.enddate } location={ data.location } details={ data.details } gallery={ data.gallery } />
            })
          }
        </section>
      </article>
    </Layout>
  )
}