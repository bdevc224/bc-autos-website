import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define the Image type
interface ImageSlide {
  url: string;
  caption?: string;
  subCaption?: string;
}

// Define the component props interface
interface ImageSlideshowProps {
  images?: ImageSlide[];
  interval?: number;
  autoPlay?: boolean;
  showControls?: boolean;
  showIndicators?: boolean;
  showProgress?: boolean;
  animation?: "fade" | "slide";
  pauseOnHover?: boolean;
  enableKeyboard?: boolean;
  className?: string;
}

// Define animation variants type - make it more flexible
type AnimationVariantValue = {
  x?: number;
  opacity: number;
  scale?: number;
};

type AnimationVariants = {
  enter: ((dir: number) => AnimationVariantValue) | AnimationVariantValue;
  center: AnimationVariantValue;
  exit: ((dir: number) => AnimationVariantValue) | AnimationVariantValue;
};

const ImageSlideshow: React.FC<ImageSlideshowProps> = ({
  images = [],
  interval = 4000,
  autoPlay = true,
  showControls = true,
  showIndicators = true,
  showProgress = true,
  animation = "fade",
  pauseOnHover = true,
  enableKeyboard = true,
  className = "",
}) => {
  const [current, setCurrent] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);

  // Next and previous (memoized)
  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    setProgress(0);
  }, [images.length]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    setProgress(0);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
    setProgress(0);
  };

  // Auto-play + progress
  useEffect(() => {
    if (!autoPlay || isPaused) return;

    const step = 50;
    const increment = (step / interval) * 100;

    const timer = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          nextSlide();
          return 0;
        }
        return p + increment;
      });
    }, step);

    return () => clearInterval(timer);
  }, [autoPlay, isPaused, interval, nextSlide]);

  // Keyboard navigation
  useEffect(() => {
    if (!enableKeyboard) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [enableKeyboard, nextSlide, prevSlide]);

  // Swipe gestures (mobile)
  const handlers = useSwipeable({
    onSwipedLeft: () => nextSlide(),
    onSwipedRight: () => prevSlide(),
    trackMouse: true,
  });

  if (!images || images.length === 0)
    return (
      <div className="text-center text-gray-500">No images provided.</div>
    );

  // Animation variants
  const variants: AnimationVariants =
    animation === "slide"
      ? {
          enter: (dir: number) => ({
            x: dir > 0 ? 300 : -300,
            opacity: 0,
          }),
          center: { x: 0, opacity: 1 },
          exit: (dir: number) => ({
            x: dir > 0 ? -300 : 300,
            opacity: 0,
          }),
        }
      : {
          enter: { opacity: 0, scale: 1.05 },
          center: { opacity: 1, scale: 1 },
          exit: { opacity: 0, scale: 0.95 },
        };

  return (
    <div
      {...handlers}
      className={`relative w-screen h-screen overflow-hidden select-none ${className}`}
      onMouseEnter={() => pauseOnHover && setIsPaused(true)}
      onMouseLeave={() => pauseOnHover && setIsPaused(false)}
    >
      {/* Transition */}
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={images[current]?.url}
            alt={images[current]?.caption || `Slide ${current + 1}`}
            className="w-full h-full object-cover"
            draggable="false"
          />

          {/* Caption */}
          {(images[current]?.caption || images[current]?.subCaption) && (
            <div className="absolute bottom-0 bg-linear-to-t from-black/70 to-transparent text-white px-6 py-4 w-full">
              {images[current]?.caption && (
                <h3 className="text-lg md:text-2xl font-semibold">
                  {images[current].caption}
                </h3>
              )}
              {images[current]?.subCaption && (
                <p className="text-sm md:text-base opacity-90">
                  {images[current].subCaption}
                </p>
              )}
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Progress bar */}
      {showProgress && (
        <div className="absolute top-0 left-0 w-full h-1 bg-black/20">
          <motion.div
            className="h-full bg-white origin-left"
            style={{ width: `${progress}%` }}
          />
        </div>
      )}

      {/* Controls */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition"
            aria-label="Previous slide"
          >
            <ChevronLeft size={28} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-8 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/60 text-white p-3 rounded-full transition"
            aria-label="Next slide"
          >
            <ChevronRight size={28} />
          </button>
        </>
      )}

      {/* Indicators */}
      {showIndicators && images.length > 1 && (
        <div className="absolute bottom-5 w-full flex justify-center gap-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === current ? "bg-white scale-125" : "bg-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
              aria-current={index === current}
            />
          ))}
        </div>
      )}

      {/* Paused indicator */}
      {pauseOnHover && isPaused && (
        <div className="absolute top-3 right-4 bg-black/50 text-white text-xs px-2 py-1 rounded">
          Paused
        </div>
      )}
    </div>
  );
};

export default ImageSlideshow;