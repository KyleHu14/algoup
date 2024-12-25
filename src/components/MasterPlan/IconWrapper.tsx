interface Props {
    children: React.ReactNode
}
export default function IconWrapper({ children }: Props) {
    return <div className="h-14 w-14 lg:h-20 lg:w-20">{children}</div>
}
