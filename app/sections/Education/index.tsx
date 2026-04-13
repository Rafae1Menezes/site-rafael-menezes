import { EducationCard } from "@/app/components/EducationCard";

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





export const Education = () => {
  return (
    <section className="w-full bg-white  py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium tracking-widest uppercase text-zinc-400  mb-2">
            Acadêmico
          </p>
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 ">
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