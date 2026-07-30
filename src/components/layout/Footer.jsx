export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-10 px-4 sm:px-6 md:px-10">

      <div className="grid md:grid-cols-3 gap-8">

        <div>
          <h2 className="text-2xl font-bold mb-3">
            Accredian
          </h2>

          <p className="text-white">
            Empowering learners through quality education
            and referral opportunities.
          </p>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">
            Quick Links
          </h3>

          <ul className="space-y-2 text-white">
            <li>Home</li>
            <li>Programs</li>
            <li>Referral</li>
            <li>Contact</li>
          </ul>
        </div>


        <div>
          <h3 className="text-xl font-semibold mb-3">
            Contact
          </h3>

          <p className="text-white">
            Email: support@accredian.com
          </p>

          <p className="text-white">
            Phone: +91 98765 43210
          </p>

        </div>

      </div>


      <div className="border-t border-blue-400 mt-8 pt-5 text-center text-white">
        © 2026 Accredian. All rights reserved.
      </div>

    </footer>
  );
}