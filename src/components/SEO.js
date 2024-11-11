// SEO.js - A reusable component for setting meta tags and structured data
import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = ({ title, description, keywords, businessData }) => {
    const structuredData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": businessData.name,
        "address": {
          "@type": "PostalAddress",
          "streetAddress": businessData.address,
          "addressLocality": businessData.city,
          "addressRegion": businessData.region,
          "postalCode": businessData.zipCode
        },
        "telephone": businessData.phone,
        "url": "https://lawson-matutu.vercel.app",  // Add your website URL here
        "sameAs": [
          "https://www.linkedin.com/in/lawson-matutu-520a07216/",  // Add your LinkedIn profile
          "https://github.com/LawMashira"            // Add your GitHub profile
        ]
      };
      
      return (
        <>
          <Helmet>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords} />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {/* Structured data embedded for search engines */}
            <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
          </Helmet>
        </>
      );
      
};

export default SEO;
