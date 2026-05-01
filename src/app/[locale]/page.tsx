import { AboutSection } from "@/src/components/sections/About";
import { setRequestLocale } from "next-intl/server";
import { ArticlesSection } from "../../components/sections/Articles";
import { CareerSection } from "../../components/sections/Career";
import { ContactSection } from "../../components/sections/Contact";
import { EducationSection } from "../../components/sections/Education";
import { HeroSection } from "../../components/sections/Hero";
import { Projects } from "../../components/sections/Projects";
import { SkillsSection } from "../../components/sections/Skills";
import { routing } from "../../i18n/routing";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
    const { locale } = await params;
    setRequestLocale(locale);
    return (
        <>
            <HeroSection />
            <Projects />
            <ArticlesSection />
            <CareerSection />
            <EducationSection />
            <SkillsSection />
            <AboutSection />
            <ContactSection />
        </>
    );
}

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}
