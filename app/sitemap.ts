import { SITE_URL } from "@/lib/constants";

export default function sitemap() {
  const routes = ["", "/about-us", "/contact", "/past-iscit"].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
  }));

  return routes;
}
