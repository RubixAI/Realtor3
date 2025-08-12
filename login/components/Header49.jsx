"use client";

import React from "react";

export function Header49() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 items-start gap-x-12 gap-y-5 md:grid-cols-2 lg:gap-x-20 lg:gap-y-16">
          <div>
            <h1 className="heading-h1 font-bold">Welcome Back</h1>
          </div>
          <div>
            <p className="text-medium">
              Log in to create stunning marketing materials in minutes. If
              you’ve forgotten your password, click here to reset it.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
