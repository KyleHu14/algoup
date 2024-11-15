interface UnderlineSpanProps {
    text: string
}

export default function UnderlineSpan({ text }: UnderlineSpanProps) {
    return <span className="border-b-2 border-secondary-color">{text}</span>
}
