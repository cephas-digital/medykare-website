import React from "react";
import BlogCard from "./blog-card";
import Button from "../../ui/buttons";
import blogone from "../../../assets/images/blogone.png";
import blogtwo from "../../../assets/images/blogtwo.png";
import blogthree from "../../../assets/images/blogthree.png";
import blogfour from "../../../assets/images/blogfour.png";
import blogavatone from "../../../assets/images/blogavatone.png";
import blogavattwo from "../../../assets/images/blogavattwo.png";
import blogavatthree from "../../../assets/images/blogavatthree.png";
import blogavatfour from "../../../assets/images/blogavatfour.png";

interface BlogPost {
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
  likes: number;
}

interface BlogSectionProps {
  showAll?: boolean;
  title?: string;
  description?: string;
}

const BlogSection = ({
  showAll = false,
  title = "Our Blogs",
  description = "Our blog is a treasure trove of informative and engaging articles written by our team of nutritionists, dietitians, and wellness experts. Here's what you can expect from our blog.",
}: BlogSectionProps) => {
  // Sample blog data - replace with your actual data
  const allBlogs: BlogPost[] = [
    {
      id: "1",
      title: "The Benefits of Hydration for Weight Loss",
      description:
        "Discover how staying hydrated can support your weight loss goals and improve overall health.",
      category: "Weight Loss",
      image: blogone,
      author: {
        name: "Emily Johnson",
        avatar: blogavatone,
      },
      date: "23 April 2023",
      readTime: "5 min read",
      likes: 24,
    },
    {
      id: "2",
      title: "Cultivating a Healthy Relationship with Food",
      description:
        "Learn how practicing mindful eating can help you develop a healthier relationship with food and improve your overall well-being.",
      category: "Mindful Eating",
      image: blogtwo,
      author: {
        name: "Sarah Thompson",
        avatar: blogavattwo,
      },
      date: "23 April 2023",
      readTime: "5 min read",
      likes: 18,
    },
    {
      id: "3",
      title: "Carbohydrates, Proteins, and Fats",
      description:
        "Get a comprehensive understanding of macronutrients and their role in your diet for optimal health and weight management.",
      category: "Understanding Macronutrients",
      image: blogthree,
      author: {
        name: "Mark Wilson",
        avatar: blogavatthree,
      },
      date: "23 April 2023",
      readTime: "5 min read",
      likes: 32,
    },
    {
      id: "4",
      title: "Quick and Nutritious Options",
      description:
        "Explore a variety of convenient and healthy snack ideas to keep you fueled throughout the day.",
      category: "Healthy Snacks on the Go",
      image: blogfour,
      author: {
        name: "Emily Johnson",
        avatar: blogavatfour,
      },
      date: "23 April 2023",
      readTime: "5 min read",
      likes: 15,
    },
    {
      id: "5",
      title: "Building Sustainable Eating Habits",
      description:
        "Learn how to create lasting changes in your diet that support long-term health and wellness goals.",
      category: "Nutrition Tips",
      image: "/placeholder.svg?height=192&width=320",
      author: {
        name: "Dr. Michael Chen",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "22 April 2023",
      readTime: "7 min read",
      likes: 28,
    },
    {
      id: "6",
      title: "The Science of Meal Timing",
      description:
        "Understand how when you eat can be just as important as what you eat for optimal health.",
      category: "Meal Planning",
      image: "/placeholder.svg?height=192&width=320",
      author: {
        name: "Lisa Rodriguez",
        avatar: "/placeholder.svg?height=40&width=40",
      },
      date: "21 April 2023",
      readTime: "6 min read",
      likes: 22,
    },
  ];

  const blogsToShow = showAll ? allBlogs : allBlogs.slice(0, 4);

  return (
    <section className="py-16 bg-white lg:px-16 md:px-10 px-5 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="lg:text-5xl md:text-4xl text-3xl font-Outfit font-bold text-[#262626] mb-4">
            {title}
          </h2>
          <p className="text-[17px] text-[#333333] font-Outfit font-normal max-w-3xl mx-auto">
            {description}
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
          {blogsToShow.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))}
        </div>

        {/* Learn More Button - only show on homepage */}
        {!showAll && (
          <div className="text-center">
            <Button variant="secondary" size="lg" to="/blog">
              Learn More
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
