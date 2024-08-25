import React from 'react';
import '@styles/home-page.scss';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';
import Home from './Home';
import About from './About';
// import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import Skills from './Skills';

const Portfolio: React.FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);

  return (
    <>
      <div className={`${theme}-theme relative`}>
        <ul className="background">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>

        <div className="text-fontDarkLight py-12 md:py-16 relative z-10">
          <Home />
          <Skills />
          <About />
          <Experience />
          {/* <Projects /> */}
          <Contact />
        </div>
      </div>

    </>
  );
};

export default Portfolio;
