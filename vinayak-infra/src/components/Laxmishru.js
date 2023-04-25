import React from 'react'
import Navbar from './Navbar'

import './LSstyles.css'
import ImageSlider from './ImageSlider'

import { Row_column } from './Row_column'
import FooterP from './FooterProject'
const Laxmishru = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <div className="image3">
        <div className="heading">
          <h1>LAXMI SHRUSTHI</h1>
          <p>Passion For Excellence</p>
        </div>
      </div>
      {/* <Responsivetabs/> */}
      <div className="main">
        <div id="outer">
          <div className="inner">

            <li className='com'>
              <a href='#project_over'>Project Overview</a></li></div>
          <div className="inner">

            <li className='com'>
              <a href='#gallery'>Gallery</a></li></div>
          <div className="inner">

            <li className='com'>
              <a href='#location'>Location</a></li></div>
          <div className="inner">

            <li className='com'>
              <a href='#amenities'>Amenities</a></li></div>
          <div className="inner">

            <li className='com'>
              <a href='#floorplan'>Floor Plan</a></li></div>

          {/* <div className="inner">

            <li className='com'>
              <a href='#brochure'>Download Brochure</a></li></div> */}
        </div>
      </div>
      <div className="features" id='project_over'>
        <div className="rows">
          <div className="text-col">
            <h2>LAXMI SHRUSTHI</h2>
            <p>Goregaon is an upscale neighbourhood in the western suburbs of Mumbai. It is very well connected to most of Mumbai. By investing in a home at Goregaon you get an all-around experience with the most happening lifestyle encounter. Finally get your dream home you were looking for. Amidst superb road, rail and upcoming metro connectivity with an easy access to all the necessary amenities for a luxurious life, this project is the perfect choice for your dream home. Laxmi Shrushti is well connected with the supermarkets, hospitals,schools, parks and more to reveal your vicinity.</p>
          </div>
          <div className="img-col">
            <img src="http://www.thelaxmigroup.in/laxmishrushti/assets/images/about.png" alt='ls' />
          </div>
        </div>
        <hr style={{ opacity: "0.5" }} />
      </div>

      <div id="gallery">
        <h1 style={{ textalign: "center" }}>Gallery</h1>
        <ImageSlider/>
      </div>

      <div id='location'>
          <h1 className='loch1'>How Get Here</h1>
          <h2 id="add">Address</h2>
          <p id='loc_add'>Sane Guruji Nagar Marg, Near Police Quarters, Teen Dongari, Goregaon West, Mumbai, Maharashtra 400062.</p>
        </div>

      <div id="amenities">
        <h1 className='amen1'>Amenities</h1>
        {/* <Carousel/> */}
        <Row_column/>
      </div>

        

      <div id='floorplan'>
        <h1>FloorPlan</h1>
        <img src="http://www.thelaxmigroup.in/laxmi-raajvilas/image/floorplans_jpeg/TYPICAL%20FLOOR%20PLAN.jpg" alt="floorPlan" />
      </div>
    </div>


    <div id="maha_rera">
      <p id="maha_p">MahaRERA Registration No : P51800020965 | Also available at <a id='maha_a' href="https://maharera.mahaonline.gov.in" target='_blank' rel='noopener'>maharera website</a></p>
    </div>

    <FooterP/>
    </>
  )
}

export default Laxmishru
