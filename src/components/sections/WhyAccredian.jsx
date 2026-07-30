import { GraduationCap, Users, Briefcase, ShieldCheck } from "lucide-react";
import Reveal from "../ui/Reveal";


const features = [
  {
    title: "Industry Experts",
    description:
      "Learn from experienced professionals and top mentors across industries.",
    icon: <Briefcase size={34} />,
  },
  {
    title: "Trusted by Companies",
    description:
      "Leading organizations rely on Accredian for workforce upskilling.",
    icon: <Users size={34} />,
  },
  {
    title: "Certified Programs",
    description:
      "Earn recognized certificates from top universities and institutions.",
    icon: <GraduationCap size={34} />,
  },
  {
    title: "Career Growth",
    description:
      "Advance your career with practical skills and industry-ready learning.",
    icon: <ShieldCheck size={34} />,
  },
];

export default function WhyAccredian() {
  return (
    <Reveal>
      <section id="why-accredian" className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              WHY CHOOSE US
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Why Accredian?
            </h2>

            <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-lg">
              We combine academic excellence with real-world industry expertise to
              help learners and organizations achieve measurable success.
            </p>

          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">

            {features.map((item, index) => (

              <div
                key={index}
                className="
                group
                relative
                overflow-hidden
                rounded-3xl
                bg-white/70
                backdrop-blur-xl
                border
                border-slate-200
                p-8
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-2
                transition-all
                duration-300
                "
              >

                {/* Glow */}
                <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-100 blur-3xl opacity-70"></div>

                {/* Icon */}
                <div
                  className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-blue-600
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
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="relative mt-7 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="relative mt-4 text-slate-600 leading-7">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-20 transition-all duration-300"></div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}