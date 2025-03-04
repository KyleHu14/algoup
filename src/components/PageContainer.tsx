interface Props {
    children: React.ReactNode
}

export default function PageContainer({ children }: Props) {
    return (
        <main className="px-5 py-10 sm:px-10 md:px-[10%] md:py-20 lg:px-[15%] xl:px-[20%] xl:py-24">
            {children}
        </main>
    )
}
