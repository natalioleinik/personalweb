import { PageTransition } from "../../../components/PageTransition";

export default function AboutPage() {
  return (
    <PageTransition>
      <section className="grid lg:grid-cols-[1.2fr_.8fr] gap-10 items-start">
        <div className="space-y-8">
          <div>
            <p className="text-xs text-muted2">About</p>
            <h1 className="mt-3 text-4xl md:text-5xl leading-[1.05] font-semibold">
              Computer Science @ UMD<span className="text-wine2">.</span>
            </h1>
            <p className="mt-5 text-base md:text-lg text-muted leading-relaxed">
              I’m a B.S. Computer Science student with a General Business minor (GPA 3.61),
              graduating May 2027. I like building practical products with clean UI and strong engineering fundamentals.
            </p>
          </div>

          <div className="rounded-2xl border border-line bg-panel/80 backdrop-blur p-7">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <div className="text-xs text-muted2">Coursework</div>
                <div className="mt-2 text-base">
                  Algorithms, OOP (Java), Computer Systems (C), Discrete Structures, Functional Programming,
                  Web Dev (JavaScript), Probability & Statistics
                </div>
              </div>
              <div>
                <div className="text-xs text-muted2">Interests</div>
                <div className="mt-2 text-base">
                  Full-stack product work • iOS • ML/CV • performance • developer experience
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Awards</h2>
            <ul className="mt-4 space-y-3 text-muted leading-relaxed">
              <li>
                • Pitch Dingman Competition — <span className="text-text">Best Innovative Solution</span> (2025)
              </li>
              <li>
                • NCWIT — <span className="text-text">National Honorable Mention</span> + Maryland Affiliate Award (2024)
              </li>
              <li>
                • IMF — Certificate: Financial Literacy / Young Economist Academy (2023)
              </li>
            </ul>
          </div>
        </div>

        <aside className="space-y-4">
          <MiniCard label="Phone" value="+1 (202) 290-4095" />
          <MiniCard label="Email" value="natoleinik2@gmail.com" />
          <MiniCard label="LinkedIn" value="linkedin.com/in/natali-oleinik" />

          <div className="rounded-2xl border border-line bg-panel/80 backdrop-blur p-6">
            <div className="text-xs text-muted2">Quick note</div>
            <p className="mt-3 text-sm text-muted leading-relaxed">
              I like roles where I can own real UI/UX details, ship end-to-end features,
              and work closely with stakeholders.
            </p>
          </div>
        </aside>
      </section>
    </PageTransition>
  );
}

function MiniCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl border border-line bg-panel/80 backdrop-blur p-6">
      <div className="text-xs text-muted2">{label}</div>
      <div className="mt-2 text-base">{value}</div>
    </div>
  );
}
