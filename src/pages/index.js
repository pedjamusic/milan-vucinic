import React from 'react'

import Layout from '../components/layout/Layout'
import JobBrief from '../components/briefs/JobBrief'
import Edu from '../components/briefs/Edu'
import Course from '../components/briefs/Course'
import Achievement from '../components/briefs/Achievement'

import jobsData from '../../content/jobs.json'
import eduData from '../../content/education.json'
import coursesData from '../../content/courses.json'
import achieveData from '../../content/achievements.json'

export default function Landing() {
  return (
    <Layout>
      <section className="experience">
        <h2>Experience <span className="text-sm">(brief)</span></h2>
        <article className="list-of-positions">
          <ul>
            { jobsData.jobs.map(( data, index ) => { 
              return <JobBrief key={ index } startdate={ data.startdate } enddate={ data.enddate } title={ data.title } employer={ data.employer } location={ data.location } />
            })}
          </ul>
        </article>
      </section>
      <section className="education">
        <h2>Education</h2>
        <article className="list-of-studies mt-0">
          { eduData.education.map(( data, index ) => { 
            return <Edu key={ index } degree={ data.degree } startdate={ data.startdate } enddate={ data.enddate } fieldofstudies={ data.fos } university={ data.university } />
          })}
        </article>
      </section>
      <section className="courses">
        <h2>Other Qualifications, Courses, Skills</h2>
        <article className="list-of-courses mt-0">
          <ul>
            { coursesData.courses.map(( data, index ) => { 
              return <Course key={ index } coursename={ data.coursename } issuer={ data.issuer } />
            })}
          </ul>
        </article>
      </section>
      <section className="achievements">
        <h2>Achievemnts</h2>
        <article className="list-of-achievements mt-0">
          <ul>
            { achieveData.achievements.map(( data, index ) => { 
              return <Achievement key={ index } eventname={ data.event } location={ data.location } achieved={ data.achieved } year={ data.year } />
            })}
          </ul>
        </article>
      </section>
    </Layout>
   )
 }