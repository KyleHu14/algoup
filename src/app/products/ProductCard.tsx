import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { ChevronsRight } from "lucide-react"

import Image from "next/image"

interface ProductCardProps {
    name: string
    description: string
    imageSrc: string
}

export default function ProductCard({
    name,
    description,
    imageSrc,
}: ProductCardProps) {
    return (
        <Card className="w-[290px]">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <Image
                    src="/amr.png"
                    width={180}
                    height={180}
                    alt="Category Image"
                />
            </CardContent>
            <CardFooter className="">
                <Button variant="outline">
                    View More <ChevronsRight />
                </Button>
            </CardFooter>
        </Card>
    )
}
