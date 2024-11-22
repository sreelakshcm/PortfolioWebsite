import React from 'react';
import '@styles/home-page.css';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';
import AlertContainer from '@components/AlertContainer';
import Loader from '@components/Loader';
import Certifications from './Certifications';

const Portfolio: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const loading = useSelector((state: RootState) => state.loader.loading);

  return (
    <div className={`${theme}-theme relative`}>
      {loading && <Loader />}
      <ul className={`background ${loading ? 'blur' : ''}`}>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
        <li className="absolute bg-white opacity-20"></li>
      </ul>
      <div
        className={`text-fontDarkLight py-12 md:py-16 relative z-10 ${
          loading ? 'blur' : ''
        }`}
      >
        <AlertContainer />
        <Home />
        <Skills />
        <About />
        <Experience />
        <Certifications />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
