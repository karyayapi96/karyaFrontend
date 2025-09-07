import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Banner from "../../components/Banner/Banner";
import HtbkInfo from "../../components/HtbkInfo/HtbkInfo";
import Gallery from "../../components/Gallery/Gallery";
import ContactSection from "../../components/ContactSection/ContactSection";
import Footer from "../../components/Footer/Footer";

function HalatliTelBetonKesme() {
  const htbkImages = [
    { src: "/assets/images/Rectangle 39-1.webp", alt: "Kimyasal Ankraj 1" },
    { src: "/assets/images/Rectangle 40-1.webp", alt: "Kimyasal Ankraj 2" },
    { src: "/assets/images/Rectangle 41-1.webp", alt: "Kimyasal Ankraj 3" },
    { src: "/assets/images/Rectangle 42-1.webp", alt: "Kimyasal Ankraj 4" },
  ];

  return (
    <div>
      <Banner
        imageSrc="/assets/images/htbkbanner.webp"
        title="Halatlı Tel Beton Kesme"
      />
      <br />
      <HtbkInfo />
      <Gallery images={htbkImages} title="Uygulama Alanlarına Ait Görseller" />
      <ContactSection />
      <br />
      <Footer />
    </div>
  );
}

export default HalatliTelBetonKesme;
