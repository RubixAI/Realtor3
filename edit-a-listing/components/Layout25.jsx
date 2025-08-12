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
            <p className="mb-3 font-semibold md:mb-4">Preview</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              See Your Edits in Real Time
            </h2>
            <p className="text-medium mb-6 md:mb-8">
              Make changes to your marketing materials and see updates
              instantly. Our platform ensures you stay on top of your listings
              with real-time previews.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h3 className="heading-h2 mb-2 font-bold">Instant</h3>
                <p>Edit and visualize your marketing materials effortlessly.</p>
              </div>
              <div>
                <h3 className="heading-h2 mb-2 font-bold">Dynamic</h3>
                <p>Transform your listings with immediate visual feedback.</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Update" variant="secondary">
                Update
              </Button>
              <Button
                title="Refresh"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Refresh
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
