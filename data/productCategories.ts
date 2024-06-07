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
        name: "AGV Category 1",
        description: "Description, adjective, adjective",
        imageSrc: "",
        href: "/",
    },
    {
        name: "AGV Category 2",
        description: "Description, adjective, adjective",
        imageSrc: "",
        href: "/",
    },
    {
        name: "AGV Category 3",
        description: "Description, adjective, adjective",
        imageSrc: "",
        href: "/",
    },
    {
        name: "AGV Category 4",
        description: "Description, adjective, adjective",
        imageSrc: "",
        href: "/",
    },
]

export { amrCategories, agvCategories }
