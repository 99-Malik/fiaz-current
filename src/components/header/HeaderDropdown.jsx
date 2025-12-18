"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Menu } from "lucide-react";
import NavlinkDropdown from "./NavlinkDropdown";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HeaderDropdown() {
  const pathname = usePathname();
  // Check if we are on a company page (e.g. /companies/siemens)
  // We assume the structure is /companies/[brand]
  const isCompanyPage = pathname?.startsWith("/companies/");

  // If on a company page, we want to stay within that context
  // e.g. /companies/siemens#about
  // We can extract the base company path
  const companyPath = isCompanyPage ? pathname.split("/").slice(0, 3).join("/") : "/";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu size={24} />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[100vw] flex flex-col gap-0.5 p-0 rounded-none mt-3">
        <NavlinkDropdown
          href={isCompanyPage ? companyPath : "/"}
          title="Home"
        />
        <NavlinkDropdown
          href={isCompanyPage ? `${companyPath}#about` : "/#about"}
          title="About"
        />

        {/* Only show Service Centers dropdown on the main site, not inside a brand page */}
        {!isCompanyPage && (
          <DropdownMenuItem className="w-full border-l-4 flex flex-col items-start rounded-none">
            <span>Service Centers</span>
            <div className="flex flex-col px-5 py-2">
              <Link className="py-2" href="/companies/bosch">
                Bosch Service Center
              </Link>
              <Link className="py-2" href="/companies/siemens">
                Siemens Service Center
              </Link>
              <Link className="py-2" href="/companies/samsung">
                Samsung Service Center
              </Link>
              <Link className="py-2" href="/companies/lg">
                Lg Service Center
              </Link>
            </div>
          </DropdownMenuItem>
        )}

        <NavlinkDropdown
          href={isCompanyPage ? `${companyPath}#services` : "/#services"}
          title="Services"
        />
        <NavlinkDropdown
          href={isCompanyPage ? `${companyPath}#contact` : "/#contact"}
          title="Contact"
        />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
