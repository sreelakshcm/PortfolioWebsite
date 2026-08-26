import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

const projectList = [
  {
    type: 'FEATURED PROJECT · 2026',
    title: 'Tourvesta',
    description:
      'A full tour discovery and booking platform that makes planning, reserving, and managing guided travel experiences straightforward.',
    lightImg: '/assets/projects/tourvesta-light.png',
    darkImg: '/assets/projects/tourvesta-dark.png',
    liveUrl: 'https://tourvesta-web.vercel.app/',
    repoUrl: 'https://github.com/sreelakshcm/Tourvesta',
    gradient: 'bg-[linear-gradient(135deg,#e1e2ff,#c9eff5)]',
    roleLabel: 'Full-stack developer & product owner',
    technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
    caseStudy: {
      role: 'Product design, frontend, backend, and deployment',
      problem:
        'Travel planning information and booking steps can feel fragmented, especially when each audience needs a different workflow.',
      decisions: [
        'Designed role-based journeys for travelers, guides, and administrators so each user sees the tools relevant to them.',
        'Structured the product around clear tour discovery, itinerary and map exploration, reservations, booking management, and reviews.',
        'Built it as a cohesive full-stack product, prioritising clear workflows and dependable day-to-day interactions over a collection of disconnected screens.',
      ],
      outcome:
        'Delivered an end-to-end, live travel product that demonstrates ownership across the full product lifecycle—from idea and user flows to implementation and deployment.',
    },
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
    roleLabel: 'Full-stack developer & designer',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Redux Toolkit'],
    caseStudy: {
      role: 'Product design, frontend development, and deployment',
      problem:
        'Recruiters need to understand a candidate’s experience, work, and availability quickly without having to navigate a dense résumé or disconnected links.',
      decisions: [
        'Designed a recruiter-first flow that leads with professional experience and featured projects before the full technical toolkit.',
        'Built a responsive, accessible interface with clear calls to action for the résumé, live work, and direct contact.',
        'Added light and dark themes with persistent preferences, plus polished loading, navigation, and feedback states for a dependable experience.',
      ],
      outcome:
        'Delivered a live, maintainable personal portfolio that presents my full-stack experience, project ownership, and current learning direction in one focused place.',
    },
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

                <p className="mb-0 mt-4 text-[12px] font-semibold text-ink dark:text-white">
                  <span className="text-muted">Role:</span> {project.roleLabel}
                </p>

                <div className="mt-3 flex flex-wrap gap-1.5" aria-label={`${project.title} technologies`}>
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-line bg-paper px-2.5 py-1 text-[10px] font-semibold text-muted dark:border-line/50 dark:bg-[#202c3f]"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {project.caseStudy && (
                  <div className="mt-5 grid gap-4 border-t border-line/60 pt-5 dark:border-line/20">
                    <div>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-violet">
                        My role
                      </span>
                      <p className="mt-1.5 text-[12px] font-semibold leading-[1.6] text-ink dark:text-white">
                        {project.caseStudy.role}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-violet">
                        The problem
                      </span>
                      <p className="mt-1.5 text-[12px] leading-[1.6] text-muted">
                        {project.caseStudy.problem}
                      </p>
                    </div>

                    <div>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-violet">
                        Key decisions
                      </span>
                      <ul className="mt-1.5 grid gap-1.5 pl-4 text-[12px] leading-[1.6] text-muted marker:text-violet">
                        {project.caseStudy.decisions.map((decision) => (
                          <li key={decision}>{decision}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="rounded-[10px] bg-[#f7f7ff] p-3 dark:bg-[#202c3f]">
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-violet">
                        Outcome
                      </span>
                      <p className="mb-0 mt-1.5 text-[12px] leading-[1.6] text-muted">
                        {project.caseStudy.outcome}
                      </p>
                    </div>
                  </div>
                )}
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
