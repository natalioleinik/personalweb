import Image from "next/image";
import Link from "next/link";
import { PageTransition } from "../../components/PageTransition";

export default function Home() {
  return (
    <PageTransition>
      <section className="grid lg:grid-cols-2 gap-14 items-center">
        {/* LEFT */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-4 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />
            <span className="text-xs text-black/60">
              B.S. Computer Science · University of Maryland · May 2027
            </span>
          </div>

          <h1 className="text-5xl md:text-[64px] font-semibold tracking-tight leading-[1.05]">
          <div className="mt-3 h-[3px] w-10 rounded-full bg-[var(--wine2)]" />
Natali Oleinik
          </h1>

          <p className="text-lg text-black/70 leading-relaxed max-w-xl">
            I turn ideas into business products. Recent work includes development of
            Next.js/React pages with CMS, internal API integrations, projects with iOS and ML.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-1">
          <Link
    href="/experience"
    className="group inline-flex items-center gap-2 rounded-full bg-[var(--pinky)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,.10)] hover:shadow-[0_14px_36px_rgba(0,0,0,.14)] hover:-translate-y-[1px] transition"
  >
     Experience
    <span className="opacity-70 group-hover:opacity-100 transition">→</span>
  </Link>
  
  <Link
    href="/projects"
    className="group inline-flex items-center gap-2 rounded-full bg-[var(--pinky)] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_rgba(0,0,0,.10)] hover:shadow-[0_14px_36px_rgba(0,0,0,.14)] hover:-translate-y-[1px] transition"
  >
    Projects
    <span className="opacity-70 group-hover:opacity-100 transition">→</span>
  </Link>

  <Link
    href="/contact"
    className="inline-flex items-center rounded-full px-3 py-2 text-sm font-medium text-[#1f1f1f]/70 hover:text-[#1f1f1f] hover:bg-black/[0.05] transition"
  >
    Contact
  </Link>
</div>

          <div className="grid sm:grid-cols-2 gap-5 pt-4">
            <SoftBlock label="Current" value="Genworth Financial · IT Development Intern (S2025)" />
            <SoftBlock label="Stack" value="React · Next.js · TypeScript · Java · Python" />
          </div>
        </div>

        {/* RIGHT (headshot) */}
        <div className="relative">
        <div className="relative aspect-[4/5] max-w-[400px] mx-auto overflow-hidden rounded-[24px] shadow-[0_20px_60px_rgba(0,0,0,.10)] ring-1 ring-black/5"        >
        <Image
              src="/headshot.png"
              alt="Natali Oleinik headshot"
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* tiny accent */}
          <div className="absolute -z-10 -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--accent-soft)] blur-2xl" />
        </div>
      </section>
    </PageTransition>
  );
}

function SoftBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-[#f5f6f2] px-5 py-4">
      <div className="text-xs text-black/45">{label}</div>
      <div className="mt-1 text-sm text-black/85">{value}</div>
    </div>
  );
}
