import React from 'react'
import Header from '../components/header'

export default function Home() {
  return (
    <div id="root">
      <main className="w-full md:w-7/12 md:max-w-2xl mx-auto p-4 md:py-8 md:px-0">
        <Header />
        <article className="experience">
          <h2>Experience <span className="text-sm">(brief)</span></h2>
          <section className="list-of-positions">
            <ul>
              <li>Head of Strength &amp; Conditioning <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>Professional Volleyball Club, Sweden</span></li>
              <li>Physical Education Teacher <span className="block lg:float-right text-gray-400"><span className="inline lg:hidden">@</span>International English School, Stockholm, Sweden</span></li>
              <li>Teaching Instructor - Physical Activities</li>
              <li>Assistant Volleyball Coach</li>
              <li>Head of Strength &amp; Conditioning</li>
              <li>Head of Strength &amp; Conditioning</li>
              <li>Strength &amp; Conditioning Coach</li>
              <li>Business Developer–HR Supervisor</li>
              <li>Physical Education Teacher</li>
              <li>High Performance Sports</li>
            </ul>
          </section>
        </article>
        <article className="education">
          <h2>Education</h2>
          <article className="list-of-studies mt-0">
            <h3>Bachelor</h3>
            <p>Physical Education Teacher / Kinesiology, Faculty of Sports and Physical Education, University of Novi Sad, Serbia</p>
            <h3>Master</h3>
            <p>Sports Medicine &amp; Physiotherapy, Association of Centers for Inter. &amp; Multidisciplinary Studies and Research, University of Novi Sad, Serbia</p>
            <h3><abbr title="International Coaching Enrichment Certificate Program" className="cursor-help">ICECP</abbr> Certificate - US Olympic Committee, International Olympic Committee</h3>
            <p>University of Delaware, US OTC Colorado Springs, The International Coaching Enrichment Certificate Program</p>
          </article>
        </article>
      </main>
    </div>
  )
}
