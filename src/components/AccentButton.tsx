// Shadcn
import { Button } from "./ui/button"

// Nextjs
import Link from "next/link"

interface Props {
    className?: string
    text: string
    link?: string
}

export default function AccentButton({ className, text, link = "" }: Props) {
    if (link) {
        return (
            <Link href={link}>
                <ColorButton className={className} text={text} />
            </Link>
        )
    } else {
        return <ColorButton className={className} text={text} />
    }
}

interface ColorButtonProps {
    className?: string
    text: string
}
function ColorButton({ className, text }: ColorButtonProps) {
    return (
        <Button
            className={`${className} bg-algoup-accent hover:bg-algoup-accent-dark`}
        >
            {text}
        </Button>
    )
}
