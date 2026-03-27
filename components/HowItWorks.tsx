"use client";

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Describe",
      description: "Tell LaunchCode what you want to build. Natural language, no technical specs required."
    },
    {
      number: "2",
      title: "Generate",
      description: "Full stack app created in minutes. Database, API, frontend, auth — all configured."
    },
    {
      number: "3",
      title: "Launch",
      description: "Deployed with billing and users ready. Start getting customers on day one."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-4 sm:px-6 lg:px-8 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          How It <span className="text-primary">Works</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary text-black text-3xl font-bold rounded-full flex items-center justify-center mx-auto mb-6">
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
