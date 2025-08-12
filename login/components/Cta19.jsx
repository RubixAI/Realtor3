"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Cta19() {
  return (
    <section className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Unlock Your Marketing Potential
          </h2>
          <p className="text-medium">
            Don’t miss out—start your free trial today and elevate your real
            estate marketing!
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Start">Start</Button>
            <Button title="Learn More" variant="secondary">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
