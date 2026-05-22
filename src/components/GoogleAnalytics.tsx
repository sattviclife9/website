import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend the window interface to support the Google Analytics functions
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}

export default function GoogleAnalytics() {
  const location = useLocation();
  const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

  // 1. Initialize GA4 Script on Mount
  useEffect(() => {
    if (!measurementId) {
      console.warn('Google Analytics VITE_GA_MEASUREMENT_ID is not configured.');
      return;
    }

    // Check if the script is already loaded to avoid duplicates
    const scriptId = 'google-analytics-gtag';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
      document.head.appendChild(script);

      // Initialize the data layer queue
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      };
      
      window.gtag('js', new Date());
      // Pageview is handled dynamically on route change below, so disable automatic default page_view to avoid duplicates
      window.gtag('config', measurementId, {
        send_page_view: false
      });
    }
  }, [measurementId]);

  // 2. Track Route Changes
  useEffect(() => {
    if (!measurementId || !window.gtag) return;

    // Send the dynamic page_view event when the route changes
    window.gtag('event', 'page_view', {
      page_location: window.location.href,
      page_path: location.pathname + location.search,
      page_title: document.title
    });
  }, [location, measurementId]);

  return null;
}
