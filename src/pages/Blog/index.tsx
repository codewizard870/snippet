import { useEffect, useState } from "react";
import axios from "axios";
import { BLOG_URL, BLOGS } from "../../constants";
import { BlogType } from "../../types";
import BlogItem from "./item";

const Blog = () => {
  const [blogs, setBlogs] = useState<BlogType[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get(BLOG_URL);
      setBlogs(data.items);
    };
    fetchBlogs();
  }, []);

  console.log(blogs);
  return (
    <div className="pt-24 md:pt-[180px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col items-center">
      <p className="text-3xl font-medium leading-normal md:text-4xl font-Roboto">
        Blog
      </p>
      <div className="flex flex-col gap-10 mt-10">
        {blogs.map((blog, index) => (
          <BlogItem data={blog} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Blog;
