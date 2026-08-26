import { FC } from 'react';
import { FaEnvelope, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer: FC = () => (
  <footer className="border-t border-line px-5 py-5 font-mono text-[11px] text-muted">
    <div className="mx-auto flex max-w-[1160px] flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <span>© 2026 Sree Lakshmi C M</span>

      <div className="flex items-center gap-3">
        <span className="text-[10px] uppercase tracking-[0.1em]">Connect</span>
        <a
          className="inline-flex items-center gap-1.5 text-muted no-underline transition-colors hover:text-violet"
          href="mailto:sreelakshcm@gmail.com"
          target="_blank"
          rel="noreferrer"
          aria-label="Email Sree Lakshmi"
        >
          <FaEnvelope aria-hidden="true" /> Email
        </a>
        <a
          className="inline-flex items-center gap-1.5 text-muted no-underline transition-colors hover:text-violet"
          href="https://www.linkedin.com/in/sree-lakshmi-c-m"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn aria-hidden="true" /> LinkedIn
        </a>
        <a
          className="inline-flex items-center gap-1.5 text-muted no-underline transition-colors hover:text-violet"
          href="https://github.com/sreelakshcm"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub aria-hidden="true" /> GitHub
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
