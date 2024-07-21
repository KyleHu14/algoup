interface Props {
    columnHeaders: string[]
    data: string[][]
}

export default function ProductTable({ columnHeaders, data }: Props) {
    return (
        <table>
            <thead>
                <tr className="text-2xl">
                    {columnHeaders.map((entry, index) => {
                        return (
                            <th
                                key={index}
                                className="border-b-2 border-b-zinc-800 pb-4 text-left font-semibold"
                            >
                                {entry}
                            </th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {data.map((specList, index) => (
                    <tr key={index}>
                        {specList.map((specData, index) => (
                            <td
                                key={index}
                                className={`border-b-[1px] border-b-zinc-600 py-10 text-xl ${index === 0 ? "font-semibold" : "font-medium"}`}
                            >
                                {specData}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
