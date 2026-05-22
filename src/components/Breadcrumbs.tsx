import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  // Generate JSON-LD schema for Breadcrumbs
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://sattvicadvancedayurveda.com/"
      },
      ...items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 2,
        name: item.label,
        ...(item.path ? { item: `https://sattvicadvancedayurveda.com${item.path}` } : {})
      }))
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-sm text-clinic-muted font-medium overflow-x-auto whitespace-nowrap pb-1">
          <li>
            <Link 
              to="/" 
              className="flex items-center gap-1 hover:text-clinic-teal-900 transition-colors"
            >
              <Home className="w-3.5 h-3.5" />
              <span className="sr-only">Home</span>
            </Link>
          </li>
          
          {items.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <ChevronRight className="w-3.5 h-3.5 text-clinic-muted/50" />
              </li>
              <li>
                {item.path && index !== items.length - 1 ? (
                  <Link 
                    to={item.path}
                    className="hover:text-clinic-teal-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-clinic-charcoal font-semibold" aria-current="page">
                    {item.label}
                  </span>
                )}
              </li>
            </React.Fragment>
          ))}
        </ol>
      </nav>
    </>
  );
}
