"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight } from "relume-icons";

export function Layout25() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Insights</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Track Your Listings' Performance Effortlessly
            </h2>
            <p className="text-medium mb-6 md:mb-8">
              Our Analytics Dashboard provides real-time performance metrics for
              each listing. Monitor views, inquiries, and engagement to optimize
              your marketing strategy.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="heading-h2 mb-2 font-bold">Engagement</h3>
                <p>Maximize your listing's visibility and effectiveness.</p>
              </div>
              <div>
                <h3 className="heading-h2 mb-2 font-bold">Metrics</h3>
                <p>Make data-driven decisions for better results.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Explore" variant="secondary">
                Explore
              </Button>
              <Button
                title="Learn More"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Learn More
              </Button>
            </div>
          </div>
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
            className="w-full rounded-image object-cover"
            alt="Relume placeholder image"
          />
        </div>
      </div>
    </section>
  );
}
