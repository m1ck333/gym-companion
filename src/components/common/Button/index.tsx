import React from "react";
import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "danger" | "link";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  href?: string;
  external?: boolean;
  className?: string; // ✅ Added className prop
};

export default function Button({
  children,
  onClick,
  variant = "primary",
  disabled = false,
  type = "button",
  href,
  external = false,
  className = "", // ✅ Default to empty string
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition cursor-pointer";
  const variants = {
    primary:
      "bg-[color:var(--color-primary)] hover:bg-[color:var(--color-primary-light)] text-white",
    secondary:
      "bg-[color:var(--color-secondary)] hover:bg-[color:var(--color-secondary-light)] text-white",
    danger:
      "bg-[color:var(--color-warning)] hover:bg-[color:var(--color-warning-light)] text-white",
    link: "text-[color:var(--color-primary)] hover:text-[color:var(--color-primary-light)] underline",
  };

  const buttonClass = `${baseStyles} ${variants[variant]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`.trim(); // ✅ Merges custom styles

  // ✅ Render an anchor tag if `href` exists
  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  // ✅ Default button behavior
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={buttonClass}
    >
      {children}
    </button>
  );
}
