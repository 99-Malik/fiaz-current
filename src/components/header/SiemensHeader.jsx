"use client";

import Link from "next/link";
import Navlink from "./Navlink";
import HeaderDropdown from "./HeaderDropdown";
import Image from "next/image";
import { Phone, MessageCircle } from "lucide-react";
import { phoneNumber } from "@/lib/phone";
import { motion } from "framer-motion";

export default function SiemensHeader() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/95 border-b border-gray-100 shadow-sm">
      {/* Top Contact Bar */}
      <div className="hidden lg:block bg-gradient-to-r from-siemensPrimary via-teal-600 to-siemensPrimary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-2 text-sm">
            <div className="flex items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = `tel:${phoneNumber}`}
                className="flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                <Phone size={16} />
                <span className="font-semibold">{phoneNumber}</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.location.href = `https://wa.me/${phoneNumber}`}
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
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex-shrink-0"
          >
            <Link href="/companies/siemens" className="flex items-center">
              <Image
                quality={100}
                src="/siemens.svg"
                width={150}
                height={60}
                alt="Siemens"
                className="h-8 lg:h-12 w-auto"
              />
            </Link>
          </motion.div>

          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            <Navlink company="Siemens" href="/companies/siemens" title="Home" />
            <Navlink company="Siemens" href="/companies/siemens#about" title="About" />
            <Navlink company="Siemens" href="/companies/siemens#services" title="Services" />
            <Navlink company="Siemens" href="/companies/siemens#contact" title="Contact" />
          </div>

          <div className="lg:hidden">
            <HeaderDropdown />
          </div>
        </div>
      </nav>
    </header>
  );
}
