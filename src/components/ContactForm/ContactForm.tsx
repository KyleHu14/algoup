// import { Button } from "../ui/button"
// import FormInput from "./FormInput"

// export default function ContactForm() {
//     return (
// <form className="flex flex-col items-center gap-7 rounded-lg border border-zinc-400 p-10 shadow-2xl 3xl:w-[50rem]">
//     <div className="flex w-full gap-5">
//         <FormInput labelText="First Name" placeholder="Bill" />
//         <FormInput labelText="Last Name" placeholder="Smith" />
//     </div>

//     <div className="flex w-full gap-5">
//         <FormInput
//             labelText="Email"
//             placeholder="billsmith@email.com"
//         />
//         <FormInput
//             labelText="Phone Number"
//             placeholder="012-345-6789"
//         />
//     </div>

//     <div className="flex w-full flex-col gap-5">
//         <label className="3xl:text-xl">Message</label>
//         <textarea
//             className="w-full rounded-md border border-zinc-600 p-3"
//             placeholder="Your message"
//         ></textarea>
//     </div>

//     <Button className="text-lg">Send</Button>
// </form>
//     )
// }

"use client"

import { useState } from "react"

import FormInput from "./FormInput"
import { Button } from "../ui/button"

export default function Contact() {
    const [result, setResult] = useState("")

    const onSubmit = async (event: any) => {
        event.preventDefault()
        setResult("Sending....")
        const formData = new FormData(event.target)

        formData.append("access_key", "c18b7497-dd33-4b95-aa23-0f9f3b67fddc")

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        })

        const data = await response.json()

        if (data.success) {
            setResult("Your Message was Submitted Successfully!")
            event.target.reset()
        } else {
            console.log("Error : ", data)
            setResult(data.message)
        }
    }

    return (
        <div>
            <form
                className="flex flex-col items-center gap-7 rounded-lg border border-zinc-400 p-10 shadow-2xl 3xl:w-[50rem]"
                onSubmit={onSubmit}
            >
                <div className="flex w-full gap-5">
                    <FormInput
                        name="first-name"
                        labelText="First Name"
                        placeholder="Bill"
                    />
                    <FormInput
                        name="last-name"
                        labelText="Last Name"
                        placeholder="Smith"
                    />
                </div>

                <div className="flex w-full gap-5">
                    <FormInput
                        name="email"
                        labelText="Email"
                        placeholder="billsmith@email.com"
                    />
                    <FormInput
                        name="phone"
                        labelText="Phone Number"
                        placeholder="012-345-6789"
                    />
                </div>

                <div className="flex w-full flex-col gap-5">
                    <label className="3xl:text-xl">Message</label>
                    <textarea
                        name="message"
                        className="w-full rounded-md border border-zinc-600 p-3"
                        placeholder="Your message"
                        required
                    ></textarea>
                </div>

                <Button type="submit" className="text-lg">
                    Send
                </Button>
                <span className="text-2xl">{result}</span>
            </form>
        </div>
    )
}
