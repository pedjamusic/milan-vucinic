import React from "react"
import { Link } from "gatsby"
import MilanPhoto from "../assets/milan.jpg"

export default function Home() {
  return (
    <div id="root" className="dark:bg-gray-800 dark:text-white h-screen">
      <main className="lg:w-8/12 w-full mx-auto py-4 lg:py-8">
        <header className="text-center">
          <figure>
            <img className="rounded-md mx-auto" src={MilanPhoto} alt="Milan smiling on his portrait" />
            <Link to="/" className="text-2xl">Milan Vucinic</Link>
            <h1 className="text-base text-gray-400 text-bold">Strength &amp; Conditioning Coach</h1>
          </figure>
        </header>
        <h2>Experience <span className="text-sm">(brief)</span></h2>
        <ul>
          <li>Head of Strength &amp; Conditioning</li>
          <li>Physical Education Teacher</li>
          <li>Teaching Instructor - Physical Activities</li>
          <li>Assistant Volleyball Coach</li>
          <li>Head of Strength &amp; Conditioning</li>
          <li>Head of Strength &amp; Conditioning</li>
          <li>Strength &amp; Conditioning Coach</li>
          <li>Business Developer–HR Supervisor</li>
          <li>Physical Education Teacher</li>
          <li>High Performance Sports</li>
        </ul>
        <h2>Education</h2>
        <h3>Bachelor</h3>
        <p>Physical Education Teacher / Kinesiology, Faculty of Sports and Physical Education, University of Novi Sad, Serbia</p>
        <h3>Master</h3>
        <p>Sports Medicine &amp; Physiotherapy, Association of Centers for Inter. &amp; Multidisciplinary Studies and Research, University of Novi Sad, Serbia</p>
        <h3><abbr title="International Coaching Enrichment Certificate Program" className="cursor-help">ICECP</abbr> Certificate - US Olympic Committee, International Olympic Committee</h3>
        <p>University of Delaware, US OTC Colorado Springs, The International Coaching Enrichment Certificate Program</p>
      </main>
    </div>
  )
}
