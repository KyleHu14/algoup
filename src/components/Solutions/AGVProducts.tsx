import { agvModels } from "@/data/models/agv-models"
import { Card } from "../ui/card"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AGVProducts() {
    return (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {agvModels.map((model, index) => (
                <Card key={index} className="grid gap-2 p-6">
                    <div className="relative aspect-square overflow-hidden rounded-lg bg-gradient-to-br from-[#71c6cc]/10 to-[#71c6cc]/5">
                        <div className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:scale-110"></div>
                    </div>

                    <h3 className="text-lg font-semibold">{model.name}</h3>
                    <Link
                        href={model.href}
                        className="inline-flex items-center text-[#71c6cc] transition-colors hover:text-[#71c6cc]/80"
                    >
                        <span className="mr-2">View More</span>
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </Card>
            ))}
        </div>
    )
}
