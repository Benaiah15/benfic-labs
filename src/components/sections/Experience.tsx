"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    role: "Founder & Full-Stack Developer",
    company: "Benfic",
    date: "2025 — Present",
    description: "Operating a personal design and development brand. Architecting full-stack web platforms and mobile applications using the T3 Stack, Next.js, and React Native, while maintaining a strong emphasis on custom UI/UX design.",
  },
  {
    role: "Software Engineering Intern",
    company: "SWES",
    date: "July 2026 — Sept 2026",
    description: "Completed an intensive eight-week technical internship focused on hardware and software integration. Gained hands-on experience working with VEX robotics modules (VEX 1, Go, EXP), 3D printing workflows, and virtual reality systems.",
  },
  {
    role: "Graphic Designer",
    company: "NACOS Press",
    date: "Dec 2025 — May 2026",
    description: "Led visual design for the computer science faculty press team. Created promotional flyers, brand assets, and social media layouts, ensuring consistent visual identity across all faculty communications.",
  },
  {
    role: "Developer & Designer Intern",
    company: "Faiiya Tech Solutions",
    date: "Sept 2023 — Feb 2025",
    description: "Collaborated on full-stack web and design projects for over a year. Bridged the gap between UI/UX design and technical implementation, writing maintainable code while crafting intuitive user interfaces.",
  }
];

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 max-w-3xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[1px] bg-text-secondary" />
        <span className="text-sm font-medium tracking-widest text-text-secondary uppercase">
          Experience
        </span>
      </div>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative pl-8 md:pl-0"
          >
            {/* Timeline Line for Mobile */}
            <div className="md:hidden absolute left-0 top-2 bottom-0 w-[2px] bg-gray-200 dark:bg-gray-800" />
            <div className="md:hidden absolute left-[-4px] top-2 w-2.5 h-2.5 rounded-full bg-benfic-blue ring-4 ring-background" />

            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-text-primary group-hover:text-blue-500 dark:group-hover:text-benfic-blue transition-colors">
                {exp.role}
                </h3>
                <span className="text-lg font-serif italic text-text-secondary">
                  @ {exp.company}
                </span>
              </div>
              <span className="text-sm font-medium text-text-secondary whitespace-nowrap">
                {exp.date}
              </span>
            </div>
            
            <p className="text-text-secondary leading-relaxed">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}