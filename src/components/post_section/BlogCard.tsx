import { info } from "../../data/info";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface BlogCardProps {
  blog: (typeof info)["posts"][number];
}

export default function BlogCard(props: BlogCardProps) {
  const { blog } = props;

  return (
    <div className="flex flex-col bg-primary dark:bg-dk-primary rounded-lg">
      <div className="flex-shrink-0">
        <a
          href={blog.url}
          rel="noreferrer"
          aria-label={blog.img_alt + ", click to open the project page"}
          target="_blank"
        >
          <LazyLoadImage
            className="h-52 w-full object-cover"
            src={blog.img}
            alt={blog.img_alt}
            width="100%"
            effect="blur"
          />
        </a>
      </div>
      <div className="flex-1 bg-primary dark:bg-dk-primary p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-text dark:text-dk-text">
            <a
              href={blog.url}
              rel="noreferrer"
              className="hover:underline"
              aria-label="Title of the blog, click to open the blog page"
              target="_blank"
            >
              {blog.title}
            </a>
          </p>
          <a
            href={blog.url}
            rel="noreferrer"
            className="block mt-2"
            aria-label="Description of the blog, click to open the blog page"
            target="_blank"
          >
            <p className="text-xl font-semibold text-gray-900">
              {blog.description}
            </p>
          </a>
        </div>

        <div className="mt-6 flex items-center">
          <div className="flex flex-wrap space-x-2">
            {blog.tech.map((tech) => (
              <span
                className="text-accent dark:text-dk-accent text-xs font-semibold"
                key={tech}
              >
                #{tech}
              </span>
            ))}
          </div>
          <p className="ml-auto text-sm font-medium text-gray-900">
            {blog.date}
          </p>
        </div>
      </div>
    </div>
  );
}
