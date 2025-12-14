"use client";

/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { PlayCircle, MessageCircle, Share2 } from "lucide-react";

export function Footer() {
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
              We&apos;re here if you run into an issue, have a billing question, or want to share feedback about the clip feed or Vibe AI.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Contact support</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">Email us at startingvibe2025@gmail.com. Include device, app version, and short description.</p>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">What we can help with</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li>Account access & sign-in</li>
              <li>Billing and subscriptions</li>
              <li>Reporting bugs/broken clips</li>
              <li>Data export requests</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 dark:text-white mb-4">Legal & Policies</h4>
            <ul className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
              <li><Link className="hover:text-primary transition-colors" href="/terms">Terms of Use / EULA</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-200 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500 text-center md:text-left">© 2025 VibeWatch. All rights reserved.</p>
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