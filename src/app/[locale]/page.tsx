import { Footer } from "../../components/layout/Footer";
import { HeroSection } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { Navbar } from "../../components/layout/Navbar";
import { SkillsSection } from "../../components/sections/Skills";
import { ArticlesSection } from "../../components/sections/Articles";
import { CareerSection } from "../../components/sections/Career";
import { EducationSection } from "../../components/sections/Education";
import { ContactSection } from "../../components/sections/Contact";
import { setRequestLocale } from "next-intl/server";
import { routing } from "../../i18n/routing";
import { AboutSection } from "@/src/components/sections/About";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <HeroSection />
            <AboutSection />
            <Projects />
            <ArticlesSection />
            <CareerSection />
            <EducationSection />
            <SkillsSection />
            <ContactSection />
        </>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
