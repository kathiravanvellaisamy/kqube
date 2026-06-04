import { useState, useEffect, useRef } from "react";
import LogoImage from '../assets/kqube-logo.png'
import { TbMenu, TbMenu3 } from "react-icons/tb";


const NAV_LINKS = ["Home", "About Us", "Services", "Contact Us"];

 

function WebDevIllustration() {
  return (
    <svg viewBox="0 0 460 420" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <rect x="20" y="10" width="420" height="265" rx="14" fill="#fff" stroke="#B8D0E8" strokeWidth="1.5"/>
      <rect x="20" y="10" width="420" height="40" rx="14" fill="#E8F0F8"/>
      <rect x="20" y="36" width="420" height="14" fill="#E8F0F8"/>
      <circle cx="50" cy="30" r="6" fill="#fc8181"/>
      <circle cx="70" cy="30" r="6" fill="#fbd38d"/>
      <circle cx="90" cy="30" r="6" fill="#68d391"/>
      <rect x="114" y="18" width="220" height="24" rx="12" fill="white" stroke="#B8D0E8" strokeWidth="1"/>
      <circle cx="130" cy="30" r="4" fill="#4A90D9" opacity="0.6"/>
      <rect x="140" y="26" width="80" height="7" rx="3" fill="#B8D0E8"/>
      <circle cx="420" cy="30" r="9" fill="#4A90D9" opacity="0.12"/>
      <circle cx="420" cy="30" r="5" fill="none" stroke="#4A90D9" strokeWidth="1.3"/>
      <circle cx="420" cy="30" r="2" fill="#4A90D9"/>
      <rect x="36" y="60" width="388" height="200" rx="4" fill="#F4F8FC"/>
      <rect x="52" y="80" width="50" height="7" rx="3" fill="#4A90D9" opacity="0.5"/>
      <rect x="52" y="94" width="145" height="12" rx="3" fill="#1B3A5C"/>
      <rect x="52" y="112" width="125" height="12" rx="3" fill="#1B3A5C"/>
      <rect x="52" y="132" width="160" height="6" rx="3" fill="#B8D0E8"/>
      <rect x="52" y="143" width="145" height="6" rx="3" fill="#B8D0E8"/>
      <rect x="52" y="154" width="155" height="6" rx="3" fill="#B8D0E8"/>
      <rect x="52" y="172" width="84" height="24" rx="12" fill="#1B3A5C"/>
      <rect x="144" y="172" width="84" height="24" rx="12" fill="white" stroke="#B8D0E8" strokeWidth="1.5"/>
      <rect x="240" y="72" width="168" height="130" rx="10" fill="#E8F0F8"/>
      <rect x="256" y="84" width="136" height="84" rx="6" fill="#B8D0E8" opacity="0.5"/>
      <circle cx="324" cy="126" r="22" fill="#4A90D9" opacity="0.15"/>
      <circle cx="324" cy="126" r="13" fill="#4A90D9" opacity="0.3"/>
      <rect x="248" y="218" width="164" height="82" rx="10" fill="white" stroke="#B8D0E8" strokeWidth="1.5"/>
      <rect x="248" y="218" width="164" height="24" rx="10" fill="#1B3A5C"/>
      <rect x="248" y="232" width="164" height="10" fill="#1B3A5C"/>
      <circle cx="264" cy="230" r="3.5" fill="#fc8181"/>
      <circle cx="276" cy="230" r="3.5" fill="#fbd38d"/>
      <circle cx="288" cy="230" r="3.5" fill="#68d391"/>
      <rect x="260" y="252" width="28" height="5" rx="2.5" fill="#4A90D9"/>
      <rect x="294" y="252" width="44" height="5" rx="2.5" fill="#68d391" opacity="0.85"/>
      <rect x="344" y="252" width="18" height="5" rx="2.5" fill="#f9a8d4"/>
      <rect x="260" y="264" width="44" height="5" rx="2.5" fill="#7B99B8"/>
      <rect x="310" y="264" width="34" height="5" rx="2.5" fill="#fbd38d" opacity="0.9"/>
      <rect x="260" y="276" width="18" height="5" rx="2.5" fill="#4A90D9"/>
      <rect x="284" y="276" width="52" height="5" rx="2.5" fill="#7B99B8"/>
      <rect x="36" y="238" width="58" height="24" rx="12" fill="#E8F0F8" stroke="#B8D0E8" strokeWidth="1"/>
      <text x="65" y="255" textAnchor="middle" fontSize="10" fontWeight="700" fill="#1B3A5C" fontFamily="monospace">React</text>
      <rect x="102" y="238" width="52" height="24" rx="12" fill="#fffbeb" stroke="#fde68a" strokeWidth="1"/>
      <text x="128" y="255" textAnchor="middle" fontSize="10" fontWeight="700" fill="#d97706" fontFamily="monospace">JS</text>
      <rect x="36" y="268" width="58" height="24" rx="12" fill="#f0fdf4" stroke="#bbf7d0" strokeWidth="1"/>
      <text x="65" y="285" textAnchor="middle" fontSize="10" fontWeight="700" fill="#16a34a" fontFamily="monospace">Node</text>
      <rect x="102" y="268" width="52" height="24" rx="12" fill="#EEF4FB" stroke="#B8D0E8" strokeWidth="1"/>
      <text x="128" y="285" textAnchor="middle" fontSize="10" fontWeight="700" fill="#4A90D9" fontFamily="monospace">CSS</text>
      <rect x="36" y="306" width="185" height="64" rx="10" fill="white" stroke="#B8D0E8" strokeWidth="1.5"/>
      <text x="52" y="328" fontSize="11" fontWeight="600" fill="#1B3A5C" fontFamily="sans-serif">Project progress</text>
      <rect x="52" y="336" width="153" height="5" rx="2.5" fill="#E8F0F8"/>
      <rect x="52" y="336" width="100" height="5" rx="2.5" fill="#1B3A5C"/>
      <text x="52" y="358" fontSize="10" fill="#7B99B8" fontFamily="sans-serif">65% complete</text>
      <rect x="235" y="306" width="185" height="64" rx="10" fill="white" stroke="#B8D0E8" strokeWidth="1.5"/>
      <text x="251" y="328" fontSize="11" fontWeight="600" fill="#1B3A5C" fontFamily="sans-serif">Performance</text>
      <rect x="251" y="336" width="9" height="18" rx="2" fill="#4A90D9" opacity="0.35"/>
      <rect x="265" y="330" width="9" height="24" rx="2" fill="#4A90D9" opacity="0.55"/>
      <rect x="279" y="325" width="9" height="29" rx="2" fill="#1B3A5C"/>
      <rect x="293" y="332" width="9" height="22" rx="2" fill="#4A90D9" opacity="0.5"/>
      <rect x="307" y="328" width="9" height="26" rx="2" fill="#4A90D9" opacity="0.75"/>
      <text x="251" y="358" fontSize="10" fill="#7B99B8" fontFamily="sans-serif">98 / 100 score</text>
      <circle cx="22" cy="310" r="4" fill="#4A90D9" opacity="0.3"/>
      <circle cx="36" cy="298" r="3" fill="#4A90D9" opacity="0.15"/>
      <circle cx="430" cy="300" r="6" fill="#4A90D9" opacity="0.2"/>
      <circle cx="446" cy="314" r="4" fill="#1B3A5C" opacity="0.15"/>
      <circle cx="432" cy="326" r="3" fill="#fbd38d" opacity="0.4"/>
    </svg>
  );
}

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

export default function NavbarHero() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroRef, heroInView] = useInView(0.1);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const fadeUp = (delay = 0) => ({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateY(0)" : "translateY(32px)",
    transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
  });

  const fadeRight = (delay = 0) => ({
    opacity: heroInView ? 1 : 0,
    transform: heroInView ? "translateX(0)" : "translateX(48px)",
    transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
  });

  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">

      {/* Keyframes injected via style tag */}
      <style>{`
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        @keyframes pulse-ring { 0%{box-shadow:0 0 0 0 rgba(74,144,217,0.35)} 70%{box-shadow:0 0 0 10px rgba(74,144,217,0)} 100%{box-shadow:0 0 0 0 rgba(74,144,217,0)} }
        @keyframes badge-glow { 0%,100%{opacity:1} 50%{opacity:0.4} }
        @keyframes nav-slide { from{opacity:0;transform:translateY(-16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes shimmer { 0%{background-position:200% center} 100%{background-position:-200% center} }
        @keyframes spin-slow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .float-anim { animation: float 4s ease-in-out infinite; }
        .float-anim-delay { animation: float 4s ease-in-out 1.2s infinite; }
        .float-anim-delay2 { animation: float 4s ease-in-out 2.4s infinite; }
        .nav-anim { animation: nav-slide 0.5s ease forwards; }
        .btn-primary-kq {
          background: #1B3A5C;
          transition: background 0.25s, transform 0.2s, box-shadow 0.25s;
        }
        .btn-primary-kq:hover {
          background: #4A90D9;
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(74,144,217,0.35);
        }
        .btn-secondary-kq {
          transition: border-color 0.25s, color 0.25s, background 0.25s, transform 0.2s;
        }
        .btn-secondary-kq:hover {
          border-color: #4A90D9;
          color: #4A90D9;
          background: #E8F0F8;
          transform: translateY(-2px);
        }
        .nav-link-kq {
          position: relative;
          transition: color 0.2s;
        }
        .nav-link-kq::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 50%;
          transform: translateX(-50%);
          width: 0; height: 2px;
          background: #4A90D9;
          border-radius: 99px;
          transition: width 0.3s ease;
        }
        .nav-link-kq:hover::after { width: 70%; }
        .nav-link-kq:hover { color: #1B3A5C; }
        .logo-icon-kq {
          transition: transform 0.4s ease;
        }
       
        .stat-item { transition: transform 0.2s; }
        .stat-item:hover { transform: translateY(-3px); }
        .illus-card {
          transition: transform 0.35s ease, box-shadow 0.35s ease;
        }
        .illus-card:hover {
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 60px rgba(27,58,92,0.12);
        }
      `}</style>

      {/* ── NAVBAR ── */}
      <header className={`fixed top-0 inset-x-0 z-50 transition-all duration-400 nav-anim ${
        scrolled ? "bg-white/95 backdrop-blur-md shadow-md border-b border-[#E8F0F8]" : "bg-white border-b border-[#E8F0F8]"
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-21.5 flex items-center justify-between">

          <div className="logo-icon-kq">
            <img src={LogoImage} className="w-60 md:w-50 -ml-6 md:ml-0" />
          </div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link, i) => (
              <a key={link} href="#"
                className="nav-link-kq px-4 py-2 text-sm uppercase text-[#4A6B8A] font-medium"
                style={{ animationDelay: `${i * 0.07}s` }}>
                {link}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
             <TbMenu3 className="hidden md:block cursor-pointer" size={40} />

             

            <TbMenu3 size={29}  onClick={() => setMenuOpen(!menuOpen)} className="cursor-pointer md:hidden block" />
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-350 ease-in-out ${
          menuOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        } bg-white border-b border-[#E8F0F8]`}>
          <nav className="flex flex-col px-6 py-4 gap-1">
            {NAV_LINKS.map((link) => (
              <a key={link} href="#" onClick={() => setMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-sm text-[#4A6B8A] hover:text-[#1B3A5C] hover:bg-[#E8F0F8] font-medium transition-all duration-150">
                {link}
              </a>
            ))}
            <a href="#" className="mt-3 py-2.5 px-3 rounded-full text-sm font-semibold text-center text-white bg-[#1B3A5C] hover:bg-[#4A90D9] transition-colors">
              Get Started
            </a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <main ref={heroRef} className="min-h-screen flex items-center pt-17">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>
              {/* Badge */}
              <div style={fadeUp(0)} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E8F0F8] border border-[#B8D0E8] mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4A90D9]" style={{ animation: "badge-glow 2s ease-in-out infinite" }}/>
                <span className="text-xs text-[#1B3A5C] font-semibold tracking-wide">Built Beautiful. Ranked High. Hosted Securely.</span>
              </div>

              {/* Heading */}
              <div style={fadeUp(0.1)}>
                <h1 className="text-4xl md:text-6xl font-bold leading-[1.04] tracking-tight text-[#1B3A5C] mb-5">
                Dominate 
                  <span className="text-[#4A90D9] ml-1">the Web. </span>{" "}
                 We Handle the Tech.  
                </h1>
              </div>

              {/* Subheading */}
              <div style={fadeUp(0.2)}>
                <p className="text-2xl font-medium text-[#7B99B8] mb-7 leading-snug">
                  Web development, hosting, and SEO that actually delivers
                </p>
              </div>

              {/* Three lines */}
              <div className="space-y-3 mb-10">
                <div  style={fadeUp(0.28 +  0.1)} className="flex items-start gap-3">
                    
                    <p className="text-[15px] text-[#4A6B8A] leading-relaxed">
                      Get secure domain and hosting services, modern web revamps, expert bug fixes, and targeted SEO optimization all under one roof, backed by high-performance web development.
                    </p>
                  </div>
              </div>

              {/* Buttons */}
              <div style={fadeUp(0.55)} className="flex flex-wrap gap-4 mb-12">
                <a href="#" className="btn-primary-kq inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-white shadow-lg shadow-[#1B3A5C]/20">
                  Contact Us
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#" className="btn-secondary-kq inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm text-[#1B3A5C] border border-[#B8D0E8]">
                  View Services
                  <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4">
                    <path d="M4 12L12 4M12 4H6M12 4v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>

              {/* Stats */}
              
            </div>

            {/* RIGHT — Illustration */}
            <div style={fadeRight(0.3)} className="relative flex items-center justify-center">
              {/* Floating bg blobs */}
              <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-[#4A90D9]/10 float-anim" style={{ filter: "blur(32px)" }}/>
              <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-[#1B3A5C]/8 float-anim-delay" style={{ filter: "blur(24px)" }}/>

              <div className="absolute inset-0 bg-[#EEF4FB] rounded-3xl -z-10"/>

              <div className="illus-card w-full max-w-lg p-6 rounded-3xl">
                <div className="float-anim">
                  <WebDevIllustration />
                </div>
              </div>

              {/* Floating badge — top right */}
              <div className="absolute -top-4 -right-4 float-anim-delay2 bg-white border border-[#B8D0E8] rounded-2xl px-3 py-2 shadow-lg shadow-[#1B3A5C]/10 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0F8] flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path d="M13 5L7 11L4 8" stroke="#4A90D9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1B3A5C] leading-none">Build complete</p>
                  <p className="text-[9px] text-[#7B99B8] mt-0.5">2s ago</p>
                </div>
              </div>

              {/* Floating badge — bottom left */}
              <div className="absolute -bottom-4 -left-4 float-anim bg-white border border-[#B8D0E8] rounded-2xl px-3 py-2 shadow-lg shadow-[#1B3A5C]/10 flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#E8F0F8] flex items-center justify-center">
                  <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5">
                    <path d="M8 2v4l2.5 2.5M14 8A6 6 0 112 8a6 6 0 0112 0z" stroke="#4A90D9" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[10px] font-bold text-[#1B3A5C] leading-none">99.9% Uptime</p>
                  <p className="text-[9px] text-[#7B99B8] mt-0.5">Last 30 days</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}