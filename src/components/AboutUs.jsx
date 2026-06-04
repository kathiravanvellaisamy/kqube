import { useState, useEffect, useRef } from "react";

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "12+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "40+", label: "Team Members" },
];

const services = [
  { icon: "🌐", title: "Domain & Hosting", desc: "Lightning-fast, secure hosting with 99.9% uptime guarantee and seamless domain management." },
  { icon: "💻", title: "Web Development", desc: "Pixel-perfect, responsive websites crafted with modern technologies that convert visitors to clients." },
  { icon: "⚙️", title: "Software Development", desc: "Scalable, robust software solutions engineered to solve real business problems efficiently." },
  ];

 

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

function AnimatedCounter({ target }) {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView();
  const num = parseInt(target.replace(/\D/g, ""));
  const suffix = target.replace(/[0-9]/g, "");
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = Math.ceil(num / 60);
    const interval = setInterval(() => {
      start += step;
      if (start >= num) { setCount(num); clearInterval(interval); }
      else setCount(start);
    }, 24);
    return () => clearInterval(interval);
  }, [inView, num]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function AboutUs() {
  const [heroRef, heroIn] = useInView(0.1);
  const [missionRef, missionIn] = useInView(0.1);
  const [servicesRef, servicesIn] = useInView(0.1);
  const [valuesRef, valuesIn] = useInView(0.1);
  const [statsRef, statsIn] = useInView(0.1);
  const [ctaRef, ctaIn] = useInView(0.1);

  return (
    <div className="min-h-screen overflow-x-hidden bg-white" style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", color: "#111827" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,700&family=Syne:wght@700;800&display=swap');
        .syne { font-family: 'Syne', sans-serif; }

        .fade-up { opacity: 0; transform: translateY(32px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .fade-up.visible { opacity: 1; transform: translateY(0); }
        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }

        .service-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }
        .service-card::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #3B82F6, #06B6D4);
          transform: scaleX(0);
          transition: transform 0.3s ease;
        }
        .service-card:hover {
          border-color: #BFDBFE;
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(59,130,246,0.10);
        }
        .service-card:hover::after { transform: scaleX(1); }

        .stat-card {
          background: linear-gradient(135deg, #EFF6FF, #F0FDFF);
          border: 1px solid #BFDBFE;
          transition: all 0.3s ease;
        }
        .stat-card:hover { box-shadow: 0 8px 24px rgba(59,130,246,0.12); transform: translateY(-2px); }

        .value-card {
          background: #fff;
          border: 1px solid #E5E7EB;
          transition: all 0.3s ease;
        }
        .value-card:hover { border-color: #93C5FD; box-shadow: 0 8px 24px rgba(59,130,246,0.08); }

        .btn-primary {
          background: linear-gradient(135deg, #3B82F6, #06B6D4);
          transition: all 0.3s ease;
          position: relative; overflow: hidden;
        }
        .btn-primary::after { content: ''; position: absolute; inset: 0; background: linear-gradient(135deg, #2563EB, #0891B2); opacity: 0; transition: opacity 0.3s ease; }
        .btn-primary:hover::after { opacity: 1; }
        .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 32px rgba(59,130,246,0.35); }
        .btn-primary span { position: relative; z-index: 1; }

        .btn-outline {
          border: 2px solid #3B82F6;
          color: #3B82F6;
          transition: all 0.3s ease;
        }
        .btn-outline:hover { background: #3B82F6; color: #fff; transform: translateY(-2px); }

        .dot-bg {
          background-image: radial-gradient(#DBEAFE 1px, transparent 1px);
          background-size: 28px 28px;
        }

        .section-alt { background: #F8FAFF; }

        .progress-track { background: #E5E7EB; }
        .icon-box {
          background: linear-gradient(135deg, #EFF6FF, #F0FDFF);
          border: 1px solid #BFDBFE;
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative pt-32 pb-12 px-6 dot-bg overflow-hidden">
        {/* Blue accent blob */}
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-10" style={{ background: "radial-gradient(circle, #3B82F6, transparent)", transform: "translate(30%, -30%)" }} />
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full opacity-8" style={{ background: "radial-gradient(circle, #06B6D4, transparent)", transform: "translate(-30%, 30%)" }} />

        <div ref={heroRef} className="max-w-5xl mx-auto text-center relative z-10">
          <div className={`fade-up ${heroIn ? "visible" : ""} inline-flex items-center gap-2 mb-8`}>
            <span className="px-4 py-1.5 rounded-full text-xs tracking-widest uppercase border border-blue-200 bg-blue-50 text-blue-600 font-semibold">
              ✦ Who We Are
            </span>
          </div>

          <h1 className={`syne fade-up stagger-1 ${heroIn ? "visible" : ""} text-5xl md:text-7xl font-extrabold leading-tight mb-6 text-gray-900`}>
            Building the Digital<br />
            <span style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Backbone of Tomorrow
            </span>
          </h1>

          <p className={`fade-up stagger-2 ${heroIn ? "visible" : ""} text-lg md:text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed mb-12`}>
            We are a full-spectrum IT company transforming ideas into powerful digital experiences — from domain registration to enterprise software, we build it all.
          </p>

          {/* <div className={`fade-up stagger-3 ${heroIn ? "visible" : ""} flex flex-wrap gap-4 justify-center`}>
            <button className="btn-primary px-8 py-3.5 rounded-xl font-semibold text-white">
              <span>Explore Our Work →</span>
            </button>
            <button className="btn-outline px-8 py-3.5 rounded-xl font-semibold bg-white">
              Talk to Us
            </button>
          </div> */}
        </div>
      </section>

      

      {/* ── MISSION ── */}
      <section className="pb-28 pt-12 px-6">
        <div ref={missionRef} className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className={`fade-up ${missionIn ? "visible" : ""} text-blue-500 text-sm tracking-widest uppercase font-semibold mb-4`}>Our Mission</p>
            <h2 className={`syne fade-up stagger-1 ${missionIn ? "visible" : ""} text-4xl md:text-5xl font-bold leading-tight mb-6 text-gray-900`}>
              Empowering Businesses Through Technology
            </h2>
            <p className={`fade-up stagger-2 ${missionIn ? "visible" : ""} text-gray-500 text-lg leading-relaxed mb-5`}>
              Founded by engineers and entrepreneurs, we set out to make enterprise-grade IT accessible to every business — startup or Fortune 500. Great technology should be the engine of growth, not a barrier.
            </p>
            <p className={`fade-up stagger-3 ${missionIn ? "visible" : ""} text-gray-500 text-lg leading-relaxed`}>
              From your very first domain name to complex distributed systems, we are the one partner you need on your digital journey.
            </p>
          </div>

          {/* Progress visual */}
          <div className={`fade-up stagger-2 ${missionIn ? "visible" : ""}`}>
            <div className="rounded-2xl p-8 border border-gray-100 bg-white shadow-sm">
              <div className="space-y-6">
                {["Domain & Hosting", "Web & Software Dev", "Mobile & Cloud", "Security & Support"].map((item, i) => (
                  <div key={i}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold text-white" style={{ background: "linear-gradient(135deg, #3B82F6, #06B6D4)" }}>
                          {String(i + 1).padStart(2, "0")}
                        </div>
                        <span className="text-sm font-medium text-gray-700">{item}</span>
                      </div>
                      <span className="text-xs font-semibold text-blue-500">{85 + i * 3}%</span>
                    </div>
                    <div className="h-2 progress-track rounded-full overflow-hidden">
                      <div className="h-full rounded-full" style={{
                        width: `${missionIn ? 85 + i * 3 : 0}%`,
                        background: "linear-gradient(90deg, #3B82F6, #06B6D4)",
                        transition: `width 1.2s ease ${0.5 + i * 0.15}s`,
                      }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-28 px-6 section-alt">
        <div ref={servicesRef} className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className={`fade-up ${servicesIn ? "visible" : ""} text-blue-500 text-sm tracking-widest uppercase font-semibold mb-4`}>What We Do</p>
            <h2 className={`syne fade-up stagger-1 ${servicesIn ? "visible" : ""} text-4xl md:text-5xl font-bold text-gray-900`}>
              Everything You Need,<br />Under One Roof
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div key={i} className={`service-card fade-up stagger-${Math.min(i + 1, 6)} ${servicesIn ? "visible" : ""} rounded-2xl p-7`}>
                <div className="icon-box w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5">{s.icon}</div>
                <h3 className="syne font-bold text-lg mb-2 text-gray-900">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

       
    </div>
  );
}