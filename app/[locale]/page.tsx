import { Footer } from "../_components/Footer";
import { HeroSection } from "../_sections/Hero";
import { Projects } from "../_sections/Projects";
import { Navbar } from "../_components/Navbar";
import { SkillsSection } from "../_sections/Skills";
import { ArticlesSection } from "../_sections/Articles";
import { CareerSection } from "../_sections/Career";
import { EducationSection } from "../_sections/Education";
import { ContactSection } from "../_sections/Contact";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <Navbar />
            <HeroSection />
            <Projects />
            <ArticlesSection />
            <CareerSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
            <Footer />
        </>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
