import React from 'react'
import marriage from "../assets/marriage.jpg";
import '../assets/styles/about.css'

const About = () => {
  return (
    <>
  
  <div className="about_section">
    <div className="row  about">
      <div className="col-sm-12 col-md-6 col-lg-5 img-section">
        <img src={marriage} alt="no-img" loading="lazy" decoding="async" />
      </div>
      <div className="col-sm-12 col-md-6 col-lg-7  text-section">
        <h2>
          More than photographs  <br />
- memories that   <br /> stay with you
        </h2>
        <p>I believe in capturing the quiet spaces between the grand moments. My approach blends editorial elegance with candid authenticity, resulting in images that feel both beautifully composed and profoundly real.</p>

      <div>
        <h4>✧ Personalized Experience</h4>
        <p>Every session is tailored to your unique story, ensuring you feel comfortable and completely yourself.</p>
      </div>
      <div>

        <h4>▣ Natural & Candid Direction</h4>
        <p>I gently guide rather than stiffly pose, allowing genuine emotion and authentic connections to shine through.</p>
      </div>

      <div>
        <h4>☷ Timeless Editing</h4>
        <p>My signature editing style favors natural, true-to-life colors that will look as beautiful in fifty years as they do today.</p>
      </div>

      <hr />

      <h4>Aurelia</h4>

      </div>
      
    </div>
  </div>
    
    </>
  )
}

export default About