interface Props {
    children: React.ReactNode
}

export default function PageContainer({ children }: Props) {
    return (
        <main className="px-5 py-10 sm:px-10 md:px-[15%] md:py-20 lg:px-[20%] xl:px-[25%] xl:py-24">
            {children}
        </main>
    )
}
