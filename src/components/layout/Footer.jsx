import Reveal from "../ui/Reveal";

export default function Footer() {
  return (
    <Reveal>
    
      <footer id="contact" className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            {/* Brand */}
            <div>
              <h2 className="text-2xl font-bold text-blue-400">
                Accredian
              </h2>

              <p className="mt-4 text-slate-300 leading-7">
                Empowering learners and organizations through
                industry-ready education and trusted partnerships.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3">

                <li>
                  <a
                    href="#"
                    className="relative inline-block px-1 py-1 text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="relative inline-block px-1 py-1 text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Programs
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="relative inline-block px-1 py-1 text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    href="#"
                    className="relative inline-block px-1 py-1 text-slate-300 font-medium transition-all duration-300 hover:text-blue-400 after:absolute after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:bg-blue-400 after:transition-all after:duration-300 hover:after:w-full"
                  >
                    Contact
                  </a>
                </li>

              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-xl font-semibold mb-5">
                Contact
              </h3>

              <p className="text-slate-300">
                📧 support@accredian.com
              </p>

              <p className="text-slate-300 mt-2">
                📞 +91 98765 43210
              </p>

              <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                Get Started
              </button>
            </div>

          </div>

          <div className="border-t border-slate-700 mt-10 pt-6 text-center text-slate-400">
            © {new Date().getFullYear()} Accredian Enterprise Clone. All Rights Reserved.
          </div>

        </div>
      </footer>
    </Reveal>
  );
}