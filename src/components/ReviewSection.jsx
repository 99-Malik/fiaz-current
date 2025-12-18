"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

export default function ReviewSection({
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
  company = "",
}) {
  const containerRef = React.useRef(null);
  const scrollerRef = React.useRef(null);

  const items = [
    {
      name: "Dawood Ayoob",
      quote:
        "Outstanding service! The technician arrived on time, diagnosed the issue quickly, and fixed my washing machine perfectly. Professional, courteous, and reasonably priced. Highly recommend their services!",
      title: "Washing Machine Repair",
      rating: 5,
      location: "Dubai",
    },
    {
      name: "Ayesha Ali",
      quote:
        "Excellent experience from start to finish. They repaired my refrigerator efficiently and explained everything clearly. The warranty gives me peace of mind. Will definitely use them again!",
      title: "Refrigerator Repair",
      rating: 5,
      location: "Abu Dhabi",
    },
    {
      name: "Ali Raza",
      quote:
        "I was skeptical at first, but they exceeded my expectations. Same-day service, fair pricing, and my dishwasher works like new. The team is knowledgeable and trustworthy. Five stars!",
      title: "Dishwasher Repair",
      rating: 5,
      location: "Sharjah",
    },
    {
      name: "Sara Khan",
      quote:
        "Fast, reliable, and professional. They fixed my oven heating issue in no time. The technician was clean, respectful, and did excellent work. Best appliance repair service in UAE!",
      title: "Oven Repair",
      rating: 5,
      location: "Dubai",
    },
    {
      name: "Mohammed Hassan",
      quote:
        "Top-notch service! They handled my dryer repair with expertise. The customer service was excellent, and the repair was done quickly. Very satisfied with the quality and price.",
      title: "Dryer Repair",
      rating: 5,
      location: "Ajman",
    },
  ];

  useEffect(() => {
    addAnimation();
  }, []);
  
  const [start, setStart] = useState(false);
  
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty("--animation-direction", "forwards");
      } else {
        containerRef.current.style.setProperty("--animation-direction", "reverse");
      }
    }
  };
  
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "30s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "50s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  
  return (
    <div className="relative w-full py-12 sm:py-16">
      <div
        ref={containerRef}
        className={cn(
          "scroller relative z-20 max-w-7xl mx-auto overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]",
          className
        )}
      >
        <ul
          ref={scrollerRef}
          className={cn(
            "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
            start && "animate-scroll",
            pauseOnHover && "hover:[animation-play-state:paused]"
          )}
        >
          {items.map((item, idx) => (
            <li
              key={`${item.name}-${idx}`}
              className={cn(
                "w-[340px] sm:w-[380px] max-w-full flex-shrink-0",
                "relative rounded-2xl p-6 sm:p-8",
                "backdrop-blur-sm border-2",
                company === "Lg"
                  ? "bg-white/90 border-lgPrimary/30 shadow-lg"
                  : company === "Samsung"
                  ? "bg-white/90 border-samsungPrimary/30 shadow-lg"
                  : company === "Bosch"
                  ? "bg-white/90 border-boschPrimary/30 shadow-lg"
                  : company === "Siemens"
                  ? "bg-white/90 border-siemensPrimary/30 shadow-lg"
                  : "bg-white/90 border-primary/30 shadow-lg"
              )}
            >
              <div className="flex flex-col h-full">
                {/* Quote Icon */}
                <div className={cn(
                  "mb-4",
                  company === "Lg" ? "text-lgPrimary" :
                  company === "Samsung" ? "text-samsungPrimary" :
                  company === "Bosch" ? "text-boschPrimary" :
                  company === "Siemens" ? "text-siemensPrimary" :
                  "text-primary"
                )}>
                  <Quote className="w-8 h-8 opacity-60" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(item.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote Text */}
                <blockquote className="flex-1 mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                    {item.quote}
                  </p>
                </blockquote>

                {/* Author Info */}
                <div className="border-t pt-4">
                  <div className="font-bold text-gray-900 text-sm sm:text-base">
                    {item.name}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 mt-1">
                    {item.title} • {item.location}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
