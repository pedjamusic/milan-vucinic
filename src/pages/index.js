import React from 'react'

import Layout from '../components/layout/layout'
import Job from '../components/sections/job'
import Edu from '../components/sections/edu'
import Course from '../components/sections/course'
import Achievement from '../components/sections/achievement'

import jobsData from '../../content/jobs.json'
import eduData from '../../content/education.json'
import coursesData from '../../content/courses.json'
import achieveData from '../../content/achievements.json'

export default function Landing() {
  return (
    <Layout>
      <article className="experience">
        <h2>Experience <span className="text-sm">(brief)</span></h2>
        <section className="list-of-positions">
          <ul>
            { jobsData.jobs.map( ( data, index ) => { 
              return <Job key={ index } startdate={ data.startdate } enddate={ data.enddate } title={ data.title } employer={ data.employer } location={ data.location } />
            })}
          </ul>
        </section>
      </article>
      <article className="education">
        <h2>Education</h2>
        <section className="list-of-studies mt-0">
          { eduData.education.map( ( data, index ) => { 
            return <Edu key={ index } degree={ data.degree } startdate={ data.startdate } enddate={ data.enddate } fieldofstudies={ data.fos } university={ data.university } />
          })}
        </section>
      </article>
      <article className="courses">
        <h2>Other Qualifications, Courses, Skills</h2>
        <section className="list-of-courses mt-0">
          <ul>
            { coursesData.courses.map( ( data, index ) => { 
              return <Course key={ index } coursename={ data.coursename } issuer={ data.issuer } />
            })}
          </ul>
        </section>
      </article>
      <article className="achievements">
        <h2>Achievemnts</h2>
        <section className="list-of-achievements mt-0">
          <ul>
            { achieveData.achievements.map( ( data, index ) => { 
              return <Achievement key={ index } eventname={ data.event } location={ data.location } achieved={ data.achieved } year={ data.year } />
            })}
          </ul>
        </section>
      </article>
    </Layout>
   )
 }