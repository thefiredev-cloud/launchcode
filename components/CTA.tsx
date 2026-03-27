"use client";

export default function CTA() {
  return (
    <section id="cta" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to <span className="text-primary">Launch?</span>
        </h2>
        
        <p className="text-xl text-slate-300 mb-12">
          Join thousands of builders shipping products faster than ever.
        </p>
        
        <form 
          action="https://formsubmit.co/tanner@thefiredev.com" 
          method="POST"
          className="max-w-md mx-auto"
        >
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-6 py-3 bg-white/10 border border-white/20 rounded-lg focus:outline-none focus:border-primary text-white placeholder-slate-400"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-primary text-black font-semibold rounded-lg hover:bg-amber-600 transition-colors whitespace-nowrap"
            >
              Get Early Access
            </button>
          </div>
          <input type="hidden" name="_subject" value="LaunchCode Early Access Request" />
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </section>
  );
}
