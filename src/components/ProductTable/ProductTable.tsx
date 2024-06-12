export default function ProductTable() {
    const specifications = [
        {
            type: "Max Lifting Height",
            PG_T_800: "60mm",
            PG_T_1200: "60mm",
            PG_T_1500: "60mm",
        },
        {
            type: "Max Payload Weight",
            PG_T_800: "800 kg",
            PG_T_1200: "1200 kg",
            PG_T_1500: "1500 kg",
        },
    ]

    return (
        <table>
            <thead>
                <tr className="text-2xl">
                    <th className="border-b-2 border-b-zinc-800 p-2 text-left font-semibold">
                        PG-T Light
                    </th>
                    <th className="border-b-2 border-b-zinc-800 p-2 text-left font-medium">
                        PG-T 800
                    </th>
                    <th className="border-b-2 border-b-zinc-800 p-2 text-left font-medium">
                        PG-T 1200
                    </th>
                    <th className="border-b-2 border-b-zinc-800 p-2 text-left font-medium">
                        PG-T 1500
                    </th>
                </tr>
            </thead>
            <tbody>
                {specifications.map((spec, index) => (
                    <tr key={index}>
                        <td className="border-b-[1px] border-b-zinc-600 px-2 py-10 text-xl font-semibold">
                            {spec.type}
                        </td>
                        <td className="border-b-[1px] border-b-zinc-600 px-2 py-10 text-xl text-zinc-700">
                            {spec.PG_T_800}
                        </td>
                        <td className="border-b-[1px] border-b-zinc-600 px-2 py-10 text-xl text-zinc-700">
                            {spec.PG_T_1200}
                        </td>
                        <td className="border-b-[1px] border-b-zinc-600 px-2 py-10 text-xl text-zinc-700">
                            {spec.PG_T_1500}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
