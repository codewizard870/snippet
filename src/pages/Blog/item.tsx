import { useNavigate } from "react-router-dom";
import { BlogType } from "../../types";
import { useEffect, useRef } from "react";

interface Props {
  data: BlogType;
  index: number;
}

const BlogItem: React.FC<Props> = ({ data, index }) => {
  const navigate = useNavigate();
  const ref = useRef(null);
  const imgRef = useRef(null);

  const onClickBlog = (index: number) => {
    navigate(`/blog/${index}`);
  };

  useEffect(() => {
    if(ref.current && imgRef.current && data) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = data.description;

      (ref.current as any).innerText = tempDiv.innerText.slice(0, 300) + "...";

      const imgs = tempDiv.getElementsByTagName("img");
      if(imgs.length > 0){
        (imgRef.current as any).src = imgs[0].src;
      } else {
        (imgRef.current as any).src = "/assets/blog/default.webp";
      }
    }
  }, [data]);

  return (
    <div
      className="flex flex-col md:flex-row gap-4 md:gap-10 w-full md:w-[1100px] cursor-pointer"
      key={index}
      onClick={() => onClickBlog(index)}
    >
      <div>
        <img
          className="rounded-lg w-full md:w-[500px]"
          ref={imgRef}
        />
      </div>
      <div className="w-full md:w-[500px]">
        <p className="text-xl font-semibold">{data.title}</p>
        <p className="pt-4 text-sm" ref={ref}></p>
        <p className="pt-4 text-sm text-gray-1/40">Posted on {data.pubDate}</p>
      </div>
    </div>
  );
};

export default BlogItem;
