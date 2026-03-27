"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glassmorphism">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-primary">LaunchCode</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="https://github.com/thefiredev-cloud/launchcode" target="_blank" rel="noopener noreferrer" className="text-slate-300 hover:text-white transition-colors">
              GitHub
            </a>
            <a href="#cta" className="px-6 py-2 bg-primary text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors">
              Get Started
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
