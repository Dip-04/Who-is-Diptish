import React, { useEffect, useState } from "react";
import "./resume.css";
import "./about.css";
import certificateImg from "./certificate.jpg"; 
import cpp from "./c++.jpg"; 
import py from "./py.png"; 
import sql from "./sql.png"; 
import web from "./web.jpg"; 
import kotlin from "./kotlin.jpg"; 
import acc from "./acc.png"; 
import cyb from "./cyb.png"; 
import cloud from "./cloud.jpg"; 
import Html from "./html.jpg"; 
import aws from "./htmlaws.jpg"; 
import dev from "./dev.jpg"; 
import data from "./data.png"; 
import soft from "./soft.png"; 
import dig from "./dig.png"; 
import { Link } from "react-router-dom";

function Certificate() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="sec7">
      <div className={`container container1 div1 ${animate ? 'animate' : ''}`}>
        <i className="bi bi-square-fill box me-2 mt-5"></i>
        <span className="ex mt-3 mb-5"><strong>Certificate Wall</strong></span>
      </div>

      <div className="certificate-wall">
        <div>
        <div className="certificate-frame">
          <img src={certificateImg} alt="Certificate" />

        </div>
        <Link to="https://www.udemy.com/certificate/UC-27a656db-e4b1-4911-ab10-9b8566a756b5/" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div>
 <div>
        <div className="certificate-frame">
          <img src={cpp} alt="Certificate" />
        </div> <Link to="https://www.udemy.com/certificate/UC-395dadad-5356-445a-b452-3bf95cf22ea1/" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={py} alt="Certificate" />
        </div> <Link to="https://courses.etrain.skillsnetwork.site/certificates/63c5e880cea348f3a93848897cd9611e" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={sql} alt="Certificate" />
        </div> <Link to="https://courses.cognitiveclass.ai/certificates/b53a4d39edd04bff8de9a0efeeb36781" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
   
        <div className="certificate-frame">
          <img src={cyb} alt="Certificate" />
        </div> <Link to="/" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={cloud} alt="Certificate" />
        </div> <Link to="https://verification.givemycertificate.com/v/a99ca672-847b-45fb-9319-94b665076e09" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={Html} alt="Certificate" />
        </div> <Link to="https://cert.devtown.in/verify/ZMPc0u" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={aws} alt="Certificate" />
        </div> <Link to="https://cert.devtown.in/verify/2jr96X" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={dev} alt="Certificate" />
        </div> <Link to="https://cert.devtown.in/verify/ZLvJJ7" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={data} alt="Certificate" />
        </div> <Link to="https://www.myamcat.com/certificate/29600737/data-processing-specialist/211" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={soft} alt="Certificate" />
        </div> <Link to="https://www.myamcat.com/certificate/29600737/software-development-trainee/166" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={dig} alt="Certificate" />
        </div> <Link to="/wdwfc" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={web} alt="Certificate" />
        </div> <Link to="https://certificate.givemycertificate.com/c/147a6209-2f51-42a5-aa98-166249fafcd5" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={kotlin} alt="Certificate" />
        </div> <Link to="https://certificate.givemycertificate.com/c/5130f6a8-a124-4e4f-b91c-c7bc96e14949" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div> <div>
        <div className="certificate-frame">
          <img src={acc} alt="Certificate" />
        </div> <Link to="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordics_njN5AzKddC7N7Xmbh_1704204108305_completion_certificate.pdf" className="btn btn-danger view-button mt-2 border-dark"><i className="bi bi-eye"></i> View</Link>
        </div>
      </div>
    </section>
  );
}

export default Certificate;
