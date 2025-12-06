import { info } from "../../data/info";
import Experience from "./Experience";

interface AboutProps {
  about: (typeof info)["about"];
}

export default function About(props: AboutProps) {
  const { about } = props;

  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold text-text dark:text-dk-text mb-6">
          About Me
        </h2>
        <div className="max-w-3xl mx-auto">
          <p className="text-lg lg:text-xl text-text-secondary dark:text-dk-text-secondary leading-relaxed">
            {info.about.description}
          </p>
        </div>
      </div>

      <div className="mt-16">
        <Experience experience={about.experience} />
      </div>
    </div>
  );
}
