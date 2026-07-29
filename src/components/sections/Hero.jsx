import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-14">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl px-10 py-12 grid md:grid-cols-2 gap-8 items-center">

        {/* Left Side */}
        <div>
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
            Empower Your Workforce with Industry-Ready Learning
        </h1>
        
        <p className="mt-6 text-lg text-gray-600">
            Help your employees learn from top universities and companies with
            structured online programs.
        </p>

        <div className="flex flex-wrap gap-4 mt-6 text-sm text-green-600 font-medium">
            <span>✔ Tailored Solutions</span>
            <span>✔ Industry Insights</span>
            <span>✔ Expert Guidance</span>
        </div>

          <button className="mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700">
            Enquire Now
          </button>
        </div>

        {/* Right Side */}
       <div className="flex justify-center">
        <Image
            src="/images/hero.png"
            alt="Hero Image"
            width={380}
            height={380}
            className="rounded-2xl"
      />
</div>

      </div>
    </section>
  );
}