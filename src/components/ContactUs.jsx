import { GoClock } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { IoMail } from "react-icons/io5";

export default function ContactUs() {
  return (
    <div className="bg-white" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <style>{`
        .info-card {
          background: linear-gradient(135deg, #EFF6FF, #F0FDFF);
          border: 1px solid #BFDBFE;
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .info-card:hover { box-shadow: 0 8px 24px rgba(59,130,246,0.1); transform: translateY(-2px); }
      `}</style>

      <section id="contact" className="py-24 px-6 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent)", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05), transparent)", transform: "translate(-30%,30%)" }} />

        <div className="max-w-3xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase border border-blue-200 bg-blue-50 text-blue-600 font-semibold mb-5">
              ✦ Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Let's Build Something{" "}
              <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Together
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Have a project in mind? We'd love to hear from you. Reach out and we'll get back within 24 hours.
            </p>
          </div>

          {/* Info Cards */}
          <div className="grid sm:grid-cols-3 gap-5">
            {/* Email */}
            <div className="info-card p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                <IoMail size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Email Us</p>
                <a href="mailto:info@kqubetech.com" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors text-sm break-all">
                  info@kqubetech.com
                </a>
                <p className="text-gray-400 text-xs mt-1">We reply within 24 hours</p>
              </div>
            </div>

            {/* Location */}
            <div className="info-card p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                <IoLocationOutline className="text-white" size={24} />
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Our Office</p>
                <p className="text-gray-900 font-semibold text-sm">Chennai, India</p>
                <p className="text-gray-400 text-xs mt-1">Tamil Nadu, IN</p>
              </div>
            </div>

            {/* Hours */}
            <div className="info-card p-6 flex flex-col items-center text-center gap-3">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                <GoClock size={24} className="text-white" />
              </div>
              <div>
                <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Support Hours</p>
                <p className="text-gray-900 font-semibold text-sm">Mon – Sat, 9am – 7pm</p>
                <p className="text-gray-400 text-xs mt-1">IST (India Standard Time)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}