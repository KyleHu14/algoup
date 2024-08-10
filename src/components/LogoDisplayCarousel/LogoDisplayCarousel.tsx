"use client"

import * as React from "react"

import Autoplay from "embla-carousel-autoplay"

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import Image from "next/image"

interface LogoDisplayCarouselProps {
    logos: string[]
}

// prettier-ignore
export default function LogoDisplayCarousel({
    logos,
}: LogoDisplayCarouselProps) {
    return (
        <Carousel plugins={[Autoplay({delay: 2500, }),]} opts={{ loop: true }}className="w-full max-w-5xl">
            <CarouselContent className="-ml-16">
                {logos.map((partnerSrc, index) =>
                    partnerSrc.includes("volkswagen") ? (
                        <CarouselItem key={index} className="basis-1/5 pl-16">
                            <div className="flex aspect-square items-center justify-center">
                                <Image
                                    src={partnerSrc}
                                    width={60}
                                    height={40}
                                    alt="Partner Logo"
                                />
                            </div>
                        </CarouselItem>
                    ) : (
                        <CarouselItem key={index} className="basis-1/5 pl-16">
                            <div className="flex aspect-square items-center justify-center">
                                <Image
                                    src={partnerSrc}
                                    width={350}
                                    height={150}
                                    alt="Partner Logo"
                                />
                            </div>
                        </CarouselItem>
                    ),
                )}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}
