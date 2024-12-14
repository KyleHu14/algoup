interface Props {
    children: React.ReactNode
}

export default function MasterPlanSection({ children }: Props) {
    return (
        <section className="mb-5 max-w-[70rem] md:mb-9 lg:mb-12">
            {children}
        </section>
    )
}
