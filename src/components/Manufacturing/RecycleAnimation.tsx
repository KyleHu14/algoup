import { Recycle } from "lucide-react"

export default function RecycleAnimation() {
    return (
        <div className="relative aspect-video w-full rounded-lg bg-gradient-to-l from-[#71c6cc]/20 to-zinc-200">
            <div className="absolute inset-0 flex items-center justify-center">
                <Recycle className="animate-spin-slow h-24 w-24 text-[#71c6cc]" />
            </div>
        </div>
    )
}
