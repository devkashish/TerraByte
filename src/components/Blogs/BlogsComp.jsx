import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/blog1.png";
import Img2 from "../../assets/blog/blog2.png";
import Img3 from "../../assets/blog/blog3.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "The Future of Web Development",
    description:
      "Discover the latest trends in web development, from progressive web apps to the growing importance of responsive design. Stay ahead in the ever-evolving digital landscape.",
    author: "Jane Doe",
    date: "May 15, 2023",
  },
  {
    id: 2,
    image: Img2,
    title: "Building Scalable Mobile Apps",
    description:
      "Learn how to build mobile applications that can scale efficiently. Explore best practices for architecture, design, and deployment in the fast-paced world of app development.",
    author: "John Smith",
    date: "June 10, 2023",
  },
  {
    id: 3,
    image: Img3,
    title: "AI in Everyday Life",
    description:
      "Artificial Intelligence is transforming our daily lives in numerous ways. From virtual assistants to personalized recommendations, explore the impact of AI on modern living.",
    author: "Alice Johnson",
    date: "July 22, 2023",
  },
  
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-violet-200 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container ">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Our Blogs
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          {/* <div className="text-center">
            <button className="primary-btn">View All Posts</button>
          </div> */}
        </section>
      </div>
    </>
  );
};

export default BlogsComp;