interface Props {
    dateString: string
}

export default function DateFormatter({ dateString }: Props) {
    const date = new Date(dateString)
    const month = ("0" + (date.getMonth() + 1)).slice(-2) // Months are zero-based
    const day = ("0" + date.getDate()).slice(-2)
    const year = date.getFullYear()

    return <time dateTime={dateString}>{`${month}-${day}-${year}`}</time>
}
