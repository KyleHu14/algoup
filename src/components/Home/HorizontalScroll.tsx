import Image from "next/image"
import { CUSTOMERS } from "../../data/customers"

export default function HorizontalScroll() {
    return (
        <div className="inline-flex w-full flex-nowrap overflow-hidden">
            <ul className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
                {CUSTOMERS.map((partnerSrc, index) =>
                    partnerSrc.includes("volkswagen") ? (
                        <li key={index}>
                            <Image
                                src={partnerSrc}
                                width={60}
                                height={40}
                                alt="Partner Logo"
                            />
                        </li>
                    ) : (
                        <li key={index}>
                            <Image
                                src={partnerSrc}
                                width={150}
                                height={50}
                                alt="Partner Logo"
                            />
                        </li>
                    ),
                )}
            </ul>
            <ul
                className="animate-infinite-scroll flex items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
                aria-hidden="true"
            >
                {CUSTOMERS.map((partnerSrc, index) =>
                    partnerSrc.includes("volkswagen") ? (
                        <li key={index}>
                            <Image
                                src={partnerSrc}
                                width={60}
                                height={40}
                                alt="Partner Logo"
                            />
                        </li>
                    ) : (
                        <li key={index}>
                            <Image
                                src={partnerSrc}
                                width={150}
                                height={50}
                                alt="Partner Logo"
                            />
                        </li>
                    ),
                )}
            </ul>
        </div>
    )
}
