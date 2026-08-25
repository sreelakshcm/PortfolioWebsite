import { FC } from 'react';

const roles = [
  {
    period: 'AUG 2023 — DEC 2024',
    title: 'Associate Software Engineer',
    company: 'Kaay Labs · Software Development',
    summary: 'Built modular applications across the front end and backend for workflow-focused business products.',
    highlights: [
      'Created responsive React and TypeScript interfaces, including dynamic workflow experiences with React Flow.',
      'Managed client state and API integrations with Redux Toolkit, Redux Persist, Axios, and date utilities.',
      'Contributed Node.js and Express services, database work with Knex and SQL, plus PDF and XLSX exports.',
    ],
    link: 'https://github.com/sreelakshcm',
  },
  {
    period: 'FEB 2023 — AUG 2023',
    title: 'Software Developer',
    company: 'Schwing Stetter India Pvt. Ltd.',
    summary: 'Developed a secure production-management application for clear operational visibility across plants.',
    highlights: [
      'Built authenticated React dashboards, production modules, and configurators for day-to-day operations.',
      'Implemented credential validation, authorization, and session management for controlled access.',
      'Delivered plant-level production insights through gauges, bar charts, and flexible date-based exploration.',
    ],
    link: 'https://www.linkedin.com/in/sree-lakshmi-c-m',
  },
];

const Experience: FC = () => (
  <section id="experience" className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 sm:py-20 lg:px-0">
    <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
          <span className="h-px w-6 bg-violet" />
          Career so far
        </div>
        <h2 className="mt-2 text-[30px] font-bold tracking-[-1.5px] text-ink dark:text-white sm:text-[35px] sm:tracking-[-1.8px]">
          Experience, in brief
        </h2>
      </div>
      <p className="max-w-[370px] text-[13px] leading-[1.65] text-muted">
        A snapshot of the products, workflows, and capabilities I&apos;ve helped build in industry roles.
      </p>
    </div>

    <div className="grid gap-4">
      {roles.map((role) => (
        <article
          key={role.title}
          className="rounded-card border border-line bg-white p-5 dark:border-[#30394b] dark:bg-[#182334] sm:p-6"
        >
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-[170px_1fr_auto] lg:items-start">
            <time className="font-mono text-[11px] font-semibold text-violet">
              {role.period}
            </time>
            <div>
              <div className="flex items-center justify-between">
                <h3 className="m-0 text-[18px] font-bold tracking-[-0.6px] text-ink dark:text-white">
                  {role.title}
                </h3>
                <a
                  href={role.link}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Open ${role.company}`}
                  className="text-[16px] text-violet no-underline transition-transform hover:scale-110 lg:hidden"
                >
                  ↗
                </a>
              </div>
              <p className="mb-0 mt-1 text-[12px] font-semibold text-muted">
                {role.company}
              </p>
              <p className="mb-0 mt-3 text-[13px] leading-[1.65] text-muted">
                {role.summary}
              </p>
              <ul className="mb-0 mt-3 grid gap-2 pl-4 text-[12px] leading-[1.65] text-muted marker:text-violet">
                {role.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </div>
            <a
              href={role.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${role.company}`}
              className="hidden text-[18px] text-ink no-underline transition-colors hover:text-violet dark:text-white dark:hover:text-violet lg:block"
            >
              ↗
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Experience;
