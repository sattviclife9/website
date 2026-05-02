import OptimizedImage from './OptimizedImage';
export const SattvicLogo = ({ type = "full", className = "", inHeader = false }: { type?: "full" | "icon", className?: string, inHeader?: boolean }) => {
  const imgSrc = type === "full" ? "/logo-full.svg" : "/logo-icon.svg";
  
  // Use scale to increase visual size without stretching the header container ONLY when inHeader is true
  const imgClass = type === "full" 
    ? (inHeader 
       ? "h-16 sm:h-20 lg:h-24" 
       : "h-24 sm:h-32 lg:h-40")
    : "h-12 sm:h-14 lg:h-16";

  return (
    <OptimizedImage 
      src={imgSrc} 
      alt="Sattvic Ayurveda Logo" 
      className={`${imgClass} w-auto object-contain flex-shrink-0 ${className}`}
    />
  );
};
