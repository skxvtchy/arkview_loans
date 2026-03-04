import { ArrowRight } from "lucide-react";

import Iridescence from "../ui/iridesence";

export function Hero() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#fafafa] font-sans text-zinc-900 selection:bg-blue-600 selection:text-white">
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 pointer-events-none">
          <Iridescence
            color={[0.85, 0.9, 1]}
            speed={0.4}
            amplitude={0.08}
            mouseReact={false}
          />
        </div>
      </div>      
      {/* MAIN CONTENT */}
      <main className="relative z-10 w-full max-w-5xl px-6 text-center">
        <h1 className="text-6xl font-medium leading-[1.05] tracking-[-0.05em] text-zinc-900 sm:text-7xl md:text-[7.5rem] flex flex-col items-center">
          <span className="inline-block animate-in fade-in slide-in-from-bottom-8 duration-1000 fill-mode-both animate-blur-in">
            Close more deals
          </span>
          <span className="text-blue-600 font-light italic mt-2 animate-in fade-in slide-in-from-bottom-10 delay-300 duration-1000 fill-mode-both">
            with intelligent CRM
          </span>
        </h1>

        <p className="mx-auto mt-10 max-w-xl text-lg font-light leading-relaxed text-zinc-500 sm:text-xl animate-in fade-in slide-in-from-bottom-12 delay-500 duration-1000 fill-mode-both">
          The sales pipeline built for high-velocity teams. 
          Automate your outreach, track every touchpoint, and scale your revenue.
        </p>

        {/* EMAIL SIGNUP */}
        <div className="mt-14 w-full max-w-md mx-auto animate-in fade-in zoom-in-95 delay-700 duration-1000 fill-mode-both">
          <form className="relative flex flex-col sm:flex-row gap-2 p-1.5 bg-white border-[1.5px] border-zinc-200 rounded-full shadow-2xl shadow-zinc-300/40 focus-within:border-blue-500/50 transition-all">
            <input
              type="email"
              placeholder="Enter your work email"
              className="hero-email-input flex-1 bg-transparent px-6 py-3 text-zinc-800 placeholder:text-zinc-400 focus:outline-none focus:bg-transparent text-sm"
              required
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-zinc-900 px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-zinc-800 hover:shadow-lg active:scale-95"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center gap-4 text-[10px] text-zinc-400 font-bold tracking-[0.15em] uppercase">
            <span>Free 14-day trial</span>
            <span className="h-1 w-1 rounded-full bg-blue-500/50" />
            <span>No credit card</span>
          </div>
        </div>
      </main>
    </div>
  );
}