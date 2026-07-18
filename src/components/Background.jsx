function Background() {
  return (
    <div className="fixed inset-0 z-10 pointer-events-none overflow-hidden" aria-hidden="true">
      {/* Ambient glow orbs */}
      <div className="absolute -top-1/4 -right-1/4 w-120 h-120 rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, #FAFAFA 1%, transparent 70%)" }} />
      <div className="absolute -bottom-1/4 -left-1/4 w-120 h-120 rounded-full opacity-[0.03]" style={{ background: "radial-gradient(circle, #FAFAFA 0%, transparent 70%)" }} />
      <div className="absolute top-1/3 left-1/3 w-120 h-120 rounded-full opacity-[0.02]" style={{ background: "radial-gradient(circle, #FAFAFA 0%, transparent 70%)" }} />

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 900"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-soft" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* ── Top-left corner cluster ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 60 H 60 L 110 110 V 170" strokeWidth="1.5" opacity="0.28" />
          <path d="M0 110 H 50 L 100 160 V 230 L 140 270" strokeWidth="1" opacity="0.35" />
          <path d="M0 160 H 70 L 120 210 V 290" strokeWidth="1" opacity="0.54" />
          <path d="M0 210 H 40 L 90 260 V 340 L 130 380" strokeWidth="0.8" opacity="0.62" />
          <path d="M0 260 H 80 L 130 310 V 390" strokeWidth="0.6" opacity="0.54" />
          <path d="M0 310 H 30 L 80 360 V 420" strokeWidth="0.8" opacity="0.50" />
        </g>

        {/* ── Top-right corner cluster ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1440 50 H 1360 L 1310 100 V 160" strokeWidth="1.5" opacity="0.28" />
          <path d="M1440 100 H 1370 L 1320 150 V 220 L 1280 260" strokeWidth="1" opacity="0.35" />
          <path d="M1440 150 H 1350 L 1300 200 V 280" strokeWidth="1" opacity="0.54" />
          <path d="M1440 210 H 1380 L 1330 260 V 340" strokeWidth="0.8" opacity="0.62" />
          <path d="M1440 270 H 1340 L 1290 32₀ V 39₀ L 125₀ 43₀" strokeWidth="０.6" opacity="０.54" />
          <path d="M1440 330 H 1390 L 1340 380 V 450" strokeWidth="0.8" opacity="0.30" />
        </g>

        {/* ── Bottom-left corner cluster ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M0 840 V 780 L 50 730 H 110" strokeWidth="1.5" opacity="0.28" />
          <path d="M0 880 V 820 L 60 760 H 140 L 190 710" strokeWidth="1" opacity="0.35" />
          <path d="M0 900 V 860 L 70 790 H 160" strokeWidth="1" opacity="0.54" />
          <path d="M60 900 V 850 L 120 790 H 200 L 250 740" strokeWidth="0.8" opacity="0.62" />
          <path d="M140 900 V 840 L 190 790 H 280" strokeWidth="0.6" opacity="0.54" />
          <path d="M240 900 V 870 L 290 820 H 360 L 410 770" strokeWidth="0.8" opacity="0.50" />
        </g>

        {/* ── Bottom-right corner cluster ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1440 830 H 1350 L 1300 780 V 720" strokeWidth="1.5" opacity="0.28" />
          <path d="M1440 870 H 1360 L 1310 820 V 750 L 1270 710" strokeWidth="1" opacity="0.35" />
          <path d="M1440 900 H 1340 L 1290 850 V 790" strokeWidth="1" opacity="0.54" />
          <path d="M1380 900 H 1300 L 1250 850 V 780 L 1210 740" strokeWidth="0.8" opacity="0.62" />
          <path d="M1300 900 H 1220 L 1170 850 V 790" strokeWidth="0.6" opacity="0.54" />
          <path d="M1200 900 H 1120 L 1070 850 V 800 L 1030 760" strokeWidth="0.8" opacity="0.20" />
        </g>

        {/* ── Left edge vertical bus ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M25 0 V 250 L 65 290 V 450 L 105 490 V 650 L 65 690 V 900" strokeWidth="1" opacity="0.22" />
          <path d="M50 0 V 200 L 90 240 V 400 L 130 440 V 580" strokeWidth="0.8" opacity="0.58" />
          <path d="M75 0 V 150 L 115 190 V 340" strokeWidth="0.6" opacity="0.20" />
          <path d="M100 0 V 100 L 140 140 V 280 L 170 310 V 450" strokeWidth="0.5" opacity="0.22" />
        </g>

        {/* ── Right edge vertical bus ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M1415 0 V 260 L 1375 300 V 460 L 1335 500 V 660 L 1375 700 V 900" strokeWidth="1" opacity="0.42" />
          <path d="M1390 0 V 210 L 1350 250 V 410 L 1310 450 V 590" strokeWidth="0.8" opacity="0.58" />
          <path d="M1365 0 V 160 L 1325 200 V 350" strokeWidth="0.6" opacity="0.20" />
          <path d="M1340 0 V 110 L 1300 150 V 290 L 1270 320 V 460" strokeWidth="0.5" opacity="0.32" />
        </g>

        {/* ── Bottom horizontal traces ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M300 900 V 860 L 350 810 H 480 L 530 760 V 700" strokeWidth="0.8" opacity="0.26" />
          <path d="M550 900 V 870 L 600 820 H 720 L 770 770 V 710" strokeWidth="0.6" opacity="0.29" />
          <path d="M800 900 V 850 L 750 800 H 650" strokeWidth="0.7" opacity="0.26" />
          <path d="M950 900 V 880 L 900 830 H 830" strokeWidth="0.5" opacity="0.36" />
          <path d="M1050 900 V 860 L 1000 810 H 930 L 880 760" strokeWidth="0.6" opacity="0.26" />
        </g>

        {/* ── Top horizontal traces ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M200 0 V 50 L 250 100 H 380 L 430 150 V 210" strokeWidth="0.8" opacity="0.20" />
          <path d="M450 0 V 40 L 500 90 H 620 L 670 140 V 190" strokeWidth="0.6" opacity="0.29" />
          <path d="M700 0 V 60 L 650 110 H 550" strokeWidth="0.7" opacity="0.20" />
          <path d="M900 0 V 30 L 850 80 H 780" strokeWidth="0.5" opacity="0.20" />
        </g>

        {/* ── Diagonal cross-connects (edge to edge) ── */}
        <g stroke="#FAFAFA" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.30">
          <path d="M0 400 H 40 L 80 440 V 550 L 120 590 H 200" strokeWidth="0.5" />
          <path d="M1440 500 H 1380 L 1340 540 V 640 L 1300 680 H 1220" strokeWidth="0.5" />
          <path d="M0 600 H 30 L 60 630 V 720 L 90 750 H 150" strokeWidth="0.4" />
          <path d="M1440 380 H 1390 L 1360 410 V 500 L 1330 530 H 1280" strokeWidth="0.4" />
        </g>

        {/* ── IC-like rectangular pads (decorative) ── */}
        <g stroke="#FAFAFA" fill="none" strokeWidth="0.8" opacity="0.35">
          <rect x="150" y="350" width="40" height="24" rx="2" />
          <rect x="1250" y="340" width="40" height="24" rx="2" />
          <rect x="200" y="740" width="32" height="20" rx="2" />
          <rect x="1050" y="380" width="36" height="22" rx="2" />
          <rect x="250" y="120" width="28" height="18" rx="2" />
          <rect x="1150" y="110" width="28" height="18" rx="2" />
        </g>

        {/* ── Small IC pin headers ── */}
        <g fill="#FAFAFA" opacity="0.38">
          <rect x="156" y="354" width="4" height="4" rx="1" />
          <rect x="164" y="354" width="4" height="4" rx="1" />
          <rect x="172" y="354" width="4" height="4" rx="1" />
          <rect x="180" y="354" width="4" height="4" rx="1" />
          <rect x="156" y="366" width="4" height="4" rx="1" />
          <rect x="164" y="366" width="4" height="4" rx="1" />
          <rect x="172" y="366" width="4" height="4" rx="1" />
          <rect x="180" y="366" width="4" height="4" rx="1" />

          <rect x="1256" y="344" width="4" height="4" rx="1" />
          <rect x="1264" y="344" width="4" height="4" rx="1" />
          <rect x="1272" y="344" width="4" height="4" rx="1" />
          <rect x="1280" y="344" width="4" height="4" rx="1" />
          <rect x="1256" y="356" width="4" height="4" rx="1" />
          <rect x="1264" y="356" width="4" height="4" rx="1" />
          <rect x="1272" y="356" width="4" height="4" rx="1" />
          <rect x="1280" y="356" width="4" height="4" rx="1" />
        </g>

        {/* ── Glowing nodes (vias/connection points) ── */}
        <g fill="#FAFAFA">
          {/* Top-left nodes */}
          <circle cx="110" cy="170" r="3" opacity="1" filter="url(#glow)" />
          <circle cx="140" cy="270" r="2.5" opacity="1" />
          <circle cx="130" cy="380" r="2.5" opacity="1" filter="url(#glow-soft)" />

          {/* Top-right nodes */}
          <circle cx="1310" cy="160" r="3" opacity="1" filter="url(#glow)" />
          <circle cx="1280" cy="260" r="2.5" opacity="1" />
          <circle cx="1250" cy="430" r="2.5" opacity="1" filter="url(#glow-soft)" />

          {/* Bottom-left nodes */}
          <circle cx="110" cy="730" r="3" opacity="1" filter="url(#glow)" />
          <circle cx="250" cy="740" r="2.5" opacity="1" />
          <circle cx="410" cy="770" r="2.5" opacity="1" filter="url(#glow-soft)" />

          {/* Bottom-right nodes */}
          <circle cx="1300" cy="720" r="3" opacity="1" filter="url(#glow)" />
          <circle cx="1210" cy="740" r="2.5" opacity="1" />
          <circle cx="1030" cy="760" r="2.5" opacity="1" filter="url(#glow-soft)" />

          {/* Vertical bus nodes */}
          <circle cx="65" cy="450" r="2.5" opacity="1" />
          <circle cx="105" cy="650" r="2.2" opacity="1" />
          <circle cx="1375" cy="460" r="2.5" opacity="1" />
          <circle cx="1335" cy="660" r="2.2" opacity="1" />

          {/* Connecting path nodes */}
          <circle cx="120" cy="590" r="2" opacity="1" />
          <circle cx="1340" cy="540" r="2" opacity="1" />
        </g>

        {/* ── Secondary nodes (white) ── */}
        <g fill="#ffffff" opacity="0.3">
          <circle cx="90" cy="260" r="1.5" />
          <circle cx="1300" cy="320" r="1.5" />
          <circle cx="120" cy="790" r="1.5" />
          <circle cx="1290" cy="790" r="1.5" />
          <circle cx="170" cy="310" r="1" />
          <circle cx="1270" cy="320" r="1" />
        </g>

        {/* ── Extra fine detail traces (white) ── */}
        <g stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.3">
          <path d="M0 380 H 30 L 60 410 V 490" strokeWidth="0.4" />
          <path d="M1440 440 H 1390 L 1360 470 V 550" strokeWidth="0.4" />
          <path d="M0 720 H 40 L 70 690 V 630" strokeWidth="0.3" />
          <path d="M1440 650 H 1370 L 1340 680 V 740" strokeWidth="0.3" />
          <path d="M300 0 V 30 L 270 60 H 200" strokeWidth="0.3" />
          <path d="M1100 0 V 40 L 1130 70 H 1200" strokeWidth="0.3" />
        </g>
      </svg>
    </div>
  )
}

export default Background