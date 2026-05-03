import { Header } from "@/src/components/layout/Header";
import { ProjectsGroup } from "@/src/components/ui/ProjectsGroup";
import { getAllProjects } from "@/src/services/projects";
import { getTranslations } from "next-intl/server";
import { ProjectCard } from "../../ui/ProjectCard";

export const Projects = async () => {
    const t = await getTranslations("projects");
    const projects = getAllProjects();

    return (
        <section id="my-work" className="w-full scroll-mt-10 bg-zinc-50 py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title={t("title")} subtitle={t("subtitle")} />

                <ProjectsGroup>
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ProjectsGroup>
            </div>
        </section>
    );
};
