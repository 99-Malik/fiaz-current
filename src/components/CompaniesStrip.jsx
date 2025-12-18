"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { WashingMachine, Refrigerator, ChefHat, Tv, Droplets, Flame } from "lucide-react";

export default function CompaniesStrip({ company = "Repair Home UAE" }) {
  const appliances = [
    { icon: WashingMachine, label: "Washing Machines" },
    { icon: Refrigerator, label: "Refrigerators" },
    { icon: ChefHat, label: company === "Samsung" || company === "Lg" ? "Televisions" : "Stoves & Ovens" },
    { icon: Droplets, label: "Dishwashers" },
    { icon: Flame, label: "Dryers" },
  ];

  return (
    <div
      className={cn(
        "relative py-8 sm:py-12 text-white w-full overflow-hidden",
        company === "Siemens"
          ? "bg-siemensPrimary"
          : company === "Bosch"
            ? "bg-boschPrimary"
            : company === "Lg"
              ? "bg-lgPrimary"
              : company === "Samsung"
                ? "bg-samsungPrimary"
                : "bg-primary"
      )}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 3px 3px, white 1px, transparent 0)`,
          backgroundSize: '50px 50px',
          animation: 'slide 20s linear infinite',
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-6"
        >
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-2">
            Comprehensive Appliance Repair Services
          </h2>
          <p className="text-sm sm:text-base text-white/90">
            Expert repairs for all major appliance types
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {appliances.map((appliance, index) => (
            <motion.div
              key={appliance.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-3 p-4 sm:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300"
            >
              <appliance.icon className="w-8 h-8 sm:w-10 sm:h-10" />
              <span className="text-xs sm:text-sm font-semibold text-center">
                {appliance.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
