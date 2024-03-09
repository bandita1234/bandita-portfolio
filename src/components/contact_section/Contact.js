import React, { useState } from "react";
import "./contact.css";

const Contact = () => {
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [state, setState] = useState(initialState);

  const handleFocus = (e) => {
    const name = e.target.name;
    const updatedState = {
      ...state,
      [name]: e.target.value !== "" ? { focus: true } : { focus: false },
    };
    setState(updatedState);
  };

  const handleBlur = (e) => {
    const name = e.target.name;
    const updatedState = {
      ...state,
      [name]: { focus: false },
    };
    setState(updatedState);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const updatedState = {
      ...state,
      [name]: e.target.value,
    };
    // console.log(updatedState);
    setState(updatedState);
  };

  return (
    <>
    <h2 className="contact_heading_main">Contact Form</h2>
    <div className="contact_container">
      <div className="contact_heading">
        <h2 style={{fontSize:'30px', marginBottom:'0px',letterSpacing:'2px'}}>Get In Touch!</h2>
        <h2 style={{fontSize:'40px', color:'#FCA61F',marginTop:'0px',letterSpacing:'4px'}}>Contact Me!</h2>
      </div>
      <div className="contact_form">
        {/* <h1>Send us a Message!</h1> */}
        <form className="">
          <div className="text-input">
            <label
              className={
                state.name.focus || state.name !== "" ? "label-focus" : ""
              }
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              value={state.name}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div className="text-input">
            <label
              className={
                state.email.focus || state.email !== "" ? "label-focus" : ""
              }
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              value={state.email}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <div className="text-area">
            <label
              className={
                state.message.focus || state.message !== "" ? "label-focus" : ""
              }
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              value={state.message}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleChange}
            />
          </div>
          <button className="contact_btn">Send</button>
        </form>
      </div>
    </div>
    </>
  );
};

export default Contact;
