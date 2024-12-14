interface Props {
    children: React.ReactNode
}

export default function MasterPlanTitle({ children }: Props) {
    return <h2 className="mb-3 text-xl sm:text-2xl md:text-3xl">{children}</h2>
}
