import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "../../components/Nav";
import { MotionProviders } from "../../components/MotionProviders";

export const metadata: Metadata = {
  title: "Natali Oleinik",
  description: "Experience, projects, modeling, and contact.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <MotionProviders>
          <Nav />
          <div className="mx-auto max-w-6xl px-6 pt-40 pb-20">
          {children}</div>

          <footer className="mx-auto max-w-6xl px-6 pb-10">
            <div className="pt-8 text-black/45 text-xs flex items-center justify-between gap-4 flex-wrap">
              <span>© {new Date().getFullYear()} Natali Oleinik</span>
              <span className="text-[var(--wine2)]">natoleinik2@gmail.com</span>
            </div>
          </footer>
        </MotionProviders>
      </body>
    </html>
  );
}
