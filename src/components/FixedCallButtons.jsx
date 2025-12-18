"use client";

import { usePathname } from "next/navigation";
import { phoneNumber } from "@/lib/phone";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Phone } from "lucide-react";

export default function FixedCallButtons() {
  const pathname = usePathname();

  const getCompanyFromPath = (path) => {
    if (path.includes("/siemens")) return "Siemens";
    if (path.includes("/bosch")) return "Bosch";
    if (path.includes("/samsung")) return "Samsung";
    if (path.includes("/lg")) return "Lg";
    return "Default";
  };

  const company = getCompanyFromPath(pathname || "");

  return (
    <div className="fixed bottom-6 inset-x-0 z-[101] px-6 pointer-events-none">
      <div className="flex justify-between items-center max-w-7xl mx-auto w-full">
        {/* WhatsApp Button */}
        <button
          onClick={() => {
            window.location.href = `https://wa.me/${phoneNumber}`;
          }}
          className="group pointer-events-auto flex items-center justify-center p-0 h-16 w-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl shadow-green-500/20 transition-all duration-300 hover:scale-110 active:scale-95 border-2 border-white"
        >
          <Image
            quality={100}
            src="/whatsapp.svg"
            alt="Whatsapp"
            width={32}
            height={32}
            className="w-8 h-8 object-contain"
          />
        </button>

        {/* Call Button */}
        <button
          onClick={() => {
            window.location.href = `tel:${phoneNumber}`;
          }}
          className={cn(
            "group pointer-events-auto flex items-center justify-center p-0 h-16 w-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 border-2 relative overflow-hidden",
            // High contrast mode: White background, brand text/border
            "bg-white",
            company === "Siemens" ? "text-siemensPrimary border-siemensPrimary shadow-siemensPrimary/20" :
              company === "Bosch" ? "text-boschPrimary border-boschPrimary shadow-boschPrimary/20" :
                company === "Samsung" ? "text-samsungPrimary border-samsungPrimary shadow-samsungPrimary/20" :
                  company === "Lg" ? "text-lgPrimary border-lgPrimary shadow-lgPrimary/20" :
                    "text-primary border-primary shadow-primary/20"
          )}
        >
          <div className={cn(
            "absolute inset-0 opacity-10 animate-[shimmer_2s_infinite] translate-x-[-100%] group-hover:animate-none",
            company === "Siemens" ? "bg-siemensPrimary" :
              company === "Bosch" ? "bg-boschPrimary" :
                company === "Samsung" ? "bg-samsungPrimary" :
                  company === "Lg" ? "bg-lgPrimary" :
                    "bg-primary"
          )} />
          <Phone className="w-8 h-8 fill-current animate-pulse" />
        </button>
      </div>
    </div>
  );
}
