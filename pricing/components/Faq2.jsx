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
            Find answers to your questions about pricing, billing, and our plan
            features.
          </p>
        </div>
        <Accordion type="multiple">
          <AccordionItem value="item-0">
            <AccordionTrigger className="text-medium md:py-5">
              What are the plans?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We offer three pricing tiers: Basic for $49/month, Professional
              for $99/month, and a Custom Brokerage plan. Each plan includes
              unique features tailored to meet different needs. Choose the one
              that best fits your marketing goals.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-medium md:py-5">
              Is there a trial?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes! We offer a free trial for new users to explore our features.
              Sign up today to experience the benefits without any commitment.
              Discover how quickly you can create marketing materials.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-medium md:py-5">
              How can I pay?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              We accept various payment methods, including credit cards and
              PayPal. You can manage your payment information directly through
              your account settings. All transactions are secure and encrypted.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-medium md:py-5">
              What if I cancel?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              You can cancel your subscription at any time. Upon cancellation,
              you will retain access to your plan until the end of the billing
              cycle. We hope you reconsider, but we understand if you need to
              leave.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-medium md:py-5">
              Do plans auto-renew?
            </AccordionTrigger>
            <AccordionContent className="md:pb-6">
              Yes, all plans auto-renew at the end of each billing cycle. You
              will receive a notification prior to renewal. You can manage your
              renewal settings in your account.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="mt-12 md:mt-18 lg:mt-20">
          <h4 className="heading-h4 mb-3 font-bold md:mb-4">
            Still have questions?
          </h4>
          <p className="text-medium">We're here to help!</p>
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
