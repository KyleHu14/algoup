import ProductTable from "@/components/Product/Table"

interface Props {
    title: string
    columnHeaders: string[]
    data: string[][]
}

export default function SpecificationTable({
    title,
    columnHeaders,
    data,
}: Props) {
    return (
        <section className="flex flex-col gap-5 px-40 pb-32 2xl:px-96">
            {/* Title */}
            <h1 className="text-center text-3xl text-zinc-800 2xl:text-4xl">
                {title}
            </h1>
            <ProductTable columnHeaders={columnHeaders} data={data} />
        </section>
    )
}
