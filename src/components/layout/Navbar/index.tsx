"use client";

import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import ProfileDropdown from "./ProfileDropdown";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <nav className="w-full py-4 px-4 fixed top-0 left-0 right-0 z-50 bg-[color:var(--color-dark-light)]">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link
          href="/"
          className="text-xl font-bold flex items-center gap-2 tracking-tight"
        >
          <Image
            src="/icons/workout.svg"
            alt="Gym Logo"
            width={30}
            height={30}
          />
          Gym Companion
        </Link>

        <NavLinks />

        <div className="flex items-center gap-4">
          <ProfileDropdown />
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
