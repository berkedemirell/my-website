import React from "react";
import photo from "../sources/shopping/shopping.png";
import photo2 from "../sources/shopping/shopping2.png";
import photo3 from "../sources/shopping/shopping3.png";
import photo4 from "../sources/shopping/shopping4.png";
import photo5 from "../sources/shopping/shopping5.png";
import photo6 from "../sources/shopping/shopping6.png";
import photo7 from "../sources/shopping/shopiing7.png";

export const Workmore = () => {
  const goToSlide = (slide) => {
    const slides = document.querySelectorAll("#img2");
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
    <div className="w-full h-screen  bg-gradient-to-r from-neutral-900 to-neutral-950 flex flex-col gap-6 justify-center items-center relative border-b-2">
      <div>
        <p className="text-slate-200 text-lg pl-10 pr-10">
          A basic shopping app is another project. It fetches some products from
          an api that I found from internet. Products can be sorted by their
          price. And also products can be added to cart. The added products are
          saved to local storage and these products can be used in another pages
          like purchase page using context. Moreover, discount code can be
          applied and you can have a discount rate specifically defined to that
          code.
        </p>
      </div>
      <div className="w-3/5 h-3/4 bg-slate-100  flex flex-row relative overflow-hidden rounded-xl opacity-90">
        <img
          src={photo6}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img2"
        />
        <img
          src={photo}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img2"
        />
        <img
          src={photo7}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img2"
        />
        <img
          src={photo3}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img2"
        />
        <img
          src={photo4}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img2"
        />
        <img
          src={photo2}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img2"
        />
        <img
          src={photo5}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img2"
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

export default Workmore;
