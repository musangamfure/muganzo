import Link from "next/link";

const ContactPage = () => {
  return (
    <section
      id="section"
      className="py-24 relative w-full justify-center flex items-center bg-black"
    >
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <div className="text-white text-6xl font-bebas mb-12">
          <h1>Contact Us</h1>
        </div>
        <div className="md:grid sm:grid-cols-2 xl:grid-cols-2 gap-6 grid grid-cols-1">
          <div className="text-white flex justify-between flex-col gap-3 col-span-2 xl:col-span-1 p-6 border-white border">
            <div>
              <h2 className="text-3xl font-bebas font-bold leading-none">
                Get In Touch
              </h2>
            </div>
            <div className="text-sm">
              <p className="mb-4">
                <span className="block font-bebas text-xl"> Phone:</span>
                <a
                  href="tel:+250782893504"
                  className="block text-3xl font-bebas"
                >
                  +250782893504
                </a>
                <a
                  href="tel:+250 787830230"
                  className="block text-3xl font-bebas"
                >
                  +250 787830230
                </a>
              </p>
              <p>
                <span className="block font-bebas text-xl"> Email:</span>
                <a
                  href="mailto:muganzo@gmail.com"
                  className="block text-xl font-bebas"
                >
                  muganzo@gmail.com
                </a>
              </p>
            </div>
          </div>
          <div className="text-white flex justify-between flex-col gap-3 col-span-2 xl:col-span-1 p-6 border-white border">
            <div>
              <h2 className="text-3xl font-bebas font-bold leading-none">
                Send Us A Message
              </h2>
            </div>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Name"
                className="p-3 border border-white bg-black text-white"
              />
              <input
                type="email"
                placeholder="Email"
                className="p-3 border border-white bg-black text-white"
              />
              <textarea
                placeholder="Message"
                className="p-3 border border-white bg-black text-white h-32"
              ></textarea>
              <button
                type="submit"
                className="text-white border-2 border-white py-3 font-bebas text-xl text-center hover:bg-white hover:text-black duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
