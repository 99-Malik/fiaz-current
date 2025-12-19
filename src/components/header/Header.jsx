"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";
import { phoneNumber } from "@/lib/phone";
import { cn } from "@/lib/utils";
import ServiceCenterDropdown from "./ServiceCenterDropdown";
import { Phone, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/gtag";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-gray-100 shadow-sm">
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-secondary via-secondary/95 to-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackPhoneCall();
                  window.location.href = `tel:${phoneNumber}`;
                }}
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                <span className="font-semibold">{phoneNumber}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackWhatsAppClick();
                  window.location.href = `https://wa.me/${phoneNumber}`;
                }}
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <MessageCircle size={16} />
                <span className="font-semibold">WhatsApp Chat</span>
              </motion.button>
            </div>
            <div className="text-xs opacity-90">
              Available 24/7 for Emergency Repairs
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/" className="flex items-center">
              <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Repair Home UAE
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Navlink href="/" title="Home" />
            <Navlink href="/#about" title="About" />
            <ServiceCenterDropdown />
            <Navlink href="/#services" title="Services" />
            <Navlink href="/#contact" title="Contact" />
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <HeaderDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
}
