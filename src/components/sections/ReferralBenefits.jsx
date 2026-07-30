import {
  UserPlus,
  Send,
  Gift,
  Wallet,
  ArrowRight,
} from "lucide-react";

import Reveal from "../ui/Reveal";

const steps = [
  {
    icon: <UserPlus size={28} />,
    title: "Invite",
    desc: "Share your referral link with your friends.",
  },
  {
    icon: <Send size={28} />,
    title: "Enroll",
    desc: "Your friend joins an Accredian program.",
  },
  {
    icon: <Gift size={28} />,
    title: "Earn",
    desc: "Both of you receive exciting rewards.",
  },
  {
    icon: <Wallet size={28} />,
    title: "Redeem",
    desc: "Withdraw or redeem your referral bonus.",
  },
];

export default function ReferralBenefits() {
  return (
    <Reveal>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm">
              REFERRAL PROGRAM
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Earn Rewards in 4 Easy Steps
            </h2>

            <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto">
              Invite your friends, help them learn, and earn exclusive rewards
              every time someone joins through your referral.
            </p>

          </div>

          {/* Timeline */}

          <div className="mt-20">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

              {steps.map((step, index) => (

                <div
                  key={index}
                  className="relative flex flex-col items-center text-center"
                >

                  {/* Circle */}

                  <div
                    className="
                    h-20
                    w-20
                    rounded-full
                    bg-gradient-to-r
                    from-blue-600
                    to-cyan-500
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-xl
                    hover:scale-110
                    hover:rotate-6
                    transition-all
                    duration-300
                    "
                  >
                    {step.icon}
                  </div>

                  {/* Number */}

                  <div className="absolute top-0 right-12 bg-slate-900 text-white h-8 w-8 rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {index + 1}
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-slate-600 leading-7">
                    {step.desc}
                  </p>

                  {/* Arrow */}

                  {index !== steps.length - 1 && (

                    <ArrowRight
                      className="
                      hidden
                      lg:block
                      absolute
                      top-9
                      -right-10
                      text-blue-400
                      "
                      size={34}
                    />

                  )}

                </div>

              ))}

            </div>

          </div>

          {/* CTA */}

          <div className="mt-20 flex justify-center">

            <button
              className="
              px-10
              py-4
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              shadow-lg
              hover:bg-blue-700
              hover:scale-105
              transition-all
              duration-300
              "
            >
              Start Referring
            </button>

          </div>

        </div>
      </section>
     </Reveal>
  );
}