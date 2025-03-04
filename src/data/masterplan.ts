import { Lightbulb, Target, Users, Wrench } from "lucide-react"
import { ComponentType } from "react"

interface Section {
    title: string
    description: string
    img?: string
    icon: ComponentType<any>
}

export const MASTERPLAN_CONTENT: Section[] = [
    {
        title: "Our Vision",
        description:
            "We strive to improve global quality of life by utilizing AI.",
        img: "/master-plan/vision.jpg",
        icon: Lightbulb,
    },
    {
        title: "Our Mission",
        description:
            "We aim to enhance human capabilities through advanced AI.",
        img: "/master-plan/mission.jpg",
        icon: Target,
    },
    {
        title: "The Company",
        description:
            "We believe that ensuring a positive future for humanity is a profound moral obligation. The most significant impact towards this goal is from our commitment to developing and delivering advanced AI solutions. \n\nOur solutions will contribute toward the current era of rapid advancements in AI and robotics. ALGOUP's objective is to create end-to-end automation solutions and advanced robots that can aid communities. Through these solutions, we will enable individuals to lead more fulfilling lives.",
        icon: Users,
    },
    {
        title: "The Problem",
        description:
            "Today, we are confronted with significant socioeconomic challenges. Issues such as unprecedented labor shortages and a globally aging population need to be addressed immediately.\n\nIf we do not address these problems, the world will see a steep reduction in workforce scalability and a stagnant labor supply. It is therefore impeartive that we utilize automation to address these pressing challenges.",
        icon: Wrench,
    },
]
