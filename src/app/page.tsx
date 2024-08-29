import Image from "next/image"

import styles from "./home.module.css"
import { Button } from "@/components/ui/button"

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
            <section className="bg-[#313131] py-20">
                {/* Header for AGV Product Section */}
                <header className="flex flex-col gap-3 text-center">
                    <h1 className="text-4xl text-white">AGV Products</h1>
                    <p className="text-zinc-300">
                        View our products that are designed for your special
                        cases.
                    </p>
                </header>

                {/* Grid for the Product Display */}
                <div
                    className={`m-14 gap-14 bg-[#969696] px-72 py-20 ${styles.gridContainer}`}
                >
                    {/* Counter Balance AGV */}
                    <ProductContainer
                        className={`flex flex-col items-center justify-center ${styles.counterbalance}`}
                        title="Counter Balance AGV"
                        isHorizontal={false}
                    >
                        <div className="relative h-[464px] w-[383px]">
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
                        className={`flex justify-center ${styles.tractor}`}
                        title="Autonomous Tractors"
                        isHorizontal={true}
                    >
                        <div className="relative h-[277px] w-[446px]">
                            <Image
                                className="object-cover"
                                alt="Counter Balance Image"
                                src="/agv/tractor/t/1.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>

                    {/* Slim Forklift */}
                    <ProductContainer
                        className={`${styles.slimforklift} flex flex-col items-center justify-center`}
                        title="Slim Forklift"
                        isHorizontal={false}
                    >
                        <div className="relative h-[432px] w-[267px]">
                            <Image
                                className="object-cover"
                                alt="Counter Balance Image"
                                src="/agv/fork-lift/pg-cd-15/1.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>

                    {/* Pallet Stacker */}
                    <ProductContainer
                        className={`${styles.palletstacker} flex flex-col items-center justify-center`}
                        title="Pallet Stacker"
                        isHorizontal={false}
                    >
                        <div className="relative h-[393px] w-[240px]">
                            <Image
                                className="object-cover"
                                alt="Counter Balance Image"
                                src="/agv/pallet-stacker/pg-cr-16/1.png"
                                fill={true}
                            />
                        </div>
                    </ProductContainer>

                    {/* Lifting AGV */}
                    <ProductContainer
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
    title: string
    isHorizontal: boolean
    children: React.ReactNode
}

function ProductContainer({
    title,
    className,
    isHorizontal,
    children,
}: productContainerProps) {
    if (isHorizontal) {
        return (
            <div className={`bg-[#E7E7E7] ${className}`}>
                <div className="flex flex-col justify-center">
                    <h1 className="text-2xl font-bold">{title}</h1>
                    <Button>Learn More</Button>
                </div>

                {children}
            </div>
        )
    } else {
        return (
            <div className={`bg-[#E7E7E7] ${className}`}>
                <h1 className="text-2xl font-bold">{title}</h1>
                {children}
            </div>
        )
    }
}
