import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:siddharthshaurya408@gmail.com" data-cursor="disable">
                siddharthshaurya408@gmail.com
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href="tel:+916307697514" data-cursor="disable">
                +91 6307697514
              </a>
            </p>
            <h4>Location</h4>
            <p>Punjab, India</p>
            
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/Shaurya11243"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://linkedin.com/in/siddharth515"
              target="_blank"
              rel="noreferrer"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="mailto:siddharthshaurya408@gmail.com"
              data-cursor="disable"
              className="contact-social"
            >
              Email <MdArrowOutward />
            </a>
            <a
              href="tel:+916307697514"
              data-cursor="disable"
              className="contact-social"
            >
              Phone <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              <span>Siddharth Shaurya Portfolio</span>
            </h2>
            <h5 className="contact-footer-copy">
              <MdCopyright /> 2026 Siddharth Shaurya
            </h5>
            <h5 className="contact-footer-tech">
              Built with React, Node.js, MongoDB and Vite
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
