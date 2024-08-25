import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '@components/Navbar'; // A simple spinner for loading state
import Spinner from '@components/Spinner';
import Layout from '@components/Layout';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Projects = React.lazy(() => import('./pages/Projects'));
const Skills = React.lazy(() => import('./pages/Skills'));
const Experience = React.lazy(() => import('./pages/Experience'));
const Contact = React.lazy(() => import('./pages/Contact'));

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen font-sans bg-background dark:bg-darkBackground text-dark dark:text-light">
        <Navbar />
        <Suspense fallback={<Spinner />}>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
