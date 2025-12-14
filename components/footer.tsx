"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PlayCircle, MessageCircle, Share2 } from "lucide-react";
import { useTranslation } from "@/components/language-provider";

export function Footer() {
  const { t } = useTranslation();
  
  // Accessing nested objects via t() which returns any/T
  // We'll cast to the expected structure matching lib/i18n.ts
  const support = t<any>("home.support"); 
  const legalLinks = t<any>("header.nav");

  return (
    <footer className="bg-gray-100 dark:bg-[#080910] border-t border-gray-200 dark:border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 cursor-pointer mb-4">
              <Link href="/" className="flex items-center gap-2">
                <img src="/logo.png" alt="VibeWatch Logo" className="w-6 h-6 rounded-full" />
                <span className="font-bold text-lg tracking-tight text-gray-900 dark:text-white">VibeWatch</span>
              </Link>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
              {support?.desc}
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{support?.cards?.[0]?.title}</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{support?.cards?.[0]?.desc}</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{support?.cards?.[1]?.title}</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              {support?.cards?.[1]?.list?.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">{support?.cards?.[3]?.title || "Legal & Policies"}</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li><Link className="hover:text-primary transition-colors" href="/terms">{legalLinks?.terms}</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/privacy">{legalLinks?.privacy}</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">© 2024 VibeWatch. All rights reserved.</p>
          <div className="flex gap-4">
            <Link className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" href="#">
              <Share2 className="w-4 h-4 fill-current" />
            </Link>
            <Link className="w-8 h-8 rounded-full bg-gray-200 dark:bg-white/5 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white transition-colors" href="#">
              <MessageCircle className="w-4 h-4 fill-current" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
