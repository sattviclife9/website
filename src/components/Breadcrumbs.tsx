import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronRight, Home, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export interface BreadcrumbItem {
  label: string;
  path?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const navigate = useNavigate();

  const handleBack = () => {
    // If browser has history in current session, go back
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      // Fallback to parent path or Home if page opened directly
      const parentItem = items.length > 1 ? items[items.length - 2] : null;
      if (parentItem?.path) {
        navigate(parentItem.path);
      } else {
        navigate('/');
      }
    }
  };

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
      
      <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-3">
        <button
          onClick={handleBack}
          type="button"
          className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-clinic-teal-900 bg-clinic-teal-50 hover:bg-clinic-teal-100 border border-clinic-teal-900/15 px-3 py-1.5 rounded-full transition-all active:scale-95 shadow-xs"
          aria-label="Go back to previous page"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back</span>
        </button>

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
