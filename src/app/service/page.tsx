import Image from "next/image"

export default function Service() {
    return (
        <main className="flex h-screen flex-col items-center py-20">
            <h1 className="text-4xl font-bold">Our Service Process</h1>
            <div className="relative flex h-[35rem] w-[70rem]">
                <Image
                    src="/services/service-chart.png"
                    alt="Service Chart"
                    fill={true}
                />
            </div>
        </main>
    )
}
