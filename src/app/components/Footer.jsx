import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-10">
      <div className="max-w-7xl mx-auto px-5">

        {/* Top Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-white/20 pb-6">

          {/* Logo & Website Name */}
          <div className="flex items-center gap-3">
            <div className="bg-cyan-500 w-12 h-12 rounded-full flex items-center justify-center text-2xl font-bold">
              D
            </div>

            <div>
              <h2 className="text-2xl font-bold">
                Doctor Appointment
              </h2>

              <p className="text-sm text-gray-400">
                Trusted Healthcare Service
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 text-xl">
            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaFacebookF />
            </a>

            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaInstagram />
            </a>

            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaTwitter />
            </a>

            <a
              href="#"
              className="bg-white/10 p-3 rounded-full hover:bg-cyan-500 transition"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="text-center pt-6 text-gray-400 text-sm">
          <p>
            © 2026 Doctor Appointment. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

