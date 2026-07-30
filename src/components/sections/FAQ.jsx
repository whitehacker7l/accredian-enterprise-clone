"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Reveal from "../ui/Reveal";

const faqs = [
  {
    question: "What is Accredian Enterprise?",
    answer:
      "Accredian Enterprise helps organizations upskill their workforce through industry-recognized online learning programs.",
  },
  {
    question: "Who can enroll in these programs?",
    answer:
      "Working professionals, fresh graduates, and enterprise teams can enroll based on the program requirements.",
  },
  {
    question: "Do learners receive certificates?",
    answer:
      "Yes. Learners receive industry-recognized certificates after successfully completing eligible programs.",
  },
  {
    question: "How does the referral program work?",
    answer:
      "Share your referral link with friends. When they successfully enroll, both of you become eligible for exciting rewards.",
  },
  {
    question: "Can enterprises track employee progress?",
    answer:
      "Yes. Organizations get dashboards and reports to monitor learner progress, engagement, and completion rates.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(0);

  return (
    <Reveal>
      <section id="faq" className="py-24">
        <div className="max-w-4xl mx-auto px-6">

          {/* Heading */}

          <div className="text-center">

            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 text-blue-700 text-sm font-semibold">
              FAQ
            </span>

            <h2 className="mt-5 text-4xl font-bold text-slate-900">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600 text-lg">
              Everything you need to know about Accredian Enterprise.
            </p>

          </div>

          {/* FAQ */}

          <div className="mt-14 space-y-5">

            {faqs.map((faq, index) => (

              <div
                key={index}
                className="
                rounded-3xl
                bg-white/70
                backdrop-blur-xl
                border
                border-slate-200
                shadow-lg
                overflow-hidden
                transition-all
                duration-300
                "
              >

                <button
                  onClick={() =>
                    setActive(active === index ? -1 : index)
                  }
                  className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-7
                  py-6
                  text-left
                  "
                >

                  <span className="text-lg font-semibold text-slate-900">
                    {faq.question}
                  </span>

                  <div className="text-blue-600">

                    {active === index ? (
                      <Minus size={22} />
                    ) : (
                      <Plus size={22} />
                    )}

                  </div>

                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    active === index
                      ? "max-h-40 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >

                  <p className="px-7 pb-7 text-slate-600 leading-7">
                    {faq.answer}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
    </Reveal>
  );
}