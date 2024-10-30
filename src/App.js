import { Box } from "@mantine/core";
import "./App.scss";

import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import MeetSection from "./components/MeetSection/MeetSection";
import OfferSection from "./components/OfferSection/OfferSection";
import TestimonialSection from "./components/TestimonialSection/TestimonialSection";
import ContactSection from "./components/ContactSection/ContactSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Box>
      <Header />
      <div id="home">
        <MainSection />
      </div>
      <div id="about">
        <MeetSection />
      </div>
      <div id="services">
        <OfferSection />
      </div>
      <div id="testimonials">
        <TestimonialSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </Box>
  );
}

export default App;
