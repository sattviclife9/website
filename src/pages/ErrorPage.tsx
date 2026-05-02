import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import SEO from '../components/SEO';

interface ErrorPageProps {
  error?: Error;
  resetErrorBoundary?: () => void;
  is404?: boolean;
}

export default function ErrorPage({ error, resetErrorBoundary, is404 }: ErrorPageProps) {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center p-6 text-center">
      <SEO 
        title={is404 ? "Page Not Found | Sattvic Life" : "Something Went Wrong | Sattvic Life"}
        description="An error occurred while loading this page."
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white p-10 rounded-[2rem] border border-clinic-border shadow-sm flex flex-col items-center"
      >
        <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mb-6">
          <AlertTriangle className="w-10 h-10 text-amber-500" />
        </div>
        
        <h1 className="text-3xl font-serif text-clinic-teal-900 mb-4">
          {is404 ? "Page Not Found" : "Something went wrong"}
        </h1>
        
        <p className="text-clinic-muted mb-8 overflow-hidden text-ellipsis px-2 text-sm max-w-full">
          {is404 
            ? "The page you are looking for might have been removed, had its name changed, or is temporarily unavailable."
            : (error?.message || "We encountered an unexpected error while preparing this page.")
          }
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full">
          {resetErrorBoundary && (
            <button 
              onClick={resetErrorBoundary}
              className="flex-1 flex items-center justify-center gap-2 bg-clinic-ivory text-clinic-charcoal border border-clinic-border px-6 py-3 rounded-sm text-[11px] font-bold tracking-widest hover:bg-clinic-border/50 transition-colors uppercase"
            >
              <RefreshCw className="w-4 h-4" />
              Try Again
            </button>
          )}
          
          <Link 
            to="/" 
            className="flex-1 flex items-center justify-center gap-2 bg-clinic-teal-900 text-white px-6 py-3 rounded-sm text-[11px] font-bold tracking-widest shadow-md hover:bg-clinic-teal-800 transition-colors uppercase"
          >
            <Home className="w-4 h-4" />
            Go to Home
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
