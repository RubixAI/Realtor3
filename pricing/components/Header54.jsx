"use client";

import React from "react";

export function Header54() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h1 className="heading-h1 mb-5 font-bold text-white md:mb-6">
            Choose Your Plan
          </h1>
          <p className="text-medium text-white">
            Whether you're an individual agent or a growing brokerage, we have
            the perfect plan for you.
          </p>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-neutral-darkest/50" />
      </div>
    </section>
  );
}
