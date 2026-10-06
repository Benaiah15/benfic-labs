"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, FolderGit2, User, Mail, Menu, X, ArrowRight } from "lucide-react";
import { ThemeToggle } from "../ui/theme-toggle";

const navItems = [
  { name: "Home", icon: Home, href: "#home" },
  { name: "Projects", icon: FolderGit2, href: "#projects" },
  { name: "About", icon: User, href: "#about" },
  { name: "Contact", icon: Mail, href: "#contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center px-4">
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-full max-w-5xl relative"
      >
        <div className="flex items-center justify-between p-2 pl-6 rounded-full bg-surface/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
          
          {/* Logo */}
          <a href="#home" className="text-xl font-bold tracking-tight text-text-primary z-50">
            Benfic<span className="text-text-secondary font-serif italic font-normal">-Labs</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 pr-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-text-secondary hover:text-text-primary hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                <item.icon className="w-4 h-4 stroke-[2.5]" />
                {item.name}
              </a>
            ))}
            <div className="w-[1px] h-5 bg-gray-300 dark:bg-gray-700 mx-2" />
            <ThemeToggle />
          </nav>

          {/* Mobile Controls */}
          <div className="flex md:hidden items-center gap-2 pr-1">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-full bg-background border border-gray-200 dark:border-gray-800 text-text-secondary hover:text-text-primary transition-colors"
              aria-label="Toggle menu"
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
              </motion.div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Alignment & Restored Arrows */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 12, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-2xl rounded-3xl p-3 overflow-hidden md:hidden"
            >
              <nav className="flex flex-col space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center justify-between px-3 py-3 rounded-2xl hover:bg-background transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="p-2.5 rounded-xl bg-background border border-gray-200 dark:border-gray-800 group-hover:border-benfic-blue/50 group-hover:text-benfic-blue transition-colors text-text-secondary">
                        <item.icon className="w-4 h-4 stroke-[2]" />
                      </div>
                      <span className="text-base font-medium text-text-secondary group-hover:text-text-primary transition-colors">
                        {item.name}
                      </span>
                    </div>
                    {/* Arrows are now visible at 40% opacity, changing to benfic-blue on tap */}
                    <ArrowRight className="w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:text-benfic-blue transition-all mr-2" />
                  </a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}