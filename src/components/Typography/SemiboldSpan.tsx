interface SpecificationHeaderProps {
    text: string
}

// prettier-ignore
export default function SemiboldSpan({text} : SpecificationHeaderProps) {
    return <span className="font-semibold">{text}</span>
}
