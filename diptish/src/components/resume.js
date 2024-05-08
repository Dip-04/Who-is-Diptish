
import "./resume.css"
import "./about.css"

import React, { useEffect, useState } from "react";
import resume from "./resume2024.pdf"
function Resume() {
  const [animate, setAnimate] = useState(false);

  
  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <section className="sec ">

  <div className={`container container1  div1 ${animate ? 'animate' : ''}`}>
    <i className="bi bi-square-fill box me-2 mt-5"></i>
   <span className="ex mt-3"><strong>Experience</strong></span>
  </div>
  <div className={`container container1 mt-4  div2 ${animate ? 'animate' : ''}`}>
    <span className="work  me-5"><strong>Work Experience</strong></span>
    <a href={resume} download="resume2024.pdf" className="btn btn-primary mb-2 resume">
  <strong>DOWNLOAD RESUME</strong>
</a>
  </div>
  <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
  <div className="d-flex justify-content-center align-items-center">
    <div className="card  box1 w-50 shadow p-2 mb-4 bg-body rounded">      
          <div className="part1 float-start mb-5 ms-5 me-3 mt-3">
            <h3 className="h3"><strong>OCT 2022 - OCT 2023</strong></h3>
            <span className="sp"><strong>Technical Member</strong></span><br />
            <span className="sp1"><strong>GFG MITADT Student Chapter</strong></span><br />
            <span className="sp1">Pune, Maharashtra</span>
          </div>
          <div className="container mt-5">

          <div className="part2 ms-3 mb-5">As a Technical Member at GFG MITADT Student Chapter, I developed and implemented technical solutions to real-world problems. My key responsibilities included coding, testing, and debugging software applications. I collaborated with team members to deliver high-quality work within tight deadlines.</div>
        </div>
    
    </div>
  </div>
</div>
<div className="mt-5 mb-5"></div>
<div className={`container container1 edu mt-5  div2 ${animate ? 'animate' : ''}`}>
    <span className="work  me-5"><strong>Education</strong></span>
  </div>
<div>
<div className="vertical-line"></div> {/* Vertical line */}

<div className={`container container1 mt-4 div3  ${animate ? 'animate' : ''}`}>
  <div className="d-flex justify-content-center align-items-center">
    <div className="card box1 w-50 shadow p-2 mb-4 bg-body rounded">
          <div className="part1 ms-5 float-start mb-5 me-3 mt-3">
            <h3 className="h3"><strong>OCT 2021 - 2025</strong></h3>
            <span className="sp"><strong>MIT ADT University</strong></span><br/>
            <span className="sp1 mt-2"><>Bachelor of Technology in</></span> <br /><span className="sp1"><>Computer Science</></span><br />
           <br /> <span className="sp1 ">Pune, Maharashtra</span>
          </div>
          <div className="container mt-5">
          <div className="part2 ms-5 mb-5">I am currently pursuing my Bachelor of Technology in Computer Science at MIT ADT University. As part of my coursework, I have gained a strong foundation in programming languages such as Java, Python, and C++. I have also learned about software engineering principles, database management, and web development.</div>
        </div>
     
    </div>
  </div>
</div>
<div className={`container container1 mt-4 div3  ${animate ? 'animate' : ''}`}>
  <div className="d-flex justify-content-center align-items-center">
    <div className="card box1 w-50 shadow p-2 mb-4 bg-body rounded">
    
       
          <div className="part1 float-start ms-5 mb-5 me-5 mt-3">
            <h3 className="h3"><strong>May 2020 - 2021</strong></h3>
            <span className="sp"><strong>Abhyasa Jr College</strong></span><br/>
            <span className="sp1 mt-2"><>Higher Secondary Certificate</></span> <br />
           <br /> <span className="sp1 mt-3">Yavatmal, Maharashtra</span>
          </div> <div className="container mt-5">
          <div className="part2 ms-5 mb-5">I completed my Higher Secondary Certificate from Abhyasa Jr College. During this time, I developed a keen interest in computer science and programming. I also participated in various coding competitions and hackathons, which helped me to improve my coding skills.</div>
        </div>
      </div>
 
  </div>
</div>

<div className={`container container1 mt-4 mb-5 div3  ${animate ? 'animate' : ''}`}>
  <div className="d-flex justify-content-center align-items-center">
    <div className="card box1 w-50 shadow p-2 mb-4 bg-body rounded">
          <div className="part1 float-start ms-5 mb-5 me-5 mt-3">
            <h3 className="h3"><strong>May 2018 - 2019</strong></h3>
            <span className="sp"><strong>Giants English Medium School</strong></span><br/>
            <span className="sp1 mt-2"><>Secondary School Certificate</></span> <br />
           <br /> <span className="sp1 mt-3">Yavatmal, Maharashtra</span>
          </div>  <div className="container mt-5">
          <div className="part2 ms-5 mb-5">I completed my Secondary school certificate from Giants English Medium School. This journey has not only equipped me with a strong academic foundation but also instilled in me valuable skills and knowledge that will undoubtedly shape my future endeavors.</div>
        </div>
      </div>

  </div>
</div></div>

<div className={`container container1 mt-4 mb-5 div3  ${animate ? 'animate' : ''}`}>
  <div className="d-flex justify-content-center align-items-center">
    <div className="card box1 w-50 shadow p-2 mb-4 bg-body rounded">
          <div className="part3 float-start ms-4  me-5 mt-3">
            <h3 className="work1 mb-4"><strong>Technical Skill</strong></h3>
            <div className="  skill1 ">
            <div className="skill">
           <span className="me-5"><i className="bi bi-square-fill text-primary"></i> <span className="sp1 me-1">Programming Languages</span></span>
           <span className="me-5 ms-5"><i className="bi bi-square-fill text-primary"></i> <span className="sp1">Web Development</span></span>
           </div> <br />
           <div className="skill mb-5">
           <span className="me-5"><i className="bi bi-square-fill text-primary"></i> <span className="sp1 me-3">Database Management</span></span>
           <span className="me-5 ms-5"><i className="bi bi-square-fill text-primary"></i> <span className="sp1">Network Security</span></span>
           </div>          </div>
           <div className="part3 float-start  mb-5 me-5 mt-5">

           <h3 className="work1 mb-4"><strong>Languages</strong></h3>
            <div className="  skill1 ">
            <div className="skill">
           <span className="me-5"><i className="bi bi-square-fill text-primary"></i> <span className="sp1 me-1">English (Fluent)</span></span>
           <span className="me-5 ms-5"><i className="bi bi-square-fill text-primary"></i> <span className="sp1">Hindi (Fluent)</span></span>
           </div> <br />
           <div className="skill">
           <span className="me-5"><i className="bi bi-square-fill text-primary"></i> <span className="sp1 me-3">Marathi (Fluent)</span></span>
           </div>       </div>     </div>
          </div> 
           
      </div>

  </div>
</div>

    </section>
  );
}

export default Resume;
