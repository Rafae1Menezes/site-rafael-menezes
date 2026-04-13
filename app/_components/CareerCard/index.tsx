type CareerEntry = {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string;
  tags: string[];
  current?: boolean;
};

export const CareerCard = ({ entry }: { entry: CareerEntry }) => (
  <div
    className={`
      w-full rounded-2xl p-px
      animate-rotate-border
      bg-transparent
      hover:bg-conic/[from_var(--border-angle)]
      from-zinc-200 via-green-400 to-zinc-200
      from-0%  to-100%
      transition-all duration-300 ease-out
      hover:-translate-y-1.5
      hover:shadow-[0_8px_24px_-4px_rgba(0,0,0,0.3),0_2px_8px_-2px_rgba(0,0,0,0.04)]
    `}
  >
    <div className="bg-white  border border-zinc-200 d rounded-2xl p-4 w-full">
      <p className="text-[10px] font-semibold uppercase tracking-wider text-zinc-400  mb-0.5">
        {entry.company}
      </p>
      <p className="text-[13px] font-bold text-zinc-900  leading-snug">
        {entry.role}
      </p>
      <p className="text-[11px] text-zinc-400  mt-0.5 mb-2">
        {entry.period}
      </p>
      <p className="text-[12px] text-zinc-500  leading-relaxed">
        {entry.description}
      </p>
      <div className="flex flex-wrap gap-1 mt-2.5">
        {entry.current && (
          <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-green-50 text-green-700 =">
            Atual
          </span>
        )}
        {entry.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-zinc-100  text-zinc-500 "
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);