"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout12() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6">
              Effortlessly Choose Your Marketing Materials with Our AI-Powered
              Templates
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Select from a diverse range of AI-generated templates tailored for
              real estate marketing. Whether you need flyers, social media
              posts, or virtual staging, we've got you covered.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Template Options
                </h6>
                <p>
                  Easily customize your marketing materials to fit your unique
                  property needs.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Instant Access
                </h6>
                <p>
                  Get started quickly and create stunning visuals in minutes.
                </p>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full rounded-image object-cover"
              alt="Relume placeholder image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
