import React from 'react'
import { Link } from 'gatsby'
import MilanPhoto from '../assets/milan.jpg'
import { StaticQuery, graphql } from 'gatsby'
// import Image from '../components/image'

export default function Header() {
  return (
    <StaticQuery query={graphql`
      query {
        allFile(filter: {sourceInstanceName: {eq: "content"}, name: {eq: "landing"}}) {
          edges {
            node {
              childMarkdownRemark {
                frontmatter {
                  photo
                  name
                  vocation
                  quote
                  title
                }
              }
            }
          }
        }
      }
    `}
    render={data => (
      <header>
        <figure className="flex md:block items-center md:items-start">
          <img className="rounded-none md:rounded-md md:mx-auto" src={MilanPhoto} alt="Portrait of the user" />
          <div className="text-left md:text-center px-2 md:p-0">
            <figcaption>
            <Link to="/" className="text-2xl">{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.name}</Link>
            <h1 className="text-base text-gray-400 text-bold">{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.vocation}</h1>
            </figcaption>
            <q className="font-serif italic text-gray-300">{data.allFile.edges[0].node.childMarkdownRemark.frontmatter.quote}</q>
          </div>
        </figure>
      </header>
      )}
    />
  )
}
