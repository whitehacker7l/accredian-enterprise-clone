import partners from "../../data/partners";

export default function Partners() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center">
          Our Proven Partnerships
        </h2>

        <p className="text-gray-600 text-center mt-2">
          Successful collaboration with the industry's best.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-10">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 flex items-center justify-center hover:shadow-lg transition"
            >
              <span className="font-semibold text-blue-600">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}