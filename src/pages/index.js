import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'

export default function Landing({ data }) {
  const headerInfo = data.allFile.edges[0].node.childMarkdownRemark.frontmatter
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
            <li>Head of Strength &amp; Conditioning <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>Professional Volleyball Club, Sweden</span></li>
            <li>Physical Education Teacher <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>International English School, Stockholm, Sweden</span></li>
            <li>Teaching Instructor - Physical Activities <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>Washington State University, WA, US</span></li>
            <li>Assistant Volleyball Coach <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>NCAA / Washington State University, WA, US</span></li>
            <li>Head of Strength &amp; Conditioning <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>Serbian National Volleyball Team, Serbia</span></li>
            <li>Head of Strength &amp; Conditioning <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>Professional Volleyball Club, Serbia</span></li>
            <li>Strength &amp; Conditioning Coach <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>Professional Soccer Club, Serbia</span></li>
            <li>Business Developer–HR Supervisor <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>AABCO Ltd., Dubai, (Serbian branch-office)</span></li>
            <li>Physical Education Teacher <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>Middle School, Serbia</span></li>
            <li>High Performance Sports <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>PRO-athlete conditioning</span></li>
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
  query headerQuery {
    allFile(filter: {name: {eq: "landing"}}) {
      edges {
        node {
          childMarkdownRemark {
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
  }
`