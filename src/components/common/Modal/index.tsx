"use client";

import useClickOutside from "@/hooks/useClickOutside";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
}: ModalProps) {
  const modalRef = useClickOutside<HTMLDivElement>(onClose);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[color:var(--color-dark-dark)] bg-opacity-50">
      <div
        ref={modalRef}
        className="bg-[color:var(--color-light-light)] text-[color:var(--color-dark)] p-6 rounded-lg shadow-lg w-96"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-[color:var(--color-dark-light)] hover:text-[color:var(--color-primary)]"
          >
            &times;
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
}
