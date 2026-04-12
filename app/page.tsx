import { Articles } from "./components/Articles";
import { Career } from "./components/Career";
import { Education } from "./components/Education";
import { Hero } from "./components/Hero";
import { MyWork } from "./components/MyWork";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
     <Navbar />
     <Hero />
     <MyWork />
     <Articles />
     <Career />
    <Education />
      </>
  );
}
