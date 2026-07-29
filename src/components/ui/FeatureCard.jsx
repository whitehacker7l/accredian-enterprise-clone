import { GraduationCap } from "lucide-react";

export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition hover:-translate-y-2 transition duration-300">
        <div className="flex items-center gap-3 mb-4">
            <GraduationCap size={28} className="text-blue-600" />
            <h3 className="text-xl font-semibold text-blue-600">
                {title}
            </h3>
    </div>

      <p className="mt-3 text-gray-600">
        {description}
      </p>
    </div>
  );
}