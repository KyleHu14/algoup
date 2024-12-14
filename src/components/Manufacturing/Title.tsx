interface Props {
    children: React.ReactNode
}

export default function ManufacturingTitle({ children }: Props) {
    return <h2 className="text-xl font-bold sm:text-2xl">{children}</h2>
}
