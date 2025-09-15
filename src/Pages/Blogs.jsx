import { useState } from "react";
import BlogCard from "../Components/BlogCard";
import AnimatedSection from "../Components/AnimatedSection";
import { blogsData } from "../Components/BlogsData";

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    "all",
    "living room",
    "bedroom",
    "kitchen",
    "bathroom",
    "outdoor",
  ];

  const filteredBlogs =
    activeCategory === "all"
      ? blogsData
      : blogsData.filter((blog) => blog.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/28389059/pexels-photo-28389059.jpeg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Our Design Blog
            </h1>
            <p className="text-xl max-w-3xl">
              Discover the latest trends, tips, and inspiration for creating a
              beautiful home.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                  activeCategory === category
                    ? "bg-indigo-600 text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredBlogs.map((blog, index) => (
              <AnimatedSection key={blog.id} delay={index * 100}>
                <BlogCard blog={blog} />
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
