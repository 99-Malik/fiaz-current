"use client";

import { motion } from "framer-motion";
import { DollarSign, Award, Heart, Clock, Shield, Wrench } from "lucide-react";
import { cn } from "@/lib/utils";

export default function OurFeatures({ company = "Repair Home UAE" }) {
  const features = [
    {
      icon: DollarSign,
      title: "Affordable Rates",
      description: "Competitive pricing with transparent quotes. Quality service that fits your budget without compromising on excellence.",
      color: company === "Siemens" ? "text-siemensPrimary" :
        company === "Bosch" ? "text-boschPrimary" :
          company === "Samsung" ? "text-samsungPrimary" :
            company === "Lg" ? "text-lgPrimary" : "text-green-600",
      bgColor: company === "Siemens" ? "bg-siemensBlob" :
        company === "Bosch" ? "bg-boschBlob" :
          company === "Samsung" ? "bg-samsungBlob" :
            company === "Lg" ? "bg-lgBlob" : "bg-green-50",
    },
    {
      icon: Award,
      title: "Certified Technicians",
      description: "Our expert team is fully trained and certified to handle all major appliance brands and models with precision.",
      color: company === "Siemens" ? "text-siemensPrimary" :
        company === "Bosch" ? "text-boschPrimary" :
          company === "Samsung" ? "text-samsungPrimary" :
            company === "Lg" ? "text-lgPrimary" : "text-blue-600",
      bgColor: company === "Siemens" ? "bg-siemensBlob" :
        company === "Bosch" ? "bg-boschBlob" :
          company === "Samsung" ? "bg-samsungBlob" :
            company === "Lg" ? "bg-lgBlob" : "bg-blue-50",
    },
    {
      icon: Heart,
      title: "Customer Satisfaction",
      description: "Your satisfaction is our top priority. We ensure all repairs meet the highest quality standards and exceed expectations.",
      color: company === "Siemens" ? "text-siemensPrimary" :
        company === "Bosch" ? "text-boschPrimary" :
          company === "Samsung" ? "text-samsungPrimary" :
            company === "Lg" ? "text-lgPrimary" : "text-red-600",
      bgColor: company === "Siemens" ? "bg-siemensBlob" :
        company === "Bosch" ? "bg-boschBlob" :
          company === "Samsung" ? "bg-samsungBlob" :
            company === "Lg" ? "bg-lgBlob" : "bg-red-50",
    },
    {
      icon: Clock,
      title: "Fast Service",
      description: "Same-day service available for urgent repairs. Quick response times to get your appliances working again promptly.",
      color: company === "Siemens" ? "text-siemensPrimary" :
        company === "Bosch" ? "text-boschPrimary" :
          company === "Samsung" ? "text-samsungPrimary" :
            company === "Lg" ? "text-lgPrimary" : "text-purple-600",
      bgColor: company === "Siemens" ? "bg-siemensBlob" :
        company === "Bosch" ? "bg-boschBlob" :
          company === "Samsung" ? "bg-samsungBlob" :
            company === "Lg" ? "bg-lgBlob" : "bg-purple-50",
    },
    {
      icon: Shield,
      title: "Warranty Guaranteed",
      description: "90-day warranty on all repairs. We stand behind our work with confidence and provide ongoing support.",
      color: company === "Siemens" ? "text-siemensPrimary" :
        company === "Bosch" ? "text-boschPrimary" :
          company === "Samsung" ? "text-samsungPrimary" :
            company === "Lg" ? "text-lgPrimary" : "text-orange-600",
      bgColor: company === "Siemens" ? "bg-siemensBlob" :
        company === "Bosch" ? "bg-boschBlob" :
          company === "Samsung" ? "bg-samsungBlob" :
            company === "Lg" ? "bg-lgBlob" : "bg-orange-50",
    },
    {
      icon: Wrench,
      title: "All Brands",
      description: "Expert repair services for all major appliance brands. No matter the make or model, we've got you covered.",
      color: company === "Siemens" ? "text-siemensPrimary" :
        company === "Bosch" ? "text-boschPrimary" :
          company === "Samsung" ? "text-samsungPrimary" :
            company === "Lg" ? "text-lgPrimary" : "text-cyan-600",
      bgColor: company === "Siemens" ? "bg-siemensBlob" :
        company === "Bosch" ? "bg-boschBlob" :
          company === "Samsung" ? "bg-samsungBlob" :
            company === "Lg" ? "bg-lgBlob" : "bg-cyan-50",
    },
  ];

  return (
    <section className="relative w-full py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 via-white to-gray-50">
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
            company === "Siemens" ? "text-siemensPrimary bg-siemensPrimary/10" :
              company === "Bosch" ? "text-boschPrimary bg-boschPrimary/10" :
                company === "Samsung" ? "text-samsungPrimary bg-samsungPrimary/10" :
                  company === "Lg" ? "text-lgPrimary bg-lgPrimary/10" :
                    "text-primary bg-primary/10"
          )}>
            Why Choose Us
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-4">
            Exceptional Service
            <span className={cn(
              "block",
              company === "Siemens" ? "text-siemensPrimary" :
                company === "Bosch" ? "text-boschPrimary" :
                  company === "Samsung" ? "text-samsungPrimary" :
                    company === "Lg" ? "text-lgPrimary" :
                      "text-primary"
            )}>
              Features
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Discover what makes us the preferred choice for appliance repairs in UAE
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "group relative p-8 rounded-2xl border-2 transition-all duration-300",
                "hover:shadow-xl hover:-translate-y-2",
                company === "Siemens"
                  ? "bg-white border-siemensPrimary/20 hover:border-siemensPrimary/40"
                  : company === "Bosch"
                    ? "bg-white border-boschPrimary/20 hover:border-boschPrimary/40"
                    : company === "Samsung"
                      ? "bg-white border-samsungPrimary/20 hover:border-samsungPrimary/40"
                      : company === "Lg"
                        ? "bg-white border-lgPrimary/20 hover:border-lgPrimary/40"
                        : "bg-white border-primary/20 hover:border-primary/40"
              )}
            >
              {/* Icon */}
              <div className={cn(
                "w-16 h-16 rounded-xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110",
                company === "Siemens" ? "bg-siemensPrimary/10" :
                  company === "Bosch" ? "bg-boschPrimary/10" :
                    company === "Samsung" ? "bg-samsungPrimary/10" :
                      company === "Lg" ? "bg-lgPrimary/10" :
                        feature.bgColor
              )}>
                <feature.icon className={cn(
                  "w-8 h-8",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          feature.color
                )} />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Decorative Element */}
              <div className={cn(
                "absolute top-0 right-0 w-32 h-32 rounded-full opacity-5 blur-3xl -z-10",
                company === "Lg" ? "bg-lgPrimary" :
                  company === "Samsung" ? "bg-samsungPrimary" :
                    company === "Bosch" ? "bg-boschPrimary" :
                      company === "Siemens" ? "bg-siemensPrimary" :
                        "bg-primary"
              )} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
