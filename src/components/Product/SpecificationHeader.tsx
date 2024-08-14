interface SpecHeaderProps {
    title: string
    children: React.ReactNode
}

export default function SpecHeader({ title, children }: SpecHeaderProps) {
    return (
        <h1 className="flex items-center gap-2 text-xl font-bold 2xl:text-2xl">
            {children}
            {title}
        </h1>
    )
}
