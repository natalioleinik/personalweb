import { PageTransition } from "../../../components/PageTransition";
export default function ContactPage() {
  return (
    <section className="max-w-2xl pt-6">
      {/* Heading */}
      <h1 className="text-3xl font-semibold tracking-tight text-black">
        Contact
      </h1>

      <p className="mt-3 text-sm text-black/60">
        Open to opportunities, questions, or collaboration!
      </p>

      {/* Divider */}
      <div className="mt-8 h-px w-full bg-black/[0.08]" />

      {/* Contact links */}
      <div className="mt-8 space-y-6 text-sm">
        <div>
          <div className="text-black/50 mb-1">Email</div>
          <a
            href="mailto:natoleinik2@gmail.com"
            className="text-black hover:underline"
          >
            natoleinik2@gmail.com
          </a>
        </div>

        <div>
          <div className="text-black/50 mb-1">LinkedIn</div>
          <a
            href="https://www.linkedin.com/in/natali-oleinik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            linkedin.com/in/natali-oleinik
          </a>
        </div>

        <div>
          <div className="text-black/50 mb-1">GitHub</div>
          <a
            href="https://github.com/natalioleinik"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:underline"
          >
            github.com/natalioleinik
          </a>
        </div>
      </div>
    </section>
  );
}
