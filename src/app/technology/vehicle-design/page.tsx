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
                    that should be written here.{" "}
                </p>
                <div></div>
            </section>
        </div>
    )
}

interface ImageContainerProps {}

function ImageContainer() {
    return (
        <div>
            <Image
                width={30}
                height={10}
                src="/technology/dual-wheel-drive.png"
                alt="Dual Wheel Drive design"
            />
        </div>
    )
}
