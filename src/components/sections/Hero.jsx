import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-16">

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6">

        <div className="bg-white rounded-3xl shadow-xl px-4 py-8 sm:px-6 md:px-12 md:py-12 grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 items-center">

          {/* Left Side */}
          <div>

            <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold text-gray-900 leading-tight">

              Empower Your Workforce with

              <span className="text-blue-600">
                {" "}Industry-Ready Learning
              </span>

            </h1>


            <p className="mt-6 text-lg text-gray-600 leading-relaxed">

              Help your employees learn from top universities and companies
              with structured online programs designed for career growth.

            </p>


            {/* Features */}

            <div className="mt-7 grid grid-cols-1 sm:grid-cols-3 gap-4">

              <div className="bg-green-50 p-3 rounded-xl text-green-700 text-sm font-medium">
                ✔ Tailored Solutions
              </div>

              <div className="bg-green-50 p-3 rounded-xl text-green-700 text-sm font-medium">
                ✔ Industry Insights
              </div>

              <div className="bg-green-50 p-3 rounded-xl text-green-700 text-sm font-medium">
                ✔ Expert Guidance
              </div>

            </div>


            <button
              className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl
              font-semibold shadow-lg
              hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1
              transition-all duration-300"
            >
              Enquire Now
            </button>


          </div>



          {/* Right Side */}

          <div className="flex justify-center">

          <Image
          src="/images/hero.png"
          alt="Hero Image"
          width={450}
          height={450}
          loading="eager"
          className="w-full max-w-md h-auto rounded-3xl hover:scale-105 transition duration-500"
          />

          </div>


        </div>

      </div>

    </section>
  );
}