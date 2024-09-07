import Image from "next/image"

export default function Technology() {
    return (
        <main>
            {/* Header Section */}
            <section className="flex min-h-[25rem] items-center gap-10 bg-[url('/technology/header.jpg')] bg-[length:1902px_549px] bg-no-repeat 2xl:px-[12rem]">
                {/* Text */}
                <div className="flex flex-col gap-2">
                    <h1 className="text-3xl font-bold text-[#2c2c2c] 2xl:text-5xl">
                        Technology Overview
                    </h1>
                    <p className="w-[25rem] text-2xl text-[#2c2c2c] 2xl:w-[30rem] 2xl:text-3xl">
                        Explore Algoup’s extensive capabilities.
                    </p>
                </div>
            </section>

            {/* Technology Categories */}
            <section className="bg-white">
                <CategoryContainer
                    icon="/technology/header.jpg"
                    title="Vehicle Design"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />
            </section>
        </main>
    )
}

interface CategoryContainerProps {
    icon: string
    title: string
    description: string
}

function CategoryContainer({
    icon,
    title,
    description,
}: CategoryContainerProps) {
    return (
        <div className="flex px-16 py-10">
            <Image height={30} width={30} src={icon} alt="Category Icon" />
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
    )
}
