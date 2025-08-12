"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-x-20 gap-y-12 md:gap-y-16 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Choose Your Perfect Plan
            </h2>
            <p className="text-medium">
              Select a plan that fits your needs and start your free trial
              today!
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="Start">Start</Button>
              <Button title="See Plans" variant="secondary">
                See Plans
              </Button>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
