import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: object;
}

export default function SEO({ 
  title, 
  description, 
  keywords, 
  image = 'https://sattvic.life/og-image.jpg', // Replace with actual OG image if available
  url = 'https://sattvic.life', // Replace with actual domain
  type = 'website',
  schema
}: SEOProps) {
  const fullTitle = `${title} | Sattvic Ayurveda & Wellness`;
  const defaultKeywords = "Ayurvedic treatments, Panchakarma, Nadi Parikshan, pain management, Viddhakarma, Agnikarma, joint pain relief, spine care, Ayurvedic clinic Pune, holistic healing, Dosha balance, natural remedies";
  const finalKeywords = keywords ? `${keywords}, ${defaultKeywords}` : defaultKeywords;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={finalKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured Data (JSON-LD) */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
}
