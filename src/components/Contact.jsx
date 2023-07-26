import React, { useState } from "react";
import photo from "../sources/images/PAS2.jpg";
import axios from "axios";
import Message from "./Message";
import MessageFail from "./MessageFail";

export const Contact = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSent, setIsSent] = useState(false);
  const [isFail, setIsFail] = useState(false);
  const handleInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (inputs.name !== "" && inputs.email !== "" && inputs.message !== "" && inputs.email.includes("@")) {
        await axios.post("/contacts", {
          name: inputs.name,
          email: inputs.email,
          message: inputs.message,
        });
        setIsSent(true);
        const elements = document.querySelectorAll("#input");
        elements.forEach((input) => {
          input.value = "";
        });
        setInputs({
            name:"",
            email:"",
            message:"",
        });
      }
       else {
        setIsFail(true);
      }
    } catch (err) {
      console.log(err);
    }
    setTimeout(() => {
      setIsSent(false);
      setIsFail(false);
    }, 4000);
  };

  return (
    <div
      className="w-full h-screen bg-gradient-to-r from-neutral-900 to-neutral-950 p-10 text-slate-950 border-b-2 relative"
      id="contact"
    >
      {isSent && <Message />}
      {isFail && <MessageFail/>}
      <h1 className="text-4xl text-center text-slate-300">
        You may contact me
      </h1>
      <div className="p-10 flex flex-row">
        <form className="flex flex-col gap-5 w-full items-center">
          <div className="flex flex-col w-2/4 gap-1">
            <label className="text-xl text-slate-200">Name: </label>
            <input
              type="text"
              className="p-1 rounded-lg"
              name="name"
              placeholder="Name"
              required
              onChange={handleInput}
              id="input"
            />
          </div>
          <div className="flex flex-col w-2/4 gap-1">
            <label className="text-xl text-slate-200">Mail: </label>
            <input
              type="email"
              className="p-1 rounded-lg"
              name="email"
              placeholder="E-mail"
              required
              onChange={handleInput}
              id="input"
            />
          </div>
          <div className="flex flex-col w-3/4 gap-1">
            <label className="text-xl text-slate-200">Message: </label>
            <textarea
              className="p-2 rounded-lg"
              placeholder="Message"
              name="message"
              cols="10"
              rows="10"
              required
              onChange={handleInput}
              id="input"
            />
          </div>
          <input
            type="submit"
            value="Submit"
            onClick={handleSubmit}
            className="pt-1 pb-1 pl-3 pr-3 bg-red-800 text-lg text-slate-200 hover:bg-red-950 active:bg-red-700 cursor-pointer rounded-md"
          />
        </form>
        <div>
          <img
            src={photo}
            alt=""
            className="h-full w-full rounded-full opacity-50"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
