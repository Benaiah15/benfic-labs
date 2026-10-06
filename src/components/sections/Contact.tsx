"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

// Custom Brand Icons to avoid lucide-react version conflicts
const GithubIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A4.8 4.8 0 0 0 9 18v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
  </svg>
);

export function Contact() {
  return (
    <section id="contact" className="relative pt-32 pb-8 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto w-full">
      
      {/* Massive Call To Action */}
      <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-8 h-[1px] bg-text-secondary" />
            <span className="text-sm font-medium tracking-widest text-text-secondary uppercase">
              What's Next
            </span>
            <div className="w-8 h-[1px] bg-text-secondary" />
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-text-primary mb-8 leading-[1.1]">
            Let's build something <span className="font-serif italic font-normal text-text-secondary">exceptional.</span>
          </h2>

          <p className="text-lg md:text-xl text-text-secondary mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you have a project in mind, need a full-stack engineer, or just want to discuss UI/UX design, my inbox is always open.
          </p>

          <a 
            href="mailto:benaiahajibade@gmail.com" 
            className="inline-flex items-center gap-3 bg-text-primary text-background px-8 py-4 rounded-2xl font-medium text-lg hover:scale-[1.02] active:scale-95 transition-transform shadow-xl"
          >
            <Mail className="w-5 h-5" />
            Get In Touch
          </a>
        </motion.div>
      </div>

      {/* Footer Grid */}
      <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200 dark:border-gray-800 gap-6">
        <div className="flex flex-col md:flex-row items-center gap-2 text-sm font-medium text-text-secondary">
          <span>© {new Date().getFullYear()} Benaiah Ajibade.</span>
          <span className="hidden md:inline text-gray-300 dark:text-gray-700">|</span>
          <span>Built with Next.js & Tailwind CSS.</span>
        </div>
        
        <div className="flex items-center gap-6">
          <a 
            href="https://github.com/Benaiah15" 
            target="_blank" 
            rel="noreferrer"
            className="text-text-secondary hover:text-text-primary hover:-translate-y-1 transition-all"
            aria-label="GitHub"
          >
            <GithubIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com/in/benaiah-ajibade" 
            target="_blank" 
            rel="noreferrer"
            className="text-text-secondary hover:text-benfic-blue hover:-translate-y-1 transition-all"
            aria-label="LinkedIn"
          >
            <LinkedinIcon className="w-5 h-5" />
          </a>
          <a 
            href="https://twitter.com/@Benaiah_codes" 
            target="_blank" 
            rel="noreferrer"
            className="text-text-secondary hover:text-[#1DA1F2] hover:-translate-y-1 transition-all"
            aria-label="Twitter"
          >
            <TwitterIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}