// app/components/JsonLd.tsx
"use client";
import React from "react";

type Props = { baseUrl: string };

const JsonLd: React.FC<Props> = ({ baseUrl }) => {
  const org = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ColossalCodes",
    url: baseUrl,
    logo: `${baseUrl}/icons/cc-logo.png`,
    sameAs: [
      "https://github.com/colossalcodes",
      "https://twitter.com/colossalcodes",
    ],
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    url: baseUrl,
    name: "ColossalCodes",
    potentialAction: {
      "@type": "SearchAction",
      target: `${baseUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  const softwareApp = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "ColossalCodes",
    url: baseUrl,
    applicationCategory: "EducationalApplication",
    operatingSystem: "Web",
    description:
      "Interactive tutorials and projects for TypeScript, Rust, and modern web development.",
    thumbnailUrl: `${baseUrl}/icons/cc-logo.png`,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "182",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
    </>
  );
};

export default JsonLd;
