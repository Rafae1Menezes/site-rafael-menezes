import Image from "next/image";
import foto from "./foto.png"

export const Hero = () => {
  const tags = [
    "React",
    "TypeScript",
    "Fintech",
    "Performance",
    "Security",
    "Architecture",
  ];

  return (
    <section className="min-h-screen w-full flex items-center bg-[#FEFEFE]  relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="relative flex items-center">


{/* Photo */}
          <div className="flex justify-center absolute right-0">
            <Image src={foto} width={750} height={400} alt="foto" />
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6 absolute">
            {/* Name + title */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-zinc-900  leading-[1.1]">
                Senior Frontend
                <br />
                <span className="highlight-word relative inline-block">Engineer</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base text-zinc-500  leading-relaxed max-w-lg">
              Building scalable, high-performance web applications for complex financial systems.
              Specialized in React & TypeScript, with deep experience in security-critical platforms
              used by millions of users.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-zinc-600  bg-zinc-100  px-3 py-1.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
            <button className="cursor-pointer inline-flex items-center gap-2 border border-[#727272] text-zinc-700   text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-100  hover:border-zinc-900  transition-colors">
  View my work
</button>

<button className="cursor-pointer inline-flex items-center gap-2 text-sm font-medium bg-[#B9F8BD] text-[#415C4A] border border-[#7FA885] px-5 py-2.5 rounded-lg hover:bg-[#a3f0a8] hover:border-[#5a8f65] transition-colors">
  Download CV
</button>
            </div>
          </div>

          

        </div>
      </div>

  
    </section>
  );
};
