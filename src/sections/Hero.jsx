import React from "react";
import {words} from "../constants/index.js";
import Button from "../components/Button";
import HeroExperience from "../components/models/Heromodels/HeroExperience.jsx";
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import AnimatedCounter from "../components/AnimatedCounter.jsx";
const Hero = () => {
 useGSAP(() => { gsap.fromTo('.hero-text h1', {y: 100, opacity: 0},{ y:0, opacity:1 , stagger:0.3 , duration:5, ease: 'power2.input' },)})
  
    
    return (
    <section id="hero" className="relative overflow-hodden">
       <div className="absolute top-0 left-0 z-0">
        <img src="/images/bg.png" alt="background"/>

       </div>
       <div className="hero-layouts">
        {/* left section */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
            <div className = "felx flex-col gap-7">
<div className="hero-text">
    <h1>Shaping 
          <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
    
    </h1>
    <h1>into real projects</h1>
    <h1>into products</h1>

</div>
            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none">
              Hi, I’m Anshul, a developer based in india with a passion for
              code.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />

            </div>
        </header>
{/*right section*/}
<figure>
    <div className="hero-3d-layout">
<HeroExperience/>
    </div>
</figure>
       </div>
       <AnimatedCounter/>
        </section>
    )
}
export default Hero;