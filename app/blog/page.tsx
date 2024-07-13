export const revalidate = 0;

const BlogPage = () => {
  return (
    <section
      id="section"
      className="py-24 sm:py-24 sm:h-screen sm:max-h-screen relative w-full justify-center flex items-center bg-black"
    >
      <div id="container" className="px-6 sm:px-24 w-full h-full">
        <div className="text-white text-6xl font-bebas">
          <h1>Our Blogs</h1>
        </div>
        <div className="text-white text-xl">No posts available yet!</div>
      </div>
    </section>
  );
};

export default BlogPage;
