interface Props {
    children: React.ReactNode
}

export default function SolutionRow({ children }: Props) {
    return <div className="flex items-center gap-3 sm:gap-5">{children}</div>
}
