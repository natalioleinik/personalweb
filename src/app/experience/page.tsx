import { PageTransition } from "../../../components/PageTransition";
export default function Experience() {
  return (
    <PageTransition>
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Experience
          </h1>
          <p className="text-muted max-w-2xl">
          </p>
        </header>

        <div className="space-y-5">
          <Role
            company="Genworth Financial"
            title="IT Development Intern"
            dates="May 2025 – Aug 2025"
            bullets={[
              "Built and deployed 5+ responsive pages using React, TypeScript, Next.js, and Node.js; integrated CMS and internal APIs for dynamic content + authentication used by 3K+ users.",
              "Set up a GitLab repo and CI/CD from scratch; improved dev workflow and reduced friction across teams.",
              "Led stakeholder syncs across multiple teams to align requirements and avoid merge conflicts.",
            ]}
          />

          <Role
            company="Insight Interfaces LLC"
            title="Software Engineer Intern"
            dates="May 2023 – Jun 2024"
            bullets={[
              "Published an iOS video conferencing app using Swift/Xcode and Apple tooling.",
              "Contributed to Python/Django/Docker web development and assisted with deployment.",
            ]}
          />
        </div>
      </div>
    </PageTransition>
  );
}

function Role({
  company,
  title,
  dates,
  bullets,
}: {
  company: string;
  title: string;
  dates: string;
  bullets: string[];
}) {
  return (
    <section className="rounded-3xl border border-line bg-panel p-7 shadow-soft">
      <div className="flex items-start justify-between gap-6 flex-wrap">
        <div>
          <h2 className="text-xl font-semibold">{company}</h2>
          <div className="mt-1 text-sm text-muted">
            {title} · {dates}
          </div>
        </div>
        {/* <span className="text-xs text-wine2 border border-wine2/30 bg-wine2/10 px-3 py-1 rounded-full">
          shipped
        </span> */}
      </div>

      <ul className="mt-5 space-y-3 text-muted leading-relaxed list-disc pl-5">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </section>
  );
}
