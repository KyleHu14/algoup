import FormInput from "./FormInput"

export default function ContactForm() {
    return (
        <form className="flex flex-col items-center gap-7 rounded-lg border border-zinc-400 p-10 shadow-2xl 3xl:w-[50rem]">
            <div className="flex w-full gap-5">
                <FormInput labelText="First Name" placeholder="" />
                <FormInput labelText="Last Name" placeholder="" />
            </div>

            <div className="flex w-full gap-5">
                <FormInput labelText="Email" placeholder="" />
                <FormInput labelText="Phone Number" placeholder="" />
            </div>

            <div className="flex w-full gap-5">
                <FormInput labelText="Your Message" placeholder="" />
            </div>
        </form>
    )
}
