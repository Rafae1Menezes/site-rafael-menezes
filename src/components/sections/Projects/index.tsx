import { Header } from "@/src/components/layout/Header";
import { ProjectCard } from "../../ui/ProjectCard";
import { ProjectsGroup } from "@/src/components/ui/ProjectsGroup";
import { getAllProjects } from "@/src/services/projects";

export const Projects = () => {
    const projects = getAllProjects();

    return (
        <section id="my-work" className="w-full scroll-mt-10 bg-zinc-50 py-12 sm:scroll-mt-14">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <Header title="Portfolio" subtitle="My work" />

                <ProjectsGroup>
                    {projects.map((project, i) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </ProjectsGroup>
            </div>
        </section>
    );
};
