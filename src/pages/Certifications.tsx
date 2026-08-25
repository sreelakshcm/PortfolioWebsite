import { FC } from 'react';
import { certifications } from '@utils/certifications';

const Certifications: FC = () => (
  <section
    id="certifications"
    className="mx-auto max-w-[1160px] py-[62px] sm:py-[88px]"
  >
    <div>
      <div className="mb-[30px] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-[10px] font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
            <span className="h-px w-[26px] bg-violet" />
            Continuing education
          </div>

          <h2 className="mt-[10px] text-[35px] font-bold tracking-[-1.8px] text-ink">
            Certifications
          </h2>
        </div>

        <p className="max-w-[370px] text-[13px] leading-[1.65] text-muted">
          Structured learning that supports my work across modern frontend and
          backend development.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-2">
        {certifications.map((cert) => (
          <article
            key={cert.title}
            className="group grid overflow-hidden rounded-project border border-line bg-paper transition-transform duration-200 hover:-translate-y-1 sm:grid-cols-[180px_1fr]"
          >
            <div className="h-[170px] overflow-hidden border-b border-line bg-lavender sm:h-full sm:min-h-[190px] sm:border-b-0 sm:border-r">
              <img
                src={cert.image}
                alt={`${cert.title} certificate`}
                className="h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]"
              />
            </div>

            <div className="p-5">
              <div className="font-mono text-[11px] text-violet">
                {cert.date.toUpperCase()}
              </div>

              <h3 className="mb-2 mt-[7px] text-[16px] font-bold leading-[1.35] tracking-[-0.5px] text-ink">
                {cert.title}
              </h3>

              <p className="m-0 text-[12px] leading-[1.65] text-muted">
                {cert.description} · {cert.provider}
              </p>

              <a
                href={cert.link}
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-block text-[12px] font-extrabold text-violet no-underline hover:underline"
              >
                View credential ↗
              </a>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Certifications;
