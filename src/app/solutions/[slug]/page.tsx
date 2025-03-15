import type React from "react"
import {
    Truck,
    RotateCw,
    Info,
    Battery,
    Wifi,
    Volume2,
    AlertTriangle,
    Box,
    Ruler,
    Gauge,
    Clock,
    Thermometer,
} from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { products, getSpecificationsArray } from "@/data/models/agv-models"
import PageContainer from "@/components/PageContainer"

// Map of specification keys to their respective icons
const getSpecIcon = (key: string) => {
    const iconMap: Record<string, React.ReactNode> = {
        dimensions: <Box className="h-5 w-5" />,
        weight: <Gauge className="h-5 w-5" />,
        payload: <Box className="h-5 w-5" />,
        speed: <Gauge className="h-5 w-5" />,
        accuracy: <Ruler className="h-5 w-5" />,
        slope: <Info className="h-5 w-5" />,
        battery: <Battery className="h-5 w-5" />,
        chargingTime: <Clock className="h-5 w-5" />,
        wifi: <Wifi className="h-5 w-5" />,
        voiceAlarm: <Volume2 className="h-5 w-5" />,
        warningLight: <AlertTriangle className="h-5 w-5" />,
        navigation: <Info className="h-5 w-5" />,
        turningRadius: <RotateCw className="h-5 w-5" />,
        liftHeight: <Ruler className="h-5 w-5" />,
        operatingTemp: <Thermometer className="h-5 w-5" />,
    }

    return iconMap[key] || <Info className="h-5 w-5" />
}

export default function ProductPage({ params }: { params: { slug: string } }) {
    const product = products.find((p) => p.id === params.slug)

    if (!product) {
        return (
            <div className="flex min-h-screen items-center justify-center">
                <div className="space-y-4 text-center">
                    <h1 className="text-2xl font-bold">Product Not Found</h1>
                    <p className="text-muted-foreground">
                        The product youre looking for doesnt exist or has been
                        moved.
                    </p>
                    <Button asChild>
                        <Link href="/solutions">Back to Solutions</Link>
                    </Button>
                </div>
            </div>
        )
    }

    const specifications = getSpecificationsArray(product)

    return (
        <PageContainer
            paddingVariant="none"
            className="grid gap-8 px-[5%] py-8 md:py-12 lg:grid-cols-2 lg:px-[10%]"
        >
            {/* Product Image Section */}
            <section className="space-y-6">
                {/* 360 View Container */}
                <div className="relative aspect-square rounded-lg border bg-background p-1">
                    {/* Placeholder for 360 View */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Truck className="h-40 w-40 text-[#71c6cc]/80" />
                    </div>

                    {/* 360 View Controls */}
                    <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                        <RotateCw className="h-4 w-4 text-algoup-accent lg:h-7 lg:w-7" />
                        <span className="text-sm lg:text-lg">
                            Drag to rotate
                        </span>
                    </div>
                </div>

                {/* Product Image Thumbnails */}
                <div className="grid grid-cols-4 gap-2">
                    {[...Array(4)].map((_, i) => (
                        <button
                            key={i}
                            className="aspect-square rounded-md border bg-muted hover:border-[#71c6cc]"
                        >
                            <Truck className="h-8 w-8 text-[#71c6cc]/60" />
                        </button>
                    ))}
                </div>
            </section>

            {/* Product Details Section */}
            <section className="space-y-8">
                {/* Product Header Information */}
                <div>
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <div className="mt-2 inline-block rounded-full bg-[#71c6cc]/10 px-3 py-1 text-sm font-medium text-[#71c6cc]">
                        {product.model}
                    </div>
                    <p className="mt-4 text-muted-foreground">
                        {product.description}
                    </p>
                </div>

                {/* Product Details Tabs */}
                <Tabs defaultValue="specifications" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="specifications">
                            Specifications
                        </TabsTrigger>
                        <TabsTrigger value="features">Features</TabsTrigger>
                    </TabsList>

                    {/* Specifications Tab Content */}
                    <TabsContent value="specifications" className="mt-6">
                        <Card>
                            <div className="divide-y">
                                {specifications.map((spec, i) => (
                                    <div
                                        key={i}
                                        className="flex flex-col justify-center px-4 py-3 hover:bg-muted/30"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <span className="text-algoup-accent">
                                                {getSpecIcon(spec.key)}
                                            </span>

                                            <span className="font-medium">
                                                {spec.name}
                                            </span>
                                        </div>

                                        <span className="mt-1 block text-sm text-muted-foreground">
                                            {spec.value}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    </TabsContent>

                    {/* Features Tab Content */}
                    <TabsContent value="features">
                        <Card className="p-6">
                            <p className="text-sm text-muted-foreground">
                                Feature details coming soon...
                            </p>
                        </Card>
                    </TabsContent>
                </Tabs>
            </section>
        </PageContainer>
    )
}
