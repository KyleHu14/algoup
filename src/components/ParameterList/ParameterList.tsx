export default function ParameterList({ align }: { align: string }) {
    return (
        <div className={`flex flex-col gap-12 text-${align}`}>
            <Parameter
                title="Parameter Title"
                description="1400kg max weight of 100 knots"
            />
            <Parameter
                title="Parameter Title"
                description="1400kg max weight"
            />
            <Parameter
                title="Parameter Title"
                description="1400kg max weight"
            />
        </div>
    );
}

function Parameter({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    return (
        <div>
            <div className="text-2xl font-semibold">{title}</div>
            <div className="text-lg text-gray-700">{description}</div>
        </div>
    );
}
