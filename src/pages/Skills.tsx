import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '@utils/skills';

type SkillItem = {
  name: string;
  icon: string | null;
};

type SkillCategory = {
  title: string;
  frameworks: SkillItem[];
};

const categoryStyles: Record<string, { number: string; accent: string; line: string }> = {
  Frontend: {
    number: '01',
    accent: 'text-violet',
    line: 'bg-violet',
  },
  'Libraries & Tools': {
    number: '02',
    accent: 'text-[#18796e] dark:text-[#79cfc3]',
    line: 'bg-[#18796e]',
  },
  Backend: {
    number: '03',
    accent: 'text-[#d06c4d] dark:text-[#f0a88d]',
    line: 'bg-[#d06c4d]',
  },
  Database: {
    number: '04',
    accent: 'text-violet',
    line: 'bg-violet',
  },
  'UI Libraries / Frameworks': {
    number: '05',
    accent: 'text-[#18796e] dark:text-[#79cfc3]',
    line: 'bg-[#18796e]',
  },
};

const Skills: React.FC = () => {
  const skillData = skills as SkillCategory[];

  const renderSkill = (skill: SkillItem): React.ReactNode => (
    <div
      key={skill.name}
      className="group inline-flex items-center gap-1.5 rounded-full border border-[#e7eaf2] bg-white px-3 py-1.5 transition-all duration-200 hover:-translate-y-[1px] hover:border-[#cfd2f8] hover:bg-[#f7f7ff] dark:border-[#354157] dark:bg-[#202c3f] dark:hover:border-[#6268e8] dark:hover:bg-[#27344a]"
    >
      {skill.icon ? (
        <img
          src={skill.icon}
          alt=""
          aria-hidden="true"
          className="h-4 w-4 shrink-0 object-contain transition-transform duration-200 group-hover:scale-110 sm:h-5 sm:w-5"
        />
      ) : (
        <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#e9eafe] font-mono text-[7px] font-bold text-violet dark:bg-[#30365f] dark:text-[#b7baff] sm:h-5 sm:w-5">
          {skill.name === 'Axios' ? 'AX' : 'JWT'}
        </span>
      )}

      <span className="whitespace-nowrap text-[11px] font-semibold leading-none text-ink dark:text-[#edf1f8]">
        {skill.name}
      </span>
    </div>
  );

  return (
    <section id="skills" className="mx-auto max-w-[1160px] px-4 py-12 sm:px-6 sm:py-16 lg:px-0">
      {/* Section Header */}
      <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <div className="flex items-center gap-2.5 font-mono text-[11px] font-medium uppercase tracking-[0.11em] text-violet">
            <span className="h-px w-6 bg-violet" />
            Technical toolkit
          </div>
          <h2 className="mt-2 text-[29px] font-bold leading-[1.05] tracking-[-1.4px] text-ink dark:text-white sm:text-[35px] sm:tracking-[-1.8px]">
            Skills &amp; technologies
          </h2>
        </div>

        <p className="m-0 max-w-full text-[12px] leading-[1.65] text-muted sm:max-w-[420px] lg:text-right">
          A practical full-stack toolkit spanning modern frontend, backend, databases, UI systems, and developer tooling.
        </p>
      </div>

      {/* Technology Groups */}
      <div className="overflow-hidden rounded-[16px] border border-line bg-white divide-y divide-line/60 dark:divide-line/20 dark:border-[#30394b] dark:bg-[#182334]">
        {skillData.map((category, index) => {
          const styles = categoryStyles[category.title] || {
            number: `0${index + 1}`,
            accent: 'text-violet',
            line: 'bg-violet',
          };

          return (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.35, delay: index * 0.05, ease: 'easeOut' }}
              className="flex flex-col gap-3 p-4 sm:flex-row sm:items-start sm:gap-6 sm:p-5 lg:px-6"
            >
              {/* Category Label */}
              <div className="flex shrink-0 items-center gap-2 sm:w-[200px] sm:pt-1.5">
                <span className={`font-mono text-[10px] font-medium tracking-[0.12em] ${styles.accent}`}>
                  {styles.number}
                </span>
                <span className={`h-px w-4 ${styles.line}`} />
                <span className="text-[12px] font-bold leading-tight text-ink dark:text-white">
                  {category.title}
                </span>
              </div>

              {/* Technologies */}
              <div className="flex flex-1 flex-wrap gap-2">
                {category.frameworks.map(renderSkill)}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Agentic AI Strip */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.35, delay: 0.3, ease: 'easeOut' }}
        className="mt-4 flex flex-col gap-2 rounded-[13px] border border-[#ccece5] bg-[#dff7f1] p-4 sm:flex-row sm:items-center sm:justify-between sm:px-5 dark:border-[#28544f] dark:bg-[#193b38]"
      >
        <div className="flex items-center gap-2.5">
          <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#18796e] dark:bg-[#79cfc3]" />
          <div>
            <span className="block font-mono text-[9px] uppercase tracking-[0.08em] text-[#26756b] dark:text-[#79cfc3]">
              In progress · 2026
            </span>
            <strong className="block text-[12px] font-bold text-ink dark:text-white">
              Agentic AI course
            </strong>
          </div>
        </div>

        <p className="m-0 text-[11px] leading-[1.5] text-[#47716c] sm:max-w-[430px] sm:text-right dark:text-[#9bc9c3]">
          Expanding into AI-powered workflows and intelligent agents.
        </p>
      </motion.div>
    </section>
  );
};

export default Skills;
