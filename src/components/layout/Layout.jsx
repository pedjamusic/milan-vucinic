import React from 'react'
import { useLocation } from '@reach/router'

import Header from '../partials/Header'
import Navigation from '../partials/Navigation'
import Footer from '../partials/Footer'

import headerData from '../../../content/personal.json'

export default function Layout({ children }) {
  
  const location = useLocation()

  return ( 
    <main className="w-full md:w-7/12 md:max-w-2xl mx-auto p-4 md:py-8 md:px-0">
      <Header imgsrc={ headerData.photo } name={ headerData.name } vocation={ headerData.vocation } quote={ headerData.quote } />
      <Navigation />
      { children }
      { location.pathname === '/' ? null : <Footer /> }
    </main>
  )
}