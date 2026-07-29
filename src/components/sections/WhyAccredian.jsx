import FeatureCard from "../ui/FeatureCard";
import features from "../../data/features";

export default function WhyAccredian() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center">
          Why Accredian?
        </h2>

        <p className="text-center text-gray-600 mt-3">
          Everything you need to upskill your workforce.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-10">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}