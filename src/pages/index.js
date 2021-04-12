import React from 'react'
import { graphql, Link } from 'gatsby'
import Job from '../components/job'
import jobsData from '../../content/jobs.json'
import Edu from '../components/edu'
import eduData from '../../content/education.json'

export default function Landing({data}) {
  const headerInfo = data.allMarkdownRemark.edges[0].node.frontmatter
  return (
    <main className="w-full md:w-7/12 md:max-w-4xl mx-auto p-4 md:py-8 md:px-0">
      <header>
        <figure className="flex md:block items-center md:items-start">
          <img className="rounded-none md:rounded-md md:mx-auto" src={headerInfo.photo} alt="Portrait of the user" />
          <div className="text-left md:text-center px-2 md:p-0">
            <figcaption>
              <Link to="/" className="text-2xl">{headerInfo.name}</Link>
              <h1 className="text-base text-gray-400 text-bold">{headerInfo.vocation}</h1>
            </figcaption>
            <q className="font-serif italic text-gray-300">{headerInfo.quote}</q>
          </div>
        </figure>
      </header>
      <article className="experience">
        <h2>Experience <span className="text-sm">(brief)</span></h2>
        <section className="list-of-positions">
          <ul>
            {jobsData.jobs.map((data, index) => {
              return <Job key={index} title={data.title} employer={data.employer} location={data.location} />
            })}
          </ul>
        </section>
      </article>
      <article className="education">
        <h2>Education</h2>
        <section className="list-of-studies mt-0">
          {eduData.education.map((data, index) => {
            return <Edu key={index} degree={data.degree} fieldofstudies={data.fos} university={data.university} />
          })}
        </section>
      </article>
    </main>
  )
}

export const landingQuery = graphql`
  query landingQuery {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            photo
            name
            vocation
            quote
          }
        }
      }
    }
  }
`