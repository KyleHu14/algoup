interface Props {
    labelText: string
    placeholderText: string
    name: string
}

export default function FooterFormInput({
    labelText,
    placeholderText,
    name,
}: Props) {
    return (
        <div className="w-full">
            <label className="mb-2 block font-semibold 2xl:text-lg 3xl:text-xl">
                {labelText}
            </label>
            <input
                className="w-full rounded-md border-white bg-zinc-800 p-3 focus:border 2xl:text-base 3xl:text-lg"
                placeholder={placeholderText}
            />
        </div>
    )
}
