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
import Link from "next/link"

interface ProductCardProps {
    name: string
    description: string
    imageSrc: string
    href: string
}

export default function ProductCard({
    name,
    description,
    imageSrc,
    href,
}: ProductCardProps) {
    return (
        <Card className="">
            <CardHeader>
                <CardTitle>{name}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="relative h-[150px] w-[150px]">
                    <Image
                        className="object-contain"
                        src={imageSrc}
                        fill={true}
                        alt="Category Image"
                    />
                </div>
            </CardContent>
            <CardFooter className="">
                <Link href={href}>
                    <Button variant="outline">
                        View More <ChevronsRight />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
