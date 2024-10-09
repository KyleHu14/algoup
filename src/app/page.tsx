import Image from "next/image"
import Link from "next/link"

import styles from "./home.module.css"

export default function Home() {
    return (
        <main className="">
            <section className="slide-container h-screen w-full">
                <video
                    className="relative h-screen w-screen object-cover"
                    playsInline
                    autoPlay
                    loop
                    muted
                >
                    <source
                        src="https://assets.codepen.io/6093409/river.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute left-0 right-0 top-[45%] mx-auto max-w-[16rem] text-center text-2xl font-bold text-white sm:max-w-[25rem] sm:text-3xl xl:max-w-[35rem] xl:text-4xl 2xl:max-w-[50rem] 2xl:text-6xl">
                    Empowering Your Business with Robotics
                </div>
            </section>

            <section className="py-20">
                {/* Header for AGV Product Section */}
                <div className="flex flex-col gap-3 text-center">
                    <h1 className="text-4xl font-bold text-zinc-700 2xl:text-5xl">
                        AGV Products
                    </h1>
                    <p className="text-2xl font-light text-zinc-600 2xl:text-3xl">
                        View products designed for your special cases.
                    </p>
                </div>

                {/* Grid for the Product Display */}
                <div
                    className={`flex flex-col gap-10 px-10 py-14 sm:px-24 lg:px-48 xl:grid 2xl:px-72 ${styles.gridContainer}`}
                >
                    {/* Counter Balance AGV */}
                    <ProductContainer
                        link="/products/agv/counterbalance"
                        className={`flex flex-col items-center justify-center text-center ${styles.counterbalance}`}
                        title="Counter Balance AGV"
                        isHorizontal={false}
                    >
                        <div className="relative h-[200px] w-[150px] md:h-[230px] md:w-[180px] lg:h-[300px] lg:w-[230px] 2xl:h-[464px] 2xl:w-[383px]">
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
                        className={`flex flex-col items-center justify-center text-center ${styles.tractor}`}
                        title="Autonomous Tractors"
                        isHorizontal={true}
                    >
                        <div className="relative h-[110px] w-[150px] md:h-[140px] md:w-[180px] lg:h-[200px] lg:w-[250px] 2xl:h-[277px] 2xl:w-[446px]">
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
                        <div className="relative h-[140px] w-[90px] md:h-[180px] md:w-[130px] lg:h-[220px] lg:w-[180px] 2xl:h-[393px] 2xl:w-[240px]">
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
                        <div className="relative h-[140px] w-[90px] md:h-[180px] md:w-[130px] lg:h-[200px] lg:w-[160px] 2xl:h-[393px] 2xl:w-[240px]">
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
                        className={`flex justify-center ${styles.lifting} flex-col items-center`}
                        title="Lifting AGV"
                        isHorizontal={true}
                    >
                        <div className="relative h-[115px] w-[207px] md:h-[165px] md:w-[257px]">
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
            className={`bg-zinc-100 ${className} rounded-sm border-2 border-zinc-500 text-zinc-800 duration-500 ease-out hover:scale-105 hover:border-secondary-color hover:text-secondary-color`}
        >
            <div
                className={`flex p-5 ${isHorizontal ? "flex-col justify-center" : ""}`}
            >
                <h1 className="text-lg font-semibold xl:text-xl 2xl:text-2xl">
                    {title}
                </h1>
            </div>

            {children}
        </Link>
    )
}
