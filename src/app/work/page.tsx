import Link from "next/link";
import { PageTransition } from "../../../components/PageTransition";

const projects = [
  {
    title: "Project One",
    description: "A clean description. Outcome-driven. One line is enough.",
    tag: "Next.js",
  },
  {
    title: "Project Two",
    description: "Minimal words. Max signal. Chic presentation.",
    tag: "ML / CV",
  },
  {
    title: "Project Three",
    description: "Something you shipped. Something you’re proud of.",
    tag: "Startup",
  },
];

export default function WorkPage() {
  return (
    <PageTransition>
      <div className="space-y-8">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-semibold">Work</h2>
            <p className="text-muted mt-2">
              A curated set. Not everything. Just the best.
            </p>
          </div>

          <Link
            href="/contact"
            className="rounded-full border border-line bg-white/5 px-5 py-2.5 text-sm text-text hover:bg-white/10 transition-colors"
          >
            Let’s build
          </Link>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-line bg-panel p-6 shadow-soft hover:bg-white/5 transition-colors"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <span className="text-xs uppercase tracking-[0.22em] text-muted2">
                  {p.tag}
                </span>
              </div>
              <p className="mt-3 text-muted">{p.description}</p>

              <div className="mt-6 h-px bg-line" />
              <div className="mt-4 text-sm text-wine2">
                Case study → <span className="text-muted2">(add link)</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
