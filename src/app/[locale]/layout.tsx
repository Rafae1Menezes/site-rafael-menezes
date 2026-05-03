import { ConditionalScrollToTop } from "@/src/components/layout/ConditionalScrollToTop";
import { Footer } from "@/src/components/layout/Footer";
import { JsonLd } from "@/src/components/layout/JsonLd";
import { Navbar } from "@/src/components/layout/Navbar";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono } from "next/font/google";
import { routing } from "../../i18n/routing";
import "../globals.css";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: {
        default: "Rafael Menezes — Senior Frontend Engineer",
        template: "%s | Rafael Menezes",
    },
    description:
        "Senior Frontend Engineer especializado em React, Next.js e TypeScript. Construindo interfaces rápidas, acessíveis e escaláveis.",
    keywords: ["frontend", "React", "Next.js", "TypeScript", "UI Engineer"],
    authors: [{ name: "Rafael Menezes" }],
    creator: "Rafael Menezes",
    metadataBase: new URL("https://seudominio.com"), // @TODO
    alternates: {
        canonical: "/",
        languages: {
            "pt-BR": "/pt",
            "en-US": "/en",
        },
    },
    openGraph: {
        type: "website",
        locale: "pt_BR",
        alternateLocale: "en_US",
        url: "https://seudominio.com", // @TODO
        siteName: "Rafael Menezes",
        title: "Rafael Menezes — Senior Frontend Engineer",
        description: "Senior Frontend Engineer especializado em React, Next.js e TypeScript.",
        images: [
            {
                url: "/og-image.png", // @TODO
                width: 1200,
                height: 630,
                alt: "Rafael Menezes — Senior Frontend Engineer",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "Rafael Menezes — Senior Frontend Engineer",
        description: "Senior Frontend Engineer especializado em React, Next.js e TypeScript.",
        images: ["/og-image.png"],
        creator: "@seuhandle", // @TODO
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
        },
    },
};

export function generateStaticParams() {
    return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    setRequestLocale(locale);

    const messages = await getMessages();

    return (
        <html
            lang={locale}
            suppressHydrationWarning
            className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
        >
            <body className="h-full">
                <ConditionalScrollToTop />
                <NextIntlClientProvider messages={messages}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
                <JsonLd locale={locale} />
            </body>
        </html>
    );
}
