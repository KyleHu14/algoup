import Image from "next/image"

export default function Service() {
    return (
        <main className="flex flex-col items-center justify-center py-20">
            <h1 className="text-xl font-bold md:text-2xl lg:text-4xl">
                Our Service Process
            </h1>
            <div className="relative h-[12rem] w-[24rem] sm:h-[15rem] sm:w-[30rem] md:h-[20rem] md:w-[40rem] lg:h-[25rem] lg:w-[50rem] xl:h-[35rem] xl:w-[70rem] 2xl:h-[35rem] 2xl:w-[70rem]">
                <Image
                    src="/services/service-chart.png"
                    alt="Service Chart"
                    fill={true}
                />
            </div>
        </main>
    )
}
