import { FC } from 'react';

const principles = [
  {
    number: '01',
    title: 'Think in products',
    copy: 'I look beyond individual screens to understand the user journey, the workflow behind it, and the outcome it needs to create.',
  },
  {
    number: '02',
    title: 'Build with care',
    copy: 'Clear interfaces, resilient application state, and maintainable services matter equally when turning an idea into a dependable product.',
  },
  {
    number: '03',
    title: 'Keep improving',
    copy: 'I enjoy learning from each project, collaborating with teams, and steadily expanding the range of problems I can solve.',
  },
];

const About: FC = () => (
  <section
    id="about"
    className="mx-auto max-w-[1160px] py-[62px] sm:py-[88px]"
  >
    <div className="grid grid-cols-1 gap-[55px] lg:grid-cols-[.8fr_1.2fr]">
      <div>
        <div className="flex items-center gap-[10px] font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
          <span className="h-px w-[26px] bg-violet" />
          A little about me
        </div>

        <h2 className="my-[10px] text-[34px] font-bold leading-[1.2] tracking-[-1.8px] text-ink">
          Thoughtful work,
          <br />
          from first idea to launch.
        </h2>

        <p className="mt-5 max-w-[360px] text-[15px] leading-[1.8] text-muted">
          I&apos;m a full-stack developer who enjoys making complex products
          feel straightforward, useful, and polished.
        </p>
      </div>

      <div className="divide-y divide-line">
        {principles.map((principle) => (
          <article
            key={principle.number}
            className="grid grid-cols-[42px_1fr] gap-4 py-5 first:pt-5 last:pb-5"
          >
            <span className="font-mono text-[11px] text-violet">
              {principle.number}
            </span>

            <div>
              <h3 className="m-0 text-[16px] font-bold tracking-[-0.5px] text-ink">
                {principle.title}
              </h3>

              <p className="mb-0 mt-[7px] text-[13px] leading-[1.65] text-muted">
                {principle.copy}
              </p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
