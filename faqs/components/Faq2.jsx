"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import React from "react";

export function Faq2() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 w-full max-w-lg md:mb-18 lg:mb-20">
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">FAQs</h2>
          <p className="text-medium">
            Find answers to your most pressing questions about our AI-powered
            marketing platform for realtors.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              What is the service?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Our service is an AI-powered platform designed specifically for
              realtors. It enables you to create stunning marketing materials
              quickly and affordably. From flyers to social media posts, we
              handle the design so you can focus on selling.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              How does it work?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Simply upload your property photos and details. Our AI will
              generate various marketing materials, including flyers and social
              media posts, in minutes. You can then print or download them for
              digital use.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              What are the costs?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer three pricing tiers: Basic for $49/month, Professional
              for $99/month, and a custom Brokerage plan. Each tier provides
              different features to suit your needs. Choose the one that best
              fits your marketing strategy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              Is there a trial?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, we offer a free trial for new users. This allows you to
              explore our platform and its features without any commitment. Sign
              up today to experience the benefits firsthand.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Can I cancel anytime?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Absolutely! You can cancel your subscription at any time without
              any penalties. We believe in flexibility and want you to feel
              comfortable with your choice.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">We're here to help you!</p>
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
