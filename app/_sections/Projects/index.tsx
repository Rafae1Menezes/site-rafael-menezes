import { Header } from "@/app/_components/Header";
import { ProjectCard } from "../../_components/ProjectCard";
import { ProjectsGroup } from "@/app/_components/ProjectsGroup";
import { getAllProjects } from "@/app/_libs/projects";

export const Projects = () => {
    const projects = getAllProjects();

    return (
        <section id="my-work" className="w-full scroll-mt-14 bg-zinc-50 py-12">
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
