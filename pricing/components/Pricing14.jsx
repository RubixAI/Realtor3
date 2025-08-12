"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React from "react";
import { Check } from "relume-icons";

export function Pricing14() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-xl">
        <div className="mx-auto mb-8 max-w-lg text-center md:mb-10 lg:mb-12">
          <p className="mb-3 font-semibold md:mb-4">Affordable</p>
          <h2 className="heading-h2 mb-5 font-bold md:mb-6">Pricing Plans</h2>
          <p className="text-medium">
            Choose the plan that fits your real estate needs.
          </p>
        </div>
        <Tabs defaultValue="monthly">
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-scheme-border bg-scheme-foreground p-1">
            <TabsTrigger
              value="monthly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Monthly
            </TabsTrigger>
            <TabsTrigger
              value="yearly"
              className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:border-0 data-[state=inactive]:bg-transparent"
            >
              Yearly
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="monthly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h6 className="heading-h6 font-bold">Basic Plan</h6>
                  <h1 className="heading-h1 my-2 font-bold">$49/mo</h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>AI description generator</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Templates and editing tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>5 projects per month</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h6 className="heading-h6 font-bold">Professional Plan</h6>
                  <h1 className="heading-h1 my-2 font-bold">$99/mo</h1>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Virtual staging included</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>AI floor plans</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Single-property websites</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>15 projects per month</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Video slideshows available</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </Card>
          </TabsContent>
          <TabsContent
            value="yearly"
            className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs md:grid-cols-2"
          >
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h6 className="heading-h6 font-bold">Brokerage Plan</h6>
                  <h1 className="heading-h1 my-2 font-bold">Custom</h1>
                  <p className="mt-2 font-medium">
                    Tailored solutions for your brokerage needs.
                  </p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Brand management tools</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Analytics and reporting</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Unlimited projects</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </Card>
            <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
              <div>
                <div className="mb-6 text-center md:mb-8">
                  <h6 className="heading-h6 font-bold">Annual Savings</h6>
                  <h1 className="heading-h1 my-2 font-bold">Save 20%</h1>
                  <p className="mt-2 font-medium">
                    Choose yearly for maximum savings.
                  </p>
                </div>
                <div className="mb-8 grid grid-cols-1 gap-4 py-2">
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>All features included</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Priority support</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Custom branding options</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Dedicated account manager</p>
                  </div>
                  <div className="flex self-start">
                    <div className="mr-4 flex-none self-start">
                      <Check className="size-6 text-scheme-text" />
                    </div>
                    <p>Comprehensive training sessions</p>
                  </div>
                </div>
              </div>
              <div>
                <Button title="Get Started" className="w-full">
                  Get Started
                </Button>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
