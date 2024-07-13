import Image from "next/image";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <main className="no-scrollbar">
      <section
        id="hero"
        className="h-screen max-h[1120px] sm:max-h-screen relative w-full justify-center items-center  "
      >
        <div
          id="container"
          className="relative w-full h-full sm:px-24 px-6 sm:pb-12 pb-12"
        >
          <Image
            src="/assets/images/woodworking.jpg"
            alt="hero"
            fill
            className="w-full h-full object-cover absolute"
          />
          <div className="flex sm:flex-row flex-col-reverse items-start sm:items-end gap-6 xl:gap-0 sm:justify-between w-full relative h-full">
            <Link
              href={"/works"}
              className="border-2 font-bebas pt-1 text-white hover:bg-white hover:text-black text-lg duration-300 border-white rounded-full px-9  mb-4"
            >
              Explore
            </Link>
            <div className="flex flex-col  ">
              <h1 className="font-bebas font-bold text-white text-5xl  sm:text-3xl leading-none">
                Your Imagination. Fully Displayed
              </h1>
              <p className=" text-white text-lg">
                We provide the best woodworking in Rwanda
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="py-6 sm:py-24 h-fit sm:h-[60vh] sm:max-h-screen relative w-full justify-center  flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-ful">
          <div className="flex sm:flex-row sm:gap-16 flex-col h-full justify-center sm:items-center gap-3 ">
            <div className="flex flex-col h-full sm:justify-center sm:gap-10 xl:text-center">
              <h2 className=" sm:text-3xl text-2xl font-bebas flex justify-center items-center">
                CUSTOM WOODWORK SERVICES
              </h2>
              <p className="text-base">
                Our design approach and our cutting-edge manufacturing capacity
                allow us to bring prestigious architectural projects to life
                with superior efficiency, from your first consultation to the
                project&apos;s final installation
              </p>
            </div>

            <div className="flex flex-col gap-3 items-start sm:gap-9 ms:w-2/4">
              <p className="text-base">
                With every project we undertake, we aim to exceed the highest
                quality standards of the custom woodwork industry. Visit our
                project gallery for a peek at what we do best
              </p>
              <Link href="/works">
                <button className="border-2 hover:bg-black hover:text-white duration-300 font-bebas pt-1 border-black rounded-full px-6 font-bold py-1">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="overflow-hidden py-6 sm:py-24 h-fit w-full justify-center flex items-center relative"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-ful">
          <p className="uppercase text-[100vh] leading-none font-bebas tracking-tighter flex justify-center items-center">
            Muganzo
          </p>
          <Image
            src="/assets/images/muganzo-chairs.jpg"
            alt="chair"
            width={420}
            height={420}
            className="h-3/4 w-3/4 absolute  sm:w-fit sm:right-[30%] right-[10%] top-10 object-cover"
          />
        </div>
      </section>

      <section
        id="section"
        className="h-fit sm:h-screen sm:max-h-screen py-6 sm:py-24 w-full relative justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="w-full relative mb-6 sm:mb-0">
            <button className="sm:absolute z-10 sm:top-[-60px] divide-lime-letf-0 border-2 border-black rounded-full px-6 py-2  hover:bg-black hover:text-white duration-300 font-bebas font-bold ">
              See Our Works
            </button>
          </div>
          <div className=" w-full h-full flex justify-center items-center">
            <Marquee className="w-full h-full">
              <Image
                src="/assets/images/chair3.jpg"
                alt="chair"
                width={320}
                height={320}
                className="h-3/4 w-full  sm:fit ms:absolute sm:right-[30%] top-0 object-cover"
              />
              <Image
                src="/assets/images/picture6.jpg"
                alt="chair"
                width={320}
                height={320}
                className="h-3/4 w-full  sm:fit ms:absolute sm:right-[30%] top-0 object-cover"
              />
              <Image
                src="/assets/images/picture4.jpg"
                alt="chair"
                width={320}
                height={320}
                className="h-3/4 w-full  sm:fit ms:absolute sm:right-[30%] bottom-0 object-cover"
              />
              <Image
                src="/assets/images/picture5.jpg"
                alt="chair"
                width={320}
                height={320}
                className="h-3/4 w-full  sm:fit ms:absolute sm:rignt-0 bottom-0 object-cover"
              />
              <Image
                src="/assets/images/picture12.jpg"
                alt="chair"
                width={320}
                height={320}
                className="h-3/4 w-full  sm:fit ms:absolute sm:left-0 bottom-0 object-cover"
              />

              <Image
                src="/assets/images/picture3.jpg"
                alt="chair"
                width={320}
                height={320}
                className="h-3/4 w-full  sm:fit ms:absolute sm:left-[20%] bottom-0 object-cover"
              />
            </Marquee>
          </div>
        </div>
      </section>

      <section
        id="section"
        className="h-fit sm:h-screen sm:max-h-screen pb-24 py-6 sm:pb-24 pt-12 sm:pt-0 w-full relative justify-center flex items-center"
      >
        <div id="container" className="px-6 sm:px-24 w-full h-full">
          <div className="flex flex-col justify-center items-center sm:mb-4">
            <h3 className="text-4xl font-bebas pb-10 sm:pb-2">Our Expertise</h3>
          </div>
          <div className="flex flex-grow sm:flex-grow w-full h-3/4 gap-24 sm:gap-6 flex-col sm:flex-row justify-between items-center">
            <Link
              href="/services"
              className=" h-full sm:h-full sm:w-1/2 border-2 border-black sm:p-3 p-3 "
            >
              <div className="w-full sm:p-3  flex flex-col relative justify-center p-3 h-[90%] sm:h-[90%] items-center  ">
                <h2 className="text-black text-xl font-bebas ">
                  Interior Design
                </h2>
                <Image
                  src="/assets/images/picture4.jpg"
                  alt="chair"
                  width={320}
                  height={320}
                  className="h-full w-full  object-cover"
                />
              </div>
            </Link>
            <Link
              href="/services"
              className=" h-full sm:h-full sm:w-1/2 border-2 border-black sm:p-3 p-3 "
            >
              <div className="w-full sm:p-3  flex flex-col relative justify-center p-3 h-[90%] sm:h-[90%] items-center ">
                <h2 className="text-black text-xl font-bebas ">
                  Wood Furnitures
                </h2>
                <Image
                  src="/assets/images/chair3.jpg"
                  alt="chair"
                  width={320}
                  height={320}
                  className="h-full w-full object-center hover:scale-100"
                />
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
