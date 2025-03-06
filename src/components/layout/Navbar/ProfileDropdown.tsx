"use client";

import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import DropdownMenu from "@/components/common/DropdownMenu";

export default function ProfileDropdown() {
  const { data: session, status } = useSession();
  const user = session?.user;

  if (status === "loading") return null;

  return user ? (
    <DropdownMenu
      trigger={
        <div className="flex items-center gap-2 cursor-pointer">
          <Image
            src={user.image || "/icons/user.svg"}
            alt="User Profile"
            width={32}
            height={32}
            className="rounded-full border border-[color:var(--color-light-dark)]"
          />
          <span className="text-[color:var(--color-light)] font-medium hidden sm:block">
            {user.name}
          </span>
        </div>
      }
      options={[
        { label: "Profile", href: "/profile" },
        { label: "Logout", onClick: () => signOut() },
      ]}
      position="left"
    />
  ) : (
    <a
      href="/auth/login"
      className="px-4 py-2 bg-[color:var(--color-primary)] text-[color:var(--color-light-light)] rounded-lg hover:bg-[color:var(--color-primary-light)] transition"
    >
      Login
    </a>
  );
}
