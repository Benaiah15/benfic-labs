"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import { Skeleton } from "../ui/skeleton";

// Custom Github Icon to avoid lucide-react version conflicts
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const projects = [
  {
    title: "MovieSpace",
    type: "Full-Stack Web Platform",
    description: "A high-performance movie discovery platform featuring advanced search analytics and scalable database architecture.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Supabase"],
    accent: "group-hover:border-moviespace-red/50",
    glow: "bg-moviespace-red/10",
    liveUrl: "#",
    githubUrl: "https://github.com/Benaiah15/movie-review-site",
  },
{
    title: "Trackizer",
    type: "Mobile Application",
    description: "A pixel-perfect frontend replica of a subscription tracking mobile app, built with fluid animations and a custom stylesheet architecture.",
    tech: ["React Native", "Expo", "TypeScript"],
    // Updated to use blue-400 in light mode
    accent: "group-hover:border-blue-400 dark:group-hover:border-benfic-blue/50",
    glow: "bg-blue-400/10 dark:bg-benfic-blue/10",
    liveUrl: "#",
    githubUrl: "https://github.com/Benaiah15/trackizer-app",
  },
  {
    title: "Metric Pulse",
    type: "Analytics Dashboard",
    description: "Placeholder description for Metric Pulse. We will update this with the actual project details, tech stack, and features later.",
    tech: ["Next.js", "Tailwind CSS", "TypeScript"],
    accent: "group-hover:border-emerald-500/50",
    glow: "bg-emerald-500/10",
    liveUrl: "#",
    githubUrl: "https://github.com/Benaiah15/metricpulse",
  },
  {
    title: "SyncDeck",
    type: "Collaboration Tool",
    description: "Placeholder description for SyncDeck. We will update this with the actual project details, tech stack, and features later.",
    tech: ["React", "Node.js", "TypeScript"],
    accent: "group-hover:border-violet-500/50",
    glow: "bg-violet-500/10",
    liveUrl: "#",
    githubUrl: "https://github.com/Benaiah15/syncdeck",
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-text-secondary" />
            <span className="text-sm font-medium tracking-widest text-text-secondary uppercase">
              Portfolio
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Selected <span className="font-serif italic font-normal text-text-secondary">Works.</span>
          </h2>
        </div>
        <a href="https://github.com/Benaiah15" target="_blank" rel="noreferrer" className="group flex items-center gap-2 text-text-secondary hover:text-text-primary transition-colors text-sm font-medium">
          View all on GitHub
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </a>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            className={`group flex flex-col bg-surface border border-gray-200 dark:border-gray-800 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl ${project.accent}`}
          >
            {/* Project Image Area (Using Skeleton Loader placeholder) */}
            <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-800/50 p-6 flex items-center justify-center">
              {/* Animated skeleton background */}
              <Skeleton className="absolute inset-0 w-full h-full rounded-none opacity-50" />
              
              {/* Aesthetic ambient glow based on project brand color */}
              <div className={`absolute inset-0 ${project.glow} opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl`} />
              
              {/* Placeholder Graphic / Logo */}
              <div className="relative z-10 w-24 h-24 rounded-full bg-background border border-gray-200 dark:border-gray-700 shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                <span className="font-serif italic text-3xl text-text-secondary">
                  {project.title.charAt(0)}
                </span>
              </div>
            </div>

            {/* Project Details Area */}
            <div className="flex flex-col flex-1 p-8">
              <span className="text-xs font-semibold tracking-widest text-text-secondary uppercase mb-3">
                {project.type}
              </span>
              
              <h3 className="text-2xl font-bold text-text-primary mb-3">
                {project.title}
              </h3>
              
              <p className="text-text-secondary leading-relaxed mb-8 flex-1">
                {project.description}
              </p>
              
            {/* Inside the Project Card render loop, update the tech stack pill mapping: */}
            <div className="flex flex-wrap gap-2 mb-8">
            {project.tech.map((t) => (
                <span 
                key={t} 
                // Added group-hover border changes to make the pills pop alongside the card
                className="px-3 py-1 text-xs font-medium bg-background border border-gray-200 dark:border-gray-800 rounded-lg text-text-secondary group-hover:border-blue-300 dark:group-hover:border-gray-600 transition-colors"
                >
                {t}
                </span>
            ))}
            </div>
              
              {/* Action Links */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800">
                <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium text-text-primary hover:text-benfic-blue transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-text-primary transition-colors ml-auto">
                  <GithubIcon className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}