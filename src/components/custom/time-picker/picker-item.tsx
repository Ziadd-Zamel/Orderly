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

  if (isInView(wheelLocation, positionDefault)) inView = true;
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

  const container = slideNode.querySelector(".inner-container") as HTMLElement | null;
  const span = slideNode.querySelector("span");

  container?.classList.remove(
    "text-main",
    "bg-[#129575]/15",
    "genz:bg-purple-50",
    "rounded-md",
    "px-2",
  );
  span?.classList.remove(
    "text-main",
    "genz:text-gradient",
    "text-[rgb(150,150,150)]",
    "opacity-80",
  );

  if (inView) {
    if (isSelected) {
      container?.classList.add(
        "text-main",
        "bg-[#129575]/15",
        "genz:bg-purple-50",
        "rounded-md",
        "p-2",
      );
      span?.classList.add("text-main", "genz:text-gradient");
      slideNode.style.opacity = "1";
    } else {
      span?.classList.add("text-[rgb(150,150,150)]", "opacity-80");
      slideNode.style.opacity = "0.8";
    }
  } else {
    span?.classList.add("text-[rgb(150,150,150)]");
    slideNode.style.opacity = "0";
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
  initialValue?: number;
  onValueChange?: (value: number) => void;
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
      if (lastReportedValue.current !== selected && onValueChange) {
        onValueChange(selected);
        lastReportedValue.current = selected;
      }
    },
    [onValueChange],
  );

  useEffect(() => {
    if (!emblaApi) return;

    const handlePointerUp = (emblaApi: EmblaCarouselType) => {
      const { scrollTo, target, location } = emblaApi.internalEngine();
      const diffToTarget = target.get() - location.get();
      const factor = Math.abs(diffToTarget) < WHEEL_ITEM_SIZE / 2.5 ? 10 : 0.1;
      scrollTo.distance(diffToTarget * factor, true);
    };

    const handleReInit = (emblaApi: EmblaCarouselType) => {
      inactivateEmblaTransform(emblaApi);
      rotateWheel(emblaApi);
      onSelect(emblaApi);
    };

    emblaApi.on("pointerUp", handlePointerUp);
    emblaApi.on("scroll", rotateWheel);
    emblaApi.on("reInit", handleReInit);
    emblaApi.on("select", onSelect);

    inactivateEmblaTransform(emblaApi);
    rotateWheel(emblaApi);

    return () => {
      emblaApi.off("pointerUp", handlePointerUp);
      emblaApi.off("scroll", rotateWheel);
      emblaApi.off("reInit", handleReInit);
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, inactivateEmblaTransform, rotateWheel, onSelect]);

  useEffect(() => {
    if (!emblaApi || initialValue === undefined) return;
    if (
      emblaApi.selectedScrollSnap() !== initialValue &&
      lastReportedValue.current !== initialValue
    ) {
      emblaApi.scrollTo(initialValue, false);
      lastReportedValue.current = initialValue;
    }
    if (lastReportedValue.current === undefined && initialValue !== undefined) {
      onSelect(emblaApi);
    }
  }, [emblaApi, initialValue, onSelect]);

  return (
    <div className="h-full flex items-center flex-1 justify-center leading-none text-[1.8rem] cursor-grab">
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
                className="w-full h-full flex items-center justify-center backface-hidden"
                key={index}
              >
                <div className="inner-container w-full flex items-center justify-center">
                  <span className="text-[19px]">
                    {renderSlide ? renderSlide(index) : index.toString().padStart(2, "0")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
