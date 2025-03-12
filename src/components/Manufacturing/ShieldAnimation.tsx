import { Shield } from "lucide-react"

export default function ShieldAnimation() {
    return (
        <div className="relative aspect-video w-full rounded-lg bg-gradient-to-r from-[#71c6cc]/20 to-transparent">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                    <Shield className="h-24 w-24 text-[#71c6cc]" />
                    <div className="absolute inset-0 animate-ping rounded-full bg-[#71c6cc]/20" />
                </div>
            </div>
        </div>
    )
}
