import Image from "next/image"
import Link from "next/link"

export default function Technology() {
    const techInfo = [
        {
            name: "Vehicle Design",
            link: "/technology/vehicle-design",
            iconLink: "/technology/header.jpg",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent non sagittis nisi, vitae molestie lectus. Etiam scelerisque mollis nibh. Nunc libero dui, ullamcorper sed interdum quis, pellentesque mattis mi. ",
        },
        {},
    ]

    return (
        <main>
            {/* Header Section */}
            <section className="flex flex-col items-center gap-3 border-b pb-12 pt-24 text-center sm:pt-12">
                {/* Text */}
                <h1 className="text-3xl font-bold text-algoup-accent-dark 2xl:text-4xl">
                    Technology Overview
                </h1>

                <p className="w-[25rem] text-2xl text-typography-secondary 2xl:w-[30rem]">
                    Explore Algoup’s extensive capabilities.
                </p>
            </section>

            {/* Technology Categories */}
            <section className="flex flex-col gap-6 bg-white">
                <CategoryContainer
                    link="/technology/vehicle-design"
                    icon="/technology/header.jpg"
                    title="Vehicle Design"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <CategoryContainer
                    link="/"
                    icon="/technology/header.jpg"
                    title="Control System"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <CategoryContainer
                    link="/"
                    icon="/technology/header.jpg"
                    title="Safety System"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <CategoryContainer
                    link="/"
                    icon="/technology/header.jpg"
                    title="Battery System"
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                />

                <CategoryContainer
                    link="/"
                    icon="/technology/header.jpg"
                    title="Software System"
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
    link: string
}

function CategoryContainer({
    icon,
    title,
    description,
    link,
}: CategoryContainerProps) {
    return (
        <Link href={link} className="grid grid-cols-6 items-center px-40 py-10">
            <h1 className="col-span-2 flex w-fit cursor-pointer items-center gap-20 whitespace-nowrap text-3xl font-bold">
                <div className="relative h-20 w-20">
                    <Image
                        className="rounded-full object-fill"
                        src={icon}
                        alt="Category Icon"
                        fill
                    />
                </div>
                {title}
            </h1>
            <p className="col-span-4 text-xl">{description}</p>
        </Link>
    )
}
