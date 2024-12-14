interface Props {
    children: React.ReactNode
}

export default function ManufacturingSection({ children }: Props) {
    return (
        <section className="flex max-w-[50rem] flex-col items-center justify-between gap-1 rounded-md border p-5 shadow-lg 2xl:gap-3">
            {children}
        </section>
    )
}
