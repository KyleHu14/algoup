interface SpecDescriptionProps {
    children: React.ReactNode
}

export function SpecDescription({ children }: SpecDescriptionProps) {
    return (
        <p className="text-md font-medium text-zinc-700 2xl:text-lg">
            {children}
        </p>
    )
}
