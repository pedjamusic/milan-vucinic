import React from 'react'
import { graphql, Link } from 'gatsby'
import Job from '../components/job'
import JSONData from '../../content/jobs.json'

export default function Landing({data}) {
  const headerInfo = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
  return (
    <main className="w-full md:w-7/12 md:max-w-4xl mx-auto p-4 md:py-8 md:px-0">
      <header>
        <figure className="flex md:block items-center md:items-start">
          <img className="rounded-none md:rounded-md md:mx-auto" src={ headerInfo.photo } alt="Portrait of the user" />
          <div className="text-left md:text-center px-2 md:p-0">
            <figcaption>
              <Link to="/" className="text-2xl">{ headerInfo.name }</Link>
              <h1 className="text-base text-gray-400 text-bold">{ headerInfo.vocation }</h1>
            </figcaption>
            <q className="font-serif italic text-gray-300">{ headerInfo.quote }</q>
          </div>
        </figure>
      </header>
      <article className="experience">
        <h2>Experience <span className="text-sm">(brief)</span></h2>
        <section className="list-of-positions">
          <ul>
            {JSONData.jobs.map((data, index) => {
              return <Job key={index} title={data.title} employer={data.employer} location={data.location} />
            })}
          </ul>
        </section>
      </article>
      <article className="education">
        <h2>Education</h2>
        <section className="list-of-studies mt-0">
          <h3>Bachelor</h3>
          <p>Physical Education Teacher / Kinesiology, Faculty of Sports and Physical Education, University of Novi Sad, Serbia</p>
          <h3>Master</h3>
          <p>Sports Medicine &amp; Physiotherapy, Association of Centers for Inter. &amp; Multidisciplinary Studies and Research, University of Novi Sad, Serbia</p>
          <h3><abbr title="International Coaching Enrichment Certificate Program" className="cursor-help">ICECP</abbr> Certificate - US Olympic Committee, International Olympic Committee</h3>
          <p>University of Delaware, US OTC Colorado Springs, The International Coaching Enrichment Certificate Program</p>
        </section>
      </article>
    </main>
  )
}

export const pageQuery = graphql`
  query landingQuery {
    allFile(filter: {name: {eq: "personal"}}) {
      edges {
        node {
          childMarkdownRemark {
            frontmatter {
              photo
              name
              dob
              vocation
              email
              tel
              marriage
              quote
            }
          }
        }
      }
    }
  }
`