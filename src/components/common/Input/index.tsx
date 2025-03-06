import React, { useState } from "react";

type InputProps = {
  label: string;
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  required?: boolean;
  disabled?: boolean;
  name?: string;
  id?: string;
  autoComplete?: string;
  maxLength?: number;
};

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  required = false,
  disabled = false,
  name,
  id,
  autoComplete,
  maxLength,
}: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="flex flex-col mb-4">
      <label
        className="text-white font-medium mb-1 flex items-center"
        htmlFor={id || name}
      >
        {label}
        {required && (
          <span className="text-[color:var(--color-primary)] ml-1">*</span>
        )}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        name={name}
        id={id || name}
        autoComplete={autoComplete}
        maxLength={maxLength}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`
          px-3 py-2 
          bg-[color:var(--color-dark-light)]
          text-white
          border 
          rounded-lg 
          transition-all 
          duration-200
          placeholder:text-[color:var(--color-neutral)]
          ${
            error
              ? "border-[color:var(--color-warning)] focus:ring-[color:var(--color-warning)]"
              : isFocused
              ? "border-[color:var(--color-primary)] focus:ring-[color:var(--color-primary)]"
              : "border-[color:var(--color-dark-light)] focus:ring-[color:var(--color-primary)]"
          }
          ${disabled ? "opacity-60 cursor-not-allowed" : ""}
          focus:outline-none 
          focus:ring-2
        `}
      />
      {error && (
        <p className="mt-1 text-[color:var(--color-warning)] text-sm">
          {error}
        </p>
      )}
    </div>
  );
}
