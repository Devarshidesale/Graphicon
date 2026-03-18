import React from 'react'

const Footer = () => {
  return (
    <>
        {/* Footer */}
        <footer style={{
        position:'absolute', bottom:0, left:0, width:'100%',
        padding:'16px 48px',
        display:'flex', justifyContent:'space-between', alignItems:'center',
        zIndex:30,
        borderTop:'1px solid rgba(255,255,255,0.07)',
        }}>
        <span style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.15em', color:'rgba(255,255,255,0.4)' }}>
            AVAILABLE FOR Commudle · 2026
        </span>
        {/* <span style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.15em', color:'rgba(255,255,255,0.4)', animation:'float-b 3s ease-in-out infinite' }}>
            ↓ SCROLL FOR MORE
        </span> */}
        <span style={{ fontFamily:'var(--mono)', fontSize:10, letterSpacing:'0.15em', color:'rgba(255,255,255,0.4)' }}>
            © 2026 GRAPHICON
        </span>
        </footer>
    </>
  )
}

export default Footer