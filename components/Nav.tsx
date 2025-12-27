"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Home } from "lucide-react";

const items = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-6xl px-6 pt-5">
        <div className="flex items-center justify-between rounded-full bg-white/80 backdrop-blur px-5 py-3 shadow-[0_18px_60px_rgba(0,0,0,.10)] ring-1 ring-black/[0.06]">

          {/* Home */}
          <Link href="/" className="flex items-center">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black/[0.05] transition hover:bg-black/[0.08]">
              <Home className="h-4 w-4 text-black" />
            </span>
          </Link>

          {/* Nav items + Resume */}
          <nav className="flex items-center gap-1">
            {items.map((it) => {
              const active = pathname === it.href;

              return (
                <Link
                  key={it.href}
                  href={it.href}
                  className={`relative px-3 py-2 text-sm rounded-full transition ${
                    active
                      ? "text-black"
                      : "text-black/60 hover:text-black"
                  }`}
                >
                  <span className="relative z-10">{it.label}</span>

                  {active && (
                    <motion.span
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-black/[0.06]"
                      transition={{
                        type: "spring",
                        stiffness: 520,
                        damping: 38,
                      }}
                    />
                  )}
                </Link>
              );
            })}

            {/* Resume button */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 rounded-full bg-[var(--pinky)] px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              Resume
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
