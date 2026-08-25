import { FC, FormEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch } from 'react-redux';
import { apiPost } from '@api/api';
import { AppDispatch } from '@app/store';
import { addAlert } from '@app/features/alertSlice';
import { setLoading } from '@features/loaderSlice';

type FormData = {
  name: string;
  email: string;
  message: string;
};

const emptyForm: FormData = {
  name: '',
  email: '',
  message: '',
};

const Contact: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string): void => {
    setFormData((currentForm) => ({
      ...currentForm,
      [field]: value,
    }));
  };

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    event.preventDefault();

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.message.trim()
    ) {
      dispatch(
        addAlert({
          message: 'Please complete all fields.',
          type: 'error',
        }),
      );

      return;
    }

    setIsSubmitting(true);
    dispatch(setLoading(true));

    try {
      const { data } = await apiPost<{
        success: boolean;
        message: string;
      }>('send-email', formData);

      dispatch(
        addAlert({
          message:
            data.message || 'Thanks — your message has been sent.',
          type: data.success ? 'success' : 'error',
        }),
      );

      if (data.success) {
        setFormData(emptyForm);
        setIsOpen(false);
      }
    } catch {
      dispatch(
        addAlert({
          message:
            'Sorry, your message could not be sent. Please try again shortly.',
          type: 'error',
        }),
      );
    } finally {
      setIsSubmitting(false);
      dispatch(setLoading(false));
    }
  };

  return (
    <>
      {/* Contact Section */}
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
        {/* Content */}
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
            I&apos;d love to hear about your next role, product, or
            development challenge.
          </p>
        </div>

        {/* Email Button */}
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

      {/* Contact Modal */}
      {isOpen &&
        createPortal(
          <div
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-ink/45
              px-5
              py-8
              backdrop-blur-[6px]
            "
            role="presentation"
            onMouseDown={() => setIsOpen(false)}
          >
            {/* Modal */}
            <div
              className="
                w-full
                max-w-[560px]
                rounded-project
                bg-white
                p-6
                shadow-[0_24px_70px_rgba(24,35,52,.28)]
                sm:p-8
              "
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-form-title"
              onMouseDown={(event) => event.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="mb-6 flex items-start justify-between gap-4">
                <div>
                  <div
                    className="
                      font-mono
                      text-[11px]
                      uppercase
                      tracking-[0.11em]
                      text-violet
                    "
                  >
                    Start a conversation
                  </div>

                  <h3
                    id="contact-form-title"
                    className="
                      mb-0
                      mt-2
                      text-[25px]
                      font-bold
                      tracking-[-1px]
                      text-ink
                    "
                  >
                    Send a message
                  </h3>
                </div>

                {/* Close Button */}
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close contact form"
                  className="
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-line
                    text-[20px]
                    leading-none
                    text-muted
                    transition-colors
                    hover:border-violet
                    hover:text-violet
                  "
                >
                  ×
                </button>
              </div>

              {/* Form */}
              <form
                onSubmit={handleSubmit}
                className="grid gap-4"
                noValidate
              >
                {/* Name & Email */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <label
                    className="
                      grid
                      gap-1.5
                      text-[12px]
                      font-bold
                      text-muted
                    "
                  >
                    Name

                    <input
                      type="text"
                      value={formData.name}
                      onChange={(event) =>
                        updateField('name', event.target.value)
                      }
                      placeholder="Your name"
                      required
                      autoFocus
                      className="
                        w-full
                        rounded-button
                        border
                        border-line
                        bg-paper
                        px-3
                        py-3
                        text-[13px]
                        text-ink
                        outline-none
                        placeholder:text-muted/70
                        focus:border-violet
                        focus:bg-white
                      "
                    />
                  </label>

                  <label
                    className="
                      grid
                      gap-1.5
                      text-[12px]
                      font-bold
                      text-muted
                    "
                  >
                    Email

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(event) =>
                        updateField('email', event.target.value)
                      }
                      placeholder="you@example.com"
                      required
                      className="
                        w-full
                        rounded-button
                        border
                        border-line
                        bg-paper
                        px-3
                        py-3
                        text-[13px]
                        text-ink
                        outline-none
                        placeholder:text-muted/70
                        focus:border-violet
                        focus:bg-white
                      "
                    />
                  </label>
                </div>

                {/* Message */}
                <label
                  className="
                    grid
                    gap-1.5
                    text-[12px]
                    font-bold
                    text-muted
                  "
                >
                  Message

                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(event) =>
                      updateField('message', event.target.value)
                    }
                    placeholder="Tell me a little about what you're building."
                    required
                    className="
                      w-full
                      resize-y
                      rounded-button
                      border
                      border-line
                      bg-paper
                      px-3
                      py-3
                      text-[13px]
                      text-ink
                      outline-none
                      placeholder:text-muted/70
                      focus:border-violet
                      focus:bg-white
                    "
                  />
                </label>

                {/* Form Actions */}
                <div
                  className="
                    mt-1
                    flex
                    flex-col
                    gap-4
                    sm:flex-row
                    sm:items-center
                    sm:justify-between
                    sm:gap-3
                  "
                >
                  <a
                    href="mailto:sreelakshcm@gmail.com"
                    className="
                      text-[12px]
                      font-semibold
                      text-violet
                      hover:underline
                    "
                  >
                    Prefer email? Write directly ↗
                  </a>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="
                      rounded-button
                      bg-violet
                      px-[18px]
                      py-[13px]
                      text-[13px]
                      font-extrabold
                      text-white
                      transition-colors
                      hover:bg-violet-dark
                      disabled:cursor-not-allowed
                      disabled:opacity-60
                    "
                  >
                    {isSubmitting ? 'Sending…' : 'Send message ↗'}
                  </button>
                </div>
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
};

export default Contact;
