export const revalidate = 0;

import worksData from "@/data/worksData.json";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Marquee from "react-fast-marquee";

const WorksPage = () => {
  const data = worksData;

  const { Content, Hero, CallToAction } = data;

  return (
    <React.Fragment>
      <section
        id="section"
        className="pt-24 pb-0 overflow-hidden sm:py-24 sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
      >
        <div id="container" className=" px-6 sm:px-24 w-full h-full">
          <h1 className="text-white text-6xl font-bebas">{Hero.heading}</h1>
          <div className="w-full h-[600px] sm:h-full flex flex-col">
            <span className="text-md block italic font-bold text-white">
              {Hero.tagline}
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-full">
              {Hero.heroImages.map((image, index) => (
                <div key={index} className="w-full h-full relative">
                  <Image
                    src={image.url}
                    alt={`Hero image ${index + 1}`}
                    fill
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section
        id="section"
        className="py-24 sm:py-24 sm:h-fit relative w-full justify-center flex flex-col items-center bg-black"
      >
        {Content.map((project, index) => {
          const { location, url, imageUrls, excerpt, tagline, projectname } =
            project;

          return (
            <div
              key={index}
              className={clsx(
                "sticky text-black overflow-hidden top-0 sm:h-[75vh] pb-24 shrink-0 w-full",
                index % 2 == 0 ? "bg-white text-black" : "bg-black text-white"
              )}
            >
              <div id="container" className="px-6 sm:px-24 w-full h-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 justify-between py-6 px-6 border-b-black">
                  <div className="">
                    <h3 className="text-3xl font-bebas">{projectname}</h3>
                    <div className="flex xl:flex-row flex-col gap-3 sm:gap-6 xl:items-center">
                      <span className="font-bold text-xl">{location}</span>
                      {/* <span
                        className={clsx(
                          "border-2  italic rounded-full px-2 py-2 w-fit",
                          index % 2 == 0
                            ? "bg-white text-black border-black"
                            : "bg-black text-white border-white"
                        )}
                      >
                        {tagline}
                      </span> */}
                    </div>
                  </div>

                  <div className="flex flex-col my-3 sm:my-0 sm:flex-row sm:justify-between">
                    {/* <p>{excerpt}</p> */}
                    <Link
                      href={url}
                      target="_blank"
                      className={clsx(
                        "bg-black font-bebas w-fit h-fit shrink-0  border-solid px-6 py-2 rounded-full border-2 duration-300 ",
                        index % 2 == 0
                          ? "bg-black text-white border-white hover:bg-white hover:border-black hover:text-black"
                          : "bg-white text-black border-white hover:bg-black hover:border-white hover:text-white"
                      )}
                    >
                      See More
                    </Link>
                  </div>
                </div>
                <div className="relative flex -mx-[50%]">
                  <Marquee
                    className="w-fit overflow-hidden"
                    speed={90}
                    pauseOnHover
                  >
                    {imageUrls?.map((image, imgIndex) => {
                      return (
                        <div
                          key={imgIndex}
                          className="w-[88vw] overflow-hidden shrink-0 cursor-pointer flex items-center justify-center sm:w-[450px] aspect-video"
                        >
                          <Image
                            loading="lazy"
                            src={image?.url || ""}
                            alt="Images"
                            width={200}
                            height={300}
                            className="h-full w-full object-cover px-1"
                          />
                        </div>
                      );
                    })}
                  </Marquee>
                </div>
              </div>
            </div>
          );
        })}

        <div className="sticky text-black top-82 bg-slate-600 opacity-0 h-[600px] shrink-0 w-full"></div>
      </section>
    </React.Fragment>
  );
};

export default WorksPage;
