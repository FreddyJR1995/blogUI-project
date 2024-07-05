import React from 'react';
import LandingPageContent from '../modules/LandingPageContent/LandingPageContent';
import { Home } from '../modules/Home/Home';

const LandingPage = () => {
  return (
    <Home>
      <div>
        <LandingPageContent />
      </div>
    </Home>
  );
};

export default LandingPage;
