import { Articles } from "./components/Articles";
import { Career } from "./components/Career";
import { Contact } from "./components/Contact";
import { Education } from "./components/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { MyWork } from "./components/MyWork";
import { Navbar } from "./components/Navbar";
import { Stack } from "./components/Stack";

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
