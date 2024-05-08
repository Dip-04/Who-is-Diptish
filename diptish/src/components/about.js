import "../App.css";
import "./about.css";

import pro from './pro.jpg'
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
function About() {
  const [animate, setAnimate] = useState(false);

  
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className={`container container1 m-0 ${animate ? 'animate' : ''}`}>
      <div className="row ">
        <div
          className="col-md-5 m-0"
          style={{ backgroundColor: "#e6dace", height: "566px" }}
        >
    
        </div>
        <div
          className="col-md-7 m-0"
          style={{ backgroundColor: "white", height: "552px" }}
        >
       
        </div>

        <div className="row row1 mt-5 ">
          <div className="imgbox shadow-lg  mb-8 rounded border">
            <div
              className="img"
              style={{ backgroundColor: "#f4ece6", height: "440.4px" }}
            >
              <div>
                <img className="pro" src={pro} alt="" />
                <div className="container container-fluid">
       
          
          <h2 className="mt-4 "><strong>Diptish Gohane</strong></h2>
        </div>
        <div className="container container-fluid">
       
          
       <h5 className=" title1 ">SOFTW </h5>
     </div>
        <div className="container container-fluid">
       
          
       <h5 className="mt-4 title ">SOFTWARE ENGINEER</h5>
     </div>
              </div>
            </div>
            <div
              className="media"
              style={{ backgroundColor: "white",height: "53px" }}
            >   <Link to="https://www.linkedin.com/in/diptish-gohane-263129233/" className="me-3 mt-5"> <i className="bi bi-linkedin i"></i></Link>
              <Link to="https://github.com/Dip-04" className="me-3 mt-5 ms-3"><i className="bi bi-github i"></i></Link>
           
              <Link to="https://www.instagram.com/diptish__gohane04/" className="me-3 mt-5 ms-3"><i className="bi bi-instagram i"></i></Link>
              <Link to="https://twitter.com/DiptishGohane" className="me-3 mt-5 ms-3"><i className="bi bi-twitter i"></i></Link>
            </div>
          </div>
    
        <div
          className="abo "
          style={{  backgroundColor: "white", height: "494.4px" }}
        >
          <div className={`container1 container mt-2 ${animate ? 'animate' : ''}`}>
            <h1 className="hello"><strong>Hello</strong></h1>
            <div className="who ms-4"><h3 className="ms-5">Here's who I am & what I do</h3></div>
          </div>
          <div className={`container 1container mt-4 ${animate ? 'animate' : ''}`}>
            <div className="butt  ">
              <Link className="btn btn-primary me-2 mt-1 resume resume1" to="/resume"><strong>MY RESUME</strong></Link>
              <Link className=" ms-3 mt-1 btn btn-outline-dark project" to="/project"><strong>MY PROJECT</strong> </Link>
            </div>
          </div>
<div className={`container1 container infobox mt-4 ${animate ? 'animate' : ''}`}>I am Diptish Gohane, a software engineer currently pursuing B.Tech in Computer Science from MIT ADT University, Pune, Maharashtra. I have a strong foundation in programming languages such as C++, Python, and Java. I am passionate about innovation and love to work on challenging projects.  I have also worked on various projects related to web development, machine learning, and computer vision.</div>     
</div>
      </div>    </div>
    </div>
  );
}

export default About;
