"use client";

import { Button } from "@/components/ui/button";
import React from "react";

export function Header44() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="w-full max-w-lg">
          <p className="mb-3 font-semibold md:mb-4">Update</p>
          <h1 className="heading-h1 mb-5 font-bold md:mb-6">
            Edit Your Listing
          </h1>
          <p className="text-medium">
            Easily modify property details, upload new photos, and refresh your
            marketing materials in no time.
          </p>
          <div className="mt-6 flex flex-wrap gap-4 md:mt-8">
            <Button title="Save">Save</Button>
            <Button title="Cancel" variant="secondary">
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
