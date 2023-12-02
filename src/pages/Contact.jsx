import ContactContainer from "../components/contact/ContactContainer";
import Banner from "../ui/Banner";
import Hero from "../ui/Hero";

function Contact() {
  return (
    <>
      <Hero header="Contact" />
      <ContactContainer />
      <Banner background="../../public/book-banner.png" />
    </>
  );
}

export default Contact;
