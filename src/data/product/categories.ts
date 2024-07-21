export interface ProductCategoryType {
    name: string
    description: string
    imageSrc: string
    href: string
}

const amrCategories: ProductCategoryType[] = [
    {
        name: "PG-T Light",
        description: "Light, simple, and efficient.",
        imageSrc: "",
        href: "pgt",
    },
    {
        name: "PG-ST Heavy",
        description: "Durable, powerful, and versatile.",
        imageSrc: "",
        href: "pgst",
    },
]

const agvCategories: ProductCategoryType[] = [
    {
        name: "Tractor AGV",
        description: "Description, adjective, adjective",
        imageSrc: "/agv/tractor/tseries-1.png",
        href: "/agv/tractor",
    },
    {
        name: "Latent AGV",
        description: "Description, adjective, adjective",
        imageSrc: "/agv/latent/qseries-1.png",
        href: "/agv/latent",
    },
    {
        name: "Lifting AGV",
        description: "Description, adjective, adjective",
        imageSrc: "/agv/lifting/dcseries-1.png",
        href: "/agv/lifting",
    },
]

export { amrCategories, agvCategories }
