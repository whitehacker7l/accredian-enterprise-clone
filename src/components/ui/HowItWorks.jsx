export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Refer Friends",
      description:
        "Share Accredian programs with your friends and network."
    },
    {
      id: 2,
      title: "Friends Enroll",
      description:
        "Your friends join the program through your referral link."
    },
    {
      id: 3,
      title: "Earn Rewards",
      description:
        "Get exciting rewards after successful enrollment."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">

      <h2 className="text-3xl font-bold text-center text-blue-600 mb-10">
        How It Works
      </h2>

      <div className="flex flex-col md:flex-row justify-center gap-6 px-4 sm:px-6 md:px-10">

        {steps.map((step) => (
          <div
            key={step.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center w-full max-w-sm mx-auto md:max-w-none md:w-80 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300"
          >

            <div className="mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full bg-blue-600 text-white text-xl font-bold hover:-translate-y-2 transition duration-300 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {step.id}
            </div>

            <h3 className="text-xl font-semibold mb-3 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300">
              {step.title}
            </h3>

            <p className="text-gray-600">
              {step.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}