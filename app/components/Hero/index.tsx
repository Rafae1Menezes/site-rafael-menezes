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
    <section className="min-h-screen w-full flex items-center bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-24 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Text content */}
          <div className="flex flex-col gap-6 order-2 lg:order-1">

            {/* Badge */}
            <span className="inline-flex items-center self-start gap-2 text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 border border-zinc-200 dark:border-zinc-800 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>

            {/* Name + title */}
            <div className="flex flex-col gap-2">
              <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.1]">
                Senior Frontend
                <br />
                <span className="text-zinc-400 dark:text-zinc-500">Engineer</span>
              </h1>
            </div>

            {/* Bio */}
            <p className="text-base text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-lg">
              Building scalable, high-performance web applications for complex financial systems.
              Specialized in React & TypeScript, with deep experience in security-critical platforms
              used by millions of users.
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors">
                View my work
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-5 py-2.5 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors">
                Download CV
              </button>
            </div>
          </div>

          {/* Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              {/* Photo placeholder — replace src with your actual photo */}
              <div className="w-full h-full rounded-2xl bg-zinc-100 dark:bg-zinc-800 overflow-hidden border border-zinc-200 dark:border-zinc-700">
                <img
                  src="https://placehold.co/400x400/e4e4e7/a1a1aa?text=Photo"
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating card — years of experience */}
              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">5+</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500 leading-tight">Years of<br/>experience</p>
              </div>

              {/* Floating card — stack */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl px-4 py-3 shadow-sm">
                <p className="text-xs font-medium text-zinc-900 dark:text-zinc-50">React · TS</p>
                <p className="text-xs text-zinc-400 dark:text-zinc-500">Core stack</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
