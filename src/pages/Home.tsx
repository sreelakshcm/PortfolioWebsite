import { FC } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Home: FC = () => {
  const handleDownload = (): void => {
    const link = document.createElement('a');
    link.href = '/files/Resume - Sree Lakshmi C M.pdf';
    link.setAttribute('download', 'Resume-Sree_Lakshmi_C_M.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div id="home" className="mx-auto w-full max-w-[1160px] px-4 sm:px-6 lg:px-0">
      {/* Hero */}
      <section className="grid grid-cols-1 items-center gap-10 py-8 sm:py-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-8 lg:py-16">
        {/* Left Content */}
        <div className="min-w-0">
          {/* Eyebrow */}
          <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
            <span className="h-px w-6 bg-violet" />
            MERN Stack Developer
          </div>

          {/* Heading */}
          <h1 className="my-4 max-w-[750px] text-[clamp(36px,7vw,70px)] font-bold leading-[1.05] tracking-[-0.05em] text-ink dark:text-white">
            Building reliable <span className="text-violet">full-stack</span>{' '}
            web products.
          </h1>

          {/* Description */}
          <p className="m-0 max-w-[560px] text-[14px] leading-[1.75] text-muted sm:text-[16px] sm:leading-[1.8]">
            Hi, I&apos;m Sree Lakshmi C M. I turn ideas into reliable,
            user-focused full-stack applications using React, TypeScript,
            Node.js, and modern databases.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-8">
            <a
              href="#work"
              className="rounded-[10px] bg-violet px-5 py-3.5 text-[13px] font-bold text-white no-underline transition-opacity hover:opacity-90"
            >
              Explore my work
            </a>

            <button
              type="button"
              onClick={handleDownload}
              className="rounded-[10px] border border-line bg-white px-5 py-3.5 text-[13px] font-bold text-ink transition-colors hover:bg-paper dark:border-[#39445a] dark:bg-[#1f2b3e] dark:text-white dark:hover:bg-[#28374f]"
            >
              Download résumé
            </button>
          </div>

          <div className="mt-5 flex flex-wrap items-center gap-2">
            <span className="mr-1 font-mono text-[10px] font-semibold uppercase tracking-[0.1em] text-muted">
              Connect
            </span>
            <a
              href="mailto:sreelakshcm@gmail.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Email Sree Lakshmi"
              title="Email me"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-[13px] text-muted no-underline transition-all hover:-translate-y-px hover:border-violet hover:text-violet dark:border-[#39445a] dark:bg-[#1f2b3e]"
            >
              <FaEnvelope aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/sree-lakshmi-c-m"
              target="_blank"
              rel="noreferrer"
              aria-label="Sree Lakshmi on LinkedIn"
              title="LinkedIn"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-[13px] text-muted no-underline transition-all hover:-translate-y-px hover:border-violet hover:text-violet dark:border-[#39445a] dark:bg-[#1f2b3e]"
            >
              <FaLinkedinIn aria-hidden="true" />
            </a>
            <a
              href="https://github.com/sreelakshcm"
              target="_blank"
              rel="noreferrer"
              aria-label="Sree Lakshmi on GitHub"
              title="GitHub"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-line bg-white text-[13px] text-muted no-underline transition-all hover:-translate-y-px hover:border-violet hover:text-violet dark:border-[#39445a] dark:bg-[#1f2b3e]"
            >
              <FaGithub aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* Responsive Artwork Container */}
        <div className="relative mx-auto flex h-[360px] w-full max-w-[420px] items-center justify-center sm:h-[420px] lg:h-[480px] lg:max-w-none">
          {/* Background Glow */}
          <div className="absolute inset-0 m-auto h-[220px] w-[220px] rounded-full bg-[#e9eafe] opacity-60 blur-[45px] sm:h-[300px] sm:w-[300px] sm:blur-[60px]" />

          {/* Main Lavender Shape */}
          <div className="absolute bottom-[4%] left-[8%] h-[78%] w-[80%] rounded-[48%_52%_42%_58%] bg-[linear-gradient(145deg,#d9d9ff,#cfcfff)] dark:opacity-80" />

          {/* Mint Shape */}
          <div className="absolute bottom-[10%] right-[4%] h-[42%] w-[42%] rounded-[999px_999px_35px_35px] bg-[#dff7f1] opacity-90 dark:opacity-75" />

          {/* Profile Image */}
          <img
            src="/assets/Profile-professional.png"
            alt="Sree Lakshmi C M"
            className="relative z-[2] h-full w-auto max-w-full object-contain object-bottom drop-shadow-[0_20px_24px_rgba(53,61,107,0.16)]"
          />

          {/* Experience Card */}
          <div className="absolute top-4 right-2 z-[4] rounded-[12px] border border-line bg-white p-3 text-ink shadow-float dark:border-[#30394b] dark:bg-[#182334] dark:text-white sm:top-6 sm:right-4 sm:p-3.5">
            <div className="mb-1.5 flex h-8 w-8 items-center justify-center rounded-[9px] bg-[#e9eafe] text-violet dark:bg-[#2b335c]">
              <span className="font-mono text-[13px] font-bold">&lt;/&gt;</span>
            </div>
            <strong className="block text-[14px] font-extrabold leading-none sm:text-[16px]">
              2+ Years
            </strong>
            <span className="mt-1 block text-[10px] text-muted">
              Experience
            </span>
          </div>

          {/* Availability Card */}
          <div className="absolute bottom-3 left-2 z-[4] rounded-[12px] border border-line bg-white p-3 text-ink shadow-float dark:border-[#30394b] dark:bg-[#182334] dark:text-white sm:bottom-4 sm:left-4 sm:p-3.5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#18796e] shadow-[0_0_0_4px_rgba(24,121,110,0.15)]" />
              <strong className="whitespace-nowrap text-[11px] font-extrabold">
                Available for opportunities
              </strong>
            </div>
            <span className="ml-[18px] mt-0.5 block font-mono text-[9px] text-muted">
              Immediate Joiner
            </span>
          </div>
        </div>
      </section>

      {/* Why Hire Me */}
      <section className="grid grid-cols-1 gap-4 pb-12 sm:grid-cols-3 sm:pb-20">
        <div className="sm:col-span-3">
          <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
            <span className="h-px w-6 bg-violet" />
            Why hire me
          </div>
          <p className="mb-0 mt-2 text-[13px] leading-[1.65] text-muted">
            A practical full-stack developer with industry experience and a
            commitment to continuous learning.
          </p>
        </div>

        <div className="rounded-card border border-line bg-white p-5 dark:border-[#30394b] dark:bg-[#182334]">
          <strong className="block text-[26px] font-bold leading-none tracking-[-1px] text-ink dark:text-white">
            2+
          </strong>
          <span className="mt-1.5 block text-[12px] text-muted">
            Years shipping internal business tools
          </span>
        </div>

        <div className="rounded-card border border-line bg-white p-5 dark:border-[#30394b] dark:bg-[#182334]">
          <strong className="block text-[26px] font-bold leading-none tracking-[-1px] text-ink dark:text-white">
            React + Node + AI
          </strong>
          <span className="mt-1.5 block text-[12px] text-muted">
            TypeScript-powered full-stack and AI integration
          </span>
        </div>

        <div className="rounded-card border border-line bg-white p-5 dark:border-[#30394b] dark:bg-[#182334]">
          <strong className="block text-[26px] font-bold leading-none tracking-[-1px] text-ink dark:text-white">
            Ready now
          </strong>
          <span className="mt-1.5 block text-[12px] text-muted">
            Available to join immediately
          </span>
        </div>

        <div className="sm:col-span-3 flex flex-col gap-2 rounded-card border border-[#ccece5] bg-[#dff7f1] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 dark:border-[#28544f] dark:bg-[#193b38]">
          <div>
            <span className="font-mono text-[10px] font-semibold uppercase tracking-[0.09em] text-[#26756b] dark:text-[#79cfc3]">
              Continuous learning · 2026
            </span>
            <p className="mb-0 mt-1 text-[12px] font-bold text-ink dark:text-white">
              Upskilling in agentic AI, LangGraph, AutoGen, and Python.
            </p>
          </div>
          <p className="mb-0 text-[11px] leading-[1.55] text-[#47716c] sm:max-w-[350px] sm:text-right dark:text-[#9bc9c3]">
            Targeting practical AI-agent builds by October 2026.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
