import {
  FC, FormEvent, useEffect, useRef, useState,
} from 'react';
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

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const emptyForm: FormData = {
  name: '',
  email: '',
  message: '',
};

const ContactModal: FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const dispatch = useDispatch<AppDispatch>();

  const [formData, setFormData] = useState<FormData>(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) return undefined;

    previousFocusRef.current = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusInitialField = (): void => {
      dialogRef.current?.querySelector<HTMLElement>('[data-autofocus]')?.focus();
    };

    const handleKeyDown = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== 'Tab' || !dialogRef.current) return;

      const focusableElements = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])',
        ),
      );

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (!firstElement || !lastElement) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    const frame = requestAnimationFrame(focusInitialField);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocusRef.current?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const updateField = (field: keyof FormData, value: string): void => {
    setFormData((current) => ({
      ...current,
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
          message: data.message || 'Thanks — your message has been sent.',
          type: data.success ? 'success' : 'error',
        }),
      );

      if (data.success) {
        setFormData(emptyForm);
        onClose();
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

  return createPortal(
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
      onMouseDown={onClose}
    >
      <div
        ref={dialogRef}
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
        {/* Header */}
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

          <button
            type="button"
            onClick={onClose}
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
        <form onSubmit={handleSubmit} className="grid gap-4" noValidate>
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
                onChange={(event) => updateField('name', event.target.value)}
                placeholder="Your name"
                required
                data-autofocus
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
                onChange={(event) => updateField('email', event.target.value)}
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
              onChange={(event) => updateField('message', event.target.value)}
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

          {/* Actions */}
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
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
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
  );
};

export default ContactModal;
