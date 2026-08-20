import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutUs from './AboutUs';

export default function AboutCentre() {
  const navigate = useNavigate();

  useEffect(() => {
    // Smoothly redirect / scroll to the sanctuary section on the merged Story & Centre page
    const elem = document.getElementById('centre-sanctuary');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  }, []);

  return <AboutUs />;
}
