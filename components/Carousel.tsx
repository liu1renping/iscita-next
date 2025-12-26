"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface CarouselProps {
  slides: {
    image: string;
    title?: string;
    description?: string;
  }[];
  autoPlayInterval?: number;
}

export default function Carousel({
  slides,
  autoPlayInterval = 5000,
}: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (autoPlayInterval <= 0) return;

    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [slides.length, autoPlayInterval]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToNextSlide = () => {
    setCurrentSlide((current) => (current + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[315px] md:h-[630px] overflow-hidden">
      <div className="relative w-full h-full flex">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(${(index - currentSlide) * 100}%)`,
            }}
          >
            <div className="relative w-full h-full">
              <Image
                src={slide.image}
                alt={slide.title || `Slide ${index + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={index === 0}
              />
            </div>
            {(slide.title || slide.description) && (
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-linear-to-t from-black/70 to-transparent text-white">
                {slide.title && (
                  <h2 className="text-2xl font-bold mb-2">{slide.title}</h2>
                )}
                {slide.description && (
                  <p className="text-base">{slide.description}</p>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 text-white flex items-center justify-center transition-colors text-2xl"
        onClick={goToPreviousSlide}
        aria-label="Previous slide"
      >
        ‹
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 w-10 h-10 rounded-full bg-white/30 hover:bg-white/50 text-white flex items-center justify-center transition-colors text-2xl"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        ›
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              index === currentSlide
                ? "bg-white"
                : "bg-white/50 hover:bg-white/75"
            }`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
