import { Footer } from "./_components/Footer";
import { HeroSection } from "./_sections/Hero";
import { Projects } from "./_sections/Projects";
import { Navbar } from "./_components/Navbar";
import { StackSection } from "./_sections/Stack";
import { ProjectCard } from "./_components/ProjectCard";
import { ArticlesSection } from "./_sections/Articles";
import { CareerSection } from "./_sections/Career";
import { EducationSection } from "./_sections/Education";
import { ContactSection } from "./_sections/Contact";

export default function Home() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <Projects />
            <ArticlesSection />
            <CareerSection />
            <EducationSection />
            <StackSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export const dynamic = "force-static";
