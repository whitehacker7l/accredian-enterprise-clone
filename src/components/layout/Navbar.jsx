export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center px-10 py-5 shadow-md bg-white">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-blue-600">
          Accredian
        </h1>

        {/* Menu */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li><a href="#">Home</a></li>
          <li><a href="#">Programs</a></li>
          <li><a href="#">Benefits</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

        {/* Button */}
        <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
          Apply Now
        </button>

      </div>
    </nav>
  );
}