import Image from "next/image";
import Reveal from "../ui/Reveal";

export default function Hero() {
  return (
    <Reveal>
      <section id="home" className="relative py-14 sm:py-16 lg:py-24 overflow-hidden">

        {/* Background Blur */}
        <div className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-blue-100 blur-3xl opacity-60"></div>

        <div className="absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-pink-100 blur-3xl opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">

          <div
            className="
            bg-white/60
            backdrop-blur-xl
            border
            border-white/40
            rounded-[32px]
            shadow-xl
            p-6
            sm:p-10
            lg:p-14
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            items-center
            "
          >

            {/* LEFT */}

            <div>

              <span className="inline-flex items-center rounded-full bg-blue-100 text-blue-700 px-4 py-2 text-sm font-semibold">
                Enterprise Learning Platform
              </span>

              <h1
                className="
                mt-6
                text-4xl
                sm:text-5xl
                lg:text-6xl
                font-extrabold
                text-slate-900
                leading-tight
                "
              >
                Empower Your Workforce with

                <span className="text-blue-600">
                  {" "}
                  Industry-Ready Learning
                </span>
              </h1>

              <p
                className="
                mt-6
                text-slate-600
                text-base
                sm:text-lg
                leading-8
                max-w-xl
                "
              >
                Upskill your employees with globally recognized programs from
                leading universities and industry experts. Improve productivity,
                retention and business growth through structured online learning.
              </p>

              {/* Features */}

              <div
                className="
                mt-8
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-4
                "
              >
                <div className="bg-white rounded-xl shadow-md border border-slate-200 px-4 py-3">
                  ✅ Tailored Learning Solutions
                </div>

                <div className="bg-white rounded-xl shadow-md border border-slate-200 px-4 py-3">
                  📊 Industry Insights
                </div>

                <div className="bg-white rounded-xl shadow-md border border-slate-200 px-4 py-3">
                  🎓 Expert Mentors
                </div>

                <div className="bg-white rounded-xl shadow-md border border-slate-200 px-4 py-3">
                  🌍 Global Certifications
                </div>
              </div>

              {/* Buttons */}

              <div className="flex flex-wrap gap-4 mt-10">

                <button
                  className="
                  bg-blue-600
                  hover:bg-blue-700
                  text-white
                  font-semibold
                  px-8
                  py-3.5
                  rounded-xl
                  shadow-lg
                  hover:shadow-2xl
                  hover:-translate-y-1
                  transition-all
                  duration-300
                  "
                >
                  Get Started
                </button>

                <button
                  className="
                  border
                  border-slate-300
                  bg-white
                  hover:bg-slate-100
                  text-slate-700
                  font-semibold
                  px-8
                  py-3.5
                  rounded-xl
                  transition-all
                  duration-300
                  "
                >
                  Learn More
                </button>

              </div>

            </div>

            {/* RIGHT */}

            <div className="flex justify-center">

              <Image
                src="/images/hero.png"
                alt="Hero"
                width={520}
                height={520}
                priority
                className="
                w-full
                max-w-[480px]
                h-auto
                drop-shadow-2xl
                hover:scale-105
                transition-transform
                duration-500
                "
              />

            </div>

          </div>

        </div>

      </section>
    </Reveal>
  );
}