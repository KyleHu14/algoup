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
                <Link href={href}>
                    <Button variant="outline">
                        View More <ChevronsRight />
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
