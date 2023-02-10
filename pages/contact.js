import ContactForm from "@/components/Contact/ContactForm";
import Head from "next/head";

function ContactPage() {
	return (
		<>
			<Head>
				<title>Contact</title>
				<meta name="description" content="Feel Free to Contact Me" />
			</Head>
			<ContactForm />
		</>
	);
}

export default ContactPage;
