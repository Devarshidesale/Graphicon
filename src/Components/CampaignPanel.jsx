import React, { useState } from 'react';

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

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L2.25 2.25h6.918l4.257 5.627L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77z"/>
  </svg>
);

/* ═══════════════════════════════════════
   PLATFORM BUTTONS COMPONENT
═══════════════════════════════════════ */
const PLATFORMS = [
  { id: 'instagram', Icon: InstagramIcon },
  { id: 'linkedin',  Icon: LinkedInIcon  },
  { id: 'x',         Icon: XIcon         },
];

const PlatformSelector = ({ selected, onToggle }) => (
  <div>
    <p className="section-label" style={{fontFamily:'var(--sans)'}}>Target Platforms</p>
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
  { id: 'image',    label: 'GRAPHIC'  },
  { id: 'video',    label: 'VIDEO'  },
  { id: 'carousel', label: 'CAROUSEL'  },
  { id: 'caption',  label: 'CAPTION'  },
];

const OutputTypeSelector = ({ selected, onToggle }) => (
  <div>
    <p className="section-label" style={{ fontFamily:'var(--sans)' }}>Output Type</p>
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
    <p className="section-label" style={{ fontFamily:'var(--sans)' }}>Describe Your Campaign</p>
    <div className="ai-input-wrap">
      <textarea
        className="ai-textarea"
        rows={3}
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
      width:'100%', maxWidth:600,
      background:'rgba(255,255,255,0.15)',
      backdropFilter:'blur(16px)',
      WebkitBackdropFilter:'blur(16px)',
      border:'1px solid rgba(255,255,255,0.15)',
      borderRadius:28,
      padding:24,
      display:'flex', flexDirection:'column', gap:20,
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
          ? ' GENERATING YOUR ASSETS...'
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

export default CampaignPanel;
