import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { info } from "../../data/info";
import ProjectCard from "./ProjectCard";

interface ProjectCarouselProps {
  projects: (typeof info)["projects"];
}

function CustomArrow(props: any) {
  const { onClick, left } = props;

  return (
    <div
      className={`${
        left ? "-left-12 lg:-left-16" : "-right-12 lg:-right-16"
      } absolute top-1/2 transform -translate-y-1/2 z-10`}
    >
      <button
        onClick={onClick}
        className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-surface dark:bg-dk-surface border border-border dark:border-dk-border hover:border-accent dark:hover:border-dk-accent shadow-soft hover:shadow-soft-lg transition-all duration-300 flex justify-center items-center group"
        aria-label={left ? "Previous Slide" : "Next Slide"}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 lg:h-6 lg:w-6 text-text-secondary dark:text-dk-text-secondary group-hover:text-accent dark:group-hover:text-dk-accent transition-colors${
            !left ? " rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
    </div>
  );
}

export default function ProjectCarousel(props: ProjectCarouselProps) {
  const { projects } = props;

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
          Tech Community
        </h2>
        <p className="text-lg text-text-secondary dark:text-dk-text-secondary max-w-2xl mx-auto">
          Explore the projects and initiatives I've been involved with in the
          tech community.
        </p>
      </div>

      <div className="relative px-4 lg:px-8">
        <Slider {...settings}>
          {projects.map((project, index) => (
            <div
              key={`project-${index}-${project.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className="px-3"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
