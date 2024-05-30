interface TableDataProps {
    title: string;
    values: string[];
    links: string[];
}

export default function TableData({ title, values, links }: TableDataProps) {
    if (links.length === 0) {
        return (
            <>
                <td className="border-t font-semibold text-zinc-900">
                    {title}
                </td>
                {values.map((tableValue, index) => (
                    <td key={index} className="border-t p-4 font-medium">
                        {tableValue}
                    </td>
                ))}
            </>
        );
    }
    return (
        <>
            {values.map((tableValue, index) => (
                <td key={index} className="border-t p-4 font-semibold">
                    <a href={`/products/${links[index]}`}>{tableValue}</a>
                </td>
            ))}
        </>
    );
}
