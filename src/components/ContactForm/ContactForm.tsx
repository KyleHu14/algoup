"use client"

import { useState } from "react"

import FormInput from "./FormInput"
import { Button } from "../ui/button"

export default function Contact() {
    const [result, setResult] = useState("")

    const onSubmit = async (event: any) => {
        event.preventDefault()
        setResult("Sending Your Message...")
        const formData = new FormData(event.target)
        if (process.env.NEXT_PUBLIC_FORM_ACCESS_KEY) {
            formData.append(
                "access_key",
                process.env.NEXT_PUBLIC_FORM_ACCESS_KEY,
            )

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
        } else {
            setResult("Error : Contact form connection is not working.")
        }
    }

    return (
        <form
            className="flex w-[60%] flex-col items-center gap-7 rounded-lg border border-zinc-400 p-4 shadow-2xl lg:p-10"
            onSubmit={onSubmit}
        >
            <div className="flex w-full gap-5">
                <FormInput
                    name="name"
                    labelText="Name"
                    placeholder="Bill Smith"
                />
            </div>

            <div className="flex w-full flex-col gap-5 lg:flex-row">
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
    )
}
