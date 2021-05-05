import React from "react";
import geo from "../images/geo.svg";
import phone from "../images/phone.svg";
import envelope from "../images/envelope.svg";

function Contact() {
  return (
    <div className="contact">
      <h3>Contact</h3>
      <img
        className="contact-photo"
        src="https://lifehacker.ru/wp-content/uploads/2018/10/ko_1539060122.jpg"
        alt="contact-photo"
      ></img>

      <div className="container">
        <div className="row">
          <div className="col-4 left">
            <div className="card text-white bg-dark mb-3">
              <div className="card-header">
                <img src={geo}></img>
              </div>
              <div className="card-body">
                <p>Kyrgyzstan</p>
              </div>
            </div>
            <div className="card text-white bg-dark mb-3">
              <div className="card-header">
                <img src={phone}></img>
              </div>
              <div className="card-body">
                <p>+996707411680</p>
              </div>
            </div>
            <div className="card text-white bg-dark mb-3">
              <div className="card-header">
                <img src={envelope}></img>
              </div>
              <div className="card-body">
                <p>gulzana.katkeldieva@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-8 right">
            <h3 className="help">How can I help you?</h3>
            <div className="mb-3">
              <input
                type="Full Name"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Full Name"
              ></input>
              <input
                type="Email Address"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="Email Address"
              ></input>
              <input
                type="email"
                className="form-control"
                id="exampleFormControlInput1"
                placeholder="subject"
              ></input>
            </div>
            <div className="mb-3">
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                placeholder="Message"
                rows="3"
              ></textarea>
            </div>
            <button type="submit" className="btn btn-dark mb-3">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
