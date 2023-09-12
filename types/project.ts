type ProjectLink = {
  content?: string;
  href?: string;
};

export type Project = {
  header: string;
  description: string;
  tags: string[];
  imagePath?: string;
  link?: ProjectLink;
  moreLinks?: ProjectLink[];
  requestReq?: boolean;
};

export type ProjectCategory = {
  heading: string;
  description: string;
  extraInfo?: string;
  projects: Project[];
};
