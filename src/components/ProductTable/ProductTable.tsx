import { columnHeaders } from "../../data/specifications/tractor-series"
import { tractorData } from "../../data/specifications/tractor-series"

export default function ProductTable() {
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
                {tractorData.map((specList, index) => (
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
