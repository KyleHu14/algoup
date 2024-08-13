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

interface Props {
    images: string[]
}

// prettier-ignore
export default function ProductDisplayCarousel({
    images,
}: Props) {

    return (
        <Carousel plugins={[Autoplay({delay: 2500, }),]} opts={{ loop: true }}className="w-full max-w-5xl">
            <CarouselContent className="-ml-16">
                {images.map((partnerSrc, index) =>
                    (
                        <CarouselItem key={index} className="basis-1/3 pl-16">
                            <div className="flex aspect-square items-center justify-center">
                                <Image
                                    src={partnerSrc}
                                    width={600}
                                    height={600}
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
