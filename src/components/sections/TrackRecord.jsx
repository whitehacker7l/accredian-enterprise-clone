import trackRecord from "../../data/trackRecord";

export default function TrackRecord() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">

        <h2 className="text-3xl font-bold">
          Our Track Record
        </h2>

        <p className="text-gray-500 mt-2">
          The Numbers Behind Our Success
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
            {trackRecord.map((item, index) => (
                <div
                key={index}
                className="bg-blue-600 text-white px-5 py-2 rounded-lg
                font-medium shadow-md
                hover:bg-blue-700 hover:shadow-xl hover:-translate-y-0.5
                transition-all duration-300">
                    <h3 className="text-4xl font-bold text-blue-600">
                        {item.number}
                    </h3>
                    <p className="mt-2 text-gray-600">
                        {item.title}
                    </p>
                </div>
))}

        </div>

      </div>
    </section>
  );
}