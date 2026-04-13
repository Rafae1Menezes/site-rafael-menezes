"use client"
import { useState, useRef, useEffect } from "react";
import { Button } from "../../components/Button";
import { ProjectCard } from "../../components/ProjectCard";

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  type: string;
  year: string;
  link?: string;
};

const ALL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Banking Dashboard",
    description: "Internal financial operations dashboard for a large-scale fintech, handling real-time transaction monitoring and fraud alerts for 2M+ users.",
    tags: ["React", "TypeScript", "WebSocket"],
    type: "Fintech",
    year: "2024",
  },
  {
    id: 2,
    title: "Design System Core",
    description: "Built a company-wide component library from scratch, adopted by 4 product teams. Includes 60+ components, full a11y compliance, and Storybook docs.",
    tags: ["React", "Storybook", "CSS Modules"],
    type: "Design System",
    year: "2023",
  },
  {
    id: 3,
    title: "Auth & Security Layer",
    description: "Redesigned the frontend authentication flow with MFA, session management, and token refresh strategies for a security-critical B2B SaaS platform.",
    tags: ["TypeScript", "OAuth2", "Security"],
    type: "Security",
    year: "2023",
  },
  {
    id: 4,
    title: "Observability Platform UI",
    description: "Frontend for an internal observability tool — log viewer, error tracking dashboards, and performance metrics explorer used by 200+ engineers.",
    tags: ["React", "D3.js", "REST API"],
    type: "Tooling",
    year: "2022",
  },
  {
    id: 5,
    title: "Micro-frontend Migration",
    description: "Led the architectural migration of a monolithic frontend to a micro-frontend model using Module Federation, reducing deploy coupling across 3 squads.",
    tags: ["Webpack", "Module Federation", "Architecture"],
    type: "Architecture",
    year: "2022",
  },
  {
    id: 6,
    title: "Performance Audit & Optimization",
    description: "Systematic performance audit across a large React app — reduced bundle size by 40%, improved LCP from 4.2s to 1.6s through code splitting and lazy loading.",
    tags: ["Performance", "Vite", "React"],
    type: "Optimization",
    year: "2021",
  },
  {
    id: 7,
    title: "Investment Portfolio Tracker",
    description: "Real-time portfolio tracker with asset allocation charts, P&L history, and market data integration for a retail investment product.",
    tags: ["React", "TypeScript", "Charts"],
    type: "Fintech",
    year: "2021",
  },
  {
    id: 8,
    title: "CI/CD Frontend Pipeline",
    description: "Designed the entire frontend CI/CD pipeline with automated visual regression testing, bundle analysis, and Lighthouse checks on every PR.",
    tags: ["GitHub Actions", "Playwright", "DX"],
    type: "DevOps",
    year: "2020",
  },
  {
    id: 9,
    title: "Onboarding Flow Engine",
    description: "Configurable multi-step onboarding engine for a B2C fintech app, supporting A/B testing of flows and reducing drop-off by 28%.",
    tags: ["React", "TypeScript", "A/B Testing"],
    type: "Product",
    year: "2020",
  },
];

const PAGE_SIZE = 6;





export const MyWork = () => {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [newFrom, setNewFrom] = useState<number>(Infinity);

  const shown = ALL_PROJECTS.slice(0, visible);
  const hasMore = visible < ALL_PROJECTS.length;

  const handleLoadMore = () => {
    setNewFrom(visible);
    setVisible((v) => v + PAGE_SIZE);
  };

  return (
    <section className="w-full bg-zinc-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="text-xs font-medium tracking-widest uppercase text-zinc-400 mb-2">
              Portfolio
            </p>
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              My work
            </h2>
          </div>
          <p className="text-sm text-zinc-400">
            {shown.length} of {ALL_PROJECTS.length} projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shown.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              isNew={i >= newFrom}
              index={i >= newFrom ? i - newFrom : 0}
            />
          ))}
        </div>

        {hasMore && (
          <div className="flex justify-center mt-12">
            <Button onClick={handleLoadMore}>
              Load more projects
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 2v10M2 7l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Button>
          </div>
        )}

      </div>
    </section>
  );
};