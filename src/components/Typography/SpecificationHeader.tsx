interface SpecificationHeaderProps {
    children: React.ReactNode
}

// prettier-ignore
export default function SpecificationHeader({ children } : SpecificationHeaderProps) {
    return <h2 className="border-l-2 border-orange-400 pl-1">{children}</h2>
}
