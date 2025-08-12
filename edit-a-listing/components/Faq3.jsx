"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

export function Faq3() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-12 lg:grid-cols-[.75fr,1fr] lg:gap-x-20">
        <div>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find answers to common questions about editing your property
            listings quickly and easily.
          </p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              How do I edit?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To edit a listing, simply navigate to your dashboard, select the
              listing you want to modify, and click 'Edit'. You can update
              photos, descriptions, and other details. Once you’re done, save
              your changes to update the listing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Can I add photos?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can easily add or replace photos in your listing. Just
              click on the photo section during the editing process and upload
              new images. Ensure your photos meet our recommended size for
              optimal display.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              What if I make mistakes?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              If you make a mistake, you can revert to a previous version of
              your listing. Simply access the version history feature in your
              dashboard. This allows you to restore any earlier edits quickly.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Is there a limit?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              There is no limit to the number of edits you can make to your
              listings. You can update your listings as often as needed to keep
              them current. Just remember to save your changes each time.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Can I edit descriptions?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! You can edit the property descriptions to highlight
              key features and updates. This is done in the editing interface,
              where you can type directly into the description field. Make sure
              to save your changes afterward.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
