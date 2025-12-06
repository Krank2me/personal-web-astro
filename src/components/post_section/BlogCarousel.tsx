import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { info } from "../../data/info";
import BlogCard from "./BlogCard";

interface ProjectCarouselProps {
  blogs: (typeof info)["posts"];
}

function CustomArrow(props: any) {
  const { onClick, left } = props;

  return (
    <div
      className={`${
        left ? "-left-10" : "-right-10"
      } absolute top-1/2 transform -translate-y-1/2 z-10`}
    >
      <button
        onClick={onClick}
        className="w-8 h-8 rounded-full flex justify-center items-center"
        aria-label={left ? "Previous Slide" : "Next Slide"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={
            "h-6 w-6 text-secondary dark:text-dk-secondary" +
            (!left ? " rotate-180" : "")
          }
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default function BlogCarousel(props: ProjectCarouselProps) {
  const { blogs: posts } = props;

  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    lazyLoad: true,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <CustomArrow />,
    prevArrow: <CustomArrow left />,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          fade: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-text dark:text-dk-text mb-6">
          Latest Blog Posts
        </h2>
        <p className="text-lg text-text-secondary dark:text-dk-text-secondary max-w-2xl mx-auto">
          Thoughts, tutorials, and insights about web development, technology,
          and the developer community.
        </p>
      </div>

      <div className="relative px-4 lg:px-8">
        <Slider {...settings}>
          {posts.map((blog, index) => (
            <div
              key={`blog-${index}-${blog.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="px-3"
            >
              <BlogCard blog={blog} />
            </div>
          ))}
        </Slider>
      </div>

      <div className="text-center mt-16">
        <a
          href="https://dev.to/unpandadev"
          target="_blank"
          rel="noreferrer"
          className="btn btn-primary inline-flex items-center gap-2"
        >
          <span>Read More Posts</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
