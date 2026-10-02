import { absoluteUrl, getSocialLinks, siteConfig } from "@/config/site";
import { services } from "@/data/services";
import { team } from "@/data/team";
import { technologies } from "@/data/technologies";
import type { Project } from "@/types/project";

/**
 * Schema.org builders. Only verified facts are included — contact details,
 * addresses and ratings appear only once they exist in `siteConfig`.
 */

export const organizationId = absoluteUrl("/#organization");
export const websiteId = absoluteUrl("/#website");

export function organizationSchema() {
  const { email, phone, address, addressLocality, addressCountry } = siteConfig.contact;
  const sameAs = getSocialLinks().map((social) => social.href);

  return {
    "@type": "Organization",
    "@id": organizationId,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    logo: absoluteUrl("/brand/neyroset-logo.png"),
    description: siteConfig.description,
    knowsAbout: [...services.map((service) => service.title), ...technologies.map((tech) => tech.name)],
    member: team.map((member) => ({ "@type": "Person", name: member.name, jobTitle: member.role })),
    ...(email ? { email } : {}),
    ...(phone ? { telephone: phone } : {}),
    ...(address ? { address: { "@type": "PostalAddress", addressLocality, addressCountry } } : {}),
    ...(email || phone
      ? {
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer support",
            availableLanguage: ["uz", "ru"],
            ...(email ? { email } : {}),
            ...(phone ? { telephone: phone } : {}),
          },
        }
      : {}),
    ...(sameAs.length ? { sameAs } : {}),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": websiteId,
    name: siteConfig.name,
    url: absoluteUrl("/"),
    inLanguage: siteConfig.language,
    description: siteConfig.description,
    publisher: { "@id": organizationId },
  };
}

export function breadcrumbSchema(items: { name: string; href: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };
}

/** Case study page: a CreativeWork about the software that was built. */
export function projectSchema(project: Project) {
  const url = absoluteUrl(`/projects/${project.slug}`);
  return {
    "@type": "CreativeWork",
    "@id": `${url}#case-study`,
    name: project.headline,
    headline: project.headline,
    description: project.seo.description,
    url,
    inLanguage: siteConfig.language,
    image: absoluteUrl(`/projects/${project.slug}/opengraph-image`),
    keywords: project.seo.keywords.join(", "),
    genre: project.categoryLabel,
    creator: { "@id": organizationId },
    publisher: { "@id": organizationId },
    ...(project.year ? { dateCreated: String(project.year) } : {}),
    about: {
      "@type": "SoftwareApplication",
      name: project.title,
      applicationCategory: "BusinessApplication",
      operatingSystem: project.platforms.filter((platform) => platform !== "AI" && platform !== "API").join(", "),
      description: project.shortDescription,
    },
  };
}

export function servicesSchema() {
  return {
    "@type": "ItemList",
    name: "Neyroset xizmatlari",
    itemListElement: services.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        "@id": absoluteUrl(`/services#${service.slug}`),
        name: service.title,
        description: service.description,
        serviceType: service.title,
        provider: { "@id": organizationId },
        url: absoluteUrl(`/services#${service.slug}`),
      },
    })),
  };
}

export function graph(...nodes: Record<string, unknown>[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
