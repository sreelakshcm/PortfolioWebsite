import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

const projectList = [
  {
    type: 'FEATURED PROJECT · 2026',
    title: 'Tourvesta',
    description:
      'A full tour discovery and booking platform where travelers can explore itineraries and maps, reserve tours, manage bookings, and share reviews. Includes secure, role-based experiences for travelers, guides, and administrators.',
    lightImg: '/assets/projects/tourvesta-light.png',
    darkImg: '/assets/projects/tourvesta-dark.png',
    liveUrl: 'https://tourvesta-web.vercel.app/',
    repoUrl: 'https://github.com/sreelakshcm',
    gradient: 'bg-[linear-gradient(135deg,#e1e2ff,#c9eff5)]',
  },
  {
    type: 'PERSONAL PROJECT · 2026',
    title: 'Portfolio Website',
    description:
      'A responsive personal portfolio that presents my skills, experience, and work through a polished interface, with smooth interactions, theme support, and persistent UI preferences.',
    lightImg: '/assets/projects/portfolio-light.png',
    darkImg: '/assets/projects/portfolio-dark.png',
    liveUrl: 'https://portfolio-sree-lakshmi.vercel.app/',
    repoUrl: 'https://github.com/sreelakshcm/PortfolioWebsite',
    gradient: 'bg-[linear-gradient(135deg,#ffe5da,#ffeed1)]',
  },
];

const Projects: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isDarkTheme = theme === 'dark';

  return (
    <section id="work" className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 sm:py-20 lg:px-0">
      <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
            <span className="h-px w-6 bg-violet" />
            Selected work
          </div>
          <h2 className="mt-2 text-[30px] font-bold tracking-[-1.5px] text-ink dark:text-white sm:text-[35px] sm:tracking-[-1.8px]">
            Things I&apos;ve brought to life
          </h2>
        </div>
        <p className="max-w-[370px] text-[13px] leading-[1.65] text-muted">
          Product-focused web applications built for discovery, clear workflows, and reliable day-to-day use.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projectList.map((project) => (
          <article
            key={project.title}
            className="flex flex-col overflow-hidden rounded-project border border-line bg-white transition-all duration-200 hover:-translate-y-1 dark:border-[#30394b] dark:bg-[#182334]"
          >
            <div className={`aspect-[16/9] w-full overflow-hidden ${project.gradient}`}>
              <img
                src={isDarkTheme ? project.darkImg : project.lightImg}
                alt={`${project.title} screenshot`}
                className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-105"
              />
            </div>
            
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <div className="font-mono text-[11px] font-semibold text-violet">
                  {project.type}
                </div>
                <h3 className="my-2 text-[20px] font-bold tracking-[-0.6px] text-ink dark:text-white">
                  {project.title}
                </h3>
                <p className="text-[13px] leading-[1.65] text-muted">
                  {project.description}
                </p>
              </div>

              <div className="mt-5 flex flex-wrap gap-4 pt-2 border-t border-line/60 dark:border-line/20">
                {project.liveUrl && (
                  <a
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-violet no-underline hover:underline"
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo ↗
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    className="inline-flex items-center gap-1 text-[12px] font-bold text-muted hover:text-ink dark:hover:text-white no-underline hover:underline"
                    href={project.repoUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Source Code ↗
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
