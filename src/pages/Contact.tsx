import ContactModal from '@components/ContactModal';
import { FC, useState } from 'react';

const Contact: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section
        id="contact"
        className="
          mx-auto
          mb-[55px]
          flex
          max-w-[1160px]
          flex-col
          gap-[30px]
          rounded-contact
          bg-ink
          px-[27px]
          py-[35px]
          text-white
          sm:mb-[85px]
          sm:flex-row
          sm:items-end
          sm:justify-between
          sm:px-[62px]
          sm:py-[59px]
        "
      >
        <div>
          <div
            className="
              flex
              items-center
              gap-[10px]
              font-mono
              text-[11px]
              font-medium
              uppercase
              tracking-[0.11em]
              text-contact-accent
            "
          >
            <span className="h-px w-[26px] bg-contact-accent" />
            Start a conversation
          </div>

          <h2
            className="
              mb-0
              mt-[14px]
              text-[clamp(34px,4.5vw,52px)]
              font-bold
              leading-[1.1]
              tracking-[-2.5px]
            "
          >
            Let&apos;s make something
            <br />
            that matters.
          </h2>

          <p
            className="
              mb-0
              mt-[14px]
              text-[14px]
              leading-[1.7]
              text-contact-muted
            "
          >
            I&apos;d love to hear about your next role, product, or development
            challenge.
          </p>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="
            w-fit
            whitespace-nowrap
            rounded-button
            bg-white
            px-[17px]
            py-[14px]
            text-[13px]
            font-extrabold
            text-ink
            transition-colors
            hover:bg-lavender
          "
        >
          Email me ↗
        </button>
      </section>

      <ContactModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Contact;
