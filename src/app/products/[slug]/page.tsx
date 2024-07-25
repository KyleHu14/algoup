"use client"

import ParameterList from "@/components/ParameterList/ParameterList"

import { ReactImageTurntable } from "react-image-turntable"

export default function ProductSlug({ params }: { params: { slug: string } }) {
    // const product = productData[params.slug]
    const images = [
        "/360-images/iPhone1.jpg",
        "/360-images/iPhone2.jpg",
        "/360-images/iPhone3.jpg",
        "/360-images/iPhone4.jpg",
        "/360-images/iPhone5.jpg",
    ]

    return (
        <main>
            {/* Main Container */}
            <div className="my-32 flex flex-col items-center gap-40">
                {/*  Parameters  */}
                <div className="flex h-[80vh] flex-col items-center justify-center gap-5 rounded-sm border border-zinc-300 px-20 shadow-xl">
                    {/* Title */}
                    <div className="text-center text-4xl font-bold">
                        Model Parameters
                    </div>
                    <div className="flex items-center justify-center gap-10">
                        <ParameterList align="left" />
                        {/*  360 View  */}
                        <div className="w-[20rem]">
                            <ReactImageTurntable
                                images={images}
                                autoRotate={{ disabled: true }}
                                movementSensitivity={35}
                            />
                        </div>
                        <ParameterList align="right" />
                    </div>
                </div>
            </div>
        </main>
    )
}
