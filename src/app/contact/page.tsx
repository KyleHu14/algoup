import ContactForm from "@/components/ContactForm/ContactForm"

export default function ContactPage() {
    return (
        <main className="py-20">
            <header className="text-center">
                <h1 className="text-2xl font-semibold sm:text-3xl lg:text-4xl">
                    Contact Algoup
                </h1>
                <p className="text-md mx-16 mt-2 md:text-lg lg:text-xl 3xl:text-xl">
                    Whether its talking an expert, asking an inquiry, or giving
                    feedback, we're all ears!
                </p>
            </header>
            <section className="mt-4 flex justify-center">
                <ContactForm />
            </section>
        </main>
    )
}
