"use client";

import React from "react";
import { RelumeIcon } from "relume-icons";

export function Layout18() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <h3 className="heading-h3 mb-5 font-bold md:mb-6">
              Manage Your Listings Efficiently with Our User-Friendly Dashboard
            </h3>
            <p className="text-medium mb-5 md:mb-6">
              Easily track the status of all your listings in one place. Our
              intuitive interface provides quick access to essential details,
              ensuring you stay organized and informed.
            </p>
            <ul className="grid grid-cols-1 gap-4 py-2">
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>View active, pending, and sold listings at a glance.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Check creation dates and last updates effortlessly.</p>
              </li>
              <li className="flex self-start">
                <div className="mr-4 flex-none self-start">
                  <RelumeIcon className="size-6 text-scheme-text" />
                </div>
                <p>Streamline your listing management process today.</p>
              </li>
            </ul>
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
