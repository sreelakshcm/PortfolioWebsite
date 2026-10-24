import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

const projectList = [
  {
    type: 'FEATURED PROJECT · 2026',
    title: 'Tourvesta',
    description:
      'A full tour discovery and booking platform that makes planning, reserving, and managing guided travel experiences straightforward.',
    lightImg: '/assets/projects/tourvesta-cover-light.jpg',
    darkImg: '/assets/projects/tourvesta-cover-dark.jpg',
    liveUrl: 'https://tourvesta-web.vercel.app/',
    repoUrl: 'https://github.com/sreelakshcm/tourvesta-web',
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
    comingSoon: {
      title: 'AI travel planner',
      summary:
        'A LangGraph.js multi-agent workflow behind the Node API that turns a request like “Plan a 5-day Kerala trip for two under ₹30,000” into a day-by-day itinerary.',
      items: [
        'Specialised agents research the destination, plan each day, check the budget, and review the plan, revising automatically when it runs over budget.',
        'Grounds suggestions in travel tools and a small knowledge base (RAG), labels costs as estimates, and never books anything on its own.',
      ],
    },
  },
  {
    type: 'FULL-STACK PROJECT · 2026',
    title: 'HomeOps',
    description:
      'A shared household workspace that keeps chores, shopping lists, inventory, receipts, and spending in sync for everyone at home, on desktop and phone.',
    lightImg: '/assets/projects/homeops-light.png',
    darkImg: '/assets/projects/homeops-dark.png',
    liveUrl: 'https://homeops-web-phi.vercel.app/',
    gradient: 'bg-[linear-gradient(135deg,#eae6ff,#ffe7d8)]',
    roleLabel: 'Full-stack developer & product designer',
    technologies: ['React', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'RTK Query'],
    caseStudy: {
      role: 'Product and UI design, frontend, backend API, testing, and deployment',
      problem:
        'Household chores, groceries, supplies, and bills are usually spread across chats, notes, and memory, so nobody has one shared view of what needs doing or where money goes.',
      decisions: [
        'Modelled inventory as a ledger of restocks, usage, and adjustments, so stock levels are always explainable and tied to purchases and the shopping list.',
        'Kept financial changes reviewable: receipts go through an extract, review, confirm, and commit flow before anything is recorded.',
        'Secured sessions with httpOnly cookies, CSRF tokens, rate limits, email verification, and Google sign-in, and designed separate desktop and phone layouts.',
      ],
      outcome:
        'Delivered a live household app with role-based households, recurring tasks, budgets, and an activity feed, backed by 800+ automated tests across the web app and API.',
    },
    comingSoon: {
      title: 'AI household assistant',
      summary:
        'A LangGraph.js assistant behind the Node API that reads tasks, stock, and spending to answer questions like “What’s running low?”',
      items: [
        'Suggests changes, such as adding items to the shopping list, that only apply after you confirm.',
        'Reads PDF receipts as well as photos.',
      ],
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

                {project.comingSoon && (
                  <div className="mt-4 rounded-[10px] border border-dashed border-violet/40 p-3 dark:border-violet-light/40">
                    <div className="flex items-center gap-2">
                      <span className="relative flex size-2">
                        <span className="absolute inline-flex size-full animate-ping rounded-full bg-violet opacity-60" />
                        <span className="relative inline-flex size-2 rounded-full bg-violet" />
                      </span>
                      <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-violet">
                        In progress · Coming soon
                      </span>
                    </div>
                    <p className="mb-0 mt-1.5 text-[12px] font-semibold leading-[1.6] text-ink dark:text-white">
                      {project.comingSoon.title}
                    </p>
                    <p className="mb-0 mt-1 text-[12px] leading-[1.6] text-muted">
                      {project.comingSoon.summary}
                    </p>
                    <ul className="mt-1.5 grid gap-1 pl-4 text-[12px] leading-[1.6] text-muted marker:text-violet">
                      {project.comingSoon.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
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
