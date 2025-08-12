"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

export function Faq1() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-lg">
        <div className="mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find answers to common questions about managing your real estate
            listings efficiently.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              How to edit listings?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To edit a listing, navigate to your dashboard and select the
              listing you want to modify. Click on the 'Edit' button and make
              your changes. Save the updates to ensure your listing reflects the
              latest information.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Can I delete listings?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can delete a listing at any time. Simply go to your
              listings, select the one you wish to remove, and click the
              'Delete' option. Confirm your choice to permanently remove the
              listing from your account.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              How to add photos?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              To add photos, open the listing you want to enhance. Look for the
              'Add Photos' section and upload your images directly from your
              device. Ensure your photos are high-quality to attract potential
              buyers.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              What is virtual staging?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Virtual staging is a process that digitally enhances a property’s
              images by adding furniture and decor. This helps potential buyers
              visualize the space better. Our platform offers this feature to
              make your listings more appealing.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Can I track views?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, you can track the number of views on your listings. Our
              analytics feature provides insights into how many potential buyers
              are engaging with your properties. Use this data to refine your
              marketing strategies.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">We're here to help you succeed!</p>
          <div className="mt-6 md:mt-8">
            <Button title="Contact" variant="secondary">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
