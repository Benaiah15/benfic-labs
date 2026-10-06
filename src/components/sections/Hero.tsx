"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center pt-32 sm:pt-40 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-benfic-blue/20 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-surface/50 rounded-full blur-[120px] -z-10" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-7 flex flex-col items-start space-y-8"
        >
          {/* Custom Editorial Status */}
          <div className="flex items-center gap-4 pt-2">
            <div className="w-8 h-[2px] bg-benfic-blue rounded-full" />
            <span className="text-xs md:text-sm font-semibold tracking-widest text-text-secondary uppercase">
              Open for full-time & freelance
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-text-primary leading-[1.1]">
            Engineering <br />
            <span className="font-serif italic font-normal text-text-secondary">Scalable</span> Solutions.
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl leading-relaxed">
            I am <span className="text-text-primary font-medium">Benaiah Ajibade</span>, a third-year Software Engineering student and Full-Stack Developer. I specialize in building high-performance web applications and intuitive mobile interfaces.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-6">
            <a 
              href="/Benaiah_Ajibade_CV.pdf" 
              download
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-text-primary text-background px-7 py-3.5 rounded-xl font-medium hover:scale-[1.02] active:scale-95 transition-transform"
            >
              <Download className="w-5 h-5" />
              Download CV
            </a>
            <a 
              href="#projects" 
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-surface border border-gray-200 dark:border-gray-800 text-text-primary px-7 py-3.5 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors shadow-sm"
            >
              View My Work
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </motion.div>

        {/* Live Code Editor Snippet */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="lg:col-span-5 relative mt-12 lg:mt-0 w-full max-w-md mx-auto"
        >
          <div className="w-full bg-[#0d1117] border border-gray-800 rounded-2xl overflow-hidden shadow-2xl relative">
            <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <span className="ml-4 text-xs font-mono text-gray-400">benaiah.ts</span>
            </div>
            
            <div className="p-6 text-sm font-mono overflow-x-auto text-gray-300 leading-relaxed">
              <div className="flex">
                <span className="text-pink-400 mr-2">const</span>
                <span className="text-blue-400">developer</span>
                <span className="text-pink-400 mx-2">=</span>
                <span className="text-gray-300">{"{"}</span>
              </div>
              <div className="pl-4">
                <div>
                  <span className="text-blue-300">name</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-green-300">"Benaiah Ajibade"</span>
                  <span className="text-gray-300">,</span>
                </div>
                <div>
                  <span className="text-blue-300">role</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-green-300">"Full-Stack Engineer"</span>
                  <span className="text-gray-300">,</span>
                </div>
                <div className="pt-2">
                  <span className="text-blue-300">skills</span>
                  <span className="text-gray-300">: [</span>
                </div>
                <div className="pl-4 border-l border-gray-700/50 ml-2">
                  <div><span className="text-green-300">"TypeScript"</span><span className="text-gray-300">,</span></div>
                  <div><span className="text-green-300">"Next.js"</span><span className="text-gray-300">,</span></div>
                  <div><span className="text-green-300">"React Native"</span><span className="text-gray-300">,</span></div>
                  <div><span className="text-green-300">"Tailwind CSS"</span><span className="text-gray-300">,</span></div>
                  <div><span className="text-green-300">"Node.js"</span><span className="text-gray-300">,</span></div>
                  <div><span className="text-green-300">"Prisma"</span><span className="text-gray-300">,</span></div>
                  <div><span className="text-green-300">"PostgreSQL"</span></div>
                </div>
                <div><span className="text-gray-300">],</span></div>
                <div className="pt-2">
                  <span className="text-blue-300">passion</span>
                  <span className="text-gray-300">: </span>
                  <span className="text-green-300">"Building polished UIs"</span>
                </div>
              </div>
              <div><span className="text-gray-300">{"};"}</span></div>
            </div>
            
            <div className="absolute top-0 right-0 w-32 h-32 bg-moviespace-red/5 rounded-bl-full blur-2xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-benfic-blue/10 rounded-tr-full blur-2xl pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}