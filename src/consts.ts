import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Reinis Šestakovskis - Portfolio",
  DESCRIPTION:
    "Welcome to my portfolio! I'm Reinis Šestakovskis, a software engineer and web developer. You can find my projects, blog posts, and more here.",
  EMAIL: "reinissestakovskis@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 5,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Find out more about me and my work.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "A collection of my blog posts on various topics.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/reinis-sestakovskis",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/ReinisS",
  },
];
