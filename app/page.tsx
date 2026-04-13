import { Articles } from "./components/sections/Articles";
import { Career } from "./components/sections/Career";
import { Contact } from "./components/sections/Contact";
import { Education } from "./components/sections/Education";
import { Footer } from "./components/Footer";
import { Hero } from "./components/sections/Hero";
import { MyWork } from "./components/sections/MyWork";
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
