import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";

const initialState = {
  name: "appuser",
  email: "saifsaleh1028@gmail.com",
  message: "New user sent email for getting updates",
};

export const Contact = (props) => {
  const [{ name, email, message }, setState] = useState(initialState);
  const [feedback, setFeedback] = useState(null); // state for feedback

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_7973rzd", "template_2czr6kx", e.target, "T9W8-ancsXEP1acUy")
      .then(
        (result) => {
          setFeedback('Thank you! Your message has been sent.');
          setTimeout(() => { setFeedback(null); }, 5000);
          clearState();
        },
        (error) => {
          setFeedback('Oops! Something went wrong. Please try again later.');
          setTimeout(() => { setFeedback(null); }, 5000);
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Stay in the Loop!</h2>
                <p>Don't miss out on our latest updates and news.</p>
              </div>
              <form name="sentMessage" validate="true" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 d-none">
                    <div className="form-group">
                      <input type="text" id="name" name="name" className="form-control" placeholder="Name" required
                        onChange={handleChange} value={name} />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input type="email" id="email" name="email" className="form-control" placeholder="Email" required
                        onChange={handleChange} value={email} />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group d-none">
                  <textarea name="message" id="message" className="form-control" rows="4" placeholder="Message" required
                    onChange={handleChange} value={message}></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success">{feedback}</div>
                <button type="submit" className="btn btn-custom btn-lg">Send Message</button>
                <p className="feedback-message">{feedback}</p> {/* Feedback message */}
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p><span><i className="fa fa-map-marker"></i> Address</span>{props.data ? props.data.address : "loading"}</p>
            </div>
            <div className="contact-item">
              <p><span><i className="fa fa-phone"></i> Phone</span> {props.data ? props.data.phone : "loading"}</p>
            </div>
            <div className="contact-item">
              <p><span><i className="fa fa-envelope-o"></i> Email</span> {props.data ? props.data.email : "loading"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
