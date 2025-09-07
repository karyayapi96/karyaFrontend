import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Banner from "../../components/Banner/Banner";
import ContactForm from "../../components/ContactForm/ContactForm";
import Map from "../../components/Map/Map";
import Footer from "../../components/Footer/Footer";

function ContactPage() {
  return (
    <div>
     
      <Banner imageSrc="/assets/images/contactbanner.webp" title="Asil Nun X" />
      <ContactForm />
      <Map />
      <Footer />
    </div>
  );
}

export default ContactPage;
