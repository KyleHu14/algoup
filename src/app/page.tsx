import Head from "next/head"

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
                    <source
                        src="https://assets.codepen.io/6093409/river.mp4"
                        type="video/mp4"
                    />
                </video>
                <div className="absolute left-0 right-0 top-[40%] mx-auto max-w-[16rem] text-center text-2xl font-bold text-white sm:left-[10%] sm:right-auto sm:max-w-[25rem] sm:text-left sm:text-3xl xl:max-w-[35rem] xl:text-4xl 2xl:max-w-[50rem] 2xl:text-6xl">
                    Empowering Your Business with Robotics
                </div>
            </section>
        </main>
    )
}
