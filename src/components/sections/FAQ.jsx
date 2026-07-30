"use client";

import { useState } from "react";

export default function FAQ() {

  const faqs = [
    {
      question: "What is Accredian Referral Program?",
      answer:
        "Accredian Referral Program allows users to refer friends and earn exciting rewards."
    },
    {
      question: "How can I refer my friends?",
      answer:
        "You can share your referral link with friends and invite them to join Accredian programs."
    },
    {
      question: "When will I receive my reward?",
      answer:
        "Rewards are provided after successful verification of your friend's enrollment."
    },
    {
      question: "Is there any limit on referrals?",
      answer:
        "You can refer multiple friends and earn rewards based on successful referrals."
    }
  ];


  const [open, setOpen] = useState(null);


  return (
    <section className="py-16 px-6 md:px-10 bg-gray-50">

      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Frequently Asked Questions
      </h2>


      <div className="max-w-3xl mx-auto space-y-4">

        {faqs.map((faq, index) => (

          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-5"
          >

            <button
              className="w-full flex justify-between items-center text-left font-semibold text-lg"
              onClick={() =>
                setOpen(open === index ? null : index)
              }
            >

              {faq.question}

              <span>
                {open === index ? "-" : "+"}
              </span>

            </button>


            {open === index && (
              <p className="mt-4 text-gray-600">
                {faq.answer}
              </p>
            )}

          </div>

        ))}

      </div>

    </section>
  );
}