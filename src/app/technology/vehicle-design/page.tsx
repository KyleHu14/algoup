import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function VehicleDesign() {
    return (
        <div className="py-10">
            <section className="flex flex-col items-center justify-center gap-3 text-center">
                <h1 className="text-5xl font-semibold">Vehicle Designs</h1>
                <p className="w-[50rem] text-xl">
                    Some description of text regarding the vehicle designs at
                    Algoup inc. The information here can be a general
                    description of what happened.
                </p>
                <Button className="bg-zinc-800 text-2xl font-light text-white">
                    View Designs
                </Button>
            </section>

            <section className="mt-10 flex flex-col items-center justify-center gap-2 text-center">
                <h1 className="text-4xl font-semibold">AMR</h1>
                <p className="w-[50rem] text-xl">
                    Some text describing vehicle designs for AMR. This
                    information could be long or short depending on the text
                    that should be written here.
                </p>

                {/* Image Container */}
                <div className="flex items-center gap-10">
                    <ImageContainer
                        src="/technology/dual-wheel-drive.png"
                        description="Dual Wheel Drive (2WD) Design with heavy-lifting capacity"
                        alt="Dual Wheel Drive Design"
                    />
                    <ImageContainer
                        src="/technology/4-wheel-drive.png"
                        description="Four Wheel Drive (4WD) Design with heavy-lifting capacity"
                        alt="Four Wheel Drive Design"
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
}

function ImageContainer({ src, description, alt }: ImageContainerProps) {
    return (
        <div>
            <Image width={450} height={250} src={src} alt={alt} />
            <p>{description}</p>
        </div>
    )
}
