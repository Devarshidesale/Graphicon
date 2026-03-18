import React, {useState} from "react";

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

export default PixelFlower;
