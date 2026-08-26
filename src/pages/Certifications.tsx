import { FC } from 'react';
import { certifications } from '@utils/certifications';

const Certifications: FC = () => (
  <section
    id="certifications"
    className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0"
  >
    <div>
      <div className="mb-[30px] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-[10px] font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
            <span className="h-px w-[26px] bg-violet" />
            Continuing education
          </div>

          <h2 className="mt-[10px] text-[28px] font-bold tracking-[-1.4px] text-ink dark:text-white sm:text-[31px]">
            Certifications
          </h2>
        </div>

        <p className="max-w-[370px] text-[13px] leading-[1.65] text-muted">
          Structured learning that supports my work across modern frontend and
          backend development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="group flex items-start gap-4 rounded-card border border-line bg-white p-4 transition-transform duration-200 hover:-translate-y-0.5 dark:border-[#30394b] dark:bg-[#182334]"
          >
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-[9px] border border-line bg-lavender dark:border-[#30394b]">
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="min-w-0">
              <div className="font-mono text-[10px] text-violet">
                {cert.date.toUpperCase()}
              </div>

              <h3 className="mb-1 mt-1 text-[14px] font-bold leading-[1.35] tracking-[-0.3px] text-ink dark:text-white">
                {cert.title}
              </h3>

              <p className="m-0 text-[11px] leading-[1.55] text-muted">
                {cert.description} · {cert.provider}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-[11px] font-extrabold text-violet no-underline hover:underline"
              >
                View credential ↗
              </a>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-2 rounded-card border border-[#ccece5] bg-[#dff7f1] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 dark:border-[#28544f] dark:bg-[#193b38]">
        <div>
          <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-[#26756b] dark:text-[#79cfc3]">
            Active learning direction · 2026
          </span>
          <p className="mb-0 mt-1 text-[12px] font-bold text-ink dark:text-white">
            Agentic AI, LangGraph, AutoGen, and Python
          </p>
        </div>
        <p className="mb-0 text-[11px] leading-[1.55] text-[#47716c] sm:max-w-[390px] sm:text-right dark:text-[#9bc9c3]">
          Currently building toward practical AI-agent projects by October 2026.
        </p>
      </div>
    </div>
  </section>
);

export default Certifications;
