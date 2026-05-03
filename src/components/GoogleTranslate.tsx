import React, { useEffect } from 'react';

// Declare the global window interface to include our callback
declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function GoogleTranslate() {
  useEffect(() => {
    // Check if the script has already been added
    if (document.getElementById('google-translate-script')) {
      return;
    }

    // Set up the initialization callback
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        { pageLanguage: 'en', includedLanguages: 'en,mr,ar,hi', autoDisplay: false },
        'google_translate_element'
      );
    };

    // Load the script
    const script = document.createElement('script');
    script.id = 'google-translate-script';
    script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup if needed, though usually we want to keep it once loaded
    };
  }, []);

  return (
    <div id="google_translate_element" className="hidden"></div>
  );
}
