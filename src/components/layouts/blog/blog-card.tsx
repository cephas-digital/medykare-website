import { FaHeart, FaBookmark, FaClock } from "react-icons/fa";
import { useState } from "react";
import { FiBookmark, FiHeart } from "react-icons/fi";

interface BlogCardProps {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  date: string;
  readTime: string;
  likes?: number;
  isLiked?: boolean;
  isBookmarked?: boolean;
}

const BlogCard = ({
  id,
  title,
  description,
  category,
  image,
  author,
  date,
  readTime,
  likes = 0,
  isLiked = false,
  isBookmarked = false,
}: BlogCardProps) => {
  const [liked, setLiked] = useState(isLiked);
  const [bookmarked, setBookmarked] = useState(isBookmarked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(liked ? likeCount - 1 : likeCount + 1);
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="1500"
      className="bg-[#F4F8FF] lg:p-10 md:p-5 p-5 border-[#D3EBF8] border rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
    >
      {/* Image */}
      <div className="relative  overflow-hidden">
        <img
          src={image || "/placeholder.svg?height=192&width=320"}
          alt={title}
          className="w-[481px] h-[428px] rounded-md object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className=" mt-5">
        <div className="">
          <span className=" text-lg font-Outfit rounded-full text-[#333333] font-medium">
            {category}
          </span>
        </div>
        <h3 className="text-xl font-semibold text-[#262626] line-clamp-3 font-Outfit md:text-[26px] mb-3 mt-1 transition-colors cursor-pointer">
          {title}
        </h3>
        <p className="text-[#4C4C4D] font-Outfit font-light py-3 md:text-lg text-base mb-4 line-clamp-3">
          {description}
        </p>

        {/* Author and Meta */}
        <div className="flex items-center border border-[#D3EBF8] rounded-lg p-5 justify-between">
          <div className="lg:flex md:grid grid items-center gap-3">
            <img
              src={author.avatar || "/placeholder.svg?height=40&width=40"}
              alt={author.name}
              className="w-10 h-10 rounded-lg object-cover"
            />
            <div>
              <p className=" truncate text-[#1A1D31] font-semibold text-sm md:text-xl font-Outfit">
                {author.name}
              </p>
              <div className="lg:flex md:grid grid items-center gap-2 md:text-lg font-Outfi font-light text-xs text-[#59595A]">
                <span className=" truncate">{date}</span>
                {/* <span>•</span> */}
                <div className="flex items-center gap-1">
                  <FaClock className="w-3 h-3 mt-[0.7px]" />
                  <span className="  md:text-lg font-Outfi font-light text-xs text-[#59595A]">
                    {readTime}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="lg:flex md:grid grid items-center gap-3">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 transition-colors bg-[#F4F8FF] border border-[#D3EBF8] p-5 rounded-lg ${
                liked ? "text-red-500" : "text-gray-400 hover:text-red-500"
              }`}
            >
              <FiHeart className="w-4 h-4" />
            </button>
            <button
              onClick={handleBookmark}
              className={`transition-colors border border-[#D3EBF8] bg-[#F4F8FF] p-5 rounded-lg ${
                bookmarked
                  ? "text-blue-500"
                  : "text-gray-400 hover:text-blue-500"
              }`}
            >
              <FiBookmark className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
