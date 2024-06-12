import ContactForm from "@/components/ContactForm/ContactForm"

export default function ContactPage() {
    return (
        <main className="py-20">
            <header className="text-center">
                <h1 className="font-semibold 3xl:text-4xl">Contact Algoup</h1>
                <p className="3xl:text-xl">
                    Whether its talking an expert, asking an inquiry, or giving
                    feedback, we're all ears!
                </p>
            </header>
            <section className="flex justify-center pt-16">
                <ContactForm />
            </section>
        </main>
    )
}
