"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import React from "react";

export function Cta26() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg text-center">
        <div>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">
            Welcome Back to Your Account
          </h2>
          <p className="text-medium">
            Log in to access your real estate marketing tools and streamline
            your listing process.
          </p>
          <div className="mx-auto mt-6 w-full max-w-sm md:mt-8">
            <form className="mb-4 grid max-w-sm grid-cols-1 gap-y-3 sm:grid-cols-[1fr_max-content] sm:gap-4">
              <Input id="email" type="email" placeholder="Enter your email" />
              <Button
                title="Log In"
                size="sm"
                className="items-center justify-center px-6 py-3"
              >
                Log In
              </Button>
            </form>
            <p className="text-tiny">
              By clicking Log In, you agree to our Terms and Conditions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
