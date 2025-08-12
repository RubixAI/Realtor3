"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta4() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="relative z-10 container">
        <div className="w-full max-w-lg">
          <h2 className="heading-h2 mb-5 font-bold text-white md:mb-6">
            Stay Informed
          </h2>
          <p className="text-medium text-white">
            Get the latest real estate marketing tips delivered straight to your
            inbox.
          </p>
          <div className="mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button title="Sign Up">Sign Up</Button>
            </form>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  "\n      <p class='text-xs text-white'>\n        By clicking Sign Up you're confirming that you agree with our\n        <a href='#' class='underline'>Terms and Conditions</a>.\n      </p>\n      ",
              }}
            />
          </div>
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
