export const revalidate = 0;
import Link from "next/link";
import Image from "next/image";

const ServicesPage = async () => {
  return (
    <section
      id="section"
      className="py-24 relative w-full justify-center flex items-center bg-black"
    >
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <div className="text-white text-6xl font-bebas">
          <h1>Services</h1>
        </div>
        <div className="md:grid sm:grid-cols-2 xl:grid-cols-2 gap-6 grid grid-cols-1 h-[80%]">
          <div className="text-white flex justify-between flex-col gap-3 col-span-2 xl:col-span-1 p-6 border-white border">
            <div>
              <h2 className="text-3xl font-bebas font-bold leading-none">
                Interior Design
              </h2>
            </div>
            <div className="text-sm">
              Transform your space with our expert interior design services. We
              blend creativity with functionality to create stunning,
              personalized environments that reflect your unique style and
              needs. From concept to completion, our dedicated team ensures
              every detail is meticulously crafted, delivering a harmonious and
              inspiring living or working space.
            </div>
            <Link
              href="/works"
              className="text-white border-2 border-white py-3 font-bebas text-xl text-center hover:bg-white hover:text-black duration-300"
            >
              See More
            </Link>
          </div>
          <div className="text-white flex justify-between flex-col gap-3 col-span-2 xl:col-span-1 p-6 border-white border">
            <div>
              <h2 className="text-3xl font-bebas font-bold leading-none">
                Wood Furnitures
              </h2>
            </div>
            <div className="text-sm">
              Experience the timeless beauty and craftsmanship of our custom
              wood furniture. Each piece is thoughtfully designed and expertly
              handcrafted to bring warmth, elegance, and durability to your home
              or office. Using the finest materials, we create furniture that
              not only serves a purpose but also enhances your space with its
              natural charm and quality.
            </div>
            <Link
              href="/works"
              className="text-white border-2 border-white py-3 font-bebas text-xl text-center hover:bg-white hover:text-black duration-300"
            >
              See More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;
