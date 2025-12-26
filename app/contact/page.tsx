import { COMPANY_NAME, COMPANY_EMAIL } from "@/lib/constants";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY_NAME}`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <main className="main-page">
      <h1 className="page-title">Contact {COMPANY_NAME}</h1>

      <section className="section-content max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-teal-800">Send Us a Message</h2>
        <p className="text-teal-600">
          Have a question or feedback? Fill out the form below and we&apos;ll get back to you soon.
        </p>
        <ContactForm />
      </section>

      <section className="section-content max-w-3xl">
        <h2 className="text-xl md:text-2xl font-semibold text-teal-800">Or Email Us Directly</h2>
        <p className="text-lg">
          For any inquiries or further information, please reach out to us at:{" "}
          <a href={`mailto:${COMPANY_EMAIL}`} className="text-teal-600 hover:underline font-medium">
            {COMPANY_EMAIL}
          </a>
        </p>
      </section>
    </main>
  );
}
