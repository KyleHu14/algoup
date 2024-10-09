import Image from "next/image"

export default function Service() {
    return (
        <main className="flex flex-col items-center justify-center py-20">
            <h1 className="text-2xl font-bold lg:text-4xl">
                Our Service Process
            </h1>
            <div className="relative h-[12rem] w-[24rem] md:h-[15rem] md:w-[30rem] xl:h-[35rem] xl:w-[50rem] 2xl:h-[35rem] 2xl:w-[70rem]">
                <Image
                    src="/services/service-chart.png"
                    alt="Service Chart"
                    fill={true}
                />
            </div>
        </main>
    )
}
