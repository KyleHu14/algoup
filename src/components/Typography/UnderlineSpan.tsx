interface UnderlineSpanProps {
    text: string
}

export default function UnderlineSpan({ text }: UnderlineSpanProps) {
    return <span className="border-b-2 border-orange-400">{text}</span>
}
