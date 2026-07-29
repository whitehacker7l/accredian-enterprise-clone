export default function ReferralBenefits() {
  const benefits = [
    {
      title: "Earn Rewards",
      description:
        "Get exciting rewards for every successful referral."
    },
    {
      title: "Help Friends Grow",
      description:
        "Guide your friends towards better learning opportunities."
    },
    {
      title: "Build Your Network",
      description:
        "Expand your professional connections with Accredian."
    }
  ];

  return (
    <section className="py-16 px-10">

      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        Referral Benefits
      </h2>

      <div className="grid md:grid-cols-3 gap-8 hover:-translate-y-2 transition duration-300">

        {benefits.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl shadow-md bg-white hover:shadow-xl transition"
          >

            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>

            <p className="text-gray-600">
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}