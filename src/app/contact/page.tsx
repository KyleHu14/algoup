import ContactForm from "@/components/ContactUs/ContactForm"
import Paragraph from "@/components/ContactUs/Paragraph"
import Subtitle from "@/components/ContactUs/Subtitle"
import Title from "@/components/ContactUs/Title"
import { Mail, Phone } from "lucide-react"

export default function ContactPage() {
    return (
        <main className="mx-auto w-[80%] py-20 sm:w-[60%] lg:p-10 xl:w-[50%] 2xl:w-[40%]">
            <section className="text-left">
                <h1 className="text-2xl font-semibold text-algoup-accent-dark sm:text-3xl lg:text-4xl">
                    Contact Us
                </h1>
                <p className="text-md mt-2 font-light md:text-lg lg:text-xl 3xl:text-xl">
                    Whether its talking an expert, asking an inquiry, or giving
                    feedback, we are all ears!
                </p>
            </section>

            <section className="mt-4 flex justify-center">
                <ContactForm />
            </section>

            <section className="mt-14 flex flex-col gap-5 rounded-lg border border-zinc-400 p-4 shadow-xl lg:p-7">
                <Title>Other Contact Methods</Title>

                <div>
                    <Subtitle className="flex items-center gap-2">
                        <Phone className="text-algoup-accent-dark" />
                        <div>Phone</div>
                    </Subtitle>
                    <Paragraph>US: +1 202 664 4153</Paragraph>
                    <Paragraph>CN: + 86 182 0190 0625</Paragraph>
                </div>

                <div>
                    <Subtitle className="flex items-center gap-2">
                        <Mail className="text-algoup-accent-dark" />
                        <div>Email</div>
                    </Subtitle>
                    <Paragraph>bill@algoupinc.com</Paragraph>
                </div>
            </section>
        </main>
    )
}
