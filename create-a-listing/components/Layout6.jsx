"use client";

import React from "react";

export function Layout6() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-flow-row md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h1 className="heading-h3 mb-5 font-bold md:mb-6">
              Effortlessly Upload Your Property Photos and Details in Minutes
            </h1>
            <p className="text-medium mb-6 md:mb-8">
              Our intuitive platform allows you to quickly drag and drop your
              property photos. Fill in essential details like address, price,
              and description with ease.
            </p>
            <div className="grid grid-cols-1 gap-6 py-2 sm:grid-cols-2">
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Upload Made Easy
                </h6>
                <p>
                  Get started by uploading your images and property specifics in
                  just a few clicks.
                </p>
              </div>
              <div>
                <h6 className="heading-h6 mb-3 font-bold md:mb-4">
                  Fast and Simple
                </h6>
                <p>
                  No design skills needed—just upload and let our AI handle the
                  rest.
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
