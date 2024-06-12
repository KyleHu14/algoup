import { columnHeaders } from "../../../data/specifications/pgt-light"
import { specifications } from "../../../data/specifications/pgt-light"

export default function ProductTable() {
    return (
        <table>
            <thead>
                <tr className="text-2xl">
                    <th className="border-b-2 border-b-zinc-800 p-2 text-left font-semibold">
                        PG-T Light
                    </th>
                    {columnHeaders.map((entry, index) => {
                        return (
                            <th
                                key={index}
                                className="border-b-2 border-b-zinc-800 p-2 text-left font-medium"
                            >
                                {entry}
                            </th>
                        )
                    })}
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
