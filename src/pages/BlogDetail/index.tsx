import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { BLOG_URL, BLOGS } from "../../constants";
import { BlogType } from "../../types";
import { useNavigate, useParams } from "react-router-dom";

const BlogDetail = () => {
  const ref = useRef(null);
  const { blogId } = useParams();
  const [blogs, setBlogs] = useState<BlogType[]>([]);
  const [blog, setBlog] = useState<BlogType | undefined>(undefined);

  useEffect(() => {
    const fetchBlogs = async () => {
      const { data } = await axios.get(BLOG_URL);
      setBlogs(data.items);
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    if(blogId && blogs[parseInt(blogId)])
      setBlog(blogs[parseInt(blogId)]);
  }, [blogs, blogId])
  
  useEffect(() => {
    if(ref.current && blog) {
      (ref.current as any).innerHTML = blog.content;
      
    }
  }, [blog]);
  
  return (
    <div className="pt-24 md:pt-[180px] pb-24 md:pb-[158px] mx-6 md:mx-[118px] flex flex-col items-center">
      <p className="text-3xl font-medium leading-normal md:text-4xl font-Roboto">
        {blog?.title}
      </p>
      <p className="mt-6 text-sm md:text-base">Posted on {blog?.pubDate}</p>
      <div className="flex flex-col gap-10 mt-10" ref={ref}>
        
      </div>
    </div>
  );
};

export default BlogDetail;
