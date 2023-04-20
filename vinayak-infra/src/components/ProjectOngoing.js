import React from 'react'
import './Projectstyles.css'
import { Link } from 'react-router-dom'

// import 'bootstrap/dist/css/bootstrap.min.css'
const ProjectOngoing = () => {
  
  return (
    <>
      <div className="main">
  {/* <h1>Responsive Card Grid Layout</h1> */}
  {/* <div className="buttons">
  <button className="btn-ong">Ongoing</button>
  <button className="btn-ong">Completed</button>
  </div> */}

<div id="outer">
  <div className="inner">
    
  <li className='com'>
    <Link to='/projectsong'>Ongoing</Link></li></div>
  <div className="inner">
    
  <li className='com'>
    <Link to='/projectscom'>Completed</Link></li></div>	
</div>

  <ul className="cards">
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://newprojects.99acres.com/projects/laxmidevi_developers/laxmidevi_shree_vasari_hill/images/6ljq877r.jpeg" className='img1' alt='laxmi callista' /></div>
        <div className="card_content">
          <h2 className="card_title">LAXMI RAAJVILAS</h2>
          <p className="card_text">Mulund Link Road,Goregaon(W)</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://www.ghar.tv/projectimages/51385/photo-52333.jpg" className='img2' alt='laxmi heights' /></div>
        <div className="card_content">
          <h2 className="card_title">LAXMI SHRUSTHI</h2>
          <p className="card_text">Sane Guruji Nagar Marg, Off, Mahatma Gandhi Rd</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://www.mumbaipropertyexchange.com/images/builders/projects/28949_main.jpg.ashx?height=350" className='img3' alt='laxmi enclave'/></div>
        <div className="card_content">
          <h2 className="card_title">LAXMI SANSKRUTI</h2>
          <p className="card_text">Goregaon (W)</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://assets.nobroker.in/media/building/8a9fe882848a31c601848aa52dca5217/images/8a9fe882848a31c601848aa52dca5217_project_image_2pMSrFs4Xe1668775352224.jpg" className='img4' alt='samrath shrusti' /></div>
        <div className="card_content">
          <h2 className="card_title">SHANTI HEIGHT</h2>
          <p className="card_text">Mulund (W)</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="http://www.thelaxmigroup.in/images/home-images/annexe.jpg" className='img5' alt='laxmi villa' /></div>
        <div className="card_content">
          <h2 className="card_title">LAXMI ANNEX</h2>
          <p className="card_text">Jawahar Nagar, Goregaon(W)</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li>
    {/* <li className="cards_item">
      <div className="card">
        <div className="card_image"><img src="https://www.commonfloor.com/is/a/c/655x525/public/images/apartments/original_img/p7qhya.gif" className='img5' alt='chamunda jewel' /></div>
        <div className="card_content">
          <h2 className="card_title">CHAMUNDA JEWEL</h2>
          <p className="card_text">Yeshawant Nagar, Goregaon(W)</p>
          <button className="btn card_btn">Read More</button>
        </div>
      </div>
    </li> */}
  </ul>
</div>
    </>
  )
}




export default ProjectOngoing