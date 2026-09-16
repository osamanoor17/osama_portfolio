import { useRef, type MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Cpu, ExternalLink, Github, Terminal } from 'lucide-react';
import type { Project } from '../data/portfolio';

export interface CyberArchitectureDeckProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

interface CyberCardData {
  id: string;
  number: string;
  category: string;
  name: string;
  description: string;
  architecture: { label: string; value: string }[];
  tech: string[];
  demo?: string;
  github?: string;
  projectRef?: Project;
}

export function CyberArchitectureDeck({ projects, onProjectSelect }: CyberArchitectureDeckProps) {
  const cyberCards: CyberCardData[] = [
    {
      id: 'haqooq',
      number: '01',
      category: 'AI / LEGAL-TECH PLATFORM',
      name: 'HAQOOQ AI',
      description:
        'AI-powered platform engineered for automated privacy policy analysis, Pakistani statutory law auditing, and legal contract verification. Implements NLP extraction, real-time risk alert detection, and generative source-grounded intelligence.',
      architecture: [
        { label: 'PLATFORMS', value: 'Web, Mobile, Python API' },
        { label: 'ENGINE', value: 'FastAPI / LangChain / ChromaDB' },
        { label: 'MODEL', value: 'Groq LLM / Llama-3 RAG' },
        { label: 'SECURITY', value: 'Encrypted Source Grounding' },
      ],
      tech: ['Python', 'FastAPI', 'LangChain', 'RAG', 'ChromaDB', 'Groq'],
      github: 'https://github.com/osamanoor17/Haqooq-AI',
    },
    {
      id: 'trustfin',
      number: '02',
      category: 'AI / FINTECH PLATFORM',
      name: 'TRUSTFIN AI',
      description:
        'Multilingual financial AI platform engineered for evidence-backed financial query auditing across English, Urdu, and Roman Urdu. Connects verified financial datasets with real-time risk evaluation and multi-format output generation.',
      architecture: [
        { label: 'PLATFORMS', value: 'Web, Python, Microservices' },
        { label: 'ENGINE', value: 'Python / LangChain / Grounding' },
        { label: 'LANGUAGES', value: 'English, Urdu, Roman Urdu' },
        { label: 'ACCURACY', value: 'Grounded Source Verification' },
      ],
      tech: ['Python', 'Multilingual AI', 'Source Grounding', 'Financial LLM'],
    },
    {
      id: 'onebullet',
      number: '03',
      category: 'AGENTIC AI / DEV PLATFORM',
      name: 'ONE-BULLET: AI COMMANDER',
      description:
        'Arcade gaming platform driven by a real-time Gemini AI Commander observing game-state telemetry and outputting executable dynamic wave interventions, enemy difficulty scaling, and timed hazard spawns via tool calling.',
      architecture: [
        { label: 'PLATFORMS', value: 'Android, iOS (Flutter & Flame)' },
        { label: 'ENGINE', value: 'Google Gemini 2.0 Flash / REST' },
        { label: 'INTERVENTION', value: 'Dynamic Wave & Hazard Director' },
        { label: 'SECURITY', value: 'Local Rule Fallback Engine' },
      ],
      tech: ['Flutter', 'Flame', 'Google Gemini 2.0', 'REST API'],
      github: 'https://github.com/osamanoor17/One-Bullet',
    },
    {
      id: 'sahara',
      number: '04',
      category: 'AI / ACCESSIBILITY / MOBILE',
      name: 'SAHARA AI',
      description:
        'Action-oriented Flutter application designed to make digital services accessible for elderly users and low-literacy individuals using voice-first AI and visual interaction pipelines.',
      architecture: [
        { label: 'PLATFORMS', value: 'Mobile (Flutter & Dart)' },
        { label: 'ENGINE', value: 'Groq API / Speech & Vision LLM' },
        { label: 'ACCESSIBILITY', value: 'Voice-First & Visual UX' },
        { label: 'INTERACTION', value: 'Low-Literacy Simplified Flow' },
      ],
      tech: ['Flutter', 'Dart', 'Groq API', 'Speech-to-Text', 'AI / LLM'],
    },
    {
      id: 'knockup',
      number: '05',
      category: 'MOBILE / AI MESSAGING',
      name: 'KNOCKUP',
      description:
        'Cross-platform Flutter messaging application featuring Firebase real-time infrastructure, contextual AI smart replies, and dedicated topic-oriented assistant agents.',
      architecture: [
        { label: 'PLATFORMS', value: 'Mobile (Flutter / Dart)' },
        { label: 'ENGINE', value: 'Firebase Realtime / Gemini & Groq' },
        { label: 'FEATURES', value: 'Smart Replies, Topic Agents' },
        { label: 'LATENCY', value: 'Sub-100ms WebSocket Sync' },
      ],
      tech: ['Flutter', 'Dart', 'Firebase', 'Gemini', 'Groq'],
    },
    {
      id: 'smarthire',
      number: '06',
      category: 'AI / RECRUITMENT PLATFORM',
      name: 'SMARTHIRE AI',
      description:
        'Document extraction and candidate evaluation platform matching resume profiles to job requirements through AST parsing, candidate scoring, and interview question generation.',
      architecture: [
        { label: 'PLATFORMS', value: 'Web, Node.js, MongoDB' },
        { label: 'ENGINE', value: 'Google Gemini / AST Parser' },
        { label: 'PIPELINE', value: 'Document → Context → Evaluation' },
        { label: 'FEATURES', value: 'Shortlist Analytics & Scoring' },
      ],
      tech: ['Google Gemini', 'MongoDB', 'Document Extraction'],
    },
  ];

  cyberCards.forEach((card) => {
    const matched = projects.find((p) => p.id === card.id);
    if (matched) {
      card.projectRef = matched;
      if (matched.demo) card.demo = matched.demo;
      if (matched.github) card.github = matched.github;
    }
  });

  return (
    <div className="cyber-deck-container">
      <div className="cyber-deck-header">
        <div className="cyber-deck-badge">
          <Terminal size={14} />
          <span>CYBER ARCHITECTURE SPECIFICATION DECK</span>
        </div>
        <p className="cyber-deck-subtext">
          High-performance AI platforms, mobile architectures, and automated system intelligence.
        </p>
      </div>

      <div className="cyber-deck-stack">
        {cyberCards.map((card, index) => (
          <CyberDeckCard
            key={card.id}
            card={card}
            index={index}
            onSelect={() => {
              if (card.projectRef) {
                onProjectSelect(card.projectRef);
              } else {
                onProjectSelect(projects.find((p) => p.id === card.id) || projects[0]);
              }
            }}
          />
        ))}
      </div>
    </div>
  );
}

function CyberDeckCard({
  card,
  index,
  onSelect,
}: {
  card: CyberCardData;
  index: number;
  onSelect: () => void;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    cardRef.current.style.setProperty('--mouse-x', `${x}px`);
    cardRef.current.style.setProperty('--mouse-y', `${y}px`);
    cardRef.current.style.setProperty('--mouse-x-pct', `${(x / rect.width) * 100}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      className="cyber-card"
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      style={{
        top: `calc(100px + ${index * 26}px)`,
      }}
    >
      <div className="cyber-card-tracer" />

      <div className="cyber-bracket cyber-bracket-tl" />
      <div className="cyber-bracket cyber-bracket-tr" />
      <div className="cyber-bracket cyber-bracket-bl" />
      <div className="cyber-bracket cyber-bracket-br" />

      <div className="cyber-card-grid">
        <div className="cyber-card-main">
          <div className="cyber-card-category">
            <span className="cyber-index-num">{card.number}</span>
            <span className="cyber-sep">//</span>
            <span className="cyber-cat-name">{card.category}</span>
          </div>

          <h3 className="cyber-card-title">{card.name}</h3>

          <p className="cyber-card-desc">{card.description}</p>

          <div className="cyber-card-actions">
            <button className="cyber-btn primary-cyber" onClick={onSelect}>
              <span>INSIDE THE PROJECT</span>
              <ArrowUpRight size={16} />
            </button>

            {card.github && (
              <a
                href={card.github}
                target="_blank"
                rel="noreferrer"
                className="cyber-btn outline-cyber"
                aria-label={`View ${card.name} source code on GitHub`}
              >
                <Github size={15} />
                <span>CODE</span>
              </a>
            )}

            {card.demo && (
              <a
                href={card.demo}
                target="_blank"
                rel="noreferrer"
                className="cyber-btn outline-cyber"
                aria-label={`Visit ${card.name} live website`}
              >
                <ExternalLink size={15} />
                <span>LIVE DEMO</span>
              </a>
            )}
          </div>
        </div>

        <div className="cyber-arch-box">
          <div className="cyber-arch-header">
            <span className="cyber-arch-tag">// ARCHITECTURE DETAILS</span>
            <Cpu size={14} className="cyber-arch-icon" />
          </div>

          <div className="cyber-arch-grid">
            {card.architecture.map((item, i) => (
              <div key={i} className="cyber-arch-row">
                <span className="cyber-arch-label">{item.label}</span>
                <span className="cyber-arch-value">{item.value}</span>
              </div>
            ))}
          </div>

          <div className="cyber-tech-tags">
            {card.tech.slice(0, 4).map((techItem) => (
              <span key={techItem} className="cyber-tech-tag">
                {techItem}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
