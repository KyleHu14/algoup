// Next
import HorizontalScroll from "@/components/Home/HorizontalScroll"
import Typewriter from "@/components/TypeWriter"
import { Button } from "@/components/ui/button"
import { BookOpenText, MoveRight } from "lucide-react"
import { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
    description:
        "ALGOUP is an automation solutions company specializing in mobile robots, intelligent equipment, sensors, and related services.",
    keywords: ["Empowering Your Business", "Robotics"],
}

export default function Home() {
    return (
        <main className="mt-[-75px]">
            <section className="container flex h-[100vh] flex-col items-center justify-center gap-10 py-24 md:py-32">
                {/* Main Content */}
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-4">
                        <h1 className="text-5xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
                            Welcome to{" "}
                            <span className="bg-gradient-to-r from-algoup-accent to-[#4a9ea3] bg-clip-text text-transparent">
                                algoup
                            </span>
                        </h1>
                        <p className="text-muted-foreground sm:text-lg md:text-xl xl:text-2xl">
                            Empowering Your Business with Robotics.
                        </p>
                    </div>

                    <div className="flex w-full flex-col items-center justify-center gap-2 md:flex-row">
                        <Link href="/solutions" className="w-full md:w-fit">
                            <Button
                                variant="outline"
                                className="flex w-full gap-2 md:px-8"
                            >
                                <p>Learn More</p>
                                <BookOpenText className="h-5 w-5" />
                            </Button>
                        </Link>

                        <Link href="/contact" className="w-full md:w-fit">
                            <Button className="flex w-full gap-2 bg-algoup-accent px-3 hover:bg-[#5eb3b9] md:px-12">
                                <p>Get in Touch</p>{" "}
                                <MoveRight className="h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Trusted by Industry */}
                <div className="mt-5 w-full text-center">
                    <h2 className="mb-3 text-xl font-medium text-muted-foreground/90">
                        Trusted by Industry Leaders
                    </h2>
                    <HorizontalScroll />
                </div>

                <Typewriter
                    text={[
                        "Welcome to my website!",
                        "I'm a developer.",
                        "Check out my projects!",
                    ]}
                    loop={true}
                />
            </section>
        </main>
    )
}
