import React, { useEffect, useState } from "react";
import "./resume.css";
import "./about.css";

function Contact() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);

  return (
    <section className="sec">
      <div className={`container container1 div1 ${animate ? 'animate' : ''}`}>
        <i className="bi bi-square-fill box me-2 mt-5"></i>
        <span className="ex mt-3 mb-5"><strong>Get in touch</strong></span>
      </div>

      <div></div>

      <div className={`container container1 mt-4 div3 mb-5 ${animate ? 'animate' : ''}`}>
        <div className="d-flex justify-content-center align-items-center">
          <div className="card w-50 shadow p-2 mb-4 bg-body rounded">
            <div className="part1 float-start mb-5 ms-5 me-3 mt-3">
              <form className="row g-3">
                <div className="col-md-6">
                  <label htmlFor="inputEmail4" className="form-label bold">First Name</label>
                  <span className="star ms-1"><i className="bi bi-asterisk text-primary"></i></span>
                  <input type="text" className="form-control bottom-border full-width" id="inputEmail4" required/>
                </div>
                <div className="col-md-6">
                  <label htmlFor="inputPassword4" className="form-label bold">Last Name</label>
                  <span className="star ms-1"><i className="bi bi-asterisk text-primary"></i></span>
                  <input type="text" className="form-control bottom-border full-width" id="inputPassword4" required />
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress" className="form-label bold">Email</label>
                  <span className="star ms-1"><i className="bi bi-asterisk text-primary"></i></span>
                  <input type="email" className="form-control bottom-border full-width" id="inputAddress" required/>
                </div>
                <div className="col-12">
                  <label htmlFor="inputAddress2" className="form-label bold">Subject</label>
                  <input type="text" className="form-control bottom-border full-width" id="inputAddress2" />
                </div>
                <div className="col-12">
                  <label htmlFor="inputCity" className="form-label bold">Message</label>
                  <textarea type="text" className="form-control bottom-border full-width" id="inputCity" />
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
