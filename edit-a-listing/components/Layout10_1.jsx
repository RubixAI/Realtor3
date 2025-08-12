"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { ChevronRight, RelumeIcon } from "relume-icons";

export function Layout10_1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <p className="mb-3 font-semibold md:mb-4">Customize</p>
            <h1 className="heading-h2 mb-5 font-bold md:mb-6">
              Select and Update Your Marketing Materials
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Easily choose from a variety of marketing materials. Our AI helps
              you create stunning content tailored to your listings.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Choose Materials
                </h6>
                <p>
                  Select from flyers, social posts, and floor plans to enhance
                  your listings.
                </p>
              </div>
              <div>
                <div className="mb-3 md:mb-4">
                  <RelumeIcon className="size-12 text-scheme-text" />
                </div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Customize Content
                </h6>
                <p>
                  Utilize AI-generated content to make your marketing stand out
                  effortlessly.
                </p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
              <Button title="Update" variant="secondary">
                Update
              </Button>
              <Button
                title="Preview"
                variant="link"
                size="link"
                iconRight={<ChevronRight className="text-scheme-text" />}
              >
                Preview
              </Button>
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
