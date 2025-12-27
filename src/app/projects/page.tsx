import { PageTransition } from "../../../components/PageTransition";

const projects = [
    {
      name: "Dancify",
      stack: "React · Swift · Git",
      link: "https://www.youtube.com/watch?v=s455o7EopKU&t=117s", // replace if private
      bullets: [
        "Real-time feedback + auto-rewind experience for learning dance routines.",
        "Winner: Best Innovative Solution (Pitch Dingman Competition, 2025).",
      ],
    },
    {
      name: "Adversarial Training Research (UMD)",
      stack: "Python · PyTorch · TensorFlow · Pandas",
      link: "http://sites.google.com/umd.edu/ai2023/attack", // or lab page
      bullets: [
        "Implemented adversarial attacks to improve image classifier robustness.",
        "Presented at UMD AI Summer Research Symposium.",
      ],
    },
    {
      name: "UnitYT",
      stack: "Python · Flask · JavaScript · OpenAI API",
      link: "https://devpost.com/software/unityt",
      bullets: [
        "Summarizes foreign-language YouTube videos into English for accessibility.",
        "1st Place: Wintr Hackathon (2023).",
      ],
    },
  ];
  

export default function Projects() {
  return (
    <PageTransition>
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Projects
          </h1>
          <p className="text-muted max-w-2xl">
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((p) => (
            <div
              key={p.name}
              className="rounded-3xl border border-line bg-panel p-7 shadow-soft hover:bg-panel2 transition"
            >
              <h2 className="text-xl font-semibold">{p.name}</h2>
              <div className="mt-2 text-sm text-muted2">{p.stack}</div>
              <ul className="mt-5 space-y-3 text-muted leading-relaxed list-disc pl-5">
                {p.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-line" />
                <div className="mt-6 flex items-center gap-3">
  <span className="h-px flex-1 bg-line" />
  <a
    href={p.link}
    target="_blank"
    rel="noopener noreferrer"
    className="text-sm text-black/70 hover:text-black transition"
  >
    View project ↗
  </a>
</div>              </div>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
