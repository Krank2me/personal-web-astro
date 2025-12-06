import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { info } from "../../data/info";

interface ProjectCardProps {
  project: (typeof info)["projects"][number];
}

export default function CommunityCard(props: ProjectCardProps) {
  const { project } = props;

  return (
    <div className="group card hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-2 overflow-hidden">
      <div className="relative overflow-hidden rounded-t-lg">
        <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          aria-label={`${project.title} - ${project.img_alt}`}
          className="block"
        >
          <LazyLoadImage
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={project.img_path}
            alt={project.img_alt}
            width="100%"
            effect="blur"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
        </a>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-xl font-semibold text-text dark:text-dk-text mb-2 group-hover:text-accent dark:group-hover:text-dk-accent transition-colors">
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="hover:underline"
            >
              {project.title}
            </a>
          </h3>
          <p className="text-text-secondary dark:text-dk-text-secondary leading-relaxed">
            {project.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <span
                key={`tech-${project.title}-${tech}`}
                className="px-2 py-1 text-xs font-medium bg-secondary dark:bg-dk-secondary text-accent dark:text-dk-accent rounded-md"
              >
                {tech}
              </span>
            ))}
          </div>
          <span className="text-sm text-text-secondary dark:text-dk-text-secondary font-medium">
            {project.date}
          </span>
        </div>
      </div>
    </div>
  );
}
