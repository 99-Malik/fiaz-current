"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import PrimaryButton from "./buttons/PrimaryButton";
import CallAndWhatsappButton from "./buttons/CallAndWhatsappButton";
import { cn } from "@/lib/utils";
import { phoneNumber } from "@/lib/phone";
import { X, ArrowRight, Clock, Shield, Wrench } from "lucide-react";

export function ServicesSection({ company = "Appliance Services UAE" }) {
  const cards = [
    {
      description: "Washing Machine Repair",
      title: "Washing Machine",
      src: "/washing-new.png",
      ctaText: "Get Service",
      ctaLink: `tel:${phoneNumber}`,
      icon: Wrench,
      features: ["Leak repairs", "Spin issues", "Not starting", "Drain problems"],
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">
              Our expert technicians specialize in diagnosing and fixing all washing machine issues.
              From water leaks and drainage problems to motor failures and control board issues,
              we provide comprehensive repair services. We use genuine parts and offer same-day
              service to get your washing machine back to optimal performance quickly.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Same-Day Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>90-Day Warranty</span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      description: "Dryer Repair",
      title: "Dryer",
      src: "/dryer-new.png",
      ctaText: "Get Service",
      ctaLink: `tel:${phoneNumber}`,
      icon: Wrench,
      features: ["Not heating", "Not spinning", "Timer issues", "Vent cleaning"],
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">
              Professional dryer repair services for all makes and models. We handle heating element
              replacements, belt repairs, motor issues, and vent cleaning. Our technicians ensure
              your dryer operates safely and efficiently, reducing energy costs and extending its lifespan.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Fast Response</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Quality Parts</span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      description:
        company === "Lg" || company === "Samsung"
          ? "Television Repair"
          : "Stove / Cooker Repair",
      title: company === "Lg" || company === "Samsung" ? "Television" : "Stove & Cooker",
      src:
        company === "Lg" || company === "Samsung" ? "/tv-new.png" : "/oven-new.png",
      ctaText: "Get Service",
      ctaLink: `tel:${phoneNumber}`,
      icon: Wrench,
      features: company === "Lg" || company === "Samsung"
        ? ["Screen issues", "Power problems", "Audio fixes", "Smart features"]
        : ["Burner repairs", "Oven heating", "Ignition issues", "Control panel"],
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            {company === "Lg" || company === "Samsung" ? (
              <p className="text-gray-700 leading-relaxed">
                Expert television repair services for all brands and screen types. We diagnose and
                fix display issues, power problems, audio malfunctions, and smart TV connectivity.
                Our certified technicians use advanced diagnostic tools to identify problems quickly
                and restore your TV to perfect working condition.
              </p>
            ) : (
              <p className="text-gray-700 leading-relaxed">
                Comprehensive stove and cooker repair services. We fix burner issues, oven heating
                problems, ignition failures, and control panel malfunctions. Whether it's a gas or
                electric stove, our technicians have the expertise to get your cooking appliances
                working perfectly again.
              </p>
            )}
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Expert Diagnosis</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Guaranteed Work</span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      description: "Dishwasher Repair",
      title: "Dishwasher",
      src: "/dishwasher-new.png",
      ctaText: "Get Service",
      ctaLink: `tel:${phoneNumber}`,
      icon: Wrench,
      features: ["Drain issues", "Cleaning problems", "Leak repairs", "Control panel"],
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">
              Professional dishwasher repair services to keep your dishes sparkling clean. We fix
              drainage problems, cleaning issues, water leaks, and control panel malfunctions. Our
              technicians ensure your dishwasher runs efficiently, saving water and energy while
              delivering spotless results.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Quick Fix</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Reliable Service</span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      description: "Refrigerator Repair",
      title: "Refrigerator",
      src: "/fridge-new.png",
      ctaText: "Get Service",
      ctaLink: `tel:${phoneNumber}`,
      icon: Wrench,
      features: ["Cooling issues", "Noise problems", "Water dispenser", "Ice maker"],
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">
              Expert refrigerator repair to keep your food fresh and safe. We fix cooling problems,
              unusual noises, water dispenser issues, and ice maker malfunctions. Our technicians
              diagnose compressor, thermostat, and seal issues to restore optimal cooling performance
              and energy efficiency.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Emergency Service</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Parts Guarantee</span>
              </div>
            </div>
          </div>
        );
      },
    },
    {
      description: "Gas Oven Repair",
      title: "Gas Oven",
      src: "/oven-new.png",
      ctaText: "Get Service",
      ctaLink: `tel:${phoneNumber}`,
      icon: Wrench,
      features: ["Heating issues", "Ignition problems", "Temperature control", "Gas safety"],
      content: () => {
        return (
          <div className="flex flex-col gap-4">
            <p className="text-gray-700 leading-relaxed">
              Safe and reliable gas oven repair services. We fix heating problems, ignition issues,
              temperature control malfunctions, and ensure proper gas safety. Our certified technicians
              perform thorough safety checks and repairs to keep your oven operating safely and efficiently.
            </p>
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Safety First</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Shield className={cn(
                  "w-4 h-4",
                  company === "Siemens" ? "text-siemensPrimary" :
                    company === "Bosch" ? "text-boschPrimary" :
                      company === "Samsung" ? "text-samsungPrimary" :
                        company === "Lg" ? "text-lgPrimary" :
                          "text-primary"
                )} />
                <span>Certified Techs</span>
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm h-full w-full z-50"
            onClick={() => setActive(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100] p-4">
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="w-full max-w-2xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
            >
              <motion.button
                onClick={() => setActive(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white transition-colors"
              >
                <X className="w-5 h-5 text-gray-700" />
              </motion.button>

              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-64 sm:h-80">
                <Image
                  quality={100}
                  width={1000}
                  height={1000}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-3xl font-bold text-white mb-2">{active.description}</h3>
                </div>
              </motion.div>

              <div className="flex-1 overflow-y-auto p-6">
                <div className="mb-6">
                  {typeof active.content === "function" ? active.content() : active.content}
                </div>

                <div className="border-t pt-6">
                  <CallAndWhatsappButton company={company} />
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={card.title}
              layoutId={`card-${card.title}-${id}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActive(card)}
              className={cn(
                "group relative overflow-hidden rounded-3xl cursor-pointer bg-white shadow-lg border border-gray-100",
                "hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ring-1",
                company === "Siemens" ? "ring-gray-100 hover:ring-siemensPrimary/50" :
                  company === "Bosch" ? "ring-gray-100 hover:ring-boschPrimary/50" :
                    company === "Samsung" ? "ring-gray-100 hover:ring-samsungPrimary/50" :
                      company === "Lg" ? "ring-gray-100 hover:ring-lgPrimary/50" :
                        "ring-gray-100 hover:ring-primary/50"
              )}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  quality={100}
                  width={1000}
                  height={1000}
                  src={card.src}
                  alt={card.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90" />

                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-2xl font-bold text-white mb-2">{card.description}</h3>
                  <div className="flex items-center gap-2 text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <span>View Service Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                <div className={cn(
                  "absolute top-4 right-4 p-3 rounded-2xl backdrop-blur-md shadow-lg",
                  company === "Siemens" ? "bg-siemensPrimary/90 text-white" :
                    company === "Bosch" ? "bg-boschPrimary/90 text-white" :
                      company === "Samsung" ? "bg-samsungPrimary/90 text-white" :
                        company === "Lg" ? "bg-lgPrimary/90 text-white" :
                          "bg-primary/90 text-white"
                )}>
                  <card.icon className="w-6 h-6" />
                </div>
              </div>

              <div className="p-6 bg-white">
                <div className="flex flex-wrap gap-2">
                  {card.features.slice(0, 3).map((feature, idx) => (
                    <span
                      key={idx}
                      className={cn(
                        "text-xs px-3 py-1.5 rounded-full font-semibold tracking-wide uppercase",
                        company === "Siemens" ? "bg-siemensBlob text-siemensPrimary" :
                          company === "Bosch" ? "bg-boschBlob text-boschPrimary" :
                            company === "Samsung" ? "bg-samsungBlob text-samsungPrimary" :
                              company === "Lg" ? "bg-lgBlob text-lgPrimary" :
                                "bg-blob text-primary"
                      )}
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
