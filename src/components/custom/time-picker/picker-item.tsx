"use client";

import type React from "react";
import { useEffect, useCallback, useRef } from "react";
import type { EmblaCarouselType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils"; // Assuming cn utility is available

const CIRCLE_DEGREES = 360;
const WHEEL_ITEM_SIZE = 32;
const WHEEL_ITEM_COUNT = 18;
const WHEEL_ITEMS_IN_VIEW = 4;

export const WHEEL_ITEM_RADIUS = CIRCLE_DEGREES / WHEEL_ITEM_COUNT;
export const IN_VIEW_DEGREES = WHEEL_ITEM_RADIUS * WHEEL_ITEMS_IN_VIEW;
export const WHEEL_RADIUS = Math.round(WHEEL_ITEM_SIZE / 2 / Math.tan(Math.PI / WHEEL_ITEM_COUNT));

const isInView = (wheelLocation: number, slidePosition: number): boolean =>
  Math.abs(wheelLocation - slidePosition) < IN_VIEW_DEGREES;

const setSlideStyles = (
  emblaApi: EmblaCarouselType,
  index: number,
  loop: boolean,
  slideCount: number,
  totalRadius: number,
): void => {
  const slideNode = emblaApi.slideNodes()[index];
  const wheelLocation = emblaApi.scrollProgress() * totalRadius;
  const positionDefault = emblaApi.scrollSnapList()[index] * totalRadius;
  const positionLoopStart = positionDefault + totalRadius;
  const positionLoopEnd = positionDefault - totalRadius;

  let inView = false;
  let angle = index * -WHEEL_ITEM_RADIUS;

  if (isInView(wheelLocation, positionDefault)) {
    inView = true;
  }

  if (loop && isInView(wheelLocation, positionLoopEnd)) {
    inView = true;
    angle = -CIRCLE_DEGREES + (slideCount - index) * WHEEL_ITEM_RADIUS;
  }

  if (loop && isInView(wheelLocation, positionLoopStart)) {
    inView = true;
    angle = -(totalRadius % CIRCLE_DEGREES) - index * WHEEL_ITEM_RADIUS;
  }

  slideNode.style.transform = `translateY(-${
    index * 100
  }%) rotateX(${angle}deg) translateZ(${WHEEL_RADIUS}px)`;

  const isSelected = emblaApi.selectedScrollSnap() === index;

  // Clear all dynamic classes first to prevent accumulation
  slideNode.classList.remove(
    "bg-[#129575]/10",
    "text-[#129575]",
    "rounded-md",
    "px-2",
    "opacity-80",
    "text-[rgb(150,150,150)]",
  );

  if (inView) {
    if (isSelected) {
      slideNode.classList.add("bg-[#129575]/10", "text-[#129575]", "rounded-md", "px-2");
      slideNode.style.opacity = "1";
    } else {
      slideNode.classList.add("opacity-80", "text-[rgb(150,150,150)]");
      slideNode.style.opacity = "0.8"; // Non-selected in-view items
    }
  } else {
    slideNode.classList.add("text-[rgb(150,150,150)]"); // Ensure default color for out-of-view
    slideNode.style.opacity = "0"; // Completely out of view
    slideNode.style.transform = "none"; // Reset transform when not in view
  }
};

export const setContainerStyles = (emblaApi: EmblaCarouselType, wheelRotation: number): void => {
  emblaApi.containerNode().style.transform = `translateZ(${WHEEL_RADIUS}px) rotateX(${wheelRotation}deg)`;
};

type PropType = {
  loop?: boolean;
  slideCount: number;
  perspective: "left" | "right";
  renderSlide?: (index: number) => React.ReactNode;
  initialValue?: number; // New prop for initial selection
  onValueChange?: (value: number) => void; // New prop for value change callback
};

export const IosPickerItem: React.FC<PropType> = (props) => {
  const { slideCount, perspective, loop = false, renderSlide, initialValue, onValueChange } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop,
    axis: "y",
    dragFree: true,
    containScroll: false,
    watchSlides: false,
  });
  const rootNodeRef = useRef<HTMLDivElement>(null);
  const totalRadius = slideCount * WHEEL_ITEM_RADIUS;
  const rotationOffset = loop ? 0 : WHEEL_ITEM_RADIUS;
  const slides = Array.from(Array(slideCount).keys());

  // Ref to store the last value reported by onSelect to prevent re-triggering parent
  const lastReportedValue = useRef<number | undefined>(undefined);

  const inactivateEmblaTransform = useCallback((emblaApi: EmblaCarouselType) => {
    if (!emblaApi) return;
    const { translate, slideLooper } = emblaApi.internalEngine();
    translate.clear();
    translate.toggleActive(false);
    slideLooper.loopPoints.forEach(({ translate }) => {
      translate.clear();
      translate.toggleActive(false);
    });
  }, []);

  const rotateWheel = useCallback(
    (emblaApi: EmblaCarouselType) => {
      const rotation = slideCount * WHEEL_ITEM_RADIUS - rotationOffset;
      const wheelRotation = rotation * emblaApi.scrollProgress();
      setContainerStyles(emblaApi, wheelRotation);
      emblaApi.slideNodes().forEach((_, index) => {
        setSlideStyles(emblaApi, index, loop, slideCount, totalRadius);
      });
    },
    [slideCount, rotationOffset, totalRadius, loop],
  );

  const onSelect = useCallback(
    (emblaApi: EmblaCarouselType) => {
      const selected = emblaApi.selectedScrollSnap();
      // Only call onValueChange if the selected value is different from the last reported value
      if (lastReportedValue.current !== selected && onValueChange) {
        onValueChange(selected);
        lastReportedValue.current = selected;
      }
    },
    [onValueChange],
  );

  // Effect for setting up Embla listeners and initial transforms
  useEffect(() => {
    if (!emblaApi) return;

    const handlePointerUp = (emblaApi: EmblaCarouselType) => {
      const { scrollTo, target, location } = emblaApi.internalEngine();
      const diffToTarget = target.get() - location.get();
      const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 10 : 0.1;
      const distance = diffToTarget * factor;
      scrollTo.distance(distance, true);
    };

    const handleReInit = (emblaApi: EmblaCarouselType) => {
      inactivateEmblaTransform(emblaApi);
      rotateWheel(emblaApi);
      onSelect(emblaApi); // Re-initialize selection on reInit
    };

    emblaApi.on("pointerUp", handlePointerUp);
    emblaApi.on("scroll", rotateWheel);
    emblaApi.on("reInit", handleReInit);
    emblaApi.on("select", onSelect); // Listen to select event for user interaction

    // Initial setup
    inactivateEmblaTransform(emblaApi);
    rotateWheel(emblaApi);

    // Cleanup listeners
    return () => {
      emblaApi.off("pointerUp", handlePointerUp);
      emblaApi.off("scroll", rotateWheel);
      emblaApi.off("reInit", handleReInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, inactivateEmblaTransform, rotateWheel, onSelect]);

  // Effect for handling initialValue prop changes (controlled component logic)
  useEffect(() => {
    if (!emblaApi || initialValue === undefined) return;

    // Only scroll if the current selected snap is different from the initialValue
    // AND the initialValue is different from the last value we reported (to prevent loop)
    if (
      emblaApi.selectedScrollSnap() !== initialValue &&
      lastReportedValue.current !== initialValue
    ) {
      emblaApi.scrollTo(initialValue, false);
      // After programmatic scroll, update lastReportedValue to match the new initialValue
      // This prevents onSelect from being called immediately after this scroll
      lastReportedValue.current = initialValue;
    }
    // If it's the very first render and initialValue is set, ensure onSelect is called
    // to initialize the parent form's state.
    if (lastReportedValue.current === undefined && initialValue !== undefined) {
      onSelect(emblaApi); // This will set lastReportedValue.current
    }
  }, [emblaApi, initialValue, onSelect]);

  return (
    <div className="h-full flex items-center flex-1 justify-center leading-none text-[1.8rem]">
      <div
        className="w-20 h-full overflow-hidden px-2 flex items-center touch-pan-x"
        ref={rootNodeRef}
      >
        <div
          className={cn(
            "h-[32px] w-full perspective-[1000px] select-none touch-callout-none tap-highlight-transparent",
            perspective === "left"
              ? "[perspective-origin:calc(50%+130px)_50%] translate-x-[27px]"
              : "[perspective-origin:calc(50%-130px)_50%] translate-x-[-27px]",
          )}
          ref={emblaRef}
        >
          <div className="h-full w-full [transform-style:preserve-3d] will-change-transform">
            {slides.map((_, index) => (
              <div
                className="w-full h-full text-[19px] text-center flex items-center justify-center backface-hidden"
                key={index}
              >
                {renderSlide ? renderSlide(index) : index.toString().padStart(2, "0")}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
