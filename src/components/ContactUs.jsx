import { useState } from "react";

export default function ContactUs() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [focused, setFocused] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  return (
    <div className="bg-white" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif" }}>
      <style>{`
               .field-wrap { position: relative; }

        .field-input {
          width: 100%;
          padding: 14px 16px;
          border: 1.5px solid #E5E7EB;
          border-radius: 12px;
          font-size: 15px;
          font-family: inherit;
          color: #111827;
          background: #fff;
          outline: none;
          transition: all 0.25s ease;
          box-sizing: border-box;
        }
        .field-input:focus {
          border-color: #3B82F6;
          box-shadow: 0 0 0 4px rgba(59,130,246,0.08);
        }
        .field-input.has-value, .field-input:focus { padding-top: 22px; padding-bottom: 6px; }

        .field-label {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 15px;
          color: #9CA3AF;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        textarea + .field-label, .field-label.textarea-label { top: 20px; transform: none; }
        .field-input:focus ~ .field-label,
        .field-input.has-value ~ .field-label {
          top: 8px;
          transform: none;
          font-size: 11px;
          color: #3B82F6;
          font-weight: 600;
          letter-spacing: 0.03em;
          text-transform: uppercase;
        }
        textarea.field-input { resize: none; }
        textarea.field-input:focus ~ .field-label,
        textarea.field-input.has-value ~ .field-label {
          top: 8px;
        }

        .submit-btn {
          width: 100%;
          padding: 15px;
          border-radius: 12px;
          font-weight: 600;
          font-size: 16px;
          font-family: inherit;
          border: none;
          cursor: pointer;
          background: linear-gradient(135deg, #3B82F6, #06B6D4);
          color: white;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(59,130,246,0.35); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .info-card {
          background: linear-gradient(135deg, #EFF6FF, #F0FDFF);
          border: 1px solid #BFDBFE;
          border-radius: 16px;
          transition: all 0.3s ease;
        }
        .info-card:hover { box-shadow: 0 8px 24px rgba(59,130,246,0.1); transform: translateY(-2px); }

        .success-box {
          background: linear-gradient(135deg, #ECFDF5, #F0FFF4);
          border: 1.5px solid #6EE7B7;
          border-radius: 16px;
          padding: 40px;
          text-align: center;
        }

        .dot-bg {
          background-image: radial-gradient(#DBEAFE 1.2px, transparent 1.2px);
          background-size: 24px 24px;
        }

        .map-placeholder {
          background: linear-gradient(135deg, #EFF6FF, #E0F2FE);
          border: 1px solid #BFDBFE;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
      `}</style>

      <section className="py-24 px-6 relative overflow-hidden">
        {/* subtle bg decor */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.06), transparent)", transform: "translate(30%,-30%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, rgba(6,182,212,0.05), transparent)", transform: "translate(-30%,30%)" }} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs tracking-widest uppercase border border-blue-200 bg-blue-50 text-blue-600 font-semibold mb-5">
              ✦ Get In Touch
            </span>
            <h2 className="syne text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Let's Build Something{" "}
              <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Together
              </span>
            </h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Have a project in mind? We'd love to hear from you. Send us a message and we'll get back within 24 hours.
            </p>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">

            {/* ── FORM (3 cols) ── */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 md:p-10">
                {submitted ? (
                  <div className="success-box">
                    <div className="text-5xl mb-4">✅</div>
                    <h3 className="syne text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Thanks for reaching out. Our team will get back to you within 24 hours.</p>
                    <button
                      onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                      className="mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold text-blue-600 border border-blue-200 hover:bg-blue-50 transition-all"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={submit} className="space-y-5">
                    {/* Name */}
                    <div className="field-wrap">
                      <input
                        type="text"
                        name="name"
                        required
                        value={form.name}
                        onChange={handle}
                        onFocus={() => setFocused("name")}
                        onBlur={() => setFocused("")}
                        className={`field-input ${form.name ? "has-value" : ""}`}
                        placeholder=" "
                      />
                      <label className="field-label">Full Name</label>
                    </div>

                    {/* Email + Phone row */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div className="field-wrap">
                        <input
                          type="email"
                          name="email"
                          required
                          value={form.email}
                          onChange={handle}
                          onFocus={() => setFocused("email")}
                          onBlur={() => setFocused("")}
                          className={`field-input ${form.email ? "has-value" : ""}`}
                          placeholder=" "
                        />
                        <label className="field-label">Email Address</label>
                      </div>
                      <div className="field-wrap">
                        <input
                          type="tel"
                          name="phone"
                          value={form.phone}
                          onChange={handle}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused("")}
                          className={`field-input ${form.phone ? "has-value" : ""}`}
                          placeholder=" "
                        />
                        <label className="field-label">Phone Number</label>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="field-wrap">
                      <textarea
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handle}
                        onFocus={() => setFocused("message")}
                        onBlur={() => setFocused("")}
                        className={`field-input ${form.message ? "has-value" : ""}`}
                        placeholder=" "
                      />
                      <label className="field-label textarea-label">Your Message</label>
                    </div>

                    <button type="submit" className="submit-btn" disabled={loading}>
                      {loading ? (
                        <span className="flex items-center justify-center gap-2">
                          <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4"/>
                            <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z"/>
                          </svg>
                          Sending…
                        </span>
                      ) : "Send Message →"}
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* ── INFO (2 cols) ── */}
            <div className="lg:col-span-2 space-y-5">

              {/* Email card */}
              <div className="info-card p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-xl" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                  ✉️
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Email Us</p>
                  <a href="mailto:info@kqube.net" className="text-gray-900 font-semibold hover:text-blue-600 transition-colors text-base">
                    info@kqube.net
                  </a>
                  <p className="text-gray-400 text-xs mt-1">We reply within 24 hours</p>
                </div>
              </div>

              {/* Location card */}
              <div className="info-card p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-xl" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                  📍
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Our Office</p>
                  <p className="text-gray-900 font-semibold text-base">Chennai, India</p>
                  <p className="text-gray-400 text-xs mt-1">Tamil Nadu, IN</p>
                </div>
              </div>

              {/* Support hours */}
              <div className="info-card p-6 flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 text-xl" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                  🕐
                </div>
                <div>
                  <p className="text-xs font-semibold text-blue-500 uppercase tracking-widest mb-1">Support Hours</p>
                  <p className="text-gray-900 font-semibold text-base">Mon – Sat, 9am – 7pm</p>
                  <p className="text-gray-400 text-xs mt-1">IST (India Standard Time)</p>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="map-placeholder dot-bg h-44 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl mb-2">🗺️</div>
                  <p className="text-blue-400 text-sm font-medium">Chennai, Tamil Nadu</p>
                  <p className="text-blue-300 text-xs">India</p>
                </div>
                {/* Decorative pin */}
                <div className="absolute">
                  <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-lg animate-pulse" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}