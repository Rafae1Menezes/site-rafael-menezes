import { Articles } from "./_sections/Articles";
import { Career } from "./_sections/Career";
import { Contact } from "./_sections/Contact";
import { Education } from "./_sections/Education";
import { Footer } from "./_components/Footer";
import { Hero } from "./_sections/Hero";
import { MyWork } from "./_sections/MyWork";
import { Navbar } from "./_components/Navbar";
import { Stack } from "./_sections/Stack";

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

export const dynamic = "force-static";
