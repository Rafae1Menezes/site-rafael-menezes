import Image from "next/image";
import foto from "./foto.png";
import { Button } from "../../components/Button";

export const Hero = () => {
  const tags = ["React", "TypeScript", "Fintech", "Performance", "Security", "Architecture"];

  return (
    <section className="min-h-screen w-full flex items-center bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24">

        <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:justify-between">

          {/* Foto — order-1 mobile, order-2 desktop */}
          <div className="order-1 md:order-2 w-full md:w-[65%] flex justify-center md:justify-end">
            <div className="w-full max-h-60 overflow-hidden md:max-h-full max-w-[80vw] md:max-w-full relative">
              <Image
                src={foto}
                width={700}
                height={400}
                alt="foto"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Texto — order-2 mobile, order-1 desktop */}
          <div className="order-2 md:order-1 w-full md:w-[50%] flex flex-col gap-6 text-center md:text-left">

            <h1 className="text-[clamp(2rem,5vw,3.75rem)] font-bold tracking-tight text-zinc-900 leading-[1.1]">
              Senior Frontend
              <br />
              <span className="highlight-word relative inline-block">Engineer</span>
            </h1>

            <p className="text-[clamp(0.8rem,1.5vw,1rem)] text-zinc-500 leading-relaxed max-w-lg mx-auto md:mx-0">
              Building scalable, high-performance web applications for complex financial systems.
              Specialized in React & TypeScript, with deep experience in security-critical platforms
              used by millions of users.
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              {tags.map((tag) => (
                <span key={tag} className="text-[clamp(0.65rem,1vw,0.75rem)] font-medium text-zinc-600 bg-zinc-100 px-3 py-1.5 rounded-md">
                  {tag}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2 justify-center md:justify-start">
              <Button >View my work</Button>
              <Button variant="primary">Download CV</Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};