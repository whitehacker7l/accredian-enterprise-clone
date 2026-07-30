import partners from "../../data/partners";
import Reveal from "../ui/Reveal";

export default function Partners() {
  return (
    <Reveal>
      <section id="partners" className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center">

            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
              OUR PARTNERS
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Our Proven Partnerships
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              We collaborate with leading organizations to deliver
              world-class learning experiences and enterprise solutions.
            </p>

          </div>

          {/* Marquee */}
          <div className="relative mt-14 overflow-hidden">

            {/* Left Fade */}
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-pink-50 to-transparent"></div>

            {/* Right Fade */}
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-pink-50 to-transparent"></div>

            <div className="flex w-max gap-8 animate-marquee">

              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="
                  group
                  relative
                  overflow-hidden
                  min-w-[220px]
                  rounded-3xl
                  border
                  border-slate-200
                  bg-white/70
                  backdrop-blur-xl
                  p-8
                  shadow-lg
                  hover:-translate-y-2
                  hover:shadow-2xl
                  transition-all
                  duration-300
                  "
                >

                  {/* Glow */}
                  <div className="absolute -top-10 -right-10 h-28 w-28 rounded-full bg-blue-100 blur-3xl opacity-70"></div>

                  {/* Logo Circle */}
                  <div
                    className="
                    relative
                    mx-auto
                    flex
                    h-16
                    w-16
                    items-center
                    justify-center
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    text-xl
                    font-bold
                    text-white
                    shadow-lg
                    group-hover:scale-110
                    transition-transform
                    duration-300
                    "
                  >
                    {partner.name.charAt(0)}
                  </div>

                  {/* Partner Name */}
                  <h3 className="relative mt-6 text-center text-lg font-bold text-slate-900">
                    {partner.name}
                  </h3>

                  <p className="relative mt-2 text-center text-sm text-slate-500">
                    Trusted Enterprise Partner
                  </p>

                  {/* Accent Line */}
                  <div className="mx-auto mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-20 transition-all duration-300"></div>

                </div>
              ))}

            </div>

          </div>

        </div>
      </section>
    </Reveal>
  );
}