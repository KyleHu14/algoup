import { Cog } from "lucide-react"

export default function CogAnimation() {
    return (
        <div className="relative aspect-video w-full rounded-lg bg-gradient-to-r from-[#71c6cc]/20 to-zinc-200">
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex space-x-6">
                    {/* Assembly line visualization */}
                    <div className="flex flex-col items-center">
                        <Cog className="animate-spin-slow h-12 w-12 text-[#71c6cc]" />
                        <div className="my-2 h-16 w-1 bg-[#71c6cc]/20"></div>
                        <Cog
                            className="animate-spin-slow h-8 w-8 text-[#71c6cc]"
                            style={{
                                animationDirection: "reverse",
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <Cog
                            className="animate-spin-slow h-10 w-10 text-[#71c6cc]"
                            style={{ animationDelay: "0.5s" }}
                        />
                        <div className="my-2 h-16 w-1 bg-[#71c6cc]/20"></div>
                        <Cog
                            className="animate-spin-slow h-14 w-14 text-[#71c6cc]"
                            style={{
                                animationDelay: "0.7s",
                                animationDirection: "reverse",
                            }}
                        />
                    </div>
                    <div className="flex flex-col items-center">
                        <Cog
                            className="animate-spin-slow h-12 w-12 text-[#71c6cc]"
                            style={{ animationDelay: "0.3s" }}
                        />
                        <div className="my-2 h-16 w-1 bg-[#71c6cc]/20"></div>
                        <Cog
                            className="animate-spin-slow h-9 w-9 text-[#71c6cc]"
                            style={{
                                animationDelay: "0.9s",
                                animationDirection: "reverse",
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
