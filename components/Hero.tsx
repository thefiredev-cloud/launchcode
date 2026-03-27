"use client";

import dynamic from "next/dynamic";

const Scene3DComponent = dynamic(() => import("./Scene3D"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Scene3DComponent />
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in-up">
          One Prompt. <span className="text-primary">Full Product.</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-slate-300 mb-4 fade-in-up" style={{ animationDelay: "0.2s" }}>
          Describe what you want. Get a deployed SaaS with billing, users, and support — not just code.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-8 mt-12 text-sm md:text-base fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">2min</div>
            <div className="text-slate-400">avg deploy</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-slate-400">integrations</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">$0</div>
            <div className="text-slate-400">infra setup</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10,000+</div>
            <div className="text-slate-400">apps launched</div>
          </div>
        </div>
      </div>
    </section>
  );
}
