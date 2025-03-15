export interface Model {
    name: string
    description: string
    imageSrc: string
    href: string
}

const agvUrl = "/solutions/"

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
    ratedLoad?: string
    loadCenterDistance?: string
    liftingHeight?: string
    forkSize?: string
    forkWidth?: string
    minGroundClearance?: string
    steps?: string
    slope?: string
    crossDitch?: string
    battery?: string
    heatingFilmTempControl?: string
    twoDReflectorPanel?: string
    threeDSlamMid360?: string
    threeDSlamMid360TwoDReflectorPanel?: string
    threeDSlamVisualTagNavigation?: string
    wifi245GHz?: string
    encryptedDataTransmission?: string
    opticalCommunication?: string
    voiceAlarm?: string
    navigationAndObstacleAvoidance?: string
    triColorLight?: string
    warningLight?: string
    secureEdge?: string
    twoDObstacleAvoidanceLidar?: string
    threeDVisualObstacleAvoidanceCamera?: string
    emergencyStopSwitch?: string
    forkNibProtection?: string
    humanMachineInterface?: string
    pickUpIdentificationFunction?: string
    releaseIdentificationFunction?: string
    trayInPlaceDetection?: string
    rfidReaderWriter?: string
    codeReader?: string
    overweightDetection?: string
    accurateWeighing?: string
}

interface SpecificationMeta {
    key: keyof Specifications
    name: string
}

// Metadata for how to display specification fields
const specificationsMeta: SpecificationMeta[] = [
    { key: "ratedLoad", name: "Rated Load" },
    { key: "loadCenterDistance", name: "Load Center Distance" },
    { key: "liftingHeight", name: "Lifting Height" },
    { key: "forkSize", name: "Fork Size" },
    { key: "forkWidth", name: "Fork Width" },
    { key: "minGroundClearance", name: "Minimum Ground Clearance" },
    { key: "steps", name: "Steps" },
    { key: "slope", name: "Slope" },
    { key: "crossDitch", name: "Cross Ditch" },
    { key: "battery", name: "Battery" },
    { key: "heatingFilmTempControl", name: "Heating Film Temperature Control" },
    { key: "twoDReflectorPanel", name: "2D Reflector Panel" },
    { key: "threeDSlamMid360", name: "3D Slam (mid360)" },
    {
        key: "threeDSlamMid360TwoDReflectorPanel",
        name: "3D Slam + 2D Reflector Panel",
    },
    {
        key: "threeDSlamVisualTagNavigation",
        name: "3D Slam + Visual Tag Navigation",
    },
    { key: "wifi245GHz", name: "WiFi 2.4/5.8GHz" },
    { key: "encryptedDataTransmission", name: "Encrypted Data Transmission" },
    { key: "opticalCommunication", name: "Optical Communication" },
    { key: "voiceAlarm", name: "Voice Alarm" },
    {
        key: "navigationAndObstacleAvoidance",
        name: "Navigation and Obstacle Avoidance",
    },
    { key: "triColorLight", name: "Tri-color Light" },
    { key: "warningLight", name: "Warning Light" },
    { key: "secureEdge", name: "Secure Edge" },
    { key: "twoDObstacleAvoidanceLidar", name: "2D Obstacle Avoidance LIDAR" },
    {
        key: "threeDVisualObstacleAvoidanceCamera",
        name: "3D Visual Obstacle Avoidance Camera",
    },
    { key: "emergencyStopSwitch", name: "Emergency Stop Switch" },
    { key: "forkNibProtection", name: "Fork Nib Protection" },
    { key: "humanMachineInterface", name: "Human-Machine Interface" },
    {
        key: "pickUpIdentificationFunction",
        name: "Pick Up Identification Function",
    },
    {
        key: "releaseIdentificationFunction",
        name: "Release Identification Function",
    },
    { key: "trayInPlaceDetection", name: "Tray in Place Detection" },
    { key: "rfidReaderWriter", name: "RFID Reader/Writer" },
    { key: "codeReader", name: "Code Reader" },
    { key: "overweightDetection", name: "Overweight Detection" },
    { key: "accurateWeighing", name: "Accurate Weighing" },
]

interface Product {
    id: string
    name: string
    model: string
    description: string
    specifications: Specifications
}

const products: Product[] = [
    {
        id: "pallet",
        name: "Pallet AGV",
        model: "PG-CD16",
        description:
            "Unique design for tracking applications. Perfect for frequent handling of large cargo.",
        specifications: {
            ratedLoad: "1600",
            loadCenterDistance: "600mm",
            liftingHeight: "120",
            forkSize: "173mm",
            forkWidth: "620, 570",
            minGroundClearance: "90",
            steps: "10mm",
            slope: "3%",
            crossDitch: "30mm",
            battery: "48V105Ah",
            heatingFilmTempControl: "No",
            twoDReflectorPanel: "Yes",
            threeDSlamMid360: "Yes",
            threeDSlamMid360TwoDReflectorPanel: "No",
            threeDSlamVisualTagNavigation: "Yes",
            wifi245GHz: "Yes",
            encryptedDataTransmission: "Yes",
            opticalCommunication: "Yes",
            voiceAlarm: "No",
            navigationAndObstacleAvoidance: "No",
            triColorLight: "No",
            warningLight: "Position light",
            secureEdge: "No",
            twoDObstacleAvoidanceLidar:
                "Two 2D laser radars on the front of the robot",
            threeDVisualObstacleAvoidanceCamera:
                "1 set; three-dimensional obstacle avoidance in the direction of the front end, 3 sets; Front end direction and both sides",
            emergencyStopSwitch: "Three sides",
            forkNibProtection:
                "Mechanical collision avoidance+photoelectric, Depth camera obstacle avoidance+photoelectric",
            humanMachineInterface: "Bilingual(Chinese/English)",
            pickUpIdentificationFunction: "Fork nib camera",
            releaseIdentificationFunction: "Fork nib camera",
            trayInPlaceDetection:
                "Mechanical in place inspection, Non contact in place detection",
            rfidReaderWriter: "Yes",
            codeReader: "Yes",
            overweightDetection: "Yes",
            accurateWeighing: "Customizable",
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

export {
    products,
    type Product,
    type Specifications,
    specificationsMeta,
    agvModels,
}
