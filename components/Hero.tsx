"use client"

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {

  const handleScroll = () => {}

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, book or rent a car - quick and simple!
        </h1>

        <p className="hero__subtitle">
          We are the best car rental company in the world, with over 1 million
          cars in stock.
        </p>

        <CustomButton
          title = "Explore Cars"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src = "/hero.png" alt = "picture of hero" fill className="object-contain"/>
          <div className="hero__image-overlay"></div>
        </div>
      </div>

    </div>
  );
};

export default Hero;