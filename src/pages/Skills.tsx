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

const Skills: React.FC = () => {
  const skillData = skills as SkillCategory[];

  const categoryStyles = {
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
  } as const;

  const renderSkill = (skill: SkillItem): React.ReactNode => {
    return (
      <div
        key={skill.name}
        className="
          group
          inline-flex
          items-center
          gap-1.5
          rounded-full
          border
          border-[#e7eaf2]
          bg-white
          px-2.5
          py-1.5
          transition-all
          duration-200
          hover:-translate-y-[1px]
          hover:border-[#cfd2f8]
          hover:bg-[#f7f7ff]
          dark:border-[#354157]
          dark:bg-[#202c3f]
          dark:hover:border-[#6268e8]
          dark:hover:bg-[#27344a]
        "
      >
        {skill.icon ? (
          <img
            src={skill.icon}
            alt=""
            aria-hidden="true"
            className="
              h-5
              w-5
              shrink-0
              object-contain
              transition-transform
              duration-200
              group-hover:scale-110
            "
          />
        ) : (
          <span
            className="
              flex
              h-5
              w-5
              shrink-0
              items-center
              justify-center
              rounded-full
              bg-[#e9eafe]
              font-mono
              text-[7px]
              font-bold
              text-violet
              dark:bg-[#30365f]
              dark:text-[#b7baff]
            "
          >
            {skill.name === 'Axios' ? 'AX' : 'JWT'}
          </span>
        )}

        <span
          className="
            whitespace-nowrap
            text-[10px]
            font-semibold
            leading-none
            text-ink
            dark:text-[#edf1f8]
          "
        >
          {skill.name}
        </span>
      </div>
    );
  };

  return (
    <section
      id="skills"
      className="
        px-5
        py-[48px]
        pb-[18px]
        sm:px-7
        sm:py-[58px]
        lg:px-0
        lg:py-[65px]
        lg:pb-[18px]
      "
    >
      <div className="mx-auto w-full max-w-[1160px]">
        {/* Section Header */}
        <div
          className="
            mb-6
            flex
            flex-col
            gap-3
            sm:mb-7
            lg:flex-row
            lg:items-end
            lg:justify-between
          "
        >
          <div>
            <div
              className="
                flex
                items-center
                gap-[10px]
                font-mono
                text-[10px]
                font-medium
                uppercase
                tracking-[0.11em]
                text-violet
                sm:text-[11px]
              "
            >
              <span className="h-px w-5 bg-violet sm:w-[26px]" />
              Technical toolkit
            </div>

            <h2
              className="
                mt-2
                text-[29px]
                font-bold
                leading-[1.05]
                tracking-[-1.4px]
                text-ink
                sm:text-[35px]
                sm:tracking-[-1.8px]
                dark:text-white
              "
            >
              Skills &amp; technologies
            </h2>
          </div>

          <p
            className="
              m-0
              max-w-full
              text-[11px]
              leading-[1.65]
              text-muted
              sm:max-w-[420px]
              sm:text-[12px]
              lg:max-w-[380px]
              lg:text-right
            "
          >
            A practical full-stack toolkit spanning modern frontend,
            backend, databases, UI systems, and developer tooling.
          </p>
        </div>

        {/* Technology Groups */}
        <div
          className="
            overflow-hidden
            rounded-[16px]
            border
            border-line
            bg-white
            dark:border-[#30394b]
            dark:bg-[#182334]
          "
        >
          {skillData.map((category, index) => {
            const styles =
              categoryStyles[
                category.title as keyof typeof categoryStyles
              ];

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{
                  once: true,
                  amount: 0.2,
                }}
                transition={{
                  duration: 0.35,
                  delay: index * 0.06,
                  ease: 'easeOut',
                }}
                className="
                  flex
                  flex-col
                  gap-2.5
                  px-4
                  py-3.5
                  sm:flex-row
                  sm:items-start
                  sm:gap-5
                  sm:px-5
                  sm:py-4
                  lg:px-6
                "
              >
                {/* Category Label */}
                <div
                  className="
                    flex
                    shrink-0
                    items-center
                    gap-2
                    sm:w-[185px]
                    sm:pt-1
                    lg:w-[210px]
                  "
                >
                  <span
                    className={`
                      font-mono
                      text-[9px]
                      font-medium
                      tracking-[0.12em]
                      ${styles.accent}
                    `}
                  >
                    {styles.number}
                  </span>

                  <span
                    className={`
                      h-px
                      w-4
                      ${styles.line}
                    `}
                  />

                  <span
                    className="
                      text-[11px]
                      font-bold
                      leading-tight
                      text-ink
                      dark:text-white
                    "
                  >
                    {category.title}
                  </span>
                </div>

                {/* Technologies */}
                <div className="flex flex-1 flex-wrap gap-1.5">
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
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.35,
            delay: 0.35,
            ease: 'easeOut',
          }}
          className="
            mt-3
            flex
            flex-col
            gap-2
            rounded-[13px]
            border
            border-[#ccece5]
            bg-[#dff7f1]
            px-4
            py-3
            sm:flex-row
            sm:items-center
            sm:justify-between
            sm:px-5
            dark:border-[#28544f]
            dark:bg-[#193b38]
          "
        >
          <div className="flex items-center gap-2.5">
            <span
              className="
                h-2
                w-2
                shrink-0
                rounded-full
                bg-[#18796e]
                dark:bg-[#79cfc3]
              "
            />

            <div>
              <span
                className="
                  block
                  font-mono
                  text-[8px]
                  uppercase
                  tracking-[0.08em]
                  text-[#26756b]
                  dark:text-[#79cfc3]
                "
              >
                In progress · October 2026
              </span>

              <strong
                className="
                  block
                  text-[11px]
                  font-bold
                  text-ink
                  dark:text-white
                "
              >
                Agentic AI course
              </strong>
            </div>
          </div>

          <p
            className="
              m-0
              text-[10px]
              leading-[1.5]
              text-[#47716c]
              sm:max-w-[430px]
              sm:text-right
              dark:text-[#9bc9c3]
            "
          >
            Expanding into AI-powered workflows and intelligent agents.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
