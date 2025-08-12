"use client";

import React from "react";
import { Call, LocationOn, Mail, Sms } from "relume-icons";

export function Contact22() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid auto-cols-fr gap-x-8 gap-y-12 sm:gap-x-10 md:grid-cols-2 md:gap-y-16 lg:grid-cols-4">
          <div>
            <div className="mb-5 sm:mb-6">
              <Mail className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">Email</h3>
            <p className="mb-5 md:mb-6">
              Have questions or need more information? Contact us today!
            </p>
            <a className="underline" href="#">
              hello@relume.io
            </a>
          </div>
          <div>
            <div className="mb-5 sm:mb-6">
              <Sms className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">
              Live chat
            </h3>
            <p className="mb-5 md:mb-6">Get instant support from our team.</p>
            <a className="underline" href="#">
              Start new chat
            </a>
          </div>
          <div>
            <div className="mb-5 sm:mb-6">
              <Call className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">Phone</h3>
            <p className="mb-5 md:mb-6">Reach us for quick assistance.</p>
            <a className="underline" href="#">
              +1 (555) 123-4567
            </a>
          </div>
          <div>
            <div className="mb-5 sm:mb-6">
              <LocationOn className="size-12 text-scheme-text" />
            </div>
            <h3 className="heading-h4 mb-3 font-bold sm:mb-4 lg:mb-4">
              Office
            </h3>
            <p className="mb-5 md:mb-6">Visit us for personalized support.</p>
            <a className="underline" href="#">
              456 Market St, San Francisco CA 94105
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
