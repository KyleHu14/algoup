import Image from "next/image"

export default function Service() {
    return (
        <main className="flex flex-col items-center justify-center py-20">
            <h1 className="text-4xl font-bold">Our Service Process</h1>
            <div className="relative h-[15rem] w-[30rem] xl:h-[35rem] xl:w-[50rem] 2xl:h-[35rem] 2xl:w-[70rem]">
                <Image
                    src="/services/service-chart.png"
                    alt="Service Chart"
                    fill={true}
                />
            </div>
        </main>
    )
}
