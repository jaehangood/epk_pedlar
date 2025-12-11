import { EyeCard } from "./components/EyeCard";
import { Instagram, Youtube, Mail } from "lucide-react";

function Attribution() {
  return (
    <div className="w-full flex justify-center mt-4">
      <p className="text-[10px] text-white">loremipsum</p>
    </div>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center sm:p-4"
      style={{ backgroundColor: "var(--cookie-monster-blue)" }}
    >
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border flex flex-row gap-2 items-center justify-center sm:p-[24px] size-full">
          <EyeCard />
        </div>
      </div>
      <div className="flex flex-row items-center justify-center gap-4 mt-6">
        <a
          href="#"
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Instagram className="w-5 h-5 text-white" />
        </a>
        <a
          href="#"
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <svg
            className="w-5 h-5 text-white"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
          </svg>
        </a>
        <a
          href="#"
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Youtube className="w-5 h-5 text-white" />
        </a>
        <a
          href="#"
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
        >
          <Mail className="w-5 h-5 text-white" />
        </a>
      </div>
      <Attribution />
    </div>
  );
}