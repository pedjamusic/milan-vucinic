import React from 'react'

import Layout from '../components/layout/Layout'
import Jobs from '../components/Jobs'

import jobsData from '../../content/jobs.json'

export default function Experience() {
  return (
    <Layout>
      <section className="experience">
        <h2>Experience</h2>
        <article className="list-of-positions">
          { jobsData.jobs.map( ( data, index ) => {
            return <Jobs key={ index } title={ data.title } employer={ data.employer } startdate={ data.startdate } enddate={ data.enddate } location={ data.location } details={ data.details } gallerysrc={ data.gallerysrc } />
            })
          }
        </article>
      </section>
    </Layout>
  )
}