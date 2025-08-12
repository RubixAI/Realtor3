"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React, { useEffect, useState } from "react";

const useCarousel = () => {
  const [api, setApi] = useState();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  const handleDotClick = (index) => () => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const dotClassName = (index) => {
    return `relative mx-[3px] inline-block size-2 rounded-full ${
      current === index + 1 ? "bg-scheme-text" : "bg-scheme-text/20"
    }`;
  };

  return { api, setApi, current, handleDotClick, dotClassName };
};

export function Testimonial7() {
  const carouselState = useCarousel();
  return (
    <section className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <Carousel
          setApi={carouselState.setApi}
          opts={{ loop: true, align: "start" }}
          className="overflow-hidden"
        >
          <div className="relative">
            <CarouselContent className="ml-0 md:mx-3">
              <CarouselItem className="pl-0 md:basis-full md:px-16">
                <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
                  <div className="mb-6 md:mb-8">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                      alt="Webflow logo 1"
                      className="max-h-14"
                    />
                  </div>
                  <blockquote className="heading-h5 font-bold">
                    "Using this platform has transformed my marketing process. I
                    can create stunning materials in minutes!"
                  </blockquote>
                  <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 1"
                        className="size-16 min-h-16 min-w-16 rounded-full object-cover"
                      />
                    </div>
                    <p className="font-semibold">Emily Johnson</p>
                    <p>Realtor, Dream Homes</p>
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="pl-0 md:basis-full md:px-16">
                <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center">
                  <div className="mb-6 md:mb-8">
                    <img
                      src="https://d22po4pjz3o32e.cloudfront.net/webflow-logo.svg"
                      alt="Webflow logo 2"
                      className="max-h-14"
                    />
                  </div>
                  <blockquote className="heading-h5 font-bold">
                    "Using this platform has transformed my marketing process. I
                    can create stunning materials in minutes!"
                  </blockquote>
                  <div className="mt-6 flex flex-col items-center justify-center md:mt-8">
                    <div className="mb-3 md:mb-4">
                      <img
                        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                        alt="Testimonial avatar 2"
                        className="size-16 min-h-16 min-w-16 rounded-full object-cover"
                      />
                    </div>
                    <p className="font-semibold">Emily Johnson</p>
                    <p>Realtor, Dream Homes</p>
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="mt-8 hidden md:flex md:size-14" />
            <CarouselNext className="mt-8 hidden md:flex md:size-14" />
          </div>
          <div className="mt-[30px] flex items-center justify-center md:mt-[46px]">
            <button
              onClick={carouselState.handleDotClick(0)}
              className={carouselState.dotClassName(0)}
            />
            <button
              onClick={carouselState.handleDotClick(1)}
              className={carouselState.dotClassName(1)}
            />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
