import { Card } from "@heroui/react";

const features = [
  {
    emoji: "✅",
    title: "Verified Doctors",
    description:
      "All doctors are verified with valid medical licenses and credentials before joining our platform.",
  },
  {
    emoji: "⚡",
    title: "Instant Booking",
    description:
      "Book appointments in seconds. No waiting, no phone calls — just seamless scheduling online.",
  },
  {
    emoji: "🔒",
    title: "Secure & Private",
    description:
      "Your health data is fully encrypted and protected. We take patient privacy very seriously.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-semibold text-[#0a3d62] mb-2">
          Why Choose MediConnect?
        </h2>
        <p className="text-gray-500 text-sm">Your health, our priority</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((item, i) => (
          <Card
            key={i}
            className="border border-gray-200 bg-slate-50 hover:border-teal-400 hover:bg-teal-50 transition-all duration-200"
            shadow="none"
          >
            <div className="flex flex-col items-center text-center py-8 px-6 gap-3">
              <span className="text-4xl">{item.emoji}</span>
              <p className="text-base font-semibold text-[#0a3d62]">
                {item.title}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}