import { useState } from 'react';
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion';
import { ArrowDown, Code2, Cpu, Smartphone, Pause, Play } from 'lucide-react';
import { links } from '../data/portfolio';

const disciplines = [
  {
    name: 'AI systems',
    label: 'CONTEXT → INTELLIGENCE',
    icon: Cpu,
    code: [
      'context = await retrieve(query)',
      'answer = await model.generate(',
      '  context=context, language="human"',
      ')',
    ],
    nodes: ['RAG', 'Python', 'LLMs'],
    note: 'Grounded in context. Built to help.',
  },
  {
    name: 'Mobile',
    label: 'INTERACTION → EXPERIENCE',
    icon: Smartphone,
    code: [
      'Widget build(BuildContext context) {',
      '  return Experience(',
      '    madeFor: people,',
      '  );',
      '}',
    ],
    nodes: ['Flutter', 'Dart', 'Firebase'],
    note: 'Thoughtful interfaces. Connected systems.',
  },
  {
    name: 'Web & enterprise',
    label: 'WORKFLOWS → SOFTWARE',
    icon: Code2,
    code: [
      'const product = {',
      '  interface: "thoughtful",',
      '  workflows: "connected",',
      '  purpose: "useful"',
      '};',
    ],
    nodes: ['React', 'APIs', 'SQL'],
    note: 'The business process, made usable.',
  },
];

export function Hero() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduced = useReducedMotion();
  const x = useMotionValue(0),
    y = useMotionValue(0);
  const rotateY = useSpring(x, { stiffness: 75, damping: 22 }),
    rotateX = useSpring(y, { stiffness: 75, damping: 22 });
  const current = disciplines[active];

  return (
    <section id="home" className="creative-hero">
      <div className="hero-kicker">
        <span>
          <i /> SOFTWARE ENGINEER & CONSULTANT
        </span>
        <span>KARACHI, PK</span>
      </div>

      <div className="creative-hero-grid">
        <div className="creative-intro">
          <motion.p
            className="hero-introduction"
            initial={reduced ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
          >
            Hey, I’m <span className="hero-name-highlight">Muhammad Osama Noor</span>
          </motion.p>

          <h1 className="creative-title">
            {['I build', 'what’s', 'next.'].map((line, i) => (
              <span className="title-mask" key={line}>
                <motion.span
                  initial={reduced ? false : { y: '110%', rotate: 4 }}
                  animate={{ y: 0, rotate: 0 }}
                  transition={{
                    delay: 0.25 + i * 0.13,
                    duration: 0.85,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.7 }}
          >
            <p className="creative-description">
              Mobile experiences. Intelligent tools.
              <br />
              The systems that connect them.
            </p>
            <div className="creative-actions">
              <a className="button primary" href="#work">
                Explore my work <ArrowDown size={18} />
              </a>
              <a className="text-link" href={links.github} target="_blank" rel="noreferrer">
                Behind the code{' '}
              </a>
            </div>
          </motion.div>
        </div>

        <div
          className={`engineering-playground ${paused ? 'is-paused' : ''}`}
          onPointerMove={(event) => {
            if (event.pointerType === 'mouse' && !reduced && !paused) {
              const rect = event.currentTarget.getBoundingClientRect();
              x.set(((event.clientX - rect.left - rect.width / 2) / rect.width) * 12);
              y.set(-((event.clientY - rect.top - rect.height / 2) / rect.height) * 12);
            }
          }}
          onPointerLeave={() => {
            x.set(0);
            y.set(0);
          }}
        >
          <div className="playground-top">
            <span>THE ENGINEERING PLAYGROUND</span>
            <button
              onClick={() => {
                setPaused(!paused);
                x.set(0);
                y.set(0);
              }}
              aria-label={paused ? 'Play hero animation' : 'Pause hero animation'}
              aria-pressed={paused}
            >
              {paused ? <Play size={14} /> : <Pause size={14} />}
            </button>
          </div>
          <motion.div
            className="orbital-scene"
            style={reduced ? undefined : { rotateX, rotateY }}
          >
            <div className="orbit-grid" />
            <div className="orbital-rings">
              <i />
              <i />
              <i />
            </div>
            <div className="orbit-traveler">
              <b />
            </div>
            <div className="core-object">
              <div className="core-face">
                <Cpu size={58} strokeWidth={1.2} />
                <span>BUILD / CONNECT</span>
              </div>
            </div>
            <div className="floating-node floating-node-0">
              <i />
              01 <span>{current.nodes[0]}</span>
            </div>
            <div className="floating-node floating-node-1">
              <i />
              02 <span>{current.nodes[1]}</span>
            </div>
            <div className="floating-node floating-node-2">
              <i />
              03 <span>{current.nodes[2]}</span>
            </div>
            <div className="scene-coordinate">01 — 03 / {current.label}</div>
          </motion.div>
          <div className="code-window">
            <div className="code-window-top">
              <span>
                <i />
                <i />
                <i />
              </span>
              <span>
                osama / {active === 0 ? 'intelligence.py' : active === 1 ? 'experience.dart' : 'product.ts'}
              </span>
              <Code2 size={14} />
            </div>
            <div className="code-lines" aria-live="polite">
              {current.code.map((line, i) => (
                <div key={i}>
                  <span>{String(i + 1).padStart(2, '0')}</span>
                  <code>{line}</code>
                </div>
              ))}
            </div>
            <div className="code-note">
              <i />
              {current.note}
            </div>
          </div>
          <div
            className="discipline-switch"
            aria-label="Explore engineering disciplines"
          >
            {disciplines.map((discipline, i) => (
              <button
                key={discipline.name}
                aria-pressed={active === i}
                onClick={() => setActive(i)}
              >
                {discipline.name}
                {active === i && (
                  <motion.span
                    layoutId="discipline-active"
                    transition={{ duration: reduced ? 0 : 0.3 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="creative-hero-footer">
        <span>MUHAMMAD OSAMA NOOR</span>
        <span>MOBILE · AI · WEB · FINTECH</span>
        <a href="#professional-work">Explore the experience</a>
      </div>
    </section>
  );
}
