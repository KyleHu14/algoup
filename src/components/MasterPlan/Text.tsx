interface Props {
    children: React.ReactNode
}

export default function MasterPlanText({ children }: Props) {
    return <p className="font-light sm:text-lg md:text-xl">{children}</p>
}
