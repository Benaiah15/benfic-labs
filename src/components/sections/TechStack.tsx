"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    title: "Frontend & Mobile",
    skills: [
      { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6" },
      { name: "React", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Next.js", icon: "https://cdn.simpleicons.org/nextdotjs/black", invertDark: true },
      { name: "React Native", icon: "https://cdn.simpleicons.org/react/61DAFB" },
      { name: "Expo", icon: "https://cdn.simpleicons.org/expo/black", invertDark: true },
      { name: "Tailwind CSS", icon: "https://cdn.simpleicons.org/tailwindcss/06B6D4" },
      { name: "Framer Motion", icon: "https://cdn.simpleicons.org/framer/black", invertDark: true },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "Node.js", icon: "https://cdn.simpleicons.org/nodedotjs/339933" },
      { name: "Express", icon: "https://cdn.simpleicons.org/express/black", invertDark: true },
      { name: "PostgreSQL", icon: "https://cdn.simpleicons.org/postgresql/4169E1" },
      { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248" },
      { name: "Prisma", icon: "https://cdn.simpleicons.org/prisma/2D3748", invertDark: true },
      { name: "Supabase", icon: "https://cdn.simpleicons.org/supabase/3ECF8E" },
    ],
  },
{
    title: "Tools & Design",
    skills: [
      { name: "Git", icon: "https://cdn.simpleicons.org/git/F05032" },
      { name: "GitHub", icon: "https://cdn.simpleicons.org/github/black", invertDark: true },
      { name: "Vercel", icon: "https://cdn.simpleicons.org/vercel/black", invertDark: true },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
      { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/photoshop/photoshop-original.svg" },
      { name: "Figma", icon: "https://cdn.simpleicons.org/figma/F24E1E" },
    ],
  }
];

export function TechStack() {
  return (
    <section id="stack" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full border-t border-gray-200 dark:border-gray-800/50">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-text-secondary" />
            <span className="text-sm font-medium tracking-widest text-text-secondary uppercase">
              Arsenal
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-text-primary">
            Technologies & <span className="font-serif italic font-normal text-text-secondary">Tools.</span>
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {techCategories.map((category, index) => (
          <motion.div 
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3 className="text-lg font-bold text-text-primary mb-6 pb-4 border-b border-gray-200 dark:border-gray-800">
              {category.title}
            </h3>
            
            {/* The Logo Grid */}
            <div className="flex flex-wrap gap-4">
              {category.skills.map((skill) => (
                <div 
                  key={skill.name} 
                  className="group flex items-center gap-3 px-4 py-3 bg-surface border border-gray-200 dark:border-gray-800 rounded-xl hover:border-benfic-blue/30 hover:shadow-md transition-all cursor-default"
                >
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className={`w-5 h-5 object-contain group-hover:scale-110 transition-transform ${
                      skill.invertDark ? 'dark:invert' : ''
                    }`}
                  />
                  <span className="text-sm font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}