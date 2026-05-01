import { Header } from "@/src/components/layout/Header";
import { MapPin } from "lucide-react";
import Image from "next/image";
import foto from "./foto.png";

export const AboutSection = async () => {
    return (
        <section id="about" className="w-full scroll-mt-10 bg-[#FEFEFE] py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:items-start lg:justify-between">
                    <div className="w-full max-w-2xl text-center lg:text-left">
                        <Header title="Biografia" subtitle="About" />
                        <div className="flex flex-col gap-5">
                            <p>
                                I&apos;m a software engineer focused on building secure, scalable and high-performance systems.
                                I enjoy solving complex problems, designing clean architectures and delivering impactful
                                products.
                            </p>
                            <p>
                                Over the years, I&apos;ve worked across different domains — from fintech and security to
                                developer tools and platform engineering.
                            </p>
                            <p>Over the years, I&apos;ve worked across different domains.</p>

                            <div className="flex items-center justify-center gap-2 lg:justify-start lg:gap-3">
                                <MapPin size={32} className="text-primary-700 shrink-0" />
                                <div>
                                    <div className="text-primary-700 font-bold">Based in Brasil</div>
                                    <div className="text-sm text-neutral-500 lg:text-left">Manhuaçu - MG</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="w-48 shrink-0 sm:w-64 lg:w-auto">
                        <Image src={foto} width={400} height={400} alt="foto" className="rounded-2xl shadow-md" />
                    </div>
                </div>
            </div>
        </section>
    );
};
