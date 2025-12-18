"use client";

import AboutSection from "@/components/AboutSection";
import CompaniesStrip from "@/components/CompaniesStrip";
import OneCallSection from "@/components/OneCallSection";
import OurFeatures from "@/components/OurFeatures";
import ReviewSection from "@/components/ReviewSection";
import ServicesDetails from "@/components/ServicesDetails";
import { ServicesSection } from "@/components/ServicesSection";
import { SliderBanner } from "@/components/SliderBanner";
import Footer from "@/components/footer/Footer";
import LgHeader from "@/components/header/LgHeader";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <LgHeader />
      <SliderBanner company="Lg" />
      <CompaniesStrip company="Lg" />
      <AboutSection company="Lg" />
      <OurFeatures company="Lg" />
      <section className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-lgPrimary bg-lgPrimary/10 rounded-full">
              Customer Reviews
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
              What Our Customers Say
            </h2>
          </motion.div>
          <ReviewSection company="Lg" />
        </div>
      </section>
      <ServicesDetails company="Lg" />
      <OneCallSection company="Lg" />
      <section
        id="services"
        className="py-16 sm:py-20 lg:py-28 bg-gradient-to-b from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-lgPrimary bg-lgPrimary/10 rounded-full">
              Our Services
            </span>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900">
              Professional Repair Services
            </h2>
          </motion.div>
          <ServicesSection company="Lg" />
        </div>
      </section>
      <Footer company="Lg" />
    </>
  );
}
