import Image from "next/image";
import { PageTransition } from "../../../components/PageTransition";

const shots = [
  "/modeling/01.jpg",
  "/modeling/02.jpg",
  "/modeling/03.jpg",
  "/modeling/04.jpg",
  "/modeling/05.jpg",
  "/modeling/06.jpg",
];

export default function Modeling() {
  return (
    <PageTransition>
      <div className="space-y-10">
        <header className="space-y-3">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Modeling
          </h1>
          <p className="text-muted max-w-2xl">
            A small selection. Clean. No captions unless needed.
          </p>
        </header>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {shots.map((src) => (
            <div
              key={src}
              className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-line bg-panel shadow-soft"
            >
              <Image src={src} alt="Modeling shot" fill className="object-cover" />
            </div>
          ))}
        </div>

        <p className="text-sm text-muted2">
          Add images to <code className="text-wine2">public/modeling/</code> named 01.jpg, 02.jpg, etc.
        </p>
      </div>
    </PageTransition>
  );
}
