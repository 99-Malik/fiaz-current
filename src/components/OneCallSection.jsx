"use client";

import { motion } from "framer-motion";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { Phone, MessageCircle, CheckCircle2 } from "lucide-react";

export default function OneCallSection({ company = "Repair Home UAE" }) {
  const benefits = [
    "Expert Diagnosis",
    "Same-Day Service",
    "Transparent Pricing",
    "90-Day Warranty",
  ];

  return (
    <section
      id="contact"
      className="relative w-full py-16 sm:py-20 lg:py-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={cn(
            "relative rounded-3xl p-8 sm:p-12 lg:p-16",
            "bg-gradient-to-br",
            company === "Siemens"
              ? "from-siemensPrimary/10 via-siemensPrimary/5 to-transparent border-2 border-siemensPrimary/20"
              : company === "Bosch"
              ? "from-boschPrimary/10 via-boschPrimary/5 to-transparent border-2 border-boschPrimary/20"
              : company === "Samsung"
              ? "from-samsungPrimary/10 via-samsungPrimary/5 to-transparent border-2 border-samsungPrimary/20"
              : company === "Lg"
              ? "from-lgPrimary/10 via-lgPrimary/5 to-transparent border-2 border-lgPrimary/20"
              : "from-primary/10 via-primary/5 to-transparent border-2 border-primary/20"
          )}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }} />
          </div>

          <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={cn(
                "inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold",
                company === "Siemens" ? "bg-siemensPrimary/20 text-siemensPrimary" :
                company === "Bosch" ? "bg-boschPrimary/20 text-boschPrimary" :
                company === "Samsung" ? "bg-samsungPrimary/20 text-samsungPrimary" :
                company === "Lg" ? "bg-lgPrimary/20 text-lgPrimary" :
                "bg-primary/20 text-primary"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>One Call Solution</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4"
            >
              One Call Solves All Your
              <span className="block mt-2">
                <span className={cn(
                  "bg-clip-text text-transparent bg-gradient-to-r",
                  company === "Siemens" ? "from-siemensPrimary to-teal-600" :
                  company === "Bosch" ? "from-boschPrimary to-red-600" :
                  company === "Samsung" ? "from-samsungPrimary to-gray-800" :
                  company === "Lg" ? "from-lgPrimary to-pink-600" :
                  "from-primary to-secondary"
                )}>
                  Appliance Problems
                </span>
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Connect with skilled, qualified technicians for perfect repairs. 
              Ready to restore your appliances? Contact us today for fast, reliable service!
            </motion.p>

            {/* Benefits Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 w-full max-w-2xl"
            >
              {benefits.map((benefit, index) => (
                <div
                  key={benefit}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-200"
                >
                  <CheckCircle2 className={cn(
                    "w-6 h-6",
                    company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                    company === "Samsung" ? "text-samsungPrimary" :
                    company === "Lg" ? "text-lgPrimary" :
                    "text-primary"
                  )} />
                  <span className="text-sm font-medium text-gray-700 text-center">
                    {benefit}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CallAndWhatsappButton company={company} />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
