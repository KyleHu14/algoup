import Link from "next/link"

export default function Home() {
    return (
        <main className="mt-[-75px]">
            <section className="slide-container h-screen w-full">
                <video
                    className="relative h-screen w-screen object-cover"
                    playsInline
                    autoPlay
                    loop
                    muted
                >
                    <source src="/home/circuit-board.mp4" type="video/mp4" />
                </video>
                <div className="absolute left-0 right-0 top-[40%] mx-auto max-w-[16rem] text-center text-2xl font-bold text-white sm:left-[10%] sm:right-auto sm:max-w-[25rem] sm:text-left sm:text-3xl xl:max-w-[35rem] xl:text-4xl 2xl:max-w-[50rem] 2xl:text-6xl">
                    Empowering Your Business with Robotics
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
            className={`bg-zinc-100 ${className} hover:text-algoup-accent-color rounded-sm border-2 border-zinc-500 text-zinc-800 duration-500 ease-out hover:scale-105 hover:border-algoup-accent`}
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
