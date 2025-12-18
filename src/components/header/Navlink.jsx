"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navlink({ href, title, company = "" }) {
  const pathname = usePathname();
  const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
  
  return (
    <Link href={href} className="relative group">
      <motion.span
        whileHover={{ y: -2 }}
        className={cn(
          "relative px-4 py-2 text-sm font-semibold transition-colors duration-200 rounded-lg",
          isActive
            ? company === "Bosch"
              ? "text-boschPrimary bg-boschPrimary/10"
              : company === "Siemens"
              ? "text-siemensPrimary bg-siemensPrimary/10"
              : company === "Samsung"
              ? "text-samsungPrimary bg-samsungPrimary/10"
              : company === "Lg"
              ? "text-lgPrimary bg-lgPrimary/10"
              : "text-primary bg-primary/10"
            : "text-gray-700 hover:text-primary hover:bg-gray-50"
        )}
      >
        {title}
        {isActive && (
          <motion.div
            layoutId="activeNav"
            className={cn(
              "absolute bottom-0 left-0 right-0 h-0.5 rounded-full",
              company === "Bosch"
                ? "bg-boschPrimary"
                : company === "Siemens"
                ? "bg-siemensPrimary"
                : company === "Samsung"
                ? "bg-samsungPrimary"
                : company === "Lg"
                ? "bg-lgPrimary"
                : "bg-primary"
            )}
            initial={false}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        )}
      </motion.span>
    </Link>
  );
}
