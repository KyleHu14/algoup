"use client";

import Image from "next/image";
import Script from "next/script";

import { productData } from "@/data/productData";

import ParameterList from "@/components/ParameterList/ParameterList";

import { ReactImageTurntable } from "react-image-turntable";

export default function ProductSlug({ params }: { params: { slug: string } }) {
    const product = productData[params.slug];
    const images = [
        "/360-images/iPhone1.jpg",
        "/360-images/iPhone2.jpg",
        "/360-images/iPhone3.jpg",
        "/360-images/iPhone4.jpg",
        "/360-images/iPhone5.jpg",
    ];

    return (
        <main>
            <div className="flex flex-col items-center">
                {/*  Main Intro Slide  */}
                <div className="mt-32 flex items-center justify-center gap-24 rounded-sm border border-zinc-300 p-20 shadow-xl">
                    {/*  Product Image  */}
                    <div className="relative h-96 w-80">
                        {product.imageUrl === "" ? (
                            <Image src="/amr.png" alt="amr image" fill={true} />
                        ) : (
                            <Image
                                src={product.imageUrl}
                                alt="amr image"
                                fill={true}
                            />
                        )}
                    </div>

                    {/*  Product Desc Box  */}
                    <div className="max-w-[35rem]">
                        <div className="flex flex-col gap-2">
                            {/*  Product Title  */}
                            <div className="text-3xl font-semibold">
                                {product.name}
                            </div>
                            {/*  Product SubTitle  */}
                            <div className="text-lg text-zinc-600">
                                {product.subTitle}
                            </div>

                            {/*  Product Description  */}
                            <div className="text-zinc-500">
                                {product.description}
                            </div>
                        </div>

                        {/*  Button  */}
                        <div className="mt-5 inline-block rounded bg-gray-700 px-10 py-2 font-semibold text-white">
                            <a href="/contact">Contact Us</a>
                        </div>
                    </div>
                </div>

                {/*  Advantages  */}
                {/* <div className="flex h-[80vh] flex-col items-center justify-center gap-20"></div> */}
                {/* <div>
                <div>Advantage 1</div>
                <div>Advantage 1</div>
            </div> */}

                {/*  Parameters  */}
                <div className="flex h-[80vh] flex-col items-center justify-center gap-5">
                    <div className="text-center text-5xl font-bold">
                        Parameters
                    </div>
                    <div className="flex items-center justify-center gap-10">
                        <ParameterList />
                        {/* <div className="relative h-72 w-96">
                        <Image src="/amr.png" alt="amr image" fill={true} />
                    </div> */}
                        {/*  360 View  */}
                        <div className="w-[20rem]">
                            <ReactImageTurntable
                                images={images}
                                autoRotate={{ disabled: true }}
                            />
                        </div>
                        <ParameterList />
                    </div>
                </div>
            </div>
        </main>
    );
}
