'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const slides = [
  {
    desktop: "https://placehold.co/1920x650",
    mobile: "https://placehold.co/360x380",
  },
  {
    desktop: "https://placehold.co/1920x650",
    mobile: "https://placehold.co/360x380",
  },
  {
    desktop: "https://placehold.co/1920x650",
    mobile: "https://placehold.co/360x380",
  }
];

export default function BannerCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));

  const prevSlide = () =>
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));

  // Efeito para mudar o slide automaticamente a cada 5 segundos (5000ms)
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);

    // Limpa o intervalo ao desmontar o componente
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <picture key={index} className="w-full h-[650px] flex-shrink-0">
            <source media="(max-width: 768px)" srcSet={slide.mobile} />
            <img
              src={slide.desktop}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </picture>
        ))}
      </div>

      <Button
        variant="outline"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white/70"
        onClick={prevSlide}
      >
        <ChevronLeftIcon className="h-6 w-6 text-gray-800" />
      </Button>
      <Button
        variant="outline"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white/70"
        onClick={nextSlide}
      >
        <ChevronRightIcon className="h-6 w-6 text-gray-800" />
      </Button>
    </div>
  );
}
