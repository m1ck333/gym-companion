import Image from "next/image";
import DropdownMenu from "@/components/common/DropdownMenu";
import { navItems } from "./navItems";

export default function MobileMenu() {
  return (
    <div className="block sm:hidden relative">
      <DropdownMenu
        trigger={
          <Image src="/icons/menu.svg" alt="Menu" width={30} height={30} />
        }
        options={navItems}
        position="left"
      />
    </div>
  );
}
