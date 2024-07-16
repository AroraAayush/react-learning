import React from 'react'
import './client.css'
import Companies from './Companies'
function Clients() {
  return (
    <section id="clients">
      <div className="clientsText">
        <h2>My Clients</h2>
        <p>I have had the opportunity to work with a diverse group of companies . Some of the notable companies I have worked with include.</p>
      </div>
      <Companies/>
    </section>
  )
}

export default Clients
