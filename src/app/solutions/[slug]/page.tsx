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

// This would typically come from a database or API
const products = {
    tractor: {
        name: "Tractor AGV",
        model: "T-Series",
        modelNumber: "AGV-T100",
        description:
            "Unique design for tracking applications. Perfect for frequent handling of large cargo.",
        specifications: [
            {
                key: "dimensions",
                name: "Dimensions",
                value: "1100×540×550-1300×600×650 mm",
            },
            { key: "weight", name: "Vehicle Weight", value: "700 kg" },
            { key: "payload", name: "Max. Payload Weight", value: "4 tons" },
            { key: "speed", name: "Max. Speed", value: "1 m/s" },
            { key: "accuracy", name: "Moving Accuracy", value: "±10 mm" },
            { key: "slope", name: "Slope", value: "≤3°" },
            { key: "battery", name: "Battery", value: "24V/100AH Lithium" },
            { key: "chargingTime", name: "Charging Time", value: "2 hours" },
            { key: "wifi", name: "WiFi", value: "2.4/5.8 GHz" },
            { key: "voiceAlarm", name: "Voice Alarm", value: "Yes" },
            { key: "warningLight", name: "Warning Light", value: "Yes" },
            {
                key: "navigation",
                name: "Navigation Method",
                value: "SLAM/Color Tap/Magnetic",
            },
            { key: "turningRadius", name: "Turning Radius", value: "800 mm" },
            {
                key: "operatingTemp",
                name: "Operating Temperature",
                value: "-10°C to 45°C",
            },
        ],
    },
    lifting: {
        name: "Lifting AGV",
        model: "L-Series",
        modelNumber: "AGV-L200",
        description:
            "Advanced lifting capabilities for vertical transport applications.",
        specifications: [
            {
                key: "dimensions",
                name: "Dimensions",
                value: "1200×600×800-1500×700×900 mm",
            },
            { key: "weight", name: "Vehicle Weight", value: "850 kg" },
            { key: "payload", name: "Max. Payload Weight", value: "2.5 tons" },
            { key: "speed", name: "Max. Speed", value: "0.8 m/s" },
            { key: "accuracy", name: "Moving Accuracy", value: "±8 mm" },
            { key: "slope", name: "Slope", value: "≤2°" },
            { key: "battery", name: "Battery", value: "48V/150AH Lithium" },
            { key: "chargingTime", name: "Charging Time", value: "3 hours" },
            { key: "wifi", name: "WiFi", value: "2.4/5.8 GHz" },
            { key: "voiceAlarm", name: "Voice Alarm", value: "Yes" },
            { key: "warningLight", name: "Warning Light", value: "Yes" },
            {
                key: "navigation",
                name: "Navigation Method",
                value: "SLAM/QR Code/Magnetic",
            },
            { key: "liftHeight", name: "Lift Height", value: "1500 mm" },
            {
                key: "operatingTemp",
                name: "Operating Temperature",
                value: "-5°C to 40°C",
            },
        ],
    },
    // Add other products as needed
}

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
    const product = products[params.slug as keyof typeof products]

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

    return (
        <div className="min-h-screen bg-background">
            {/* Breadcrumb */}
            <div className="border-b bg-muted/50">
                <div className="container px-4 py-3 text-sm">
                    <div className="flex items-center space-x-2">
                        <Link
                            href="/"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Home
                        </Link>
                        <span className="text-muted-foreground">/</span>
                        <Link
                            href="/solutions"
                            className="text-muted-foreground transition-colors hover:text-foreground"
                        >
                            Solutions
                        </Link>
                        <span className="text-muted-foreground">/</span>
                        <span className="font-medium">{product.name}</span>
                    </div>
                </div>
            </div>

            <div className="container px-4 py-8 md:py-12">
                <div className="grid items-start gap-8 lg:grid-cols-2">
                    {/* Left Column - 360 Viewer */}
                    <div className="space-y-6">
                        <div className="rounded-lg bg-gradient-to-br from-[#71c6cc]/10 to-transparent p-1">
                            <div className="relative aspect-square overflow-hidden rounded-lg border bg-background">
                                {/* 360 Viewer Placeholder */}
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="relative">
                                        <Truck className="h-40 w-40 text-[#71c6cc]/80" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="animate-spin-slow h-48 w-48 rounded-full border-4 border-[#71c6cc]/20"></div>
                                            <div className="animate-spin-reverse absolute h-52 w-52 rounded-full border-4 border-dashed border-[#71c6cc]/10"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Controls */}
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                    <div className="flex items-center space-x-2 rounded-full bg-background/80 px-4 py-2 backdrop-blur-sm">
                                        <RotateCw className="h-4 w-4 text-[#71c6cc]" />
                                        <span className="text-sm">
                                            Drag to rotate
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="grid grid-cols-4 gap-2">
                            {[...Array(4)].map((_, i) => (
                                <button
                                    key={i}
                                    className="aspect-square overflow-hidden rounded-md border bg-muted transition-colors hover:border-[#71c6cc]"
                                >
                                    <div className="flex h-full w-full items-center justify-center">
                                        <Truck className="h-8 w-8 text-[#71c6cc]/60" />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Product Info */}
                    <div className="space-y-8">
                        <div>
                            <div className="mb-2 inline-block rounded-full bg-[#71c6cc]/10 px-3 py-1 text-sm font-medium text-[#71c6cc]">
                                {product.model}
                            </div>
                            <h1 className="text-3xl font-bold">
                                {product.name}
                            </h1>
                            <div className="mt-1 text-sm text-muted-foreground">
                                Model: {product.modelNumber}
                            </div>
                            <p className="mt-4 text-muted-foreground">
                                {product.description}
                            </p>
                        </div>

                        <Tabs defaultValue="specifications" className="w-full">
                            <TabsList className="grid w-full grid-cols-2">
                                <TabsTrigger value="specifications">
                                    Specifications
                                </TabsTrigger>
                                <TabsTrigger value="features">
                                    Features
                                </TabsTrigger>
                            </TabsList>

                            <TabsContent
                                value="specifications"
                                className="mt-6"
                            >
                                <Card>
                                    <div className="divide-y">
                                        {product.specifications.map(
                                            (spec, i) => (
                                                <div
                                                    key={i}
                                                    className="flex items-center px-4 py-3 transition-colors hover:bg-muted/30"
                                                >
                                                    <div className="flex-1">
                                                        <div className="flex items-center space-x-2">
                                                            <div className="text-[#71c6cc]">
                                                                {getSpecIcon(
                                                                    spec.key,
                                                                )}
                                                            </div>
                                                            <span className="font-medium">
                                                                {spec.name}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        {spec.value}
                                                    </div>
                                                </div>
                                            ),
                                        )}
                                    </div>
                                </Card>
                            </TabsContent>

                            <TabsContent value="features" className="mt-6">
                                <Card className="p-6">
                                    <div className="space-y-4">
                                        <h3 className="font-semibold">
                                            Key Features
                                        </h3>
                                        <ul className="space-y-2">
                                            <li className="flex items-start space-x-2">
                                                <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#71c6cc]/20">
                                                    <div className="h-2 w-2 rounded-full bg-[#71c6cc]"></div>
                                                </div>
                                                <span>
                                                    Advanced navigation system
                                                    for precise movement
                                                </span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#71c6cc]/20">
                                                    <div className="h-2 w-2 rounded-full bg-[#71c6cc]"></div>
                                                </div>
                                                <span>
                                                    Long-lasting battery with
                                                    quick charging capability
                                                </span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#71c6cc]/20">
                                                    <div className="h-2 w-2 rounded-full bg-[#71c6cc]"></div>
                                                </div>
                                                <span>
                                                    Comprehensive safety
                                                    features including voice
                                                    alarms and warning lights
                                                </span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#71c6cc]/20">
                                                    <div className="h-2 w-2 rounded-full bg-[#71c6cc]"></div>
                                                </div>
                                                <span>
                                                    Dual-band WiFi connectivity
                                                    for reliable communication
                                                </span>
                                            </li>
                                            <li className="flex items-start space-x-2">
                                                <div className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-[#71c6cc]/20">
                                                    <div className="h-2 w-2 rounded-full bg-[#71c6cc]"></div>
                                                </div>
                                                <span>
                                                    Compact design with optimal
                                                    turning radius for versatile
                                                    operation
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </Card>
                            </TabsContent>
                        </Tabs>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            <Button className="flex-1 bg-[#71c6cc] hover:bg-[#5eb3b9]">
                                Request Quote
                            </Button>
                            <Button variant="outline" className="flex-1">
                                Download Brochure
                            </Button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Related Products */}
            <div className="bg-muted/30 py-12">
                <div className="container px-4">
                    <h2 className="mb-6 text-2xl font-bold">
                        Related Products
                    </h2>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {Object.entries(products)
                            .filter(([slug]) => slug !== params.slug)
                            .map(([slug, product]) => (
                                <Card
                                    key={slug}
                                    className="group overflow-hidden"
                                >
                                    <div className="flex aspect-square items-center justify-center bg-muted/50">
                                        <Truck className="h-20 w-20 text-[#71c6cc]/60 transition-colors group-hover:text-[#71c6cc]" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-semibold">
                                            {product.name}
                                        </h3>
                                        <p className="mt-1 text-sm text-muted-foreground">
                                            {product.model}
                                        </p>
                                        <div className="mt-4">
                                            <Link
                                                href={`/solutions/${slug}`}
                                                className="text-sm text-[#71c6cc] hover:underline"
                                            >
                                                View Details
                                            </Link>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
