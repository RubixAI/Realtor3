"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  XLogo,
  YoutubeLogo,
} from "relume-icons";

const useForm = () => {
  const [email, setEmail] = useState("");
  const handleSetEmail = (event) => {
    setEmail(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ email });
  };
  return {
    email,
    handleSetEmail,
    handleSubmit,
  };
};

export function Footer10() {
  const formState = useForm();
  return (
    <footer className="px-[5%] py-12 md:py-18 lg:py-20">
      <div className="container">
        <Card className="grid grid-cols-1 items-start gap-x-[8vw] gap-y-12 p-8 md:gap-y-16 md:p-12 lg:grid-cols-[1fr_0.5fr] lg:gap-y-4">
          <div className="grid grid-cols-1 items-start gap-x-8 gap-y-10 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-12 md:gap-x-8 lg:grid-cols-4">
            <a
              href="#"
              className="sm:col-start-1 sm:col-end-4 sm:row-start-1 sm:row-end-2 lg:col-start-auto lg:col-end-auto lg:row-start-auto lg:row-end-auto"
            >
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
                alt="Logo image"
              />
            </a>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Quick Links</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Home
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    About Us
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Contact Us
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Blog
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Resources</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    FAQs
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Guides
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Webinars
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Testimonials
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start justify-start">
              <h2 className="mb-3 font-semibold md:mb-4">Stay Connected</h2>
              <ul>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Facebook
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Twitter
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    LinkedIn
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    Instagram
                  </a>
                </li>
                <li className="text-small py-2">
                  <a href="#" className="flex items-center gap-3">
                    YouTube
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="mb-3 font-semibold md:mb-4">Subscribe</h1>
            <p className="text-small mb-3 md:mb-4">
              Join our newsletter for updates on features and releases.
            </p>
            <div className="w-full max-w-md">
              <form
                className="mb-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-[1fr_max-content] md:gap-y-4"
                onSubmit={formState.handleSubmit}
              >
                <Input
                  id="email"
                  type="email"
                  placeholder="Your email here"
                  value={formState.email}
                  onChange={formState.handleSetEmail}
                />
                <Button title="Join" variant="secondary" size="sm">
                  Join
                </Button>
              </form>
              <p className="text-tiny">
                By subscribing, you agree to our Privacy Policy and receive
                updates.
              </p>
            </div>
          </div>
        </Card>
        <div className="text-small flex flex-col-reverse items-start pt-6 pb-4 md:justify-start md:pt-8 md:pb-0 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col-reverse items-start md:flex-row md:gap-6 lg:items-center">
            <div className="grid grid-flow-row grid-cols-[max-content] justify-center gap-y-4 md:grid-flow-col md:justify-center md:gap-x-6 md:gap-y-0 lg:text-left">
              <p className="mt-8 md:mt-0">
                © 2024 Relume. All rights reserved.
              </p>
              <a href="#" className="underline">
                Privacy Policy
              </a>
              <a href="#" className="underline">
                Terms of Service
              </a>
              <a href="#" className="underline">
                Cookie Settings
              </a>
            </div>
          </div>
          <div className="mb-8 flex items-center justify-center gap-3 lg:mb-0">
            <a href="#">
              <FacebookLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <InstagramLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <XLogo className="size-6 p-0.5 text-scheme-text" />
            </a>
            <a href="#">
              <LinkedinLogo className="size-6 text-scheme-text" />
            </a>
            <a href="#">
              <YoutubeLogo className="size-6 text-scheme-text" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
