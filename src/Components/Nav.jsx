import React, { useState } from 'react';
import PixelFlower from './PixelFlower';
import {Link, NavLink} from 'react-router-dom';

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
      <style>{`
        .nav-link.active { color: #fff; }
        .nav-link.active::after { width: 100%; }
      `}</style>
      <div style={{ display:'flex', gap:36, alignItems:'center' }}>
        {['HOME','WORKS'].map(item => (
          <NavLink 
            key={item} 
            to={item === 'HOME' ? '/' : `/${item.toLowerCase()}`}
            className={({isActive}) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {item}
          </NavLink>
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

export default Nav;
