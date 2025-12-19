"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import { phoneNumber, getWhatsAppUrl } from "@/lib/phone";
import { motion } from "framer-motion";
import { trackPhoneCall, trackWhatsAppClick } from "@/lib/gtag";

export default function Footer({ company = "Repair Home UAE" }) {
  const primaryColor = company === "Siemens" ? "siemensPrimary" :
    company === "Bosch" ? "boschPrimary" :
      company === "Lg" ? "lgPrimary" :
        company === "Samsung" ? "samsungPrimary" :
          "secondary";

  return (
    <footer className="relative w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Decorative Top Wave */}


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            {/* Brand Logo */}
            {company !== "Repair Home UAE" ? (
              <div className="mb-4">
                <Image
                  src={
                    company === "Siemens" ? "/siemens-white.svg" :
                      company === "Bosch" ? "/bosch.svg" :
                        company === "Lg" ? "/lg.svg" :
                          company === "Samsung" ? "/samsung.svg" :
                            ""
                  }
                  alt={company}
                  width={150}
                  height={60}
                  className="h-12 lg:h-16 w-auto mb-4"
                />
              </div>
            ) : (
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Repair Home UAE
              </h3>
            )}

            <p className="text-gray-300 leading-relaxed mb-6">
              Your trusted partner for professional appliance repair services across the UAE.
              Expert technicians, quality service, and customer satisfaction guaranteed.
            </p>

            {/* All Brand Logos */}


            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Serving All Emirates, UAE</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Clock className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">Available 24/7</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/#about", label: "About Us" },
                { href: "/#services", label: "Services" },
                { href: "/#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center gap-2 group"
                  >
                    <span className="w-0 group-hover:w-2 h-0.5 bg-white transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="text-lg font-bold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {[
                "Washing Machine Repair",
                "Refrigerator Repair",
                "Dishwasher Repair",
                "Oven & Stove Repair",
                "Dryer Repair",
              ].map((service) => (
                <li key={service}>
                  <span className="text-gray-300 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="text-lg font-bold mb-4">Get In Touch</h4>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackPhoneCall();
                  window.location.href = `tel:${phoneNumber}`;
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200",
                  "hover:shadow-lg",
                  company === "Siemens" ? "bg-siemensPrimary hover:bg-siemensPrimary/90" :
                    company === "Bosch" ? "bg-boschPrimary hover:bg-boschPrimary/90" :
                      company === "Lg" ? "bg-lgPrimary hover:bg-lgPrimary/90" :
                        company === "Samsung" ? "bg-samsungPrimary hover:bg-samsungPrimary/90" :
                          "bg-primary hover:bg-primary/90"
                )}
              >
                <Phone className="w-5 h-5" />
                <span className="font-semibold">{phoneNumber}</span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  trackWhatsAppClick();
                  window.location.href = getWhatsAppUrl();
                }}
                className={cn(
                  "w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 hover:shadow-lg",
                  company === "Siemens" ? "bg-siemensPrimary hover:bg-siemensPrimary/90" :
                    company === "Bosch" ? "bg-boschPrimary hover:bg-boschPrimary/90" :
                      company === "Lg" ? "bg-lgPrimary hover:bg-lgPrimary/90" :
                        company === "Samsung" ? "bg-samsungPrimary hover:bg-samsungPrimary/90" :
                          "bg-green-600 hover:bg-green-700"
                )}
              >
                <MessageCircle className="w-5 h-5" />
                <span className="font-semibold">WhatsApp Chat</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Repair Home UAE. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/" className="hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
