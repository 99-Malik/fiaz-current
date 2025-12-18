"use client";

import { motion } from "framer-motion";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { CheckCircle2, Users, TrendingUp, Heart } from "lucide-react";

export default function AboutSection({ company = "Appliance Services UAE" }) {
  const stats = [
    { icon: Users, value: "10K+", label: "Happy Customers" },
    { icon: CheckCircle2, value: "15+", label: "Years Experience" },
    { icon: TrendingUp, value: "98%", label: "Success Rate" },
    { icon: Heart, value: "24/7", label: "Support Available" },
  ];

  const values = [
    "Certified & Licensed Technicians",
    "Same-Day Service Available",
    "Transparent Pricing - No Hidden Fees",
    "90-Day Warranty on All Repairs",
    "Eco-Friendly Repair Solutions",
    "Emergency Service Available",
  ];

  return (
    <section
      id="about"
      className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white via-gray-50 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className={cn(
            "inline-block px-4 py-2 mb-4 text-sm font-semibold rounded-full",
            company === "Lg" ? "text-lgPrimary bg-lgPrimary/10" :
              company === "Samsung" ? "text-samsungPrimary bg-samsungPrimary/10" :
                company === "Bosch" ? "text-boschPrimary bg-boschPrimary/10" :
                  company === "Siemens" ? "text-siemensPrimary bg-siemensPrimary/10" :
                    "text-primary bg-primary/10"
          )}>
            About Our Company
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Your Trusted Appliance
            <span className={cn(
              "block mt-2",
              company === "Lg" ? "text-lgPrimary" :
                company === "Samsung" ? "text-samsungPrimary" :
                  company === "Bosch" ? "text-boschPrimary" :
                    company === "Siemens" ? "text-siemensPrimary" :
                      "text-primary"
            )}>
              Repair Experts
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Delivering exceptional repair services with unmatched expertise and dedication
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-16">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/washing-new.png"
                alt="Professional appliance repair service"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
            {/* Decorative Elements */}
            <div className={cn(
              "absolute -bottom-6 -right-6 w-32 h-32 rounded-full opacity-20 blur-3xl",
              company === "Lg" ? "bg-lgPrimary" :
                company === "Samsung" ? "bg-samsungPrimary" :
                  company === "Bosch" ? "bg-boschPrimary" :
                    company === "Siemens" ? "bg-siemensPrimary" :
                      "bg-primary"
            )} />
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2 space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Excellence in Every Repair
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                At {company}, we are committed to providing world-class home appliance repair services.
                With over 15 years of industry experience, our mission is to deliver reliable, efficient,
                and cost-effective repair solutions that exceed customer expectations.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our team of certified technicians specializes in all major appliance brands and models,
                ensuring your valuable appliances receive expert care. We approach every repair with
                professionalism, attention to detail, and a commitment to lasting results.
              </p>
            </div>

            {/* Values List */}
            <div className="grid sm:grid-cols-2 gap-3 pt-4">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <CheckCircle2 className={cn(
                    "w-5 h-5 flex-shrink-0",
                    company === "Lg" ? "text-lgPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Bosch" ? "text-boschPrimary" :
                          company === "Siemens" ? "text-siemensPrimary" :
                            "text-primary"
                  )} />
                  <span className="text-sm sm:text-base text-gray-700">{value}</span>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <CallAndWhatsappButton company={company} />
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className={cn(
                "p-6 rounded-2xl border-2 text-center transition-all duration-300 hover:shadow-lg",
                company === "Lg" ? "border-lgPrimary/20 bg-lgBlob/50 hover:border-lgPrimary/40" :
                  company === "Samsung" ? "border-samsungPrimary/20 bg-samsungBlob/50 hover:border-samsungPrimary/40" :
                    company === "Bosch" ? "border-boschPrimary/20 bg-boschBlob/50 hover:border-boschPrimary/40" :
                      company === "Siemens" ? "border-siemensPrimary/20 bg-siemensBlob/50 hover:border-siemensPrimary/40" :
                        "border-primary/20 bg-blob/50 hover:border-primary/40"
              )}
            >
              <stat.icon className={cn(
                "w-8 h-8 mx-auto mb-3",
                company === "Lg" ? "text-lgPrimary" :
                  company === "Samsung" ? "text-samsungPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Siemens" ? "text-siemensPrimary" :
                        "text-primary"
              )} />
              <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm sm:text-base text-gray-600 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
