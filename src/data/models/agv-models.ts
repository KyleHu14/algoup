export interface Model {
    name: string
    description: string
    imageSrc: string
    href: string
}

const agvUrl = "/solutions/agv"

const agvModels: Model[] = [
    {
        name: "Pallet AGV",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: `${agvUrl}/pallet`,
    },
    {
        name: "Stacker AGV",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: `${agvUrl}/stacker`,
    },
    {
        name: "Reach AGV",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: `${agvUrl}/reach`,
    },
    {
        name: "Counterbalance AGV",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: `${agvUrl}/counterbalance`,
    },
    {
        name: "All Direction AGV",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: `${agvUrl}/all-direction`,
    },
    {
        name: "Three Direction Reach AGV",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: `${agvUrl}/three-direction-reach`,
    },
    {
        name: "All Direction Narrow AGV",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: `${agvUrl}/all-direction-narrow`,
    },
]

interface Specifications {
    dimensions: string
    weight: string
    payload: string
    speed: string
    accuracy: string
    slope: string
    battery: string
    chargingTime: string
    wifi: string
    voiceAlarm: string
    warningLight: string
    navigation: string
    turningRadius?: string
    liftHeight?: string
    operatingTemp: string
}

interface SpecificationMeta {
    key: keyof Specifications
    name: string
}

// Metadata for how to display specification fields
const specificationsMeta: SpecificationMeta[] = [
    { key: "dimensions", name: "Dimensions" },
    { key: "weight", name: "Vehicle Weight" },
    { key: "payload", name: "Max. Payload Weight" },
    { key: "speed", name: "Max. Speed" },
    { key: "accuracy", name: "Moving Accuracy" },
    { key: "slope", name: "Slope" },
    { key: "battery", name: "Battery" },
    { key: "chargingTime", name: "Charging Time" },
    { key: "wifi", name: "WiFi" },
    { key: "voiceAlarm", name: "Voice Alarm" },
    { key: "warningLight", name: "Warning Light" },
    { key: "navigation", name: "Navigation Method" },
    { key: "turningRadius", name: "Turning Radius" },
    { key: "liftHeight", name: "Lift Height" },
    { key: "operatingTemp", name: "Operating Temperature" },
]

interface Product {
    id: string
    name: string
    model: string
    modelNumber: string
    description: string
    specifications: Specifications
}

const products: Product[] = [
    {
        id: "tractor",
        name: "Tractor AGV",
        model: "T-Series",
        modelNumber: "AGV-T100",
        description:
            "Unique design for tracking applications. Perfect for frequent handling of large cargo.",
        specifications: {
            dimensions: "1100×540×550-1300×600×650 mm",
            weight: "700 kg",
            payload: "4 tons",
            speed: "1 m/s",
            accuracy: "±10 mm",
            slope: "≤3°",
            battery: "24V/100AH Lithium",
            chargingTime: "2 hours",
            wifi: "2.4/5.8 GHz",
            voiceAlarm: "Yes",
            warningLight: "Yes",
            navigation: "SLAM/Color Tap/Magnetic",
            turningRadius: "800 mm",
            operatingTemp: "-10°C to 45°C",
        },
    },
    {
        id: "lifting",
        name: "Lifting AGV",
        model: "L-Series",
        modelNumber: "AGV-L200",
        description:
            "Advanced lifting capabilities for vertical transport applications.",
        specifications: {
            dimensions: "1200×600×800-1500×700×900 mm",
            weight: "850 kg",
            payload: "2.5 tons",
            speed: "0.8 m/s",
            accuracy: "±8 mm",
            slope: "≤2°",
            battery: "48V/150AH Lithium",
            chargingTime: "3 hours",
            wifi: "2.4/5.8 GHz",
            voiceAlarm: "Yes",
            warningLight: "Yes",
            navigation: "SLAM/QR Code/Magnetic",
            liftHeight: "1500 mm",
            operatingTemp: "-5°C to 40°C",
        },
    },
]

// Helper function to get specifications as an array for React rendering
export const getSpecificationsArray = (product: Product) => {
    return specificationsMeta
        .filter((meta) => product.specifications[meta.key] !== undefined)
        .map((meta) => ({
            key: meta.key,
            name: meta.name,
            value: product.specifications[meta.key],
        }))
}

export { products, type Product, type Specifications, specificationsMeta }
