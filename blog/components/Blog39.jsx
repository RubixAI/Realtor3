"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import React from "react";

export function Blog39() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Blog</p>
            <h2 className="heading-h2 mb-5 font-bold md:mb-6">
              Latest Insights & Tips
            </h2>
            <p className="text-medium">
              Explore our recent articles on real estate marketing.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="text-small mb-2 flex font-semibold">
                Marketing
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="heading-h5 font-bold">
                  Maximize Your Listings with AI
                </h5>
              </a>
              <p>
                Discover how AI can transform your real estate marketing
                strategy today.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-small font-semibold">John Doe</h6>
                  <div className="flex items-center">
                    <p className="text-small">11 Jan 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-small">5 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="text-small mb-2 flex font-semibold">
                Trends
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="heading-h5 font-bold">
                  Top 5 Marketing Strategies for Realtors
                </h5>
              </a>
              <p>
                Learn the best practices to elevate your real estate marketing
                efforts.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-small font-semibold">Jane Smith</h6>
                  <div className="flex items-center">
                    <p className="text-small">15 Feb 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-small">7 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card>
            <a href="#" className="w-full max-w-full">
              <div className="w-full overflow-hidden">
                <img
                  src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
                  alt="Relume placeholder image"
                  className="aspect-[3/2] size-full object-cover"
                />
              </div>
            </a>
            <div className="px-5 py-6 md:p-6">
              <a href="#" className="text-small mb-2 flex font-semibold">
                Insights
              </a>
              <a href="#" className="mb-2 block max-w-full">
                <h5 className="heading-h5 font-bold">
                  Understanding the Real Estate Market Landscape
                </h5>
              </a>
              <p>
                Get insights into current trends affecting real estate
                professionals today.
              </p>
              <div className="mt-4 flex items-center">
                <div className="mr-4 shrink-0">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder avatar"
                    className="size-12 min-h-12 min-w-12 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h6 className="text-small font-semibold">Alice Johnson</h6>
                  <div className="flex items-center">
                    <p className="text-small">20 Mar 2022</p>
                    <span className="mx-2">•</span>
                    <p className="text-small">6 min read</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
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
