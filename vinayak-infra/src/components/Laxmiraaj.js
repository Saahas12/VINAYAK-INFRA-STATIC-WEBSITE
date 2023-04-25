import React from 'react'
import Navbar from './Navbar'
// import Responsivetabs from './Responsivetabs'
// import './Rt.css'
import './LRstyles.css'
import ImageSlider from './ImageSlider'
// import { Carousel } from './Carousel'
import { Row_column } from './Row_column'
import FooterP from './FooterProject'
const Laxmiraaj = () => {
  return (
    <>
    <div>
      <Navbar></Navbar>
      <div className="image">
        <div className="heading">
          <h1>LAXMI RAJVILLAS</h1>
          <p>A Symbol of Classical Elegance</p>
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
            <h2>LAXMI RAJVILLAS</h2>
            <p>Laxmi Raajvilas is the ultimate frontier of splendour. It is a perfect amalgamation of resplendent beauty with a heritage look and an architectural marvel beyond words. The property is an imposing architectural creation decked in breathtaking gardens, magnificent carvings, beautiful Chhatris, stunning Jharokhas, and designer parks. Imagine living in homes bathed in magnificent and aristocratic look with distinctly unique modern amenities and décor. The sheer grandeur of the classical abode welcomes you to the unrivalled world of exquisite living with stately amenities. Raajvilas, a Rajasthani-themed residential development on the Goregaon-Mulund Link Road at the Upper Sunder Nagar, Goregaon West, Mumbai, is regal in its demeanour and the experiences that it offers.</p>
          </div>
          <div className="img-col">
            <img src="http://www.thelaxmigroup.in/images/resources/splend.jpeg" alt='lr' />
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
          <p id='loc_add'>New, Goregaon - Mulund Link Rd, near MTNL Telephone Exchange, Malad, Sunder Nagar, Malad West, Mumbai, Maharashtra 400104</p>
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

export default Laxmiraaj