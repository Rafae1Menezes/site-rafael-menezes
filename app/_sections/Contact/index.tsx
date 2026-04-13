import Image from "next/image";
import foto from "./foto.jpg";
import { Button } from "../../_components/Button";

export const Contact = () => {
    const links = [
        {
            label: "LinkedIn",
            value: "linkedin.com/in/rafae1menezes",
            href: "https://linkedin.com/in/rafae1menezes",
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            ),
        },
        {
            label: "GitHub",
            value: "github.com/rafae1menezes",
            href: "https://github.com/rafae1menezes",
            icon: (
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
            ),
        },
        {
            label: "E-mail",
            value: "rafael@email.com",
            href: "mailto:rafael@email.com",
            icon: (
                <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="M2 7l10 7 10-7" />
                </svg>
            ),
        },
    ];

    return (
        <section id="contact" className="w-full bg-white  py-24 relative overflow-hidden  scroll-mt-14">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="bg-zinc-50  border border-zinc-200  rounded-3xl p-8 sm:p-12">
                        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8">
                            {/* Photo */}
                            <div className="flex-shrink-0">
                                <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-2xl overflow-hidden border border-zinc-200 ">
                                    <Image
                                        width={300}
                                        height={300}
                                        src={foto}
                                        alt="Rafael Menezes"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            {/* Content */}
                            <div className="flex-1 text-center sm:text-left">
                                <p className="text-xs font-medium tracking-widest uppercase text-zinc-400  mb-2">Contato</p>
                                <h2 className="text-3xl font-bold tracking-tight text-zinc-900  mb-3">Vamos conversar</h2>
                                <p className="text-sm text-zinc-500  leading-relaxed mb-8 max-w-md">
                                    Estou aberto a conversas sobre projetos desafiadores, posições de liderança técnica ou
                                    colaborações em produtos financeiros de alto impacto.
                                </p>

                                {/* Links */}
                                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                                    {links.map((link) => (
                                        <Button as="link" key={link.label} href={link.href} target="_blank">
                                            <span className="text-zinc-400 ">{link.icon}</span>
                                            {link.label}
                                            <svg
                                                width="10"
                                                height="10"
                                                viewBox="0 0 10 10"
                                                className="text-zinc-300 "
                                                fill="none"
                                            >
                                                <path
                                                    d="M2 8L8 2M8 2H4M8 2v4"
                                                    stroke="currentColor"
                                                    strokeWidth="1.2"
                                                    strokeLinecap="round"
                                                />
                                            </svg>
                                        </Button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
