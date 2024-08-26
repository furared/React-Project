import React from "react"; 

import { Container, Row, Col } from "react-bootstrap";
import { contactConfig } from "./content_option";
import '../Pages/contactus.css';

export default function Contactus() {
  

  return (
      <Container>
     
        <Row className="tittl">
          <Col lg="8">
            <h1 className="display-5 mb-4 px-5">Contact us</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sectil">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Get in touch</h3>
            <address>
              <strong>Email:</strong>{" "}
              <a href={`mailto:${contactConfig.YOUR_EMAIL}`} class="link-primary">
                {contactConfig.YOUR_EMAIL}
              </a>
              <br />
              <br />
             
              {contactConfig.hasOwnProperty("YOUR_FONE" ) ? ( 
                <p>
                  <strong>Phone:</strong> {contactConfig.YOUR_FONE } 
                </p>
              ) : (
                ""
              )}
        
            </address>
            <p>{contactConfig.description}</p>
          </Col>
          <Col lg="7" gy="3" gx="3" className="d-flex align-items-center">
            <form  className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name" 
                    type="text"
                    required 
                  />
                </Col>
                <Col lg="6" className="form-group">
                  <input
                    className="form-control rounded-0"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email" 
                    required 
                  />
                </Col>
              </Row>
              <br/>
              <textarea
                className="form-control rounded-0"
                id="message"
                name="message"
                placeholder="Message"
                rows="5" 
                required
              ></textarea>
              <br />
              <Row>
                <Col lg="10" className="form-group">
                  <button className="btn btn-primary " type="submit" > 
                  Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
   
 );
}
