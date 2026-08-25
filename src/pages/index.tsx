import React from 'react';
// import '@styles/home-page.css';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import Home from './Home';
import About from './About';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';
import AlertContainer from '@components/AlertContainer';
import Loader from '@components/Loader';
import Projects from './Projects';

const Portfolio: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const loading = useSelector((state: RootState) => state.loader.loading);

  return (
    <div className={`${theme}-theme relative`}>
      {loading && <Loader />}
      <div
        className={`text-fontDarkLight relative ${
          loading ? 'blur' : ''
        }`}
      >
        <AlertContainer />
        <Home />
        <Skills />
        <About />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default Portfolio;
