import { info } from "../../data/info";

interface ExperienceProps {
  experience: (typeof info)["about"]["experience"];
}

export default function Experience(props: ExperienceProps) {
  const { experience: experience } = props;

  return experience.length === 0 ? null : (
    <div className="w-full">
      <div className="text-center mb-12">
        <h3 className="text-2xl lg:text-3xl font-bold text-text dark:text-dk-text">
          Experience
        </h3>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-border dark:bg-dk-border"></div>

          {experience.map((exp, index) => (
            <div
              key={`experience-${index}-${exp.title
                .replace(/\s+/g, "-")
                .toLowerCase()}`}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-3 h-3 bg-accent dark:bg-dk-accent rounded-full border-4 border-surface dark:border-dk-surface z-10"></div>

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-5/12 ${
                  index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="card hover:shadow-soft-lg transition-all duration-300">
                  <div className="mb-4">
                    <h4 className="text-xl font-semibold text-text dark:text-dk-text mb-2">
                      {exp.title}
                    </h4>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm text-text-secondary dark:text-dk-text-secondary">
                      <span className="font-medium">{exp.date}</span>
                      <span className="hidden sm:block">•</span>
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    {exp.description.map((d, descIndex) => (
                      <div
                        key={`desc-${index}-${descIndex}-${d.id || descIndex}`}
                        className="flex items-start gap-3"
                      >
                        <div className="w-1.5 h-1.5 bg-accent dark:bg-dk-accent rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-text-secondary dark:text-dk-text-secondary leading-relaxed">
                          {d.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
