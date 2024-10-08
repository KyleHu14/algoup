import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function VehicleDesign() {
    return (
        <div>
            {/* Title Section */}
            <section className="mt-[-10vh] flex h-screen flex-col items-center justify-center gap-5 bg-[#F9F9F9] text-center">
                <h1 className="text-6xl font-semibold">Vehicle Designs</h1>
                <p className="w-[55rem] text-2xl font-light text-zinc-600">
                    Some description of text regarding the vehicle designs at
                    Algoup inc. The information here can be a general
                    description of what happened.
                </p>
                <Link href="#amr-designs">
                    <Button className="bg-secondary-color-dark text-2xl font-light text-white">
                        View Designs
                    </Button>
                </Link>
            </section>

            {/* AMR Designs */}
            <section
                id="amr-designs"
                className="mt-10 flex h-screen flex-col items-center justify-center gap-5 bg-[#262626] text-center"
            >
                <h1 className="text-6xl font-semibold text-white">AMR</h1>
                <p className="w-[50rem] text-2xl font-light text-[#C5C5C5]">
                    Some text describing vehicle designs for AMR. This
                    information could be long or short depending on the text
                    that should be written here.
                </p>

                {/* Image Container */}
                <div className="flex items-center gap-24 text-[#C5C5C5]">
                    <ImageContainer
                        src="/technology/dual-wheel-drive.png"
                        description="Dual Wheel Drive (2WD) Design with heavy-lifting capacity"
                        alt="Dual Wheel Drive Design"
                        width={450}
                        height={250}
                    />
                    <ImageContainer
                        src="/technology/4-wheel-drive.png"
                        description="Four Wheel Drive (4WD) Design with heavy-lifting capacity"
                        alt="Four Wheel Drive Design"
                        width={450}
                        height={250}
                    />
                </div>
            </section>

            {/* AGV Designs */}
            <section className="bg-[#E2E2E2] py-16">
                {/* Title Section */}
                <div className="flex flex-col items-center justify-center text-center">
                    <h1 className="text-5xl font-semibold">AGV</h1>
                    <p className="w-[50rem] text-2xl font-light">
                        Some text describing vehicle designs for AMR. This
                        information could be long or short depending on the text
                        that should be written here.
                    </p>
                </div>

                {/* AGV Front Design */}
                <div className="mb-20 flex items-center justify-center gap-16">
                    <div className="flex w-[600px] flex-col gap-5">
                        <AGVSectionTitle
                            title="AGV Front Design"
                            description="Some description regarding  the front design of AGVs. This information could be long or short, but focused on the front design of the AGVs."
                        />

                        <AGVfact
                            title="Fork Design & Control"
                            description="Some extra description of what this part means. "
                        />
                        <AGVfact
                            title="Steering Motor Design"
                            description="Some extra description of this part too."
                        />
                    </div>
                    <ImageContainer
                        src="/technology/forklift-front.png"
                        description="Forklift Front Image Description"
                        alt="3D model of the Front of the Forklift"
                        width={567}
                        height={460}
                    />
                </div>

                {/* AGV Back Design */}
                <div className="flex items-center justify-center gap-16">
                    <div className="flex w-[600px] flex-col gap-5">
                        <AGVSectionTitle
                            title="AGV Back Design"
                            description="Some description regarding the back design of AGVs. This information could be long or short, but focused on the front design of the AGVs."
                        />

                        <AGVfact
                            title="Mass Design"
                            description="Some extra description of what this part means. "
                        />
                        <AGVfact
                            title="Battery Layout"
                            description="Some extra description of this part too."
                        />
                        <AGVfact
                            title="Hydraulic System Design"
                            description="Some extra description of this part too."
                        />
                        <AGVfact
                            title="Driving Motor Design"
                            description="Some extra description of this part too."
                        />
                    </div>
                    <ImageContainer
                        src="/technology/forklift-back.png"
                        description="Forklift Back Image Description"
                        alt="3D model of the Back of the Forklift"
                        width={567}
                        height={460}
                    />
                </div>
            </section>
        </div>
    )
}

interface ImageContainerProps {
    src: string
    description: string
    alt: string
    width: number
    height: number
}

function ImageContainer({
    src,
    description,
    alt,
    width,
    height,
}: ImageContainerProps) {
    return (
        <div className="flex flex-col items-center justify-center gap-2">
            <Image width={width} height={height} src={src} alt={alt} />
            <p className="w-[20rem] text-center text-xl text-inherit">
                {description}
            </p>
        </div>
    )
}

interface AGVfactProps {
    title: string
    description: string
}
function AGVfact({ title, description }: AGVfactProps) {
    return (
        <div className="border-b border-b-black">
            <h3 className="text-2xl font-bold">{title}</h3>
            <p className="text-lg font-light">{description}</p>
        </div>
    )
}

interface AGVSectionTitleProps {
    title: string
    description: string
}

function AGVSectionTitle({ title, description }: AGVSectionTitleProps) {
    return (
        <div>
            <h2 className="text-4xl font-bold">{title}</h2>
            <p className="text-xl font-light">{description}</p>
        </div>
    )
}
