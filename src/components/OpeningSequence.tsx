import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

/** A short visual introduction, never a loading gate. */
export function OpeningSequence() {
  const reduced = useReducedMotion();
  const [visible, setVisible] = useState(() => {
    try { return !sessionStorage.getItem('portfolio-introduced'); } catch { return true; }
  });
  useEffect(() => {
    try { sessionStorage.setItem('portfolio-introduced', '1'); } catch { /* Optional storage. */ }
    const timer = window.setTimeout(() => setVisible(false), 1700);
    return () => window.clearTimeout(timer);
  }, []);
  if (!visible || reduced) return null;
  return <motion.div className="opening-sequence" aria-hidden="true" initial={{clipPath:'inset(0 0 0 0)'}} animate={{clipPath:'inset(0 0 100% 0)'}} transition={{delay:1.05,duration:.6,ease:[.76,0,.24,1]}}>
    <span className="opening-index">MUHAMMAD OSAMA NOOR / PORTFOLIO</span>
    <motion.div initial={{opacity:0,y:35}} animate={{opacity:1,y:0}} transition={{duration:.5}} className="opening-word">Ideas into<span>interfaces. ✳</span></motion.div>
    <div className="opening-bottom"><span>ENGINEERING WITH INTENT</span><motion.i initial={{scaleX:0}} animate={{scaleX:1}} transition={{duration:.95}}/></div>
  </motion.div>;
}
