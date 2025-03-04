import { Blocks, CircuitBoard, Database } from "lucide-react"
import { ComponentType } from "react"

interface Section {
    title: string
    content: string
    icon: ComponentType<any>
}

export const AI_CONTENT: Section[] = [
    {
        title: "Advanced Edge-Embedded AI",
        content:
            "We are actively developing advanced edge-embedded artificial intelligence. Our research will enable our robots to  independently complete complex tasks and actions.",
        icon: CircuitBoard,
    },
    {
        title: "Self-Learning Systems",
        content:
            "Our solutions are designed with self-learning capabilities which allows our robots to continuously refine and enhance their skills over time. Our robots cna learn from mistakes and gain context to improve how they coplete their tasks.",
        icon: Blocks,
    },
    {
        title: "Robust Data Engine",
        content:
            "We are constructing a closed-loop data engine that integrates essential functions such as data collection, automated data labeling, synthetic data generation, and data re-injection. This engine supports the seamless delivery of software updates and upgrades to our AI solutions.",
        icon: Database,
    },
]
