export const JsonLd = ({ locale }: { locale: string }) => {
    const data = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: "Rafael Menezes",
        jobTitle: "Senior Frontend Engineer",
        url: `https://seudominio.com/${locale}`,
        sameAs: ["https://github.com/seuusuario", "https://linkedin.com/in/seuusuario"],
    };

    return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
};
