interface Props {
    labelText: string
    placeholder: string
    name: string
}

// prettier-ignore
export default function FormInput({labelText, placeholder, name} : Props) {
    return (
        <div className="flex flex-col gap-3 w-full">
            <label className="3xl:text-xl">{labelText}</label>
            <input name={name} placeholder={placeholder} className="rounded-md border border-zinc-600 p-3 3xl:text-lg" />
        </div>
    )
}
