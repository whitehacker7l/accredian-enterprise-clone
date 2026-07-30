import trackRecord from "../../data/trackRecord";
import Reveal from "../ui/Reveal";

export default function TrackRecord() {
  return (
  <Reveal>
      <section id="track-record"className="py-20">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Our Track Record
            </h2>

            <p className="mt-3 text-slate-600 text-lg">
              The numbers behind our success and trusted partnerships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">

            {trackRecord.map((item, index) => (

              <div
                key={index}
                className="
                relative
                overflow-hidden
                group
                bg-white/70
                backdrop-blur-xl
                border
                border-slate-200
                rounded-3xl
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

                {/* Number */}
                <h3
                  className="
                  relative
                  text-4xl
                  font-extrabold
                  bg-gradient-to-r
                  from-blue-600
                  via-cyan-500
                  to-sky-500
                  bg-clip-text
                  text-transparent
                  group-hover:scale-105
                  transition-transform
                  duration-300
                  "
                >
                  {item.number}
                </h3>

                {/* Title */}
                <p className="relative mt-4 text-slate-700 font-semibold text-lg">
                  {item.title}
                </p>

                {/* Line */}
                <div className="mt-6 h-1 w-12 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:w-20 transition-all duration-300"></div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}