import React, { useEffect, useState } from "react";
function Footer() {
  const [animate, setAnimate] = useState(false);

  // useEffect to trigger animation on mount
  useEffect(() => {
    setAnimate(true);
  }, []);
    return (

      <footer className="text-muted py-3 border-top">
      <div className={`container  ${animate ? 'animate' : ''}`}>
     
       <div className=" float-end ">
       <span className="me-5 text-dark email">email</span>
       <span className="ms-5 text-dark ">Follow</span>
    
       <br />
       <div className="float-end ">
       <span className="me-2 ">diptishgohane04@gmail.com</span>
       <span className="ms-5 text-dark">
       <a href="https://www.linkedin.com/in/diptish-gohane-263129233/" className=" mt-5 me-1 "><i className="bi bi-linkedin"></i></a>
              <a href="https://github.com/Dip-04" className=" mt-5 "><i className="bi bi-github"></i></a>
           
              <a href="https://www.instagram.com/diptish__gohane04/" className="mt-5 ms-1 "><i className="bi bi-instagram"></i></a>
              <a href="https://twitter.com/DiptishGohane" className=" mt-5 ms-1"><i className="bi bi-twitter"></i></a>
       </span>
       </div> </div>
   
        <p className="float-start  "> © 2024 By Diptish-World </p>
      </div>
    </footer>
    );
  }
  
  export default Footer;
  