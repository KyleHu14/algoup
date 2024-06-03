import Image from "next/image";
import Script from "next/script";

import { productData } from "@/data/productData";

import ParameterList from "@/components/ParameterList/ParameterList";

export default function ProductSlug({ params }: { params: { slug: string } }) {
    const product = productData[params.slug];

    return (
        <main>
            <div className="flex flex-col items-center">
                {/*  Main Intro Slide  */}
                <div className="mt-32 flex items-center justify-center">
                    {/*  Product Desc Box  */}
                    <div className="m-5 max-w-[35rem]">
                        {/*  Product Title  */}
                        <div className="mb-2 flex flex-col gap-2 border-b-2 border-b-gray-800 pb-2">
                            <div className="text-4xl font-bold">
                                {product.name}
                            </div>
                            <div className="text-xl">{product.subTitle}</div>
                        </div>

                        {/*  Product Description  */}
                        <div>{product.description}</div>

                        {/*  Button  */}
                        <div className="mt-5 inline-block rounded bg-orange-500 px-10 py-2 font-bold text-white">
                            <a href="/contact">Contact Us</a>
                        </div>
                    </div>

                    {/*  Product Image  */}
                    <div className="relative h-72 w-96">
                        <Image src="/amr.png" alt="amr image" fill={true} />
                    </div>
                </div>

                {/*  Advantages  */}
                <div className="flex h-[80vh] flex-col items-center justify-center gap-20">
                    <div className="text-center text-5xl font-bold">
                        Product Advantages
                    </div>

                    <div className="flex justify-center">
                        {/* <img src="/amr.png" /> */}
                        <div className="grid grid-cols-[200px_200px] grid-rows-[200px_200px]">
                            <div className="mb-[-1px] mr-[-1px] flex items-center justify-center border font-bold">
                                Safety
                            </div>
                            <div className="mb-[-1px] flex items-center justify-center border font-bold">
                                High Flexibility
                            </div>
                            <div className="mr-[-1px] flex items-center justify-center border font-bold">
                                Precise
                            </div>
                            <div className="flex items-center justify-center border font-bold">
                                Efficient
                            </div>
                        </div>
                    </div>
                </div>

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
                            <div
                                className="cloudimage-360"
                                data-folder="/360-images/"
                                data-filename-x="iPhone{index}.jpg"
                                data-amount-x="5"
                            ></div>
                        </div>
                        <ParameterList />
                    </div>
                </div>
            </div>
            <Script src="https://scaleflex.cloudimg.io/v7/plugins/js-cloudimage-360-view/latest/js-cloudimage-360-view.min.js?func=proxy" />
        </main>
    );
}
