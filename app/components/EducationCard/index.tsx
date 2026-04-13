type EducationEntry = {
  id: number;
  institution: string;
  degree: string;
  field: string;
  period: string;
  type: "graduation" | "postgrad";
};

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

export const EducationCard = ({ entry }: { entry: EducationEntry }) => (
<div
    className={`
      w-full max-w-sm rounded-2xl p-px
     
    `}
  >
    <div className="bg-white  border border-zinc-200  rounded-2xl p-4 w-full" >

  
      
      {/* Icon + type badge */}
      <div className="flex items-center justify-between mb-3">
        <div className="w-8 h-8 rounded-lg bg-green-50  text-green-700  flex items-center justify-center">
          {icons[entry.type]}
        </div>
        <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-zinc-100  text-zinc-500">
          {entry.type === "postgrad" ? "Pós-graduação" : "Bacharelado"}
        </span>
      </div>

      {/* Field */}
      <p className="text-[15px] font-bold text-zinc-900  leading-snug mb-1">
        {entry.field}
      </p>

      {/* Institution */}
      <p className="text-[12px] text-zinc-400  mb-0.5">
        {entry.institution}
      </p>

      {/* Period */}
      <p className="text-[11px] text-zinc-400 ">
        {entry.period}
      </p>
    
  </div>
  </div>
);