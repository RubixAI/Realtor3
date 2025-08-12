"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header47() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col gap-5 md:flex-row md:gap-12 lg:gap-20">
          <div className="w-full max-w-lg">
            <p className="mb-3 font-semibold md:mb-4">Listings</p>
            <h1 className="heading-h1 font-bold">Manage Your Listings</h1>
          </div>
          <div className="w-full max-w-lg">
            <p className="text-medium">
              Keep all your property listings organized and accessible in one
              convenient location. Easily view, edit, and track the status of
              both current and past listings to streamline your workflow.
            </p>
            <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
              <Button title="View">View</Button>
              <Button title="Edit" variant="secondary">
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
