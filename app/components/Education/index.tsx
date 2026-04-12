type EducationEntry = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  type: "graduation" | "postgrad";
};

const EDUCATION: EducationEntry[] = [
  {
    id: 1,
    institution: "PUC - MG",
    degree: "Pós-graduação",
    field: "Arquitetura de Software Distribuído",
    period: "20XX – 20XX",
    type: "postgrad",
  },
  {
    id: 2,
    institution: "PUC - MG",
    degree: "Pós-graduação",
    field: "Engenharia de Software",
    period: "20XX – 20XX",
    type: "postgrad",
  },
  {
    id: 3,
    institution: "Universidade Federal de Juiz de Fora",
    degree: "Bacharelado",
    field: "Arte e Design",
    period: "20XX – 20XX",
    type: "graduation",
  },
];

const icons = {
  postgrad: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" />
      <path d="M2 17l10 5 10-5" />
      <path d="M2 12l10 5 10-5" />
    </svg>
  ),
  graduation: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="3" />
      <path d="M6.5 15.5C7.5 13.5 9.5 12 12 12s4.5 1.5 5.5 3.5" />
      <path d="M3 20h18" />
    </svg>
  ),
};

const EducationCard = ({ entry }: { entry: EducationEntry }) => (
<div
    className={`
      w-full max-w-sm rounded-2xl p-px
     
    `}
  >
    <div className="bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-4 w-full" >

  
      
      {/* Icon + type badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="w-8 h-8 rounded-lg bg-green-50 dark:bg-green-950 text-green-700 dark:text-green-300 flex items-center justify-center">
          {icons[entry.type]}
        </div>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
          {entry.type === "postgrad" ? "Pós-graduação" : "Bacharelado"}
        </span>
      </div>

      {/* Field */}
      <p className="text-[15px] font-bold text-zinc-900 dark:text-zinc-50 leading-snug mb-1">
        {entry.field}
      </p>

      {/* Institution */}
      <p className="text-[12px] text-zinc-400 dark:text-zinc-500 mb-0.5">
        {entry.institution}
      </p>

      {/* Period */}
      <p className="text-[11px] text-zinc-400 dark:text-zinc-500">
        {entry.period}
      </p>
    
  </div>
  </div>
);

export const Education = () => {
  return (
    <section className="w-full bg-white dark:bg-zinc-950 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 dark:text-zinc-500 mb-2">
            Acadêmico
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Formação
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 ">
          {EDUCATION.map((entry) => (
            <EducationCard key={entry.id} entry={entry} />
          ))}
        </div>

      </div>
    </section>
  );
};