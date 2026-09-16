import { useEffect, useRef } from 'react';
import { useReducedMotion } from 'framer-motion';
const routes = [
 'M 70 150 C 155 150 220 90 300 100',
 'M 530 150 C 445 150 380 90 300 100',
 'M 160 60 C 215 60 235 100 300 100',
 'M 440 60 C 385 60 365 100 300 100',
 'M 300 100 L 300 255',
];
export function ConnectionFlow({paused,labels}:{paused:boolean;labels:string[]}) {
 const ref=useRef<SVGSVGElement>(null);
 const reduced=useReducedMotion();
 useEffect(()=>{if(paused||reduced)ref.current?.pauseAnimations();else ref.current?.unpauseAnimations();},[paused,reduced]);
 return <svg ref={ref} className="connection-flow" viewBox="0 0 600 300" fill="none" aria-hidden="true">
  {routes.map((path,i)=><path key={path} d={path} className={i<2?'flow-wire flow-wire-main':'flow-wire'}/>)}
  <circle cx="70" cy="150" r="7" className="flow-end"/><circle cx="530" cy="150" r="7" className="flow-end"/>
  <circle cx="160" cy="60" r="5" className="flow-source"/><circle cx="440" cy="60" r="5" className="flow-source"/>
  {!reduced&&routes.map((path,i)=><circle key={path} r={i<2?4:3} className="flow-packet"><animateMotion dur={i===4?'2.8s':'4s'} begin={String(-i*.8)+'s'} repeatCount="indefinite" path={path}/></circle>)}
  <circle cx="300" cy="100" r="31" className="flow-halo"/>
  {!reduced&&<circle cx="300" cy="100" r="26" className="flow-pulse"><animate attributeName="r" values="26;43" dur="2.8s" repeatCount="indefinite"/><animate attributeName="opacity" values=".4;0" dur="2.8s" repeatCount="indefinite"/></circle>}
  <circle cx="300" cy="100" r="24" className="flow-hub"/><circle cx="300" cy="100" r="6" className="flow-center"/>
  <rect x="245" y="237" width="110" height="36" rx="9" className="flow-label-box"/>
  <text x="70" y="180" className="flow-label">{labels[0]}</text><text x="530" y="180" className="flow-label">{labels[1]}</text><text x="300" y="259" className="flow-label">{labels[2]}</text>
 </svg>;
}
