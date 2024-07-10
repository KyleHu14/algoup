import { Button } from "../ui/button"
import FormInput from "./FormInput"

export default function ContactForm() {
    return (
        <form className="flex flex-col items-center gap-7 rounded-lg border border-zinc-400 p-10 shadow-2xl 3xl:w-[50rem]">
            <div className="flex w-full gap-5">
                <FormInput labelText="First Name" placeholder="Bill" />
                <FormInput labelText="Last Name" placeholder="Smith" />
            </div>

            <div className="flex w-full gap-5">
                <FormInput
                    labelText="Email"
                    placeholder="billsmith@email.com"
                />
                <FormInput
                    labelText="Phone Number"
                    placeholder="012-345-6789"
                />
            </div>

            <div className="flex w-full flex-col gap-5">
                <label className="3xl:text-xl">Message</label>
                <textarea
                    className="w-full rounded-md border border-zinc-600 p-3"
                    placeholder="Your message"
                ></textarea>
            </div>

            <Button className="text-lg">Send</Button>
        </form>
    )
}
