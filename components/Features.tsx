"use client";

export default function Features() {
  const features = [
    {
      title: "Instant Deploy",
      description: "From prompt to live product in minutes. No infrastructure setup, no deployment headaches."
    },
    {
      title: "Built-in Billing",
      description: "Stripe integration out of the box. Subscriptions, one-time payments, and invoicing ready to go."
    },
    {
      title: "User Management",
      description: "Authentication, authorization, and user profiles configured automatically."
    },
    {
      title: "Auto-Scaling",
      description: "Handle 10 users or 10,000. Infrastructure scales automatically with your growth."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Everything You Need. <span className="text-primary">Nothing You Don't.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, i) => (
            <div 
              key={i} 
              className="glassmorphism p-6 rounded-lg hover:border-primary transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-slate-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
