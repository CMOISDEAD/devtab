type LinkType = {
  title: string;
  url: string;
}

type GroupType = {
  title: string;
  links: LinkType[];
}

type VideoType = {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  link: string;
}
