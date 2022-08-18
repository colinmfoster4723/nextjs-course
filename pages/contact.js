import ContactForm from "../components/contact/ContactForm";
import Head from "next/head";
function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Me</title>
        <meta name="description" content="Send me a Message!" />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
