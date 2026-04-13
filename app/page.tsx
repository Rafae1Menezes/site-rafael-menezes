import { Articles } from "./sections/Articles";
import { Career } from "./sections/Career";
import { Contact } from "./sections/Contact";
import { Education } from "./sections/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./sections/Hero";
import { MyWork } from "./sections/MyWork";
import { Navbar } from "./components/Navbar";
import { Stack } from "./sections/Stack";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyWork />
      <Articles />
      <Career />
      <Education />
      <Stack />
      <Contact />
      <Footer />
    </>
  );
}
