import { Button } from "@/components/ui/button"

import UnderlineSpan from "@/components/Typography/UnderlineSpan"
import OrangeSemibold from "@/components/Typography/OrangeSemibold"

import { Grid2X2, Ruler, Weight } from "lucide-react"
import ImageContainer from "@/components/ImageContainer/ImageContainer"

export default function PGSTpage() {
    return (
        <main>
            {/* Title Section */}
            <section className="flex h-[90vh] flex-col items-center gap-4 bg-zinc-100 pt-14">
                {/* Main Title */}
                <h1 className="text-4xl text-zinc-800">PG-T</h1>
                {/* prettier-ignore */}
                <h1 className="text-5xl text-zinc-800 mb-3">
                    Our <UnderlineSpan text="lightweight" /> and <UnderlineSpan text="reliable" /> AMR.
                </h1>
                <h2 className="text-xl">
                    Perfect for scenarios for frequent handling of light cargo
                    or loads.
                </h2>

                {/* Learn More Button */}
                <Button className="mb-12 w-fit bg-orange-400 text-xl hover:bg-orange-500">
                    Learn More
                </Button>

                {/* PGT Image */}
                <ImageContainer
                    className="h-[20rem] w-[30rem]"
                    src="/amr/pgt/pgt-main.jpg"
                    alt="Pgt Image"
                    rounded={true}
                />
            </section>

            {/* Specification Summary */}
            <section className="flex h-[85vh] flex-col items-center gap-16 pt-28">
                {/* Title */}
                <h1 className="text-5xl text-zinc-800">
                    Designed for <UnderlineSpan text="general purpose" /> use
                </h1>

                {/* Content */}
                <div className="flex items-center gap-16">
                    {/* Specs */}
                    <div className="flex max-w-[25rem] flex-col gap-5">
                        {/* Max Weight */}
                        <div>
                            <SpecHeader title="Max Weight">
                                <Weight />
                            </SpecHeader>

                            <SpecDescription>
                                The PG-T can carry up to a maximum of{" "}
                                <OrangeSemibold text="1500kg" /> making it
                                suitable for general purpose use.
                            </SpecDescription>
                        </div>

                        {/* Max Lifting Height */}
                        <div>
                            <SpecHeader title="Max Lifting Height">
                                <Ruler />
                            </SpecHeader>
                            <SpecDescription>
                                With a max lifting height of{" "}
                                <OrangeSemibold text="60mm" />, the PG-T can
                                accomplish simple lifting with ease.
                            </SpecDescription>
                        </div>

                        {/* Pallet Size */}
                        <div>
                            <SpecHeader title="Pallet Size">
                                <Grid2X2 />
                            </SpecHeader>
                            <SpecDescription>
                                Having a pallet size of{" "}
                                <OrangeSemibold text="1200mm by 1000mm" />{" "}
                                allows for maximum versatility.
                            </SpecDescription>
                        </div>
                    </div>

                    {/* PG-T Image */}
                    <ImageContainer
                        className="h-[20rem] w-[25rem]"
                        src="/amr.png"
                        alt="Amr Image"
                        rounded={false}
                    />
                </div>
            </section>

            {/* Navigation */}
            <section className="flex h-[85vh] flex-col items-center gap-5">
                {/* Title */}
                <h1 className="text-5xl text-zinc-800">
                    <UnderlineSpan text="Accurate" /> Navigation
                </h1>
                {/* Description */}
                <p className="max-w-[55rem] text-center text-zinc-700 3xl:text-xl">
                    Utilizing <OrangeSemibold text="SLAM navigation" /> , safety{" "}
                    <OrangeSemibold text="LIDAR" /> obstacle avoidance, and{" "}
                    <OrangeSemibold text="tow steer wheel differential driving" />
                    , the PG-T is able to swiftly navigate through a variety of
                    scenarios.
                </p>

                {/* Navigation Image */}
                <ImageContainer
                    className="h-[20rem] w-[25rem]"
                    src="/navigation.jpg"
                    alt="AMR Navigation"
                    rounded={true}
                />
            </section>
        </main>
    )
}

interface SpecDescriptionProps {
    children: React.ReactNode
}

function SpecDescription({ children }: SpecDescriptionProps) {
    return <p className="text-lg font-medium text-zinc-700">{children}</p>
}

interface SpecHeaderProps {
    title: string
    children: React.ReactNode
}

function SpecHeader({ title, children }: SpecHeaderProps) {
    return (
        <h1 className="flex items-center gap-2 text-2xl font-bold">
            {children}
            {title}
        </h1>
    )
}
