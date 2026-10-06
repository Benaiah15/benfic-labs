"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Code2, Paintbrush, Database } from "lucide-react";

const capabilities = [
  {
    title: "Frontend Engineering",
    icon: Code2,
    description: "Building fluid, responsive interfaces and mobile applications using Next.js, React Native, and Tailwind CSS.",
  },
  {
    title: "Backend Architecture",
    icon: Database,
    description: "Designing scalable databases and secure APIs with Node.js, PostgreSQL, Prisma, and the T3 Stack.",
  },
  {
    title: "Graphic & UI Design",
    icon: Paintbrush,
    description: "Crafting pixel-perfect layouts, brand identities, and editorial assets using Photoshop and modern design tools.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      <div className="flex items-center gap-4 mb-16">
        <div className="w-12 h-[1px] bg-text-secondary" />
        <span className="text-sm font-medium tracking-widest text-text-secondary uppercase">
          About Me
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        
        {/* Left Column: Now set to h-full to stretch, pushing the image to the bottom */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col h-full"
        >
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary leading-[1.2]">
            Bridging the gap between <span className="font-serif italic font-normal text-text-secondary">pixel-perfect design</span> and robust engineering.
          </h2>

          {/* Avatar Container: mt-auto forces it to anchor perfectly to the bottom edge of the grid */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12 lg:mt-auto relative w-full aspect-square mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-benfic-blue/20 rounded-full blur-[80px] -z-10" />
            
            <div className="relative w-full h-full rounded-3xl lg:rounded-[2.5rem] border border-gray-200 dark:border-gray-800 shadow-2xl overflow-hidden group bg-surface">
              <Image
                src="/images/avatar.jpg"
                alt="Benaiah Ajibade - Software Engineer"
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col space-y-8 text-lg text-text-secondary leading-relaxed"
        >
          <p>
            I am currently in my third year of a four-year Software Engineering program, but my journey in technology began through the lens of graphic design. Before I was writing production-level code, I was obsessed with color theory, typography, and visual hierarchy.
          </p>
          <p>
            This dual background fundamentally shapes how I build software today. Whether I am architecting a full-stack web platform like MovieSpace or building mobile layouts in React Native, I approach engineering with a designer's eye. I don't just want applications to function perfectly—I want them to feel exceptional to use.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-8">
            {capabilities.map((item, index) => (
              <motion.div 
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
                className={`p-6 rounded-2xl bg-surface border border-gray-200 dark:border-gray-800 hover:border-benfic-blue/30 transition-colors ${index === 2 ? 'sm:col-span-2' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-background border border-gray-200 dark:border-gray-800 flex items-center justify-center text-text-primary mb-4">
                  <item.icon className="w-4 h-4 stroke-[2]" />
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}