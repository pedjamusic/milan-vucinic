import React from 'react'

import Pac from '/static/assets/svg/Pac-12_Logo.svg'
import Wsu from '/static/assets/svg/WSU_Logo.svg'
import Fivb from '/static/assets/FIVB_Logo.png'

export default function IconsList() {
  return (
    <ul className="flex flex-row">
      <li className="flex-initial w-16"><Pac /></li>
      <li className="flex-initial w-16"><Wsu /></li>
      <li><Fivb /></li>
    </ul>
  )
}