type ProjectLink = {
  content: string;
  href: string;
};

export type Project = {
  header: string;
  description: string;
  tags: string[];
  link: ProjectLink;
  moreLinks?: ProjectLink[];
};
