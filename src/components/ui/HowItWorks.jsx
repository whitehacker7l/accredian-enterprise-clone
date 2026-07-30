import {
  UserPlus,
  Search,
  GraduationCap,
  Trophy,
} from "lucide-react";

import Reveal from "../ui/Reveal";

const steps = [
  {
    icon: <UserPlus size={30} />,
    title: "Register",
    description:
      "Create your enterprise account and tell us about your learning goals.",
  },
  {
    icon: <Search size={30} />,
    title: "Choose Programs",
    description:
      "Explore industry-recognized courses tailored to your workforce needs.",
  },
  {
    icon: <GraduationCap size={30} />,
    title: "Start Learning",
    description:
      "Employees learn through flexible online classes guided by experts.",
  },
  {
    icon: <Trophy size={30} />,
    title: "Achieve Success",
    description:
      "Track progress, earn certifications, and drive measurable business growth.",
  },
];

export default function HowItWorks() {
  return (
    <Reveal>
      <section id="how-it-works" className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              HOW IT WORKS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              How It Works
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              A simple and effective process designed to help organizations
              transform learning into measurable success.
            </p>

          </div>

          {/* Timeline */}

          <div className="relative mt-20">

            {/* Line */}

            <div className="hidden lg:block absolute top-10 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500 rounded-full"></div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">

              {steps.map((step, index) => (

                <div
                  key={index}
                  className="
                  relative
                  group
                  bg-white/70
                  backdrop-blur-xl
                  border
                  border-slate-200
                  rounded-3xl
                  p-8
                  shadow-lg
                  hover:-translate-y-3
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  "
                >

                  {/* Step Number */}

                  <div className="absolute -top-5 left-6 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-lg">
                    {index + 1}
                  </div>

                  {/* Glow */}

                  <div className="absolute -top-10 -right-10 h-24 w-24 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

                  {/* Icon */}

                  <div
                    className="
                    relative
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-white
                    flex
                    items-center
                    justify-center
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                    "
                  >
                    {step.icon}
                  </div>

                  {/* Title */}

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-slate-600 leading-7">
                    {step.description}
                  </p>

                  {/* Bottom Line */}

                  <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-20 transition-all duration-300"></div>

                </div>

              ))}

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}