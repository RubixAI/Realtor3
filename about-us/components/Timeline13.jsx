"use client";

import { Button } from "@/components/ui/button";
import { useScroll, useTransform } from "motion/react";
import React, { Fragment, useRef } from "react";
import { ChevronRight } from "relume-icons";

const Circle = () => {
  const circleRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: circleRef,
    offset: ["start center", "start start"],
  });
  const backgroundColor = {
    backgroundColor: useTransform(
      scrollYProgress,
      [0, 0.5],
      ["var(--color-neutral)", "var(--color-scheme-text)"],
    ),
  };
  return (
    <motion.div
      ref={circleRef}
      style={backgroundColor}
      className="z-20 mt-7 size-[0.9375rem] rounded-full shadow-[0_0_0_8px_white] md:mt-8"
    />
  );
};

export function Timeline13() {
  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="mb-12 text-center md:mb-18 lg:mb-20">
            <div className="relative z-10 w-full max-w-lg">
              <p className="mb-3 font-semibold md:mb-4">Milestones</p>
              <h2 className="heading-h2 mb-5 font-bold md:mb-6">
                Our Journey Through Innovation and Growth
              </h2>
              <p className="text-medium">
                Since our inception, we have focused on revolutionizing real
                estate marketing. Our journey is marked by key milestones that
                reflect our commitment to innovation.
              </p>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="Learn More" variant="secondary">
                  Learn More
                </Button>
                <Button
                  title="Explore"
                  variant="link"
                  size="link"
                  iconRight={<ChevronRight className="text-scheme-text" />}
                >
                  Explore
                </Button>
              </div>
            </div>
          </div>
          <div className="relative grid auto-cols-fr grid-cols-1 justify-items-center gap-20">
            <div className="absolute flex h-full w-8 flex-col items-center justify-self-start md:justify-self-auto">
              <div className="absolute z-10 h-16 w-1 bg-gradient-to-b from-scheme-background to-transparent" />
              <div className="sticky top-0 mt-[-50vh] h-[50vh] w-[3px] bg-scheme-text" />
              <div className="h-full w-[3px] bg-scheme-text/20" />
              <div className="absolute bottom-0 z-0 h-16 w-1 bg-gradient-to-b from-transparent to-scheme-background" />
              <div className="absolute top-[-50vh] h-[50vh] w-full bg-scheme-background" />
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 1"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="col-span-1 row-span-2 flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                  <div>
                    <h3 className="heading-h3 mb-5 font-bold md:mb-6">2022</h3>
                    <h4 className="heading-h5 mb-3 font-bold md:mb-4">
                      Company Founded
                    </h4>
                    <p>
                      In 2022, we were founded with a vision to innovate real
                      estate marketing. Our goal was to empower agents with
                      cutting-edge tools.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                      <Button title="Discover" variant="secondary">
                        Discover
                      </Button>
                      <Button
                        title="View"
                        variant="link"
                        size="link"
                        iconRight={
                          <ChevronRight className="text-scheme-text" />
                        }
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Fragment>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="mt-4 grid grid-cols-1 items-start gap-8 text-left md:items-end md:gap-12 md:text-right">
                  <div>
                    <h3 className="heading-h3 mb-5 font-bold md:mb-6">2023</h3>
                    <h4 className="heading-h5 mb-3 font-bold md:mb-4">
                      Platform Launched
                    </h4>
                    <p>
                      In 2023, we launched our AI-powered platform, equipped
                      with essential features for real estate agents. This
                      marked a significant step in our mission to simplify
                      marketing.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 md:justify-end">
                      <Button title="Learn More" variant="secondary">
                        Learn More
                      </Button>
                      <Button
                        title="Explore"
                        variant="link"
                        size="link"
                        iconRight={
                          <ChevronRight className="text-scheme-text" />
                        }
                      >
                        Explore
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="order-first col-span-1 row-span-2 flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 2"
                    className="w-full rounded-image"
                  />
                </div>
              </Fragment>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 3"
                    className="w-full rounded-image"
                  />
                </div>
                <div className="col-span-1 row-span-2 flex h-full w-8 justify-center">
                  <Circle />
                </div>
                <div className="mt-4 grid grid-cols-1 gap-8 md:gap-12">
                  <div>
                    <h3 className="heading-h3 mb-5 font-bold md:mb-6">2024</h3>
                    <h4 className="heading-h5 mb-3 font-bold md:mb-4">
                      Service Expansion
                    </h4>
                    <p>
                      In 2024, we expanded our services to include virtual
                      staging and single-property websites. This enhancement
                      allows agents to showcase listings more effectively.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
                      <Button title="Discover" variant="secondary">
                        Discover
                      </Button>
                      <Button
                        title="View"
                        variant="link"
                        size="link"
                        iconRight={
                          <ChevronRight className="text-scheme-text" />
                        }
                      >
                        View
                      </Button>
                    </div>
                  </div>
                </div>
              </Fragment>
            </div>
            <div className="grid auto-cols-fr grid-cols-[max-content_1fr] items-start justify-items-center gap-4 md:grid-cols-[1fr_max-content_1fr] md:gap-8 lg:gap-12">
              <Fragment>
                <div className="mt-4 grid grid-cols-1 items-start gap-8 text-left md:items-end md:gap-12 md:text-right">
                  <div>
                    <h3 className="heading-h3 mb-5 font-bold md:mb-6">
                      Future
                    </h3>
                    <h4 className="heading-h5 mb-3 font-bold md:mb-4">
                      Looking Ahead
                    </h4>
                    <p>
                      As we look to the future, we remain committed to evolving
                      our platform. Our focus will continue to be on providing
                      innovative solutions for real estate professionals.
                    </p>
                    <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8 md:justify-end">
                      <Button title="Join" variant="secondary">
                        Join
                      </Button>
                      <Button
                        title="Sign Up"
                        variant="link"
                        size="link"
                        iconRight={
                          <ChevronRight className="text-scheme-text" />
                        }
                      >
                        Sign Up
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="order-first col-span-1 row-span-2 flex h-full w-8 justify-center md:order-none">
                  <Circle />
                </div>
                <div className="order-last w-full overflow-hidden md:order-none md:w-auto">
                  <img
                    src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                    alt="Relume placeholder image 4"
                    className="w-full rounded-image"
                  />
                </div>
              </Fragment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
