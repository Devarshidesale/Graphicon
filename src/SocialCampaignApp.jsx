import React, { useState, useEffect, useRef } from 'react';

/* ─── Google Fonts injected in App useEffect ─── */

const css = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400;1,700&family=Space+Mono:wght@400;700&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  html, body, #root { height: 100%; }
  body { overflow-x: hidden; }

  ::selection { background: #facc15; color: #001a6b; }

  :root {
    --blue-deep:   #0033BB;
    --blue-mid:    #0044CC;
    --blue-bright: #0055EE;
    --gold:        #FFD700;
    --gold-light:  #FFF176;
    --white:       #ffffff;
    --glass-bg:    rgba(255,255,255,0.10);
    --glass-border:rgba(255,255,255,0.22);
    --glass-hover: rgba(255,255,255,0.18);
    --mono: 'Space Mono', monospace;
    --serif: 'Playfair Display', serif;
    --sans: 'DM Sans', sans-serif;
  }

  /* ── Grid overlay ── */
  .bg-grid {
    background-size: 56px 56px;
    background-image:
      linear-gradient(to right, rgba(255,255,255,0.07) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,255,255,0.07) 1px, transparent 1px);
    -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%);
    mask-image:         radial-gradient(ellipse 80% 80% at 50% 50%, black 50%, transparent 100%);
  }

  /* ── Float keyframes ── */
  @keyframes float-a { 0%,100%{transform:translateY(0px) rotate(0deg);}  50%{transform:translateY(-18px) rotate(3deg);} }
  @keyframes float-b { 0%,100%{transform:translateY(0px) rotate(0deg);}  50%{transform:translateY(-12px) rotate(-2deg);} }
  @keyframes float-c { 0%,100%{transform:translateY(0px) rotate(0deg);}  50%{transform:translateY(-22px) rotate(4deg);} }
  @keyframes fadeSlideUp { from{opacity:0;transform:translateY(20px);} to{opacity:1;transform:translateY(0);} }
  @keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 0 rgba(255,215,0,0)} 50%{box-shadow:0 0 20px 4px rgba(255,215,0,0.25)} }
  @keyframes shimmer {
    0%   { background-position: -200% center; }
    100% { background-position:  200% center; }
  }
  @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
  @keyframes orbit { from{transform:translateX(-50%) translateY(-50%) rotate(0deg);} to{transform:translateX(-50%) translateY(-50%) rotate(360deg);} }

  /* ── AI Input ── */
  .ai-input-wrap {
    background: rgba(255,255,255,0.10);
    backdrop-filter: blur(22px);
    -webkit-backdrop-filter: blur(22px);
    border: 1px solid rgba(255,255,255,0.22);
    border-radius: 24px;
    padding: 6px;
    transition: border-color .3s, box-shadow .3s;
  }
  .ai-input-wrap:focus-within {
    border-color: rgba(255,215,0,0.55);
    box-shadow: 0 0 0 3px rgba(255,215,0,0.12), 0 8px 40px rgba(0,0,0,0.3);
  }
  .ai-textarea {
    width: 100%;
    background: transparent;
    border: none;
    outline: none;
    resize: none;
    color: #fff;
    font-family: var(--sans);
    font-size: 15px;
    font-weight: 400;
    line-height: 1.6;
    padding: 14px 16px 6px;
    min-height: 90px;
  }
  .ai-textarea::placeholder { color: rgba(255,255,255,0.4); }
  .ai-input-toolbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 12px 8px;
  }
  .ai-tool-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    color: rgba(255,255,255,0.5);
    padding: 6px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    transition: color .2s, background .2s;
  }
  .ai-tool-btn:hover { color: #fff; background: rgba(255,255,255,0.1); }
  .ai-submit-btn {
    display: flex;
    align-items: center;
    gap: 8px;
    background: linear-gradient(135deg, #FFD700, #FFA500);
    color: #001a6b;
    border: none;
    border-radius: 14px;
    padding: 10px 20px;
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.08em;
    cursor: pointer;
    transition: transform .15s, box-shadow .15s;
  }
  .ai-submit-btn:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(255,215,0,0.35); }
  .ai-submit-btn:active { transform: scale(0.97); }

  /* ── Platform pill buttons ── */
  .platform-btn {
    position: relative;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 12px 22px;
    border-radius: 50px;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    cursor: pointer;
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.85);
    transition: all .25s ease;
    overflow: hidden;
  }
  .platform-btn::before {
    content: '';
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity .25s;
    border-radius: inherit;
  }
  .platform-btn:hover {
    border-color: rgba(255,255,255,0.4);
    color: #fff;
    transform: translateY(-3px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
  }
  .platform-btn.active {
    color: #fff;
    transform: translateY(-2px);
  }
  .platform-btn.active::before { opacity: 1; }

  /* per-platform accent colors */
  .platform-btn.instagram.active  { border-color: #E1306C; box-shadow: 0 0 0 2px rgba(225,48,108,0.35), 0 10px 30px rgba(0,0,0,0.35); }
  .platform-btn.instagram::before { background: linear-gradient(135deg,rgba(225,48,108,0.25),rgba(131,58,180,0.25)); }
  .platform-btn.linkedin.active   { border-color: #0A66C2; box-shadow: 0 0 0 2px rgba(10,102,194,0.35), 0 10px 30px rgba(0,0,0,0.35); }
  .platform-btn.linkedin::before  { background: rgba(10,102,194,0.2); }
  .platform-btn.twitter.active    { border-color: #1DA1F2; box-shadow: 0 0 0 2px rgba(29,161,242,0.35), 0 10px 30px rgba(0,0,0,0.35); }
  .platform-btn.twitter::before   { background: rgba(29,161,242,0.18); }
  .platform-btn.x.active          { border-color: rgba(255,255,255,0.6); box-shadow: 0 0 0 2px rgba(255,255,255,0.2), 0 10px 30px rgba(0,0,0,0.35); }
  .platform-btn.x::before         { background: rgba(255,255,255,0.1); }

  /* ── Output type cards ── */
  .output-card {
    flex: 1;
    min-width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    padding: 20px 16px;
    border-radius: 20px;
    border: 1px solid var(--glass-border);
    background: var(--glass-bg);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    cursor: pointer;
    transition: all .25s;
    font-family: var(--mono);
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.7);
  }
  .output-card:hover { border-color:rgba(255,255,255,0.4); color:#fff; transform:translateY(-4px); box-shadow:0 12px 32px rgba(0,0,0,0.4); }
  .output-card.active { border-color:var(--gold); color:var(--gold); background:rgba(255,215,0,0.08); box-shadow:0 0 0 2px rgba(255,215,0,0.2); animation: pulseGlow 2.5s ease-in-out infinite; }
  .output-icon { font-size: 26px; line-height: 1; }

  /* ── Generate button ── */
  .generate-btn {
    width: 100%;
    padding: 16px;
    border-radius: 16px;
    border: none;
    background: linear-gradient(135deg, var(--gold) 0%, #FF8C00 100%);
    color: #001a6b;
    font-family: var(--mono);
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.12em;
    cursor: pointer;
    transition: transform .2s, box-shadow .2s;
    position: relative;
    overflow: hidden;
  }
  .generate-btn::after {
    content:'';
    position:absolute;
    top:0;left:-100%;
    width:200%;height:100%;
    background: linear-gradient(90deg,transparent,rgba(255,255,255,0.3),transparent);
    animation: shimmer 2.8s linear infinite;
  }
  .generate-btn:hover { transform:translateY(-3px); box-shadow:0 12px 36px rgba(255,150,0,0.45); }
  .generate-btn:active { transform:scale(0.98); }
  .generate-btn:disabled { opacity:0.5; cursor:not-allowed; transform:none; }

  /* ── Nav ── */
  .nav-link {
    font-family: var(--mono);
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.15em;
    color: rgba(255,255,255,0.75);
    text-decoration: none;
    transition: color .2s;
    cursor: pointer;
    position: relative;
  }
  .nav-link::after {
    content:'';
    position:absolute;
    bottom:-2px;left:0;
    width:0; height:1px;
    background:var(--gold);
    transition:width .3s;
  }
  .nav-link:hover { color:#fff; }
  .nav-link:hover::after { width:100%; }

  /* ── Fade in animation ── */
  .fade-up { animation: fadeSlideUp .7s ease both; }
  .delay-1 { animation-delay: .15s; }
  .delay-2 { animation-delay: .30s; }
  .delay-3 { animation-delay: .45s; }
  .delay-4 { animation-delay: .60s; }
  .delay-5 { animation-delay: .75s; }

  /* ── Section divider label ── */
  .section-label {
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.22em;
    color: rgba(255,255,255,0.45);
    text-transform: uppercase;
    margin-bottom: 14px;
  }

  /* ── Scrollable main ── */
  .page-scroll {
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: rgba(255,255,255,0.15) transparent;
  }

  /* ── Tag pill ── */
  .tag-pill {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    padding: 4px 12px;
    border-radius: 50px;
    border: 1px solid rgba(255,255,255,0.18);
    background: rgba(255,255,255,0.07);
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 0.1em;
    color: rgba(255,255,255,0.6);
  }
  .tag-dot { width:6px;height:6px;border-radius:50%;background:var(--gold);animation:blink 1.8s ease infinite; }
`;

/* ═══════════════════════════════════════
   SVG Pixels
═══════════════════════════════════════ */
const PixelFlower = ({ color = '#FF3333', size = 14 }) => (
  <svg width={size} height={size * 1.4} viewBox="0 0 12 16" style={{ imageRendering: 'pixelated', shapeRendering: 'crispEdges', display: 'block' }}>
    <rect x="4" y="0" width="4" height="4" fill={color} />
    <rect x="4" y="8" width="4" height="4" fill={color} />
    <rect x="0" y="4" width="4" height="4" fill={color} />
    <rect x="8" y="4" width="4" height="4" fill={color} />
    <rect x="4" y="4" width="4" height="4" fill={color === '#FF3333' ? '#FFD700' : '#8B4513'} />
    <rect x="4" y="12" width="4" height="4" fill="#228B22" />
  </svg>
);

const CenterFlower = () => (
  <svg viewBox="0 0 24 60" style={{ width: '100%', height: '100%', imageRendering: 'pixelated', shapeRendering: 'crispEdges' }} preserveAspectRatio="xMidYMax">
    <rect x="10" y="24" width="4" height="36" fill="#008000" />
    <rect x="6"  y="44" width="4" height="4"  fill="#006400" />
    <rect x="2"  y="40" width="4" height="4"  fill="#006400" />
    <rect x="14" y="36" width="4" height="4"  fill="#006400" />
    <rect x="18" y="32" width="4" height="4"  fill="#006400" />
    <rect x="8"  y="8"  width="8" height="8"  fill="#5C3317" />
    <rect x="8"  y="0"  width="8" height="8"  fill="#FFD700" />
    <rect x="8"  y="16" width="8" height="8"  fill="#FFD700" />
    <rect x="0"  y="8"  width="8" height="8"  fill="#FFD700" />
    <rect x="16" y="8"  width="8" height="8"  fill="#FFD700" />
    <rect x="4"  y="4"  width="4" height="4"  fill="#FFD700" opacity="0.8" />
    <rect x="16" y="4"  width="4" height="4"  fill="#FFD700" opacity="0.8" />
    <rect x="4"  y="16" width="4" height="4"  fill="#FFD700" opacity="0.8" />
    <rect x="16" y="16" width="4" height="4"  fill="#FFD700" opacity="0.8" />
  </svg>
);

/* ═══════════════════════════════════════
   Platform Icons (SVG)
═══════════════════════════════════════ */
const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
    <rect x="2" y="2" width="20" height="20" rx="5" stroke="url(#ig)" strokeWidth="2"/>
    <circle cx="12" cy="12" r="4" stroke="url(#ig)" strokeWidth="2"/>
    <circle cx="17.5" cy="6.5" r="1.5" fill="#E1306C"/>
    <defs>
      <linearGradient id="ig" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
        <stop stopColor="#F9A825"/>
        <stop offset=".5" stopColor="#E1306C"/>
        <stop offset="1" stopColor="#833AB4"/>
      </linearGradient>
    </defs>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#0A66C2">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0A66C2"/>
    <rect x="5.5" y="9.5" width="3" height="9" fill="#fff"/>
    <circle cx="7" cy="6.5" r="1.75" fill="#fff"/>
    <path d="M12 9.5s.5-1 3-1c3 0 3.5 2 3.5 4v6H15v-5c0-1.5-.5-2.5-2-2.5s-1 1-1 2.5v5h-3v-9h3z" fill="#fff"/>
  </svg>
);

const TwitterIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DA1F2">
    <path d="M22 5.8a8.5 8.5 0 0 1-2.36.65 4.07 4.07 0 0 0 1.8-2.27 8.1 8.1 0 0 1-2.6 1A4.1 4.1 0 0 0 11.75 9a11.65 11.65 0 0 1-8.46-4.3 4.1 4.1 0 0 0 1.27 5.47A4 4 0 0 1 2.7 9.7v.05a4.1 4.1 0 0 0 3.29 4.02 4.16 4.16 0 0 1-1.85.07 4.1 4.1 0 0 0 3.83 2.85A8.23 8.23 0 0 1 2 18.34a11.62 11.62 0 0 0 6.29 1.84c7.55 0 11.67-6.25 11.67-11.67 0-.18 0-.35-.01-.52A8.36 8.36 0 0 0 22 5.8z"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.25 2.25h6.918l4.257 5.627L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

/* ═══════════════════════════════════════
   Background floating flowers
═══════════════════════════════════════ */
const BG_FLOWERS = [
  { top:'12%', left:'6%',   size:36, color:'#FF3333', anim:'float-a', delay:'0s',    opacity:0.8 },
  { top:'7%',  left:'22%',  size:24, color:'#FFD700', anim:'float-b', delay:'0.6s',  opacity:0.7 },
  { top:'18%', right:'12%', size:44, color:'#FF3333', anim:'float-c', delay:'0.3s',  opacity:0.75 },
  { bottom:'22%', left:'7%',  size:30, color:'#FFD700', anim:'float-b', delay:'1s',  opacity:0.7 },
  { bottom:'28%', right:'8%', size:38, color:'#FF3333', anim:'float-a', delay:'0.5s', opacity:0.8 },
  { top:'42%', left:'3%',   size:20, color:'#FFD700', anim:'float-c', delay:'0.2s',  opacity:0.55 },
  { top:'55%', right:'5%',  size:26, color:'#FF3333', anim:'float-b', delay:'0.9s',  opacity:0.65 },
  { top:'30%', left:'50%',  size:18, color:'#FFD700', anim:'float-a', delay:'1.4s',  opacity:0.4 },
];

/* ═══════════════════════════════════════
   PLATFORM BUTTONS COMPONENT
═══════════════════════════════════════ */
const PLATFORMS = [
  { id: 'instagram', label: 'INSTAGRAM', Icon: InstagramIcon },
  { id: 'linkedin',  label: 'LINKEDIN',  Icon: LinkedInIcon  },
  { id: 'twitter',   label: 'TWITTER',   Icon: TwitterIcon   },
  { id: 'x',         label: 'X',         Icon: XIcon         },
];

const PlatformSelector = ({ selected, onToggle }) => (
  <div>
    <p className="section-label">TARGET PLATFORMS</p>
    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
      {PLATFORMS.map(({ id, label, Icon }) => (
        <button
          key={id}
          className={`platform-btn ${id} ${selected.includes(id) ? 'active' : ''}`}
          onClick={() => onToggle(id)}
        >
          <Icon />
          {label}
          {selected.includes(id) && (
            <span style={{ marginLeft: 4, fontSize: 10, opacity: 0.8 }}>✓</span>
          )}
        </button>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════
   OUTPUT TYPE SELECTOR
═══════════════════════════════════════ */
const OUTPUT_TYPES = [
  { id: 'image',    label: 'GRAPHIC',   icon: '🖼️'  },
  { id: 'video',    label: 'VIDEO',     icon: '🎬'  },
  { id: 'carousel', label: 'CAROUSEL',  icon: '🎠'  },
  { id: 'caption',  label: 'CAPTION',   icon: '✍️'  },
];

const OutputTypeSelector = ({ selected, onToggle }) => (
  <div>
    <p className="section-label">OUTPUT TYPE</p>
    <div style={{ display: 'flex', gap: '10px' }}>
      {OUTPUT_TYPES.map(({ id, label, icon }) => (
        <button
          key={id}
          className={`output-card ${selected.includes(id) ? 'active' : ''}`}
          onClick={() => onToggle(id)}
        >
          <span className="output-icon">{icon}</span>
          {label}
        </button>
      ))}
    </div>
  </div>
);

/* ═══════════════════════════════════════
   AI INPUT BOX
═══════════════════════════════════════ */
const AIInputBox = ({ value, onChange }) => (
  <div>
    <p className="section-label">DESCRIBE YOUR CAMPAIGN</p>
    <div className="ai-input-wrap">
      <textarea
        className="ai-textarea"
        rows={4}
        placeholder="Imagine Something... ✦˚  e.g. &quot;A luxury skincare brand launching a new vitamin C serum targeting millennials. Vibrant citrus tones, clean aesthetic, focus on glow and radiance...&quot;"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
      <div className="ai-input-toolbar">
        <div style={{ display:'flex', gap:4 }}>
          {/* Attach */}
          <button className="ai-tool-btn" title="Attach brand assets">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>
            </svg>
          </button>
          {/* Color palette */}
          <button className="ai-tool-btn" title="Brand colors">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="4"/>
              <line x1="21.17" y1="8" x2="12" y2="8"/><line x1="3.95" y1="6.06" x2="8.54" y2="14"/>
              <line x1="10.88" y1="21.94" x2="15.46" y2="14"/>
            </svg>
          </button>
          {/* Globe / URL */}
          <button className="ai-tool-btn" title="Link brand website">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </button>
        </div>
        <button className="ai-submit-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
          </svg>
          GENERATE
        </button>
      </div>
    </div>
  </div>
);

/* ═══════════════════════════════════════
   NAV
═══════════════════════════════════════ */
const Nav = () => {
  const [worksOpen, setWorksOpen] = useState(false);

  return (
    <nav style={{
      position:'relative', zIndex:50,
      display:'flex', justifyContent:'space-between', alignItems:'center',
      padding:'24px 48px',
    }}>
      {/* Left: wordmark */}
      <div style={{ display:'flex', alignItems:'center', gap:10 }}>
        <div style={{ width:28, height:28 }}>
          <PixelFlower color="#FFD700" size={28} />
        </div>
        <span style={{ fontFamily:'var(--mono)', fontSize:13, fontWeight:700, letterSpacing:'0.15em', color:'rgba(255,255,255,0.9)' }}>
          GRAPHICON
        </span>
      </div>

      {/* Center: links */}
      <div style={{ display:'flex', gap:36, alignItems:'center' }}>
        {['WORKS','ABOUT','PRICING'].map(item => (
          <span key={item} className="nav-link">{item}</span>
        ))}
      </div>

      {/* Right: CTA */}
      <button style={{
        fontFamily:'var(--mono)', fontSize:11, fontWeight:700, letterSpacing:'0.12em',
        padding:'9px 22px', borderRadius:12, cursor:'pointer',
        background:'transparent', border:'1px solid rgba(255,255,255,0.3)',
        color:'rgba(255,255,255,0.85)', transition:'all .2s',
      }}
        onMouseEnter={e=>{e.target.style.borderColor='rgba(255,215,0,0.6)';e.target.style.color='#FFD700';}}
        onMouseLeave={e=>{e.target.style.borderColor='rgba(255,255,255,0.3)';e.target.style.color='rgba(255,255,255,0.85)';}}
      >
        GET STARTED →
      </button>
    </nav>
  );
};

/* ═══════════════════════════════════════
   CAMPAIGN PANEL (Right side)
═══════════════════════════════════════ */
const CampaignPanel = () => {
  const [prompt, setPrompt]         = useState('');
  const [platforms, setPlatforms]   = useState([]);
  const [outputs, setOutputs]       = useState([]);
  const [generating, setGenerating] = useState(false);

  const togglePlatform = id => setPlatforms(p => p.includes(id) ? p.filter(x=>x!==id) : [...p, id]);
  const toggleOutput   = id => setOutputs(o => o.includes(id) ? o.filter(x=>x!==id) : [...o, id]);

  const canGenerate = prompt.trim().length > 10 && platforms.length > 0 && outputs.length > 0;

  const handleGenerate = () => {
    if (!canGenerate) return;
    setGenerating(true);
    setTimeout(() => setGenerating(false), 2800);
  };

  return (
    <div style={{
      width:'100%', maxWidth:520,
      background:'rgba(255,255,255,0.07)',
      backdropFilter:'blur(30px)',
      WebkitBackdropFilter:'blur(30px)',
      border:'1px solid rgba(255,255,255,0.15)',
      borderRadius:28,
      padding:32,
      display:'flex', flexDirection:'column', gap:28,
    }}>
      {/* Header */}
      <div>
        <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:8 }}>
          <span className="tag-pill"><span className="tag-dot" />LIVE</span>
          <span className="tag-pill">AI-POWERED</span>
        </div>
        <h2 style={{ fontFamily:'var(--serif)', fontSize:'clamp(22px,3vw,30px)', fontStyle:'italic', color:'#fff', lineHeight:1.2 }}>
          Create your campaign
        </h2>
        <p style={{ fontFamily:'var(--sans)', fontSize:13, color:'rgba(255,255,255,0.55)', marginTop:6, lineHeight:1.6 }}>
          Describe your brand story — we'll generate ready-to-post assets & captions.
        </p>
      </div>

      {/* AI Input */}
      <AIInputBox value={prompt} onChange={setPrompt} />

      {/* Platform selector */}
      <PlatformSelector selected={platforms} onToggle={togglePlatform} />

      {/* Output type */}
      <OutputTypeSelector selected={outputs} onToggle={toggleOutput} />

      {/* Divider */}
      <div style={{ height:'1px', background:'rgba(255,255,255,0.1)' }} />

      {/* Generate */}
      <button
        className="generate-btn"
        onClick={handleGenerate}
        disabled={!canGenerate || generating}
      >
        {generating
          ? '⚡ GENERATING YOUR ASSETS...'
          : canGenerate
            ? '✦ GENERATE CAMPAIGN ASSETS'
            : 'FILL IN DETAILS TO GENERATE'}
      </button>

      {/* Hint row */}
      {!canGenerate && (
        <p style={{ fontFamily:'var(--mono)', fontSize:10, color:'rgba(255,255,255,0.35)', textAlign:'center', marginTop:-16, letterSpacing:'0.08em' }}>
          {!prompt.trim() ? 'Start by describing your product or brand above' :
           platforms.length === 0 ? 'Select at least one platform' :
           'Choose at least one output type'}
        </p>
      )}
    </div>
  );
};

/* ═══════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════ */
const HomePage = () => {
  const flowerRefs = useRef([]);
  const [ready, setReady] = useState(false);

  useEffect(() => { setTimeout(() => setReady(true), 100); }, []);

  useEffect(() => {
    const onMove = e => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      flowerRefs.current.forEach((el, i) => {
        if (!el) return;
        const d = ((i % 4) + 1) * 0.4;
        const x = (cx - e.pageX) / 60 * d;
        const y = (cy - e.pageY) / 60 * d;
        el.style.transform = `translate(${x}px,${y}px)`;
      });
    };
    document.addEventListener('mousemove', onMove);
    return () => document.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <div style={{
      minHeight:'100vh', width:'100%',
      backgroundColor:'var(--blue-mid)', color:'#fff',
      display:'flex', flexDirection:'column',
      position:'relative', overflow:'hidden',
    }}>
      {/* Grid */}
      <div className="bg-grid" style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none' }} />

      {/* Radial glow spots */}
      <div style={{position:'absolute',top:'-20%',right:'-10%',width:600,height:600,borderRadius:'50%',background:'rgba(0,68,204,0.6)',filter:'blur(100px)',zIndex:0,pointerEvents:'none'}} />
      <div style={{position:'absolute',bottom:'-15%',left:'-5%',width:500,height:500,borderRadius:'50%',background:'rgba(0,34,120,0.5)',filter:'blur(80px)',zIndex:0,pointerEvents:'none'}} />

      {/* Floating background flowers */}
      <div style={{ position:'absolute', inset:0, zIndex:1, pointerEvents:'none', overflow:'hidden' }}>
        {BG_FLOWERS.map((f, i) => (
          <div
            key={i}
            ref={el => flowerRefs.current[i] = el}
            style={{
              position:'absolute',
              top:f.top, left:f.left, right:f.right, bottom:f.bottom,
              opacity:f.opacity,
              animation:`${f.anim} ${4 + i * 0.7}s ease-in-out ${f.delay} infinite`,
              transition:'transform 0.1s linear',
            }}
          >
            <PixelFlower color={f.color} size={f.size} />
          </div>
        ))}
      </div>

      {/* Nav */}
      <Nav />

      {/* Main split layout */}
      <main style={{
        flex:1, position:'relative', zIndex:20,
        display:'flex', alignItems:'center', justifyContent:'space-between',
        padding:'0 48px 60px',
        gap:40,
      }}>
        {/* LEFT: Hero title */}
        <div style={{ flex:'0 0 auto', maxWidth:580 }}>
          {/* Label */}
          <div className={`fade-up ${ready ? '' : 'fade-up'}`} style={{ opacity: ready ? 1 : 0, marginBottom:24 }}>
            <span style={{
              fontFamily:'var(--mono)', fontSize:11, fontWeight:700,
              letterSpacing:'0.25em', color:'rgba(255,255,255,0.55)',
              textTransform:'uppercase',
            }}>
              Social Media Campaign Automation
            </span>
          </div>

          {/* Giant name / wordmark */}
          <div className="fade-up delay-1" style={{ opacity: ready ? 1 : 0 }}>
            <h1 style={{
              fontFamily:'var(--serif)',
              fontStyle:'italic',
              fontSize:'clamp(64px,10vw,130px)',
              fontWeight:700,
              lineHeight:0.9,
              color:'#fff',
              letterSpacing:'-0.02em',
              display:'flex',
              alignItems:'flex-end',
            }}>
              <span>graph</span>
              <span style={{ width:'4vw', minWidth:32, maxWidth:64, height:'9vw', minHeight:55, maxHeight:120, display:'inline-block', margin:'0 2px', flexShrink:0 }}>
                <CenterFlower />
              </span>
              <span>con</span>
            </h1>
          </div>

          {/* Tagline */}
          <div className="fade-up delay-2" style={{ opacity: ready ? 1 : 0, marginTop:28 }}>
            <p style={{
              fontFamily:'var(--sans)',
              fontSize:'clamp(15px,1.6vw,19px)',
              color:'rgba(255,255,255,0.65)',
              lineHeight:1.7,
              maxWidth:460,
              fontWeight:300,
            }}>
              Describe your brand, pick your platforms — and watch AI craft scroll-stopping visuals, videos, carousels & captions in seconds.
            </p>
          </div>

          {/* Stats row */}
          <div className="fade-up delay-3" style={{ opacity: ready ? 1 : 0, display:'flex', gap:32, marginTop:40 }}>
            {[['10x','Faster creation'],['4','Platforms'],['∞','Output types']].map(([num, label]) => (
              <div key={num}>
                <div style={{ fontFamily:'var(--mono)', fontSize:28, fontWeight:700, color:'var(--gold)', lineHeight:1 }}>{num}</div>
                <div style={{ fontFamily:'var(--sans)', fontSize:12, color:'rgba(255,255,255,0.5)', marginTop:4 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Campaign Panel */}
        <div className="fade-up delay-4" style={{ opacity: ready ? 1 : 0, flex:'0 0 auto', width:'100%', maxWidth:500 }}>
          <CampaignPanel />
        </div>
      </main>

      {/* Footer */}
      <footer style={{
        position:'absolute', bottom:0, left:0, width:'100%',
        padding:'16px 48px',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        zIndex:30,
        borderTop:'1px solid rgba(255,255,255,0.07)',
      }}>
        <span style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.15em', color:'rgba(255,255,255,0.4)' }}>
          AVAILABLE FOR BRANDS · 2024
        </span>
        <span style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.15em', color:'rgba(255,255,255,0.4)', animation:'float-b 3s ease-in-out infinite' }}>
          ↓ SCROLL FOR MORE
        </span>
        <span style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.15em', color:'rgba(255,255,255,0.4)' }}>
          © 2024 GRAPHICON
        </span>
      </footer>
    </div>
  );
};

/* ═══════════════════════════════════════
   APP ROOT
═══════════════════════════════════════ */
const App = () => {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return <HomePage />;
};

export default App;
