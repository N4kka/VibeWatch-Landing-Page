"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 backdrop-blur-md bg-white/70 dark:bg-background-dark/80 border-b border-gray-200 dark:border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="VibeWatch Logo" className="w-8 h-8 rounded-full" />
              <span className="font-bold text-xl tracking-tight text-gray-900 dark:text-white">VibeWatch</span>
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#features">Features</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#how-it-works">How it Works</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#pricing">Pricing</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/#faq">FAQ</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/terms">Terms</Link>
            <Link className="text-sm font-medium text-gray-500 hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors" href="/privacy">Privacy</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button 
              className="text-gray-500 dark:text-gray-300 hover:text-white focus:outline-none"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-gray-200 dark:border-white/5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#features" onClick={() => setIsMenuOpen(false)}>Features</Link>
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#how-it-works" onClick={() => setIsMenuOpen(false)}>How it Works</Link>
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#pricing" onClick={() => setIsMenuOpen(false)}>Pricing</Link>
            <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/#faq" onClick={() => setIsMenuOpen(false)}>FAQ</Link>
            <div className="border-t border-gray-200 dark:border-white/10 my-2 pt-2">
              <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/terms" onClick={() => setIsMenuOpen(false)}>Terms</Link>
              <Link className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-white" href="/privacy" onClick={() => setIsMenuOpen(false)}>Privacy</Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}