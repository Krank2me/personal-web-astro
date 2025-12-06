import { info } from "../../data/info";

interface ContactProps {
  contact: (typeof info)["contact"];
  size: "md" | "lg";
}

export default function Contact({ contact, size }: ContactProps) {
  const socialMediaLinks = [
    // Fix this if you add or remove social media links in info.ts
    {
      name: "email",
      icon: "fas fa-envelope",
      link: `mailto:${contact.email}`,
      link_alt: "Email",
    },
    {
      name: "github",
      icon: "fab fa-github",
      link: contact.github,
      link_alt: "GitHub",
    },
    {
      name: "linkedin",
      icon: "fab fa-linkedin",
      link: contact.linkedin,
      link_alt: "LinkedIn",
    },
    {
      name: "twitter",
      icon: "fab fa-x-twitter",
      link: contact.twitter,
      link_alt: "Twitter",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto text-center">
      <div className="mb-12">
        <h3 className="text-3xl lg:text-4xl font-bold text-text dark:text-dk-text mb-6">
          Let's Connect
        </h3>
        <p className="text-lg text-text-secondary dark:text-dk-text-secondary max-w-2xl mx-auto">
          I'm always open to discussing new opportunities, interesting projects,
          or just having a chat about technology.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        {socialMediaLinks.map((socialMedia, index) => (
          <a
            key={`social-${socialMedia.name}-${index}`}
            href={socialMedia.link}
            target="_blank"
            rel="noreferrer"
            className={`group relative p-4 rounded-xl bg-surface dark:bg-dk-surface border border-border dark:border-dk-border hover:border-accent dark:hover:border-dk-accent transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1 ${
              size === "md" ? "w-16 h-16" : "w-20 h-20"
            }`}
            aria-label={socialMedia.link_alt}
            title={socialMedia.link_alt}
          >
            <i
              className={`${socialMedia.icon} ${
                size === "md" ? "text-2xl" : "text-3xl"
              } text-text-secondary dark:text-dk-text-secondary group-hover:text-accent dark:group-hover:text-dk-accent transition-colors duration-300 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`}
            ></i>
          </a>
        ))}
      </div>

      <div className="mt-12 p-6 bg-secondary dark:bg-dk-secondary rounded-xl border border-border dark:border-dk-border">
        <p className="text-text-secondary dark:text-dk-text-secondary mb-4">
          Prefer email? Drop me a line at:
        </p>
        <a
          href={`mailto:${contact.email}`}
          className="text-lg font-medium text-accent dark:text-dk-accent hover:underline"
        >
          {contact.email}
        </a>
      </div>
    </div>
  );
}
