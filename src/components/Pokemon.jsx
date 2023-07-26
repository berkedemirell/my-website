import React from "react";
import photo1 from "../sources/Pokemon/pokemon.png";
import photo2 from "../sources/Pokemon/pokemon2.png";
import photo3 from "../sources/Pokemon/pokemon3.png";
import photo4 from "../sources/Pokemon/pokemon4.png";
import photo5 from "../sources/Pokemon/pokemon5.png";
import { Link } from "react-router-dom";

export const Pokemon = () => {
  const goToSlide = (slide) => {
    const slides = document.querySelectorAll("#img3");
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  let curSlide = 0;
  let maxSlide = 5;

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
          A simple turn-based pokemon game is another project of mine. Pokeapi
          was used to fetch the pokemon names and stats. There are 3 skills of
          each pokemon and these skills deal damage to opponent pokemon by
          chance. Each skill have their own property. Purely a game of luck. 
            <br/><Link to="https://github.com/berkedemirell" target="_blank" className="underline text-red-500">My Githup page.</Link>
        </p>
      </div>
      <div className="w-3/5 h-3/4 bg-slate-100  flex flex-row relative overflow-hidden rounded-xl opacity-90">
        <img
          src={photo2}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img3"
        />
        <img
          src={photo3}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img3"
        />
        <img
          src={photo4}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img3"
        />
        <img
          src={photo5}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img3"
        />
        <img
          src={photo1}
          alt=""
          className="w-full h-full absolute  transition-all duration-500"
          id="img3"
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

export default Pokemon;
