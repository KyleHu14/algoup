interface Section {
    title: string
    description: string
    coverImage: string
    coverImageAltText: string
}

export const MANUFACTURING_CONTENT: Section[] = [
    {
        title: "Robust Production",
        description:
            "Our state-of-the-art manufacturing facility, encompassing over 100,000 square feet, enables the in-house fabrication of critical components, as well as the assembly of complex sub-systems. This advanced capability not only drives operational efficiency but also significantly enhances our ability to optimize production timelines and delivery lead time.",
        coverImage: "/manufacturing/facility-inner.jpg",
        coverImageAltText: "Manufacturing Facility",
    },
    {
        title: "Sustainability",
        description:
            "Our integrated in-house capabilities for component and sub-system fabrication, combined with a strategically optimized supply chain and the implementation of lean manufacturing principles, allow us to maintain a highly competitive and cost-efficient structure, ensuring long-term operational sustainability.",
        coverImage: "/manufacturing/sustainability.jpg",
        coverImageAltText: "Indoor Manufacturing Facility",
    },
    {
        title: "Quality Control",
        description:
            "Quality and performance are fundamental to meeting our customers' expectations. Through our ISO 9001-certified quality management system, we maintain comprehensive traceability of quality records for each component and manufacturing process. This rigorous framework enables us to consistently drive improvements, ensuring superior quality in the final product.",
        coverImage: "/manufacturing/quality-control.jpg",
        coverImageAltText: "Two People Checking for Quality Control",
    },
]
