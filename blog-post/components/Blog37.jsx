"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Blog37() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Explore Our Latest Insights
            </h2>
            <p className="text-medium">
              Stay updated with real estate marketing trends and tips.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-small mr-4 mb-2 inline-block max-w-full font-semibold"
            >
              Marketing
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="heading-h5 font-bold">
                Maximize Your Listings' Potential
              </h5>
            </a>
            <p>
              Learn how to showcase properties effectively with innovative
              marketing strategies.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-small font-semibold">Jane Doe</h6>
                <div className="flex items-center">
                  <p className="text-small">11 Jan 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">5 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-small mr-4 mb-2 inline-block max-w-full font-semibold"
            >
              Trends
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="heading-h5 font-bold">
                Engaging Clients Through Digital Marketing
              </h5>
            </a>
            <p>
              Discover techniques to connect with clients online and boost
              engagement.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-small font-semibold">John Smith</h6>
                <div className="flex items-center">
                  <p className="text-small">15 Feb 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">7 min read</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <a href="#" className="mb-6 inline-block w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full rounded-image object-cover"
                />
              </div>
            </a>
            <a
              href="#"
              className="text-small mr-4 mb-2 inline-block max-w-full font-semibold"
            >
              Insights
            </a>
            <a href="#" className="mb-2 block max-w-full">
              <h5 className="heading-h5 font-bold">
                The Future of Real Estate Marketing
              </h5>
            </a>
            <p>
              Explore upcoming trends that will shape the real estate marketing
              landscape.
            </p>
            <div className="mt-6 flex items-center">
              <div className="mr-4 shrink-0">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                  alt="Relume placeholder avatar"
                  className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                />
              </div>
              <div>
                <h6 className="text-small font-semibold">Emily Johnson</h6>
                <div className="flex items-center">
                  <p className="text-small">22 Mar 2022</p>
                  <span className="mx-2">•</span>
                  <p className="text-small">6 min read</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-end">
          <Button
            title="View all"
            variant="secondary"
            className="mt-10 md:mt-14 lg:mt-16"
          >
            View all
          </Button>
        </div>
      </div>
    </section>
  );
}
