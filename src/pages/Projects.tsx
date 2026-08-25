import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@app/store';

const Projects: FC = () => {
  const theme = useSelector((state: RootState) => state.theme.theme);
  const isDarkTheme = theme === 'dark';

  return (
    <section
      id="work"
      className="mx-auto max-w-[1160px] py-[62px] sm:py-[88px]"
    >
      <div className="mb-[30px] flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-[10px] font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
            <span className="h-px w-[26px] bg-violet" />
            Selected work
          </div>
          <h2 className="mt-[10px] text-[35px] font-bold tracking-[-1.8px] text-ink">
            Things I&apos;ve brought to life
          </h2>
        </div>
        <p className="max-w-[370px] text-[13px] leading-[1.65] text-muted">
          Product-focused web applications built for discovery, clear
          workflows, and reliable day-to-day use.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-[18px] lg:grid-cols-[1.15fr_.85fr]">
        <article className="overflow-hidden rounded-project border border-line bg-white transition-transform duration-200 hover:-translate-y-1">
          <div className="h-[250px] overflow-hidden bg-[linear-gradient(135deg,#e1e2ff,#c9eff5)]">
            <img
              src={
                isDarkTheme
                  ? '/assets/projects/tourvesta-dark.png'
                  : '/assets/projects/tourvesta-light.png'
              }
              alt="Tourvesta tour discovery homepage"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="px-[22px] pb-6 pt-[21px]">
            <div className="font-mono text-[11px] text-violet">
              FEATURED PROJECT · 2026
            </div>
            <h3 className="my-[7px] text-[18px] font-bold tracking-[-0.6px] text-ink">
              Tourvesta
            </h3>
            <p className="text-[13px] leading-[1.65] text-muted">
              A full tour discovery and booking platform where travelers can
              explore itineraries and maps, reserve tours, manage bookings,
              and share reviews. Includes secure, role-based experiences for
              travelers, guides, and administrators.
            </p>
            <a
              className="mt-[17px] inline-block text-[12px] font-extrabold text-violet no-underline hover:underline"
              href="https://tourvesta-web.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View live project ↗
            </a>
          </div>
        </article>

        <article className="overflow-hidden rounded-project border border-line bg-white transition-transform duration-200 hover:-translate-y-1">
          <div className="h-[250px] overflow-hidden bg-[linear-gradient(135deg,#ffe5da,#ffeed1)]">
            <img
              src={
                isDarkTheme
                  ? '/assets/projects/portfolio-dark.png'
                  : '/assets/projects/portfolio-light.png'
              }
              alt="Sree Lakshmi C M portfolio homepage"
              className="h-full w-full object-cover object-top"
            />
          </div>
          <div className="px-[22px] pb-6 pt-[21px]">
            <div className="font-mono text-[11px] text-violet">
              PERSONAL PROJECT · 2026
            </div>
            <h3 className="my-[7px] text-[18px] font-bold tracking-[-0.6px] text-ink">
              Portfolio Website
            </h3>
            <p className="text-[13px] leading-[1.65] text-muted">
              A responsive personal portfolio that presents my skills,
              experience, and work through a polished interface, with smooth
              interactions, theme support, and persistent UI preferences.
            </p>
            <a
              className="mt-[17px] inline-block text-[12px] font-extrabold text-violet no-underline hover:underline"
              href="https://github.com/sreelakshcm/PortfolioWebsite"
              target="_blank"
              rel="noreferrer"
            >
              View source ↗
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Projects;
