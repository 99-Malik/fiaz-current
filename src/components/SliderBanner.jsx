"use client";

import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ImagesSlider";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { Wrench, Clock, Shield, Award } from "lucide-react";

export function SliderBanner({ company = "Repair Home UAE" }) {
  const images = ["/washing-new.png", "/fridge-new.png", "/sid-new.png", "/oven-new.png"];
  const isGeneric = company === "Repair Home UAE";

  const features = [
    { icon: Clock, text: "Same-Day Service" },
    { icon: Shield, text: "Certified Experts" },
    { icon: Award, text: "Quality Guaranteed" },
    { icon: Wrench, text: isGeneric ? "All Brands Repaired" : "All Models Repaired" },
  ];

  return (
    <div className="relative w-full overflow-hidden">
      <ImagesSlider
        className={cn("h-[85vh] min-h-[600px] max-h-[900px]", company === "Siemens" ? "mt-0" : "mt-0")}
        images={images}
        overlay={true}
        overlayClassName="bg-gradient-to-b from-black/70 via-black/60 to-black/80"
      >
        <div className="relative z-50 flex flex-col justify-center items-center h-full px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-5xl mx-auto text-center space-y-6"
          >
            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              {isGeneric ? "Expert Appliance Repair" : company}{" "}
              <span className={cn(
                company === "Siemens" ? "text-siemensPrimary" :
                  company === "Bosch" ? "text-boschPrimary" :
                    company === "Samsung" ? "text-blue-500" :
                      company === "Lg" ? "text-lgPrimary" :
                        "text-primary"
              )}>
                {isGeneric ? "Services in UAE" : "Service Center"}
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto leading-relaxed"
            >
              Professional technicians ready to restore your {isGeneric ? "appliances" : `${company} appliances`} to peak performance.
              Fast, reliable, and affordable repair solutions for all major brands.
            </motion.p>

            {/* Features Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8 max-w-2xl mx-auto"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                  className={cn(
                    "flex flex-col items-center gap-2 p-3 backdrop-blur-sm rounded-xl border",
                    company === "Siemens"
                      ? "bg-siemensPrimary/20 border-siemensPrimary/30"
                      : company === "Bosch"
                        ? "bg-boschPrimary/20 border-boschPrimary/30"
                        : company === "Samsung"
                          ? "bg-samsungPrimary/20 border-samsungPrimary/30"
                          : company === "Lg"
                            ? "bg-lgPrimary/20 border-lgPrimary/30"
                            : "bg-white/10 border-white/20"
                  )}
                >
                  <feature.icon className={cn(
                    "w-6 h-6",
                    company === "Siemens"
                      ? "text-white"
                      : company === "Bosch"
                        ? "text-white"
                        : company === "Samsung"
                          ? "text-white"
                          : company === "Lg"
                            ? "text-white"
                            : "text-white"
                  )} />
                  <span className="text-xs sm:text-sm font-medium text-white text-center">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="mt-10"
            >
              <CallAndWhatsappButton company={company} banner />
            </motion.div>
          </motion.div>
        </div>
      </ImagesSlider>
    </div>
  );
}
