import React, { useState } from "react";
import { education } from "../sources/education.js";

export const Education = () => {
  const [index, setIndex] = useState("3");
  const handleId = (e) => {
    setIndex(e.target.id);
  };
  return (
    <div
      className="w-full h-fit bg-gradient-to-r from-neutral-900 to-neutral-950 p-6 border-b-2"
      id="education"
    >
      <h1 className="text-center text-slate-200 text-4xl mb-12">Education</h1>
      <div className="flex flex-row justify-center items-center gap-40">
        <button
          onClick={handleId}
          style={{ transform: index === "1" ? "translateY(-50%)" : "" }}
          className="w-fit h-fit border-2 p-2 text-slate-200 rounded-md bg-red-950 transition-all duration-500 hover:bg-red-800"
          id="1"
        >
          Primary School
        </button>
        <button
          onClick={handleId}
          style={{ transform: index === "2" ? "translateY(-50%)" : "" }}
          className="w-fit h-fit border-2 p-2 text-slate-200 rounded-md bg-green-950 transition-all duration-500 hover:bg-green-800"
          id="2"
        >
          High School
        </button>
        <button
          onClick={handleId}
          style={{ transform: index === "3" ? "translateY(-50%)" : "" }}
          className="w-fit h-fit border-2 p-2 text-slate-200 rounded-md bg-blue-950 transition-all duration-500 hover:bg-blue-800"
          id="3"
        >
          University
        </button>
      </div>
      {education
        .filter((school) => school.id === index)
        .map((edu, i) => {
          return (
            <div
              key={i}
              className="w-2/4 h-fit flex flex-col justify-center items-center p-12 ml-auto mr-auto text-slate-200 border-2 border-slate-300 border-opacity-50 mt-10 text-xl gap-4 rounded-lg tracking-wide mb-10"
            >
              <p className="uppercase text-2xl">{edu.title}</p>
              <p className="text-center">{edu.description}</p>
              <p className="">Diploma Grade: {edu.grade}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Education;
