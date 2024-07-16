import React from 'react'
import './client.css'
import facebook from '../../assets/facebook.png'
import walmart from '../../assets/walmart.png'
import adobe from '../../assets/adobe.png'
import microsoft from '../../assets/microsoft.png'

function Companies() {
  return (
    <div id='companiesList'>
      <img src={facebook} alt="Facebook" className="companyImg" />
      <img src={adobe} alt="" className="companyImg" />
      <img src={microsoft} alt="" className="companyImg" />
      <img src={walmart} alt="" className="companyImg" />
    </div>
  )
}

export default Companies
