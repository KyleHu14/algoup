export default function Home() {
    return (
        <main>
            <div className="slide-container h-screen w-full">
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
            </div>
        </main>
    );
}
