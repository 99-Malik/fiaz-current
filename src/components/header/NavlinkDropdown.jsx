"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";

export default function NavlinkDropdown({ href, title }) {
  const pathname = usePathname();
  // Simple check for exact match or starts with for sub-sections if needed. 
  // For dropdown links, exact match on href is usually desired, or simple active state.
  // Original logic was pathname === href. Let's keep that or improve it if needed. 
  // But the issue is the COLOR.
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));

  const getCompanyFromPath = (path) => {
    if (path.includes("/siemens")) return "Siemens";
    if (path.includes("/bosch")) return "Bosch";
    if (path.includes("/samsung")) return "Samsung";
    if (path.includes("/lg")) return "Lg";
    return "Default";
  };

  const company = getCompanyFromPath(pathname);

  return (
    <DropdownMenuItem
      className={cn(
        "w-full border-l-4 rounded-none",
        isActive
          ? cn(
            "font-bold bg-gray-50",
            company === "Siemens" ? "border-siemensPrimary text-siemensPrimary" :
              company === "Bosch" ? "border-boschPrimary text-boschPrimary" :
                company === "Samsung" ? "border-samsungPrimary text-samsungPrimary" :
                  company === "Lg" ? "border-lgPrimary text-lgPrimary" :
                    "border-primary text-primary"
          )
          : "border-transparent text-gray-600 hover:text-black"
      )}
    >
      <Link href={href} className="w-full h-full block py-1">{title}</Link>
    </DropdownMenuItem>
  );
}
