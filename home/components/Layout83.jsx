"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout83() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-5 md:grid-cols-2 md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Stats</p>
            <h2 className="heading-h2 font-bold">
              Transforming Real Estate Marketing for Agents
            </h2>
          </div>
          <div>
            <p className="text-medium mb-6 md:mb-8">
              1.5 million realtors in the US are spending billions on marketing
              each year. With our platform, they can now achieve stunning
              results faster and at a lower cost.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="heading-h2 mb-2 font-bold">70%</h3>
                <p>Save time and money with our AI solutions.</p>
              </div>
              <div>
                <h3 className="heading-h2 mb-2 font-bold">80%</h3>
                <p>
                  Achieve professional marketing materials without design
                  skills.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Learn More" variant="secondary">
                Learn More
              </Button>
              <Button
                title="Sign Up"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
