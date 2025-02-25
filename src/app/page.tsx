// Next
import HorizontalScroll from "@/components/Home/HorizontalScroll"
import { Button } from "@/components/ui/button"
import { Metadata } from "next"

export const metadata: Metadata = {
    description:
        "ALGOUP is an automation solutions company specializing in mobile robots, intelligent equipment, sensors, and related services.",
    keywords: ["Empowering Your Business", "Robotics"],
}

export default function Home() {
    return (
        <main className="mt-[-75px]">
            <section className="container flex h-[100vh] flex-col items-center justify-center space-y-8 py-24 md:py-32">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl">
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-[#71c6cc] to-[#4a9ea3] bg-clip-text text-transparent">
                                algoup
                            </span>
                        </h1>
                        <p className="text-muted-foreground md:text-xl xl:text-3xl">
                            Empowering Your Business with Robotics.
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button
                            size="lg"
                            className="bg-[#71c6cc] hover:bg-[#5eb3b9]"
                        >
                            Get Started
                        </Button>
                        <Button size="lg" variant="outline">
                            Learn More
                        </Button>
                    </div>
                </div>

                <h2>Trusted by Industry Professionals</h2>
                <HorizontalScroll />
            </section>
        </main>
    )
}
