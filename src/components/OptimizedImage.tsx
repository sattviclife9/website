import React, { useState } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string; // used for img
  wrapperClassName?: string; // used for wrapper
  fallbackSrc?: string;
}

export default function OptimizedImage({ 
  src, 
  alt, 
  className = "", 
  wrapperClassName = "",
  fallbackSrc = '/placeholder.jpg',
  loading = "lazy",
  ...props 
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const optimizeUrl = (url: string) => {
    if (!url) return url;
    if (url.includes('unsplash.com') && !url.includes('q=')) {
      const separator = url.includes('?') ? '&' : '?';
      return `${url}${separator}auto=format&fit=crop&q=80`;
    }
    return url;
  };

  const finalSrc = error ? fallbackSrc : optimizeUrl(src);

  return (
    <div className={`relative overflow-hidden h-full w-full ${wrapperClassName} ${className.includes('rounded') ? className.match(/rounded-[a-z0-9-]+/)?.[0] || '' : ''} ${className.includes('aspect-') ? className.match(/aspect-[a-z0-9-\[\]]+/)?.[0] || '' : ''}`.trim()}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-clinic-paper/40 animate-pulse" />
      )}
      <img
        src={finalSrc}
        alt={alt}
        loading={loading}
        decoding="async"
        className={`block transition-opacity duration-500 max-w-full ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        onLoad={(e) => {
          setIsLoaded(true);
          if (props.onLoad) props.onLoad(e);
        }}
        onError={(e) => {
          setError(true);
          if (props.onError) props.onError(e);
        }}
        {...props}
      />
    </div>
  );
}
