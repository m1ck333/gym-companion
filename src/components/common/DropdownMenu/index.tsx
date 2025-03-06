"use client";

import { useState } from "react";
import Link from "next/link";
import useClickOutside from "@/hooks/useClickOutside";

type DropdownOption = {
  label: string;
  href?: string;
  onClick?: () => void;
};

type DropdownMenuProps = {
  trigger: React.ReactNode;
  options: DropdownOption[];
  position?: "left" | "right";
};

export default function DropdownMenu({
  trigger,
  options,
  position = "right",
}: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useClickOutside<HTMLDivElement>(() => setIsOpen(false));

  return (
    <div className="relative">
      {/* Button to trigger menu */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="focus:outline-none cursor-pointer"
      >
        {trigger}
      </button>

      {/* Dropdown content */}
      {isOpen && (
        <div
          ref={dropdownRef}
          className={`absolute ${
            position === "left" ? "right-0" : "left-0"
          } mt-2 w-48 bg-[color:var(--color-dark-light)] text-[color:var(--color-light-light)] shadow-md rounded-lg py-2 z-50 border border-[color:var(--color-dark-dark)]`}
        >
          {options.map((option, index) =>
            option.href ? (
              <Link
                key={index}
                href={option.href}
                className="block px-4 py-2 bg-[color:var(--color-dark-light)] text-[color:var(--color-light-light)] hover:bg-[color:var(--color-dark-dark)] transition-colors duration-200"
                onClick={() => setIsOpen(false)}
              >
                {option.label}
              </Link>
            ) : (
              <button
                key={index}
                onClick={() => {
                  option.onClick?.();
                  setIsOpen(false);
                }}
                className="w-full text-left px-4 py-2 bg-[color:var(--color-dark-light)] text-[color:var(--color-light-light)] hover:bg-[color:var(--color-dark-dark)] transition-colors duration-200"
              >
                {option.label}
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}
