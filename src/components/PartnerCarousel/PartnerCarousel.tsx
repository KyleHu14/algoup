import * as React from "react";

import { PARTNERS } from "../../../data/partners";

import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";

import Image from "next/image";

export default function PartnerCarousel() {
    return (
        <Carousel className="w-full max-w-5xl">
            <CarouselContent className="-ml-16">
                {PARTNERS.map((partnerSrc, index) => (
                    <CarouselItem key={index} className="basis-1/5 pl-16">
                        <div className="flex aspect-square items-center">
                            <Image
                                src={partnerSrc}
                                width={350}
                                height={200}
                                alt="Partner Logo"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    );
}
