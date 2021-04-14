import React from 'react'

import Layout from '../components/layout'
import Job from '../components/job'
import Edu from '../components/edu'

import jobsData from '../../content/jobs.json'
import eduData from '../../content/education.json'

export default function Landing() { 
  return (
    <Layout>
      <article className="experience">
        <h2>Experience <span className="text-sm">(brief)</span></h2>
        <section className="list-of-positions">
          <ul>
            { jobsData.jobs.map( ( data, index ) => { 
              return <Job key={ index } startdate={ data.startdate } enddate={ data.enddate } title={ data.title } employer={ data.employer } location={ data.location } />
            } ) }
          </ul>
        </section>
      </article>

      <article className="education">
        <h2>Education</h2>
        <section className="list-of-studies mt-0">
          { eduData.education.map( ( data, index ) => { 
            return <Edu key={ index } degree={ data.degree } startdate={ data.startdate } enddate={ data.enddate } fieldofstudies={ data.fos } university={ data.university } />
          } ) }
        </section>
      </article>
    </Layout>
   )
 }