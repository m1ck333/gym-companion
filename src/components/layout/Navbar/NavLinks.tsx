import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Workouts", href: "/workouts" },
];

export default function NavLinks() {
  return (
    <ul className="hidden sm:flex gap-6">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            href={item.href}
            className="hover:text-[color:var(--color-primary)] transition-colors duration-200 font-medium"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
