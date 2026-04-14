import { Articles } from "./_sections/Articles";
import { Career } from "./_sections/Career";
import { Contact } from "./_sections/Contact";
import { Education } from "./_sections/Education";
import { Footer } from "./_components/Footer";
import { Hero } from "./_sections/Hero";
import { Projects } from "./_sections/Projects";
import { Navbar } from "./_components/Navbar";
import { Stack } from "./_sections/Stack";
import { ProjectCard } from "./_components/ProjectCard";

export default function Home() {
    return (
        <>
            <Navbar />
            <Hero />
            <Projects />
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
