import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import cd from './cd.jpg';
import time from './time.jpeg';
import port from './port.jpeg';
import host from './host.jpeg';
import bank from './bank.jpeg';
import bloo from './bloo.jpeg';
import './resume.css';
import './about.css';

function Project() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <div className="sec2">
      <div className={`container container1 div1 ${animate ? 'animate' : ''}`}>
        <i className="bi bi-square-fill box me-2 mt-5"></i>
        <span className="ex mt-3 mb-5"><strong>Portfolio</strong></span>
      </div>
  
      <h5 className="text-dark mt-4">I have worked on various projects to enhance my skills. Here are some of my notable projects:</h5>

      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active bg-dark" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" className=" bg-dark"  aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" className=" bg-dark"  aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" className=" bg-dark" aria-label="Slide 4" ></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" className=" bg-dark"  aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" className=" bg-dark"  aria-label="Slide 6"></button>
  
  </div>
        <div className="carousel-inner">
          <div className={`carousel-item ${animate ? 'active' : ''}`}>
            <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
              <div className="d-flex justify-content-center align-items-center">
                <div className="card box1 shadow  mb-4 bg-body rounded">
                  <div className="part1 float-start mb-5 ms-5 mt-3">
                    <h3 className="h3 cdh3"><strong>College Doot (Learning Management System)</strong></h3>
                    <span className="sp"><strong>May 2023 - Nov 2023</strong></span><br />
                    <span className="sp1 "><strong>Project Lead</strong></span><br /> <br />
                    <span className="sp1 ">This project involved building a responsive website for colleges/schools, designed to revolutionize educational management in colleges and institutions. My role was to design, develop and deploy the website using Reactjs, Python and MYSQL.</span><br /><br />
                    <span className="mt-4"><strong>Play Video</strong></span><br />    
                    <Link to="/ewgeg5e5y4y">
                      <div className="play-button mt-1">
                        <i className="bi bi-play play-icon "></i>
                      </div>
                    </Link>
                  </div>
                  <div className="container cddiv">
                    <div className="part2 ms-3 mb-5">
                      <img src={cd} alt="" style={{ width: '322px', height: '404px', float: 'right' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`carousel-item`}>

          <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card box1 shadow  mb-4 bg-body rounded">
            <div className="part1 float-start mb-5 ms-5 mt-3">
              <h3 className="h3 cdh3"><strong>Time Table Management System</strong></h3>
              <span className="sp"><strong>Jan 2023 - May 2023</strong></span><br />
              <span className="sp1 "><strong>Project Lead</strong></span><br /> <br />
              <span className="sp1 ">In this project, I developed a Software for a helps to regulate proper schedules and allocate faculty according to their availability by outlining the classes, sections, and other details fed into the system. My role was to create the user interface and implement the functionality using Java and MYSQL.</span><br /><br />
              <span className="mt-4"><strong>Play Video</strong></span><br />    <Link to="/ewgeg5e5y4y">
              <div class="play-button mt-1">
            
          <i className="bi bi-play play-icon "></i>
            </div></Link>
        </div>
            <div className="container cddiv">
          
              <div className="part2 ms-3 mb-5">
                <img src={time} alt="" style={{ width: '322px', height: '404px', float: 'right' }} />
              </div>
            </div>
          </div>
        </div>
        </div>

      </div>
      <div className={`carousel-item`}>    <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card box1 shadow  mb-4 bg-body rounded">
            <div className="part1 float-start mb-5 ms-5 mt-3">
              <h3 className="h3 cdh3"><strong>Portfolio Website</strong></h3>
              <span className="sp"><strong>Dec 2022 - Jan 2023</strong></span><br />
              <span className="sp1 "><strong>Project Lead</strong></span><br /> <br />
              <span className="sp1 ">This project is aimed to developing to get my information to Companys and recruiter by making Protfolio Website.
This based on the existing personal visual identity of the student. This paper is created as an instruction for the reader describing the process of personal online portfolio design simply by defining and explaining the main terms and methods used for web design and development.</span><br /><br />
              <span className="mt-4"><strong>Play Video</strong></span><br />    <Link to="http://diptish-gohane.epizy.com/?i=1">
              <div class="play-button mt-1">
            
          <i className="bi bi-play play-icon "></i>
            </div></Link>
        </div>
            <div className="container cddiv">
          
              <div className="part2 ms-3 mb-5">
                <img src={port} alt="" style={{ width: '322px', height: '404px', float: 'right' }} />
              </div>
            </div>
          </div>
        </div>
      </div>    </div>
      <div className={`carousel-item`}>    <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card box1 shadow  mb-4 bg-body rounded">
            <div className="part1 float-start mb-5 ms-5 mt-3">
              <h3 className="h3 cdh3"><strong>Hostel Management System Software</strong></h3>
              <span className="sp"><strong>Aug 2022 - Dec 2022</strong></span><br />
              <span className="sp1 "><strong>Project Lead</strong></span><br /> <br />
              <span className="sp1 ">This project is expected to limit human works and make hostel allocation much easier for student and hostel administrators with the help of the web application to hostel, naturally select the student from the waiting list and mess billing, out-pass generation, complaint registration.</span><br /><br />
              <span className="mt-4"><strong>Play Video</strong></span><br />    <Link to="/ewgeg5e5y4y">
              <div class="play-button mt-1">
            
          <i className="bi bi-play play-icon "></i>
            </div></Link>
        </div>
            <div className="container cddiv">
          
              <div className="part2 ms-3 mb-5">
                <img src={host} alt="" style={{ width: '322px', height: '404px', float: 'right' }} />
              </div>
            </div>
          </div>
        </div>
      </div>    </div>
      <div className={`carousel-item`}>    <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card box1 shadow  mb-4 bg-body rounded">
            <div className="part1 float-start mb-5 ms-5 mt-3">
              <h3 className="h3 cdh3"><strong>Banking Services Software</strong></h3>
              <span className="sp"><strong>July 2022 - Aug 2022</strong></span><br />
              <span className="sp1 "><strong>Project Lead</strong></span><br /> <br />
              <span className="sp1 ">Banking Services Software was done by C++ language.
Banking services software (BSS) allows customer to perform banking transactions anywhere and at any time without the need ofhuman teller.</span><br /><br />
              <span className="mt-4"><strong>Play Video</strong></span><br />    <Link to="/ewgeg5e5y4y">
              <div class="play-button mt-1">
            
          <i className="bi bi-play play-icon "></i>
            </div></Link>
        </div>
            <div className="container cddiv">
          
              <div className="part2 ms-3 mb-5">
                <img src={bank} alt="" style={{ width: '322px', height: '404px', float: 'right' }} />
              </div>
            </div>
          </div>
        </div>
      </div>    </div>
      <div className={`carousel-item`}>  <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card box1 shadow  mb-4 bg-body rounded">
            <div className="part1 float-start mb-5 ms-5 mt-3">
              <h3 className="h3 cdh3"><strong>Blood Donor Management System</strong></h3>
              <span className="sp"><strong>March 2022 - April 2022</strong></span><br />
              <span className="sp1 "><strong>Project Lead</strong></span><br /> <br />
              <span className="sp1 ">Blood Donor Management software was done by C language. we use this software to store information of blood donors.
Offered friendly and efficient service to customers, handled challenging situations with ease.</span><br /><br />
              <span className="mt-4"><strong>Play Video</strong></span><br />    <Link to="http://diptish-gohane.epizy.com/?i=1">
              <div class="play-button mt-1">
            
          <i className="bi bi-play play-icon "></i>
            </div></Link>
        </div>
            <div className="container cddiv">
          
              <div className="part2 ms-3 mb-5">
                <img src={bloo} alt="" style={{ width: '322px', height: '404px', float: 'right' }} />
              </div>
            </div>
          </div>
        </div>
      </div>     </div>

        </div>
  
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" style={{color: 'black', left: '5%'}}>
  <span className="carousel-control-prev-icon bg-dark" aria-hidden="true" style={{color: 'black'}}></span>
  <span className="visually-hidden">Previous</span>
</button>
<button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" style={{color: 'black', right: '5%'}}>
  <span className="carousel-control-next-icon bg-dark" aria-hidden="true" style={{color: 'black'}}></span>
  <span className="visually-hidden">Next</span>
</button>

      </div>
    </div>
  );
}

export default Project;
