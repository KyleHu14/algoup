export interface ProductCategoryType {
    name: string
    description: string
    imageSrc: string
    href: string
}

const amrCategories: ProductCategoryType[] = [
    // {
    //     name: "PG-T Light",
    //     description: "Light, simple, and efficient.",
    //     imageSrc: "",
    //     href: "pgt",
    // },
    // {
    //     name: "PG-ST Heavy",
    //     description: "Durable, powerful, and versatile.",
    //     imageSrc: "",
    //     href: "pgst",
    // },
]

const agvCategories: ProductCategoryType[] = [
    {
        name: "Tractor",
        description: "",
        imageSrc: "/agv/tractor/tseries-1.png",
        href: "/agv/tractor",
    },
    {
        name: "Lifting",
        description: "",
        imageSrc: "/agv/lifting/dcseries-1.png",
        href: "/agv/lifting",
    },
    {
        name: "Slim Forklift",
        description: "",
        imageSrc: "/agv/fork-lift/pg-cd-15/1.png",
        href: "/agv/slim-forklift",
    },
    {
        name: "Pallet Stacker",
        description: "",
        imageSrc: "/agv/pallet-stacker/pg-cr-16/1.png",
        href: "/agv/pallet-stacker",
    },
    {
        name: "Counterbalance",
        description: "",
        imageSrc: "/agv/counterbalance/1.png",
        href: "/agv/counterbalance",
    },
]

export { amrCategories, agvCategories }
