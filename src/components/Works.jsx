import React from "react";
import photo from "../sources/blog/blog.png";
import photo1 from "../sources/blog/blog2.png";
import photo2 from "../sources/blog/blog3.png";
import photo3 from "../sources/blog/blog4.png";
import photo4 from "../sources/blog/blog5.png";
import photo5 from "../sources/blog/blog7.png";
import photo6 from "../sources/blog/blog8.png";

export const Works = () => {
  const goToSlide = (slide) => {
    const slides = document.querySelectorAll("#img");
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  let curSlide = 0;
  let maxSlide = 7;

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  return (
    <div className="w-full h-screen  bg-gradient-to-r from-neutral-900 to-neutral-950 flex flex-col gap-6 justify-center items-center relative border-b-2 " id="work">
      <h1 className="text-3xl text-slate-200">My Projects</h1>
      <div>
        <p className="text-slate-200 text-lg pl-10 pr-10">
          There is a blog site among my projects. It uses an api that I created.
          Express.js and mysql database were used to create this api. New posts
          can be added and you can register or login to the site and its fully functional but purely
          amateur.🤷‍♀️ You can visit my github for full code.
        </p>
      </div>
      <div className="w-3/5 h-3/4 bg-slate-100  flex flex-row relative overflow-hidden rounded-xl opacity-90">
        <img
          src={photo6}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img"
        />
        <img
          src={photo}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img"
        />
        <img
          src={photo2}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img"
        />
        <img
          src={photo3}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img"
        />
        <img
          src={photo4}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img"
        />
        <img
          src={photo1}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img"
        />
        <img
          src={photo5}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img"
        />
      </div>
      <div className="w-4/5 absolute flex justify-between">
        <button
          className="text-5xl text-slate-200 pt-2 pb-2 pl-4 pr-4 mt-16 ml-2 border-2 border-slate-200 border-solid rounded-full hover:bg-red-900 active:bg-red-700 transition-all"
          onClick={prevSlide}
        >
          &larr;
        </button>
        <button
          className="text-5xl text-slate-200 pt-2 pb-2 pl-4 pr-4 mt-16 ml-2 border-2 border-slate-200 border-solid rounded-full hover:bg-red-900 active:bg-red-700 transition-all"
          onClick={nextSlide}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Works;
