import { Hero } from "./components/Hero";
import { MyWork } from "./components/MyWork";
import { Navbar } from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <MyWork />
    </>
  );
}
