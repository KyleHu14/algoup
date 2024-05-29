interface FooterFormInputProps {
	labelText: string
	placeholderText: string
}

export default function FooterFormInput({
	labelText,
	placeholderText,
}: FooterFormInputProps) {
	return (
		<div className="w-full">
			<label className="block mb-2 font-semibold 2xl:text-xl">
				{labelText}
			</label>
			<input
				className="w-full p-3 border-white rounded-md 2xl:text-lg bg-zinc-800 focus:border"
				placeholder={placeholderText}
			/>
		</div>
	)
}
