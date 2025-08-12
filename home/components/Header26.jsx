"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h1 className="heading-h1 mb-5 font-bold md:mb-6">
                Create Stunning Marketing in Just Minutes
              </h1>
              <p className="text-medium">
                From photos to flyers to floor plans, our AI does the heavy
                lifting so you can focus on selling. Save time and money on
                every listing with our intelligent design and printing platform.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Start Free Trial">Start Free Trial</Button>
                <Button title="See Plans" variant="secondary">
                  See Plans
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="size-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
