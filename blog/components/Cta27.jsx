"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta27() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container max-w-lg text-center">
        <h2 className="heading-h2 mb-5 font-bold text-white md:mb-6">
          Transform Your Marketing Today
        </h2>
        <p className="text-medium text-white">
          Join thousands of agents who are streamlining their marketing efforts
          with our AI-powered platform.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Start">Start</Button>
          <Button title="Explore" variant="secondary-alt">
            Explore
          </Button>
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
