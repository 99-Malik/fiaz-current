"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

export const ImagesSlider = ({
  images,
  children,
  overlay = true,
  overlayClassName,
  className,
  autoplay = true,
  direction = "up"
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [loadedImages, setLoadedImages] = useState([]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = loadedImages.length > 0 ? loadedImages.length - 1 : 0;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  }, [loadedImages.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => {
      const maxIndex = loadedImages.length > 0 ? loadedImages.length - 1 : 0;
      return prevIndex <= 0 ? maxIndex : prevIndex - 1;
    });
  }, [loadedImages.length]);

  useEffect(() => {
    if (!images || images.length === 0) {
      setLoadedImages([]);
      setCurrentIndex(0);
      return;
    }
    
    setLoading(true);
    const loadPromises = images.map((image) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = image;
        img.onload = () => resolve(image);
        img.onerror = (error) => {
          console.warn(`Failed to load image: ${image}`, error);
          resolve(image); // Resolve anyway to continue with other images
        };
      });
    });

    Promise.all(loadPromises)
      .then((loaded) => {
        const validImages = loaded.filter(img => img);
        setLoadedImages(validImages);
        setLoading(false);
        setCurrentIndex(0); // Reset to first image when images change
      })
      .catch((error) => {
        console.error("Failed to load images", error);
        setLoading(false);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(images)]);

  useEffect(() => {
    if (loadedImages.length === 0) return;

    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "ArrowLeft") {
        handlePrevious();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // autoplay
    let interval;
    if (autoplay && loadedImages.length > 1) {
      interval = setInterval(() => {
        handleNext();
      }, 5000);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      if (interval) clearInterval(interval);
    };
  }, [autoplay, loadedImages.length, handleNext, handlePrevious]);

  const slideVariants = {
    initial: {
      scale: 0,
      opacity: 0,
      rotateX: 45,
    },
    visible: {
      scale: 1,
      rotateX: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1.0],
      },
    },
    upExit: {
      opacity: 1,
      y: "-150%",
      transition: {
        duration: 1,
      },
    },
    downExit: {
      opacity: 1,
      y: "150%",
      transition: {
        duration: 1,
      },
    },
  };

  const areImagesLoaded = loadedImages.length > 0;

  return (
    (<div
      className={cn(
        "overflow-hidden h-full w-full relative flex items-center justify-center",
        className
      )}
      style={{
        perspective: "1000px",
      }}>
      {areImagesLoaded && children}
      {areImagesLoaded && overlay && (
        <div className={cn("absolute inset-0 bg-black/60 z-40", overlayClassName)} />
      )}
      {areImagesLoaded && loadedImages[currentIndex] && (
        <AnimatePresence mode="wait">
          <motion.img
            key={`${currentIndex}-${loadedImages[currentIndex]}`}
            src={loadedImages[currentIndex]}
            initial="initial"
            animate="visible"
            exit={direction === "up" ? "upExit" : "downExit"}
            variants={slideVariants}
            className="image h-full w-full absolute inset-0 object-cover object-center" />
        </AnimatePresence>
      )}
    </div>)
  );
};
