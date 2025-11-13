export interface LocalBusinessSchema {
  "@context": string;
  "@type": string;
  name: string;
  image: string;
  description: string;
  telephone: string;
  email: string;
  address: {
    "@type": string;
    streetAddress?: string;
    addressLocality: string;
    addressRegion: string;
    postalCode?: string;
    addressCountry: string;
  };
  areaServed: string[];
  sameAs: string[];
  priceRange: string;
}

export const generateLocalBusinessSchema = (config: {
  name: string;
  phone: string;
  email: string;
  serviceRegions: string[];
}): LocalBusinessSchema => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: config.name,
  image:
    "https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2Fb62909aa440046ef82b1eff0e7532fc5?format=webp&width=800",
  description:
    "Professional air conditioning solutions including PAC systems, maintenance, and repair services",
  telephone: `+91${config.phone}`,
  email: config.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "India",
  },
  areaServed: config.serviceRegions,
  sameAs: [],
  priceRange: "$$",
});

export const generateOrganizationSchema = (config: {
  name: string;
  phone: string;
  email: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: config.name,
  url: typeof window !== "undefined" ? window.location.origin : "",
  telephone: `+91${config.phone}`,
  email: config.email,
  logo: "https://cdn.builder.io/api/v1/image/assets%2F5a8c30a1b7984e9dbaf0e12f1f3a6110%2Fb62909aa440046ef82b1eff0e7532fc5?format=webp&width=800",
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    telephone: `+91${config.phone}`,
  },
});

export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});
