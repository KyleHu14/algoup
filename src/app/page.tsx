import Image from "next/image"
import Link from "next/link"

import styles from "./home.module.css"

export default function Home() {
    return (
        <main>
            <section className="slide-container h-screen w-full">
                <video
                    className="relative h-screen w-screen object-cover"
                    autoPlay
                    loop
                    muted
                >
                    <source
                        src="https://assets.codepen.io/6093409/river.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute left-0 right-0 top-[45%] mx-auto text-center font-bold text-white lg:max-w-[25rem] lg:text-3xl xl:max-w-[35rem] xl:text-4xl 2xl:max-w-[50rem] 2xl:text-6xl">
                    Empowering Your Business with Robotics
                </div>
            </section>
            <section className="bg-[#252525] py-20">
                {/* Header for AGV Product Section */}
                <header className="flex flex-col gap-3 text-center">
                    <h1 className="text-6xl text-white">AGV Products</h1>
                    <p className="text-3xl font-light text-zinc-300">
                        View our products that are designed for your special
                        cases.
                    </p>
                </header>

                {/* Grid for the Product Display */}
                <div
                    className={`gap-10 py-20 xl:px-14 2xl:px-72 ${styles.gridContainer}`}
                >
                    {/* Counter Balance AGV */}
                    <ProductContainer
                        link="/products/agv/counterbalance"
                        className={`flex flex-col items-center justify-center ${styles.counterbalance}`}
                        title="Counter Balance AGV"
                        isHorizontal={false}
                    >
                        <div className="relative h-[404px] w-[323px] 2xl:h-[464px] 2xl:w-[383px]">
                            <Image
                                className="object-cover"
                                alt="Counter Balance Image"
                                src="/agv/counterbalance/1.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>

                    {/* Autonomous Tractor */}
                    <ProductContainer
                        link="/products/agv/tractor"
                        className={`flex justify-center ${styles.tractor}`}
                        title="Autonomous Tractors"
                        isHorizontal={true}
                    >
                        <div className="relative h-[237px] w-[406px] 2xl:h-[277px] 2xl:w-[446px]">
                            <Image
                                className="object-cover"
                                alt="Tractor Image"
                                src="/agv/tractor/t/1.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>

                    {/* Slim Forklift */}
                    <ProductContainer
                        link="/products/agv/slim-forklift"
                        className={`${styles.slimforklift} flex flex-col items-center justify-center`}
                        title="Slim Forklift"
                        isHorizontal={false}
                    >
                        <div className="relative h-[353px] w-[200px] 2xl:h-[393px] 2xl:w-[240px]">
                            <Image
                                className="object-cover"
                                alt="Slim Forklift Image"
                                src="/agv/fork-lift/pg-cd-15/1.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>

                    {/* Pallet Stacker */}
                    <ProductContainer
                        link="/products/agv/pallet-stacker"
                        className={`${styles.palletstacker} flex flex-col items-center justify-center`}
                        title="Pallet Stacker"
                        isHorizontal={false}
                    >
                        <div className="relative h-[353px] w-[200px] 2xl:h-[393px] 2xl:w-[240px]">
                            <Image
                                className="object-cover"
                                alt="Pallet Stacker Image"
                                src="/agv/pallet-stacker/pg-cr-16/1.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>

                    {/* Lifting AGV */}
                    <ProductContainer
                        link="/products/agv/lifting"
                        className={`flex justify-center ${styles.lifting}`}
                        title="Lifting AGV"
                        isHorizontal={true}
                    >
                        <div className="relative h-[165px] w-[257px]">
                            <Image
                                className="object-cover"
                                alt="DC Lifting Image"
                                src="/agv/lifting/dc/dc-cover.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>
                </div>
            </section>
        </main>
    )
}

interface productContainerProps {
    className?: string
    link: string
    title: string
    isHorizontal: boolean
    children: React.ReactNode
}

function ProductContainer({
    title,
    link,
    className,
    isHorizontal,
    children,
}: productContainerProps) {
    return (
        <Link
            href={link}
            className={`bg-[#dfdfdf] ${className} rounded-sm text-zinc-800 duration-500 ease-out hover:scale-105 hover:text-orange-400`}
        >
            <div
                className={`flex p-5 ${isHorizontal ? "flex-col justify-center" : ""}`}
            >
                <h1 className="text-3xl font-semibold">{title}</h1>
            </div>

            {children}
        </Link>
    )
}
