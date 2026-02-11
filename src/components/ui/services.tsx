// --- Individual Animated Visual Components ---

const CustomWebsitesVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <style>{`
      @keyframes cw-float1 { 0%,100%{transform:translate(0,0) rotate(-8deg)} 50%{transform:translate(4px,-8px) rotate(-6deg)} }
      @keyframes cw-float2 { 0%,100%{transform:translate(0,0) rotate(4deg)} 50%{transform:translate(-4px,-6px) rotate(6deg)} }
      @keyframes cw-cursor { 0%{top:30%;left:40%} 25%{top:45%;left:55%} 50%{top:35%;left:65%} 75%{top:50%;left:45%} 100%{top:30%;left:40%} }
      @keyframes cw-pulse { 0%,100%{opacity:0.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.08)} }
      @keyframes cw-line { 0%{width:0} 50%{width:100%} 100%{width:0} }
    `}</style>

    {/* Browser window mockup - back */}
    <div
      className="absolute rounded-xl border border-slate-600/40 overflow-hidden"
      style={{
        width: "120px", height: "90px",
        top: "18%", left: "15%",
        animation: "cw-float1 6s ease-in-out infinite",
        background: "linear-gradient(135deg, rgba(30,41,59,0.9), rgba(51,65,85,0.7))",
        backdropFilter: "blur(8px)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3)"
      }}
    >
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-600/30">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
      </div>
      <div className="p-2 space-y-1.5">
        <div className="h-1.5 rounded-full bg-slate-500/40" style={{ animation: "cw-line 4s ease-in-out infinite" }} />
        <div className="h-1.5 rounded-full bg-slate-500/30 w-3/4" />
        <div className="h-6 rounded bg-gradient-to-r from-cyan-500/20 to-blue-500/20 mt-1" />
        <div className="h-1.5 rounded-full bg-slate-500/25 w-1/2" />
      </div>
    </div>

    {/* Browser window mockup - front */}
    <div
      className="absolute rounded-xl border border-slate-500/50 overflow-hidden"
      style={{
        width: "130px", height: "95px",
        top: "30%", left: "35%",
        animation: "cw-float2 5s ease-in-out infinite",
        background: "linear-gradient(145deg, rgba(30,41,59,0.95), rgba(51,65,85,0.8))",
        backdropFilter: "blur(12px)",
        boxShadow: "0 12px 40px rgba(0,0,0,0.4), 0 0 0 1px rgba(148,163,184,0.1)"
      }}
    >
      <div className="flex items-center gap-1 px-2 py-1.5 border-b border-slate-600/30">
        <div className="w-1.5 h-1.5 rounded-full bg-red-400/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/70" />
        <div className="w-1.5 h-1.5 rounded-full bg-green-400/70" />
        <div className="ml-2 h-1.5 flex-1 rounded-full bg-slate-600/40" />
      </div>
      <div className="p-2 space-y-1.5">
        <div className="flex gap-1.5">
          <div className="h-10 w-8 rounded bg-gradient-to-b from-cyan-400/25 to-cyan-600/15" />
          <div className="flex-1 space-y-1">
            <div className="h-1.5 rounded-full bg-slate-400/40 w-full" />
            <div className="h-1.5 rounded-full bg-slate-500/30 w-2/3" />
            <div className="h-1.5 rounded-full bg-slate-500/20 w-4/5" />
          </div>
        </div>
        <div className="h-1.5 rounded-full bg-cyan-400/30 w-1/3" style={{ animation: "cw-pulse 3s ease-in-out infinite" }} />
      </div>
    </div>

    {/* Cursor */}
    <div className="absolute w-3 h-3" style={{ animation: "cw-cursor 8s ease-in-out infinite", zIndex: 10 }}>
      <svg viewBox="0 0 16 16" fill="none">
        <path d="M1 1L7 14L9 8L15 6L1 1Z" fill="rgba(56,189,248,0.9)" stroke="rgba(255,255,255,0.6)" strokeWidth="1" />
      </svg>
    </div>

    {/* Ambient glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: "100px", height: "100px",
        top: "30%", left: "30%",
        background: "radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)",
        filter: "blur(20px)"
      }}
    />
  </div>
);

const WebsiteRevampsVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <style>{`
      @keyframes wr-morph { 
        0%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 
        50%{border-radius:30% 60% 70% 40%/50% 60% 30% 60%} 
        100%{border-radius:60% 40% 30% 70%/60% 30% 70% 40%} 
      }
      @keyframes wr-rotate { 0%{transform:rotate(0deg)} 100%{transform:rotate(360deg)} }
      @keyframes wr-fadeSwap { 
        0%,40%{opacity:1;filter:grayscale(1) brightness(0.5)} 
        50%,90%{opacity:1;filter:grayscale(0) brightness(1)} 
        100%{opacity:1;filter:grayscale(1) brightness(0.5)} 
      }
      @keyframes wr-sparkle { 0%,100%{opacity:0;transform:scale(0)} 50%{opacity:1;transform:scale(1)} }
      @keyframes wr-arrow { 0%,100%{transform:translateX(0);opacity:0.5} 50%{transform:translateX(6px);opacity:1} }
    `}</style>

    {/* Morphing blob background */}
    <div
      className="absolute"
      style={{
        width: "140px", height: "140px",
        top: "15%", left: "22%",
        background: "linear-gradient(135deg, rgba(168,85,247,0.12), rgba(6,182,212,0.12))",
        animation: "wr-morph 8s ease-in-out infinite",
        filter: "blur(2px)"
      }}
    />

    {/* "Before" state */}
    <div
      className="absolute rounded-lg border border-slate-600/40 overflow-hidden"
      style={{
        width: "80px", height: "65px",
        top: "28%", left: "12%",
        background: "rgba(30,41,59,0.8)",
        animation: "wr-fadeSwap 6s ease-in-out infinite",
        boxShadow: "0 4px 16px rgba(0,0,0,0.3)"
      }}
    >
      <div className="p-1.5 space-y-1">
        <div className="h-1 rounded-full bg-slate-600/60 w-3/4" />
        <div className="h-1 rounded-full bg-slate-600/40 w-1/2" />
        <div className="h-8 rounded bg-slate-700/50 mt-1" />
        <div className="h-1 rounded-full bg-slate-600/30 w-2/3" />
      </div>
    </div>

    {/* Arrow / transition indicator */}
    <div className="absolute flex items-center" style={{ top: "48%", left: "42%", animation: "wr-arrow 2s ease-in-out infinite" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ filter: "drop-shadow(0 0 6px rgba(168,85,247,0.5))" }}>
        <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="rgba(168,85,247,0.8)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>

    {/* "After" state */}
    <div
      className="absolute rounded-xl border border-slate-500/50 overflow-hidden"
      style={{
        width: "90px", height: "70px",
        top: "25%", left: "55%",
        background: "linear-gradient(145deg, rgba(30,41,59,0.95), rgba(51,65,85,0.8))",
        boxShadow: "0 8px 32px rgba(0,0,0,0.3), 0 0 20px rgba(168,85,247,0.1)"
      }}
    >
      <div className="p-1.5 space-y-1">
        <div className="h-1.5 rounded-full bg-purple-400/50 w-2/3" />
        <div className="h-1 rounded-full bg-slate-400/40 w-4/5" />
        <div className="h-8 rounded-lg bg-gradient-to-br from-purple-500/20 to-cyan-500/20 mt-0.5 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-400/40 to-cyan-400/40" />
        </div>
        <div className="h-1 rounded-full bg-cyan-400/30 w-1/3" />
      </div>
    </div>

    {/* Sparkle effects */}
    {[{ t: "20%", l: "65%", d: "0s" }, { t: "55%", l: "75%", d: "1s" }, { t: "30%", l: "80%", d: "2s" }].map((s, i) => (
      <div key={i} className="absolute" style={{ top: s.t, left: s.l, animation: `wr-sparkle 3s ease-in-out ${s.d} infinite` }}>
        <svg width="10" height="10" viewBox="0 0 10 10">
          <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4Z" fill="rgba(168,85,247,0.6)" />
        </svg>
      </div>
    ))}
  </div>
);

const SearchOptimizationVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <style>{`
      @keyframes so-scan { 0%{top:10%} 50%{top:75%} 100%{top:10%} }
      @keyframes so-pulse { 0%,100%{transform:scale(1);opacity:0.6} 50%{transform:scale(1.3);opacity:1} }
      @keyframes so-barGrow1 { 0%{height:20%} 50%{height:60%} 100%{height:20%} }
      @keyframes so-barGrow2 { 0%{height:30%} 50%{height:80%} 100%{height:30%} }
      @keyframes so-barGrow3 { 0%{height:15%} 50%{height:95%} 100%{height:15%} }
      @keyframes so-float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
      @keyframes so-ring { 0%{transform:scale(0.8);opacity:0.8} 50%{transform:scale(1.2);opacity:0.3} 100%{transform:scale(0.8);opacity:0.8} }
    `}</style>

    {/* Search magnifier */}
    <div className="absolute" style={{ top: "18%", left: "25%", animation: "so-float 4s ease-in-out infinite" }}>
      <div className="relative">
        <div
          className="w-14 h-14 rounded-full border-2"
          style={{
            borderColor: "rgba(34,211,238,0.5)",
            boxShadow: "0 0 20px rgba(34,211,238,0.15), inset 0 0 20px rgba(34,211,238,0.05)"
          }}
        />
        <div
          className="absolute w-2 h-8 rounded-full"
          style={{
            bottom: "-20px", right: "-8px",
            background: "rgba(34,211,238,0.4)",
            transform: "rotate(-45deg)",
            transformOrigin: "top center"
          }}
        />
        {/* Scanning line */}
        <div
          className="absolute left-1 right-1 h-px"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(34,211,238,0.6), transparent)",
            animation: "so-scan 3s ease-in-out infinite"
          }}
        />
        {/* Pulsing ring */}
        <div
          className="absolute inset-0 rounded-full border"
          style={{
            borderColor: "rgba(34,211,238,0.2)",
            animation: "so-ring 3s ease-in-out infinite"
          }}
        />
      </div>
    </div>

    {/* Rising bar chart */}
    <div
      className="absolute flex items-end gap-1.5"
      style={{ bottom: "22%", right: "18%", height: "70px", width: "70px" }}
    >
      {[
        { color: "rgba(34,211,238,0.4)", anim: "so-barGrow1", delay: "0s" },
        { color: "rgba(34,211,238,0.55)", anim: "so-barGrow2", delay: "0.3s" },
        { color: "rgba(34,211,238,0.7)", anim: "so-barGrow3", delay: "0.6s" },
        { color: "rgba(34,211,238,0.85)", anim: "so-barGrow2", delay: "0.9s" }
      ].map((bar, i) => (
        <div
          key={i}
          className="flex-1 rounded-t"
          style={{
            background: `linear-gradient(to top, ${bar.color}, transparent)`,
            animation: `${bar.anim} 4s ease-in-out ${bar.delay} infinite`,
            boxShadow: `0 0 8px ${bar.color}`
          }}
        />
      ))}
    </div>

    {/* Floating data nodes */}
    {[
      { t: "60%", l: "20%", s: 6, d: "0s" },
      { t: "25%", l: "65%", s: 5, d: "1s" },
      { t: "70%", l: "55%", s: 4, d: "2s" }
    ].map((node, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          top: node.t, left: node.l,
          width: `${node.s}px`, height: `${node.s}px`,
          background: "rgba(34,211,238,0.6)",
          animation: `so-pulse 3s ease-in-out ${node.d} infinite`,
          boxShadow: "0 0 10px rgba(34,211,238,0.3)"
        }}
      />
    ))}

    {/* Ambient glow */}
    <div
      className="absolute rounded-full"
      style={{
        width: "120px", height: "120px", top: "20%", left: "15%",
        background: "radial-gradient(circle, rgba(34,211,238,0.06) 0%, transparent 70%)",
        filter: "blur(15px)"
      }}
    />
  </div>
);

const OngoingSupportVisual = () => (
  <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
    <style>{`
      @keyframes os-orbit1 { 0%{transform:rotate(0deg) translateX(45px) rotate(0deg)} 100%{transform:rotate(360deg) translateX(45px) rotate(-360deg)} }
      @keyframes os-orbit2 { 0%{transform:rotate(120deg) translateX(35px) rotate(-120deg)} 100%{transform:rotate(480deg) translateX(35px) rotate(-480deg)} }
      @keyframes os-orbit3 { 0%{transform:rotate(240deg) translateX(55px) rotate(-240deg)} 100%{transform:rotate(600deg) translateX(55px) rotate(-600deg)} }
      @keyframes os-corePulse { 0%,100%{transform:scale(1);box-shadow:0 0 20px rgba(16,185,129,0.2)} 50%{transform:scale(1.1);box-shadow:0 0 35px rgba(16,185,129,0.35)} }
      @keyframes os-ringPulse { 0%,100%{opacity:0.15;transform:scale(1)} 50%{opacity:0.3;transform:scale(1.05)} }
      @keyframes os-check { 0%,80%{opacity:0;transform:scale(0)} 90%{opacity:1;transform:scale(1.2)} 100%{opacity:1;transform:scale(1)} }
    `}</style>

    {/* Center core */}
    <div className="absolute" style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
      {/* Outer ring */}
      <div
        className="absolute rounded-full border"
        style={{
          width: "110px", height: "110px",
          top: "-55px", left: "-55px",
          borderColor: "rgba(16,185,129,0.1)",
          animation: "os-ringPulse 4s ease-in-out infinite"
        }}
      />
      {/* Middle ring */}
      <div
        className="absolute rounded-full border"
        style={{
          width: "80px", height: "80px",
          top: "-40px", left: "-40px",
          borderColor: "rgba(16,185,129,0.15)",
          animation: "os-ringPulse 4s ease-in-out 0.5s infinite"
        }}
      />

      {/* Core dot */}
      <div
        className="w-8 h-8 rounded-full flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(16,185,129,0.4), rgba(6,182,212,0.3))",
          animation: "os-corePulse 3s ease-in-out infinite",
          marginTop: "-16px", marginLeft: "-16px"
        }}
      >
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7L6 10L11 4" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      {/* Orbiting elements */}
      <div className="absolute" style={{ top: "-4px", left: "-4px", animation: "os-orbit1 8s linear infinite" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "rgba(16,185,129,0.7)", boxShadow: "0 0 8px rgba(16,185,129,0.4)" }} />
      </div>
      <div className="absolute" style={{ top: "-3px", left: "-3px", animation: "os-orbit2 12s linear infinite" }}>
        <div className="w-2 h-2 rounded-full" style={{ background: "rgba(34,211,238,0.6)", boxShadow: "0 0 8px rgba(34,211,238,0.3)" }} />
      </div>
      <div className="absolute" style={{ top: "-3px", left: "-3px", animation: "os-orbit3 10s linear infinite" }}>
        <div className="w-1.5 h-1.5 rounded-full" style={{ background: "rgba(168,85,247,0.5)", boxShadow: "0 0 8px rgba(168,85,247,0.3)" }} />
      </div>
    </div>

    {/* Connection lines (subtle) */}
    <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.08 }}>
      <line x1="30%" y1="30%" x2="70%" y2="70%" stroke="rgb(16,185,129)" strokeWidth="0.5" />
      <line x1="70%" y1="30%" x2="30%" y2="70%" stroke="rgb(16,185,129)" strokeWidth="0.5" />
      <line x1="50%" y1="15%" x2="50%" y2="85%" stroke="rgb(16,185,129)" strokeWidth="0.5" />
    </svg>
  </div>
);

// --- Visual Map ---
type ServiceTitle = "Custom websites" | "Website Revamps" | "Search Optimization" | "Ongoing Support";

const visualComponents: Record<ServiceTitle, () => React.JSX.Element> = {
  "Custom websites": CustomWebsitesVisual,
  "Website Revamps": WebsiteRevampsVisual,
  "Search Optimization": SearchOptimizationVisual,
  "Ongoing Support": OngoingSupportVisual
};

// --- Main Component ---
const ServicesSection = () => {
  const services: Array<{ title: ServiceTitle; accent: string }> = [
    { title: "Custom websites", accent: "rgba(6,182,212,0.15)" },
    { title: "Website Revamps", accent: "rgba(168,85,247,0.12)" },
    { title: "Search Optimization", accent: "rgba(34,211,238,0.12)" },
    { title: "Ongoing Support", accent: "rgba(16,185,129,0.12)" }
  ];

  return (
    <div className="bg-slate-950 min-h-screen w-full flex items-center justify-center" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
      `}</style>
      <section className="py-12 px-6 w-full">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2
              className="text-4xl font-bold text-white mb-3"
              style={{ letterSpacing: "-0.02em" }}
            >
              What I Do
            </h2>
            <p className="text-base text-slate-400" style={{ fontWeight: 300 }}>
              Modern websites, simple solutions, built for small businesses.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.map((service, index) => {
              const VisualComponent = visualComponents[service.title as ServiceTitle];
              return (
                <div
                  key={index}
                  className="group relative rounded-2xl flex flex-col overflow-hidden cursor-pointer"
                  style={{
                    height: "260px",
                    background: "linear-gradient(145deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))",
                    border: "1px solid rgba(71,85,105,0.25)",
                    transition: "all 0.4s cubic-bezier(0.4,0,0.2,1)"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(71,85,105,0.45)";
                    e.currentTarget.style.background = "linear-gradient(145deg, rgba(30,41,59,0.65), rgba(15,23,42,0.9))";
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 12px 40px rgba(0,0,0,0.3), 0 0 60px ${service.accent}`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(71,85,105,0.25)";
                    e.currentTarget.style.background = "linear-gradient(145deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Animated Visual */}
                  <div className="flex-grow relative flex items-center justify-center">
                    <VisualComponent />
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-medium text-slate-100 px-5 pb-5 text-center"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    {service.title}
                  </h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSection;