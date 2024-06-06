import Slide from "@/components/Slide/Slide";

export default function Technology() {
    return (
        <main className="py-20">
            {/* Introduction w/ subtitle */}
            <div className="flex flex-col gap-5 px-32">
                <div className="max-w-3xl text-6xl font-bold text-black">
                    Technology
                </div>
                <div className="max-w-[50rem] text-xl font-normal text-zinc-600">
                    <span className="font-semibold">
                        The Foundation of Algoup :
                    </span>{" "}
                    From the designs, capabilities, software, andspecifications,
                    learn about the powerful technology that powers our
                    products.
                </div>
            </div>

            {/* Text Left + Img Right */}
            <div className="flex h-screen items-center justify-center gap-24 xl:mx-24 2xl:mx-80">
                {/* Text */}
                <div>
                    <div className="mb-10 text-5xl font-bold">
                        Robust Vehicle Design
                    </div>
                    <div className="text-xl text-gray-700">
                        Adopting 3D laser hybrid sensors based on natural
                        features of the environment, rich in information and
                        high accuracy as the core sensors for navigation, it
                        achieves highly robust and high-precision positioning in
                        a variety of scenarios, indoor and outdoor, all-weather
                        and highly dynamic, without the need to modify the site
                        environment and existing business processes.
                    </div>
                </div>

                {/* Image */}
                {/* <div>
                    <img src="/tech-1.jpg" />
                </div> */}
            </div>

            {/* Text Middle */}
            <div className="flex h-screen items-center justify-center gap-24 bg-orange-200 xl:px-12 2xl:px-96">
                {/* Text */}
                <div>
                    <div className="mb-10 text-center text-5xl font-bold">
                        Detailed Control System
                    </div>
                    <div className="text-center text-xl text-gray-700">
                        Adopting 3D laser hybrid sensors based on natural
                        features of the environment, rich in information and
                        high accuracy as the core sensors for navigation, it
                        achieves highly robust and high-precision positioning in
                        a variety of scenarios, indoor and outdoor, all-weather
                        and highly dynamic, without the need to modify the site
                        environment and existing business processes.
                    </div>
                </div>
            </div>

            {/* Text Top Img Below */}
            <div className="flex flex-col gap-10 pt-24 xl:px-28 2xl:px-80">
                <div className="flex items-center justify-center">
                    <div className="text-5xl font-bold">
                        High Precision Navigation System
                    </div>
                    <div className="max-w-[50rem] text-center text-xl text-gray-700">
                        Based on vision perception technology, the unmanned
                        forklift can perform Max 6 degrees of freedom (6 DOF)
                        movement optimization in real time to achieve smooth
                        multi-axis combined movement, ensuring accurate and
                        efficient execution of fork end operations such as
                        loading and unloading, pick and place, stacking, etc.
                    </div>
                </div>
                {/* <div>
                    <img src="/tech-2.jpg" />
                </div> */}
            </div>
        </main>
    );
}
