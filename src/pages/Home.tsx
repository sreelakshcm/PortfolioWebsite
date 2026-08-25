import { FC } from 'react';

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
    <div className="mx-auto w-full max-w-[1160px] px-5 sm:px-7 lg:px-0">
      {/* Hero */}
      <section
        className="
          grid
          grid-cols-1
          items-center
          gap-8
          py-10
          pb-16
          sm:gap-10
          sm:py-12
          lg:grid-cols-[1.08fr_.92fr]
          lg:gap-6
          lg:py-14
          lg:pb-20
        "
      >
        {/* Left Content */}
        <div className="min-w-0">
          {/* Eyebrow */}
          <div className="flex items-center gap-[10px] font-mono text-[10px] font-medium uppercase tracking-[0.11em] text-violet sm:text-[11px]">
            <span className="h-px w-5 bg-violet sm:w-[26px]" />
            MERN Stack Developer
          </div>

          {/* Heading */}
          <h1
            className="
              my-4
              max-w-[750px]
              text-[clamp(42px,10vw,73px)]
              font-bold
              leading-[1.02]
              tracking-[-0.065em]
              text-ink
              sm:my-[17px]
              sm:mb-[18px]
              dark:text-white
            "
          >
            Building useful things for <span className="text-violet">web.</span>
          </h1>

          {/* Description */}
          <p
            className="
              m-0
              max-w-[560px]
              text-[14px]
              leading-[1.75]
              text-muted
              sm:text-[16px]
              sm:leading-[1.8]
            "
          >
            Hi, I&apos;m Sree Lakshmi C M. I turn ideas into reliable,
            user-focused full-stack applications using React, TypeScript,
            Node.js, and modern databases.
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3 sm:mt-[29px]">
            <a
              href="#work"
              className="
                rounded-[10px]
                bg-violet
                px-4
                py-3
                text-[12px]
                font-bold
                text-white
                no-underline
                transition-opacity
                hover:opacity-90
                sm:px-[17px]
                sm:py-[14px]
                sm:text-[13px]
              "
            >
              Explore my work
            </a>

            <button
              type="button"
              onClick={handleDownload}
              className="
                rounded-[10px]
                border
                border-line
                bg-white
                px-4
                py-3
                text-[12px]
                font-bold
                text-ink
                transition-colors
                hover:bg-paper
                sm:px-[17px]
                sm:py-[14px]
                sm:text-[13px]
                dark:border-[#39445a]
                dark:bg-white
                dark:text-ink
              "
            >
              Download résumé
            </button>
          </div>
        </div>

        {/* Responsive Artwork */}
        <div
          className="
            relative
            mx-auto
            h-[370px]
            w-full
            max-w-[360px]
            sm:h-[430px]
            sm:max-w-[450px]
            md:h-[490px]
            md:max-w-[500px]
            lg:h-[520px]
            lg:max-w-[520px]
          "
        >
          {/* Background Glow */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              z-0
              h-[260px]
              w-[260px]
              -translate-x-1/2
              -translate-y-1/2
              rounded-full
              bg-[#e9eafe]
              opacity-60
              blur-[50px]
              sm:h-[330px]
              sm:w-[330px]
              sm:blur-[60px]
              md:h-[370px]
              md:w-[370px]
            "
          />

          {/* Main Lavender Shape */}
          <div
            className="
              absolute
              bottom-[5%]
              left-[12%]
              z-0
              h-[78%]
              w-[76%]
              rounded-[48%_52%_42%_58%]
              bg-[linear-gradient(145deg,#d9d9ff,#cfcfff)]
              sm:left-[10%]
              sm:w-[78%]
              md:left-[9%]
              md:w-[78%]
            "
          />

          {/* Mint Shape */}
          <div
            className="
              absolute
              bottom-[13%]
              right-[2%]
              z-[1]
              h-[43%]
              w-[40%]
              rounded-[999px_999px_35px_35px]
              bg-[#dff7f1]
              opacity-90
              sm:bottom-[11%]
              sm:right-[1%]
              sm:h-[46%]
              sm:w-[42%]
              md:h-[48%]
              md:w-[43%]
            "
          />

          {/* Small Outline Circle */}
          <div
            className="
              absolute
              left-[3%]
              top-[35%]
              z-[1]
              h-[55px]
              w-[55px]
              rounded-full
              border-2
              border-[#7476e8]/40
              sm:h-[70px]
              sm:w-[70px]
              md:h-[85px]
              md:w-[85px]
            "
          />

          {/* Profile Image */}
          <img
            src="/assets/Profile-professional.png"
            alt="Sree Lakshmi C M"
            className="
              absolute
              bottom-0
              left-1/2
              z-[2]
              h-[330px]
              w-[270px]
              -translate-x-1/2
              object-contain
              object-bottom
              drop-shadow-[0_20px_24px_rgba(53,61,107,0.16)]
              sm:h-[400px]
              sm:w-[325px]
              sm:drop-shadow-[0_24px_28px_rgba(53,61,107,0.17)]
              md:h-[450px]
              md:w-[450px]
              lg:h-[600px]
              lg:w-[600px]
            "
          />

          {/* Experience Card */}
          <div
            className="
              absolute
              right-0
              top-[45px]
              z-[4]
              rounded-[12px]
              border
              border-white
              bg-white
              px-3
              py-3
              text-ink
              shadow-float
              sm:top-[55px]
              sm:rounded-[14px]
              sm:px-[15px]
              sm:py-[14px]
              dark:border-white
              dark:bg-white
              dark:text-ink
            "
          >
            <div
              className="
                mb-1.5
                flex
                h-8
                w-8
                items-center
                justify-center
                rounded-[9px]
                bg-[#e9eafe]
                text-violet
                sm:mb-2
                sm:h-[38px]
                sm:w-[38px]
                sm:rounded-[12px]
              "
            >
              <span className="font-mono text-[14px] font-bold sm:text-[17px]">
                &lt;/&gt;
              </span>
            </div>

            <strong className="block text-[14px] font-extrabold leading-none text-ink sm:text-[17px]">
              2+ Years
            </strong>

            <span className="mt-1 block text-[10px] text-muted sm:text-[11px]">
              Experience
            </span>
          </div>

          {/* Availability Card */}
          <div
            className="
              absolute
              bottom-[12px]
              right-0
              z-[4]
              rounded-[12px]
              border
              border-line
              bg-white
              px-3
              py-3
              text-ink
              shadow-float
              sm:bottom-[18px]
              sm:right-[-5px]
              sm:rounded-[14px]
              sm:px-[16px]
              sm:py-[14px]
              dark:border-white
              dark:bg-white
              dark:text-ink
            "
          >
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#18796e] shadow-[0_0_0_4px_rgba(24,121,110,0.10)]" />

              <strong className="whitespace-nowrap text-[10px] font-extrabold text-ink sm:text-[11px] md:text-[12px]">
                Available for opportunities
              </strong>
            </div>

            <span className="ml-[18px] mt-1 block font-mono text-[9px] text-muted sm:text-[10px]">
              Immediate Joiner
            </span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-1 gap-4 pb-[58px] sm:grid-cols-3 sm:pb-[96px]">
        {/* Experience */}
        <div
          className="
            rounded-card
            border
            border-line
            bg-white
            px-[23px]
            py-[21px]
            dark:border-[#30394b]
            dark:bg-[#182334]
          "
        >
          <strong className="block text-[25px] font-bold leading-none tracking-[-1px] text-ink dark:text-white">
            2+
          </strong>

          <span className="mt-1 block text-[12px] text-muted">
            Years of industry experience
          </span>
        </div>

        {/* Projects */}
        <div
          className="
            rounded-card
            border
            border-line
            bg-white
            px-[23px]
            py-[21px]
            dark:border-[#30394b]
            dark:bg-[#182334]
          "
        >
          <strong className="block text-[25px] font-bold leading-none tracking-[-1px] text-ink dark:text-white">
            5+
          </strong>

          <span className="mt-1 block text-[12px] text-muted">
            Projects completed
          </span>
        </div>

        {/* Stack */}
        <div
          className="
            rounded-card
            border
            border-line
            bg-white
            px-[23px]
            py-[21px]
            dark:border-[#30394b]
            dark:bg-[#182334]
          "
        >
          <strong className="block text-[25px] font-bold leading-none tracking-[-1px] text-ink dark:text-white">
            MERN
          </strong>

          <span className="mt-1 block text-[12px] text-muted">
            End-to-end web development
          </span>
        </div>
      </section>
    </div>
  );
};

export default Home;
