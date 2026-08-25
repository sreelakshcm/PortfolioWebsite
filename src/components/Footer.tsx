import { FC } from 'react';

const Footer: FC = () => (
  <footer className="border-t border-line px-5 py-[27px] font-mono text-[11px] text-muted">
    <div className="mx-auto max-w-[1160px]">
      © 2026 Sree Lakshmi C M ·{' '}
      <a className="text-muted hover:text-violet" href="https://www.linkedin.com/in/sree-lakshmi-c-m" target="_blank" rel="noreferrer">LinkedIn</a>
      {' '}·{' '}
      <a className="text-muted hover:text-violet" href="https://github.com/sreelakshcm" target="_blank" rel="noreferrer">GitHub</a>
    </div>
  </footer>
);

export default Footer;
