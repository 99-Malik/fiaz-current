"use client";

import { leftToRightVariants } from "@/lib/variants";
import { motion } from "framer-motion";
import { phoneNumber, getWhatsAppUrl } from "@/lib/phone";
import { Phone, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/gtag";

export default function CallAndWhatsappButton({
  banner = false,
  company = "",
}) {
  return (
    <motion.div
      initial="hide"
      whileInView="show"
      exit="show"
      variants={leftToRightVariants}
      className="flex items-center gap-3 sm:gap-4 flex-wrap justify-center"
    >
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          trackPhoneCall();
          window.location.href = `tel:${phoneNumber}`;
        }}
        className={cn(
          "flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-white transition-all duration-200 shadow-lg hover:shadow-xl",
          company === "Siemens"
            ? "bg-siemensPrimary hover:bg-siemensPrimary/90"
            : company === "Bosch"
            ? "bg-boschPrimary hover:bg-boschPrimary/90"
            : company === "Lg"
            ? "bg-lgPrimary hover:bg-lgPrimary/90"
            : company === "Samsung"
            ? "bg-samsungPrimary hover:bg-samsungPrimary/90"
            : "bg-primary hover:bg-primary/90"
        )}
      >
        <Phone className="w-5 h-5" />
        <span>Call Us</span>
      </motion.button>
      
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          trackWhatsAppClick();
          window.location.href = getWhatsAppUrl();
        }}
        className={cn(
          "flex items-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-bold text-white transition-all duration-200 shadow-lg hover:shadow-xl",
          company === "Siemens"
            ? "bg-siemensPrimary hover:bg-siemensPrimary/90"
            : company === "Bosch"
            ? "bg-boschPrimary hover:bg-boschPrimary/90"
            : company === "Lg"
            ? "bg-lgPrimary hover:bg-lgPrimary/90"
            : company === "Samsung"
            ? "bg-samsungPrimary hover:bg-samsungPrimary/90"
            : "bg-green-600 hover:bg-green-700"
        )}
      >
        <MessageCircle className="w-5 h-5" />
        <span>WhatsApp Us</span>
      </motion.button>
    </motion.div>
  );
}
