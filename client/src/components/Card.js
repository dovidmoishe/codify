import React from 'react'
import '../css/card.css'
import { ImCross } from 'react-icons/im';
export default function Card({title,code}) {
  return (
    <section>
        <div className='card_container'>
            <div className='title'>
            <h3>{title.substring(0,23)} {title.length>23 && "......"}</h3>
            <h2><ImCross /></h2>
            </div>
            <p>{code.substring(0,76)} {title.length>56 && "......"}</p>
        </div>
    </section>
  )
}
