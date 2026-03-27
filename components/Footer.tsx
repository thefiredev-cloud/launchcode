"use client";

export default function Footer() {
  return (
    <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-slate-400 text-sm">
            Built by{" "}
            <a 
              href="https://thefiredev.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-amber-600 transition-colors"
            >
              The Fire Dev LLC
            </a>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/thefiredev-cloud/launchcode" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://thefiredev.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              About
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
