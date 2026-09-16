import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Building2, Calendar, ChevronRight, CheckCircle2, Zap } from 'lucide-react';
import { experience } from '../data/portfolio';

export interface Milestone {
  id: string;
  year: string;
  period: string;
  company: string;
  role: string;
  headline: string;
  summary: string;
  points: string[];
  tech: string[];
  badge: string;
  color: string;
}

export function AnimatedRoadmapTimeline() {
  const milestones: Milestone[] = [
    {
      id: '2023',
      year: '2023',
      period: 'AUG 2023 — FEB 2024',
      company: experience[2]?.company || 'Design Henge',
      role: experience[2]?.role || 'Junior Flutter Developer',
      headline: 'Application Foundations & Mobile Architecture',
      summary:
        'Engineered HRMS mobile features including announcements, payroll, leave requests, attendance location check-ins, and REST API integrations.',
      points: experience[2]?.points || [
        'Worked on HRMS mobile features including announcements, employee requests, leaves, payroll and tickets.',
        'Implemented attendance and location-based check-in/check-out workflows.',
        'Developed reusable UI components, integrated REST APIs and supported production debugging.',
      ],
      tech: experience[2]?.tech || ['Flutter', 'Dart', 'Provider', 'REST APIs'],
      badge: 'FOUNDATION',
      color: '#4ade80',
    },
    {
      id: '2024',
      year: '2024',
      period: 'JUN 2024 — AUG 2025',
      company: experience[1]?.company || 'KCompute Pvt. Ltd.',
      role: experience[1]?.role || 'Flutter Application Developer',
      headline: 'Cross-Platform Products & Scalable Mobile State',
      summary:
        'Built and scaled mobile applications for education and tech domains (Eduman, Ashreitech) using GetX and Provider state management with Firebase.',
      points: experience[1]?.points || [
        'Developed Flutter applications, including education-focused work on Eduman and Ashreitech.',
        'Integrated REST APIs and Firebase, with GetX and Provider for state management.',
        'Built reusable UI architecture and maintained production application features.',
      ],
      tech: experience[1]?.tech || ['Flutter', 'Dart', 'REST APIs', 'Firebase', 'GetX', 'Provider'],
      badge: 'SCALE',
      color: '#38bdf8',
    },
    {
      id: '2025',
      year: '2025',
      period: 'SEP 2025 — MAY 2026',
      company: experience[0]?.company || 'iConsult / ICA',
      role: experience[0]?.role || 'Associate Software Engineer / Consultancy',
      headline: 'Digital Banking Applications & Enterprise Consultancy',
      summary:
        'Delivered production React Native digital banking features, CBS/BDS workflows, LOS/AML data validation, and Grant Thornton Angular HRMS.',
      points: experience[0]?.points || [
        'Contributed to the React Native digital mobile banking application in a production team and supported post-launch activities.',
        'Worked with CBS and BDS workflows; participated in consultancy for onboarding, account maintenance and transactions.',
        'Supported LOS and AML-related analysis, documentation, SQL validation and UAT across Grant Thornton HRMS.',
      ],
      tech: experience[0]?.tech || ['React Native', 'CBS / BDS', 'SQL', 'UAT', 'Consulting'],
      badge: 'FINTECH & BANKING',
      color: '#fbbf24',
    },
    {
      id: '2026',
      year: '2026',
      period: '2026 — PRESENT',
      company: 'AI & Engineering Frontiers',
      role: 'Software Engineer & AI Specialist',
      headline: 'Agentic AI Systems, RAG Pipelines & Telemetry Directors',
      summary:
        'Architecting RAG legal/fintech assistants (Haqooq AI, TrustFin AI), Gemini telemetry game commanders (One-Bullet), and multilingual LLM tools.',
      points: [
        'Engineered Haqooq AI legal platform with RAG retrieval, ChromaDB vector store, and Groq LLM grounding.',
        'Developed One-Bullet AI Commander game with Gemini 2.0 telemetry director and dynamic tool parameter parser.',
        'Consulting on cross-platform mobile engineering, AI integration, and production enterprise workflows.',
      ],
      tech: ['Google Gemini 2.0', 'Groq LLM', 'RAG / LangChain', 'FastAPI', 'Flutter & Flame'],
      badge: 'AI & LEADERSHIP',
      color: '#d6ef80',
    },
  ];

  const [activeTab, setActiveTab] = useState<string>('2026');

  const current = milestones.find((m) => m.id === activeTab) || milestones[3];

  return (
    <div className="roadmap-container">
      {/* Top Node Hub & Bezier Tendrils (Image 1 Upgrade) */}
      <div className="roadmap-header-graphic">
        <svg
          viewBox="0 0 800 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="roadmap-header-svg"
        >
          {/* Subtle Outer Glow Filter */}
          <defs>
            <filter id="nodeGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
            <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#4ade80" />
              <stop offset="50%" stopColor="#d6ef80" />
              <stop offset="100%" stopColor="#38bdf8" />
            </linearGradient>
          </defs>

          {/* Outer curved tendril arms */}
          <path
            d="M 60 90 C 220 20, 320 20, 400 35 C 480 20, 580 20, 740 90"
            stroke="url(#lineGrad)"
            strokeWidth="3"
            strokeLinecap="round"
            className="roadmap-svg-path"
          />
          <path
            d="M 180 40 C 280 25, 340 30, 400 35 C 460 30, 520 25, 620 40"
            stroke="#d6ef80"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.6"
          />

          {/* Terminal node dots */}
          <circle cx="60" cy="90" r="7" className="roadmap-dot-main" />
          <circle cx="60" cy="90" r="3" fill="#d6ef80" />

          <circle cx="180" cy="40" r="4" fill="#4ade80" />

          <circle cx="740" cy="90" r="7" className="roadmap-dot-main" />
          <circle cx="740" cy="90" r="3" fill="#38bdf8" />

          <circle cx="620" cy="40" r="4" fill="#38bdf8" />

          {/* Center Concentric Node Hub (Matching Image 1) */}
          <circle cx="400" cy="35" r="22" fill="#111512" stroke="#d6ef80" strokeWidth="1.5" opacity="0.4" />
          <circle cx="400" cy="35" r="15" fill="#18241b" stroke="#4ade80" strokeWidth="2" filter="url(#nodeGlow)" />
          <circle cx="400" cy="35" r="7" fill="#d6ef80" />
          <circle cx="400" cy="35" r="2.5" fill="#0d0f12" />

          {/* Vertical Timeline Drop Line */}
          <line x1="400" y1="57" x2="400" y2="120" stroke="#d6ef80" strokeWidth="2.5" opacity="0.8" />
        </svg>
      </div>

      {/* Main Roadmap Banner & Ribbon Track */}
      <div className="roadmap-banner">
        <div className="roadmap-banner-header">
          <div className="roadmap-banner-title">
            <span className="roadmap-years-count">3+</span>
            <div className="roadmap-title-text">
              <h2>CAREER ROADMAP</h2>
              <p>2023 — 2026 // ENGINEERING EVOLUTION</p>
            </div>
          </div>

          <div className="roadmap-badge-pill">
            <Zap size={14} className="accent-icon" />
            <span>ACTIVE TIMELINE TRACK</span>
          </div>
        </div>

        {/* Curved Track & Year Nodes */}
        <div className="roadmap-track-wrapper">
          <svg className="roadmap-track-svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
            <path
              d="M 40 70 Q 250 15, 500 60 T 960 30"
              fill="none"
              stroke="#d6ef80"
              strokeWidth="4"
              strokeLinecap="round"
              className="roadmap-track-ribbon"
            />
            <path
              d="M 40 70 Q 250 15, 500 60 T 960 30"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.5"
              strokeDasharray="6 6"
              opacity="0.6"
              className="roadmap-track-dashed"
            />
          </svg>

          {/* Year Node Buttons */}
          <div className="roadmap-year-nodes">
            {milestones.map((m) => {
              const isActive = activeTab === m.id;
              return (
                <button
                  key={m.id}
                  className={`roadmap-node-btn ${isActive ? 'active' : ''}`}
                  onClick={() => setActiveTab(m.id)}
                  aria-label={`View ${m.year} experience milestone`}
                >
                  <div className="node-circle-outer">
                    {isActive && <div className="node-pulse-ring" />}
                    <div className="node-circle-inner">
                      <span>{m.year}</span>
                    </div>
                  </div>
                  <span className="node-company-label">{m.company}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Selected Milestone Detail Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            className="roadmap-detail-card"
            style={
              {
                '--milestone-color-dark': current.color,
                '--milestone-color-light':
                  current.id === '2023'
                    ? '#15803d'
                    : current.id === '2024'
                    ? '#0284c7'
                    : current.id === '2025'
                    ? '#b45309'
                    : '#354e13',
                '--milestone-bg-light':
                  current.id === '2023'
                    ? 'rgba(21, 128, 61, 0.1)'
                    : current.id === '2024'
                    ? 'rgba(2, 132, 199, 0.1)'
                    : current.id === '2025'
                    ? 'rgba(180, 83, 9, 0.1)'
                    : 'rgba(53, 78, 19, 0.1)',
              } as React.CSSProperties
            }
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -12, scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <div className="roadmap-card-glow-bar" />

            <div className="roadmap-detail-top">
              <div className="roadmap-detail-meta">
                <span className="roadmap-tag-badge">
                  {current.badge}
                </span>
                <span className="roadmap-period">
                  <Calendar size={14} /> {current.period}
                </span>
              </div>
              <span className="roadmap-year-watermark">{current.year}</span>
            </div>

            <div className="roadmap-detail-main">
              <div className="roadmap-company-info">
                <Building2 size={24} className="roadmap-company-icon" />
                <div>
                  <h3>{current.company}</h3>
                  <span className="roadmap-role-title">{current.role}</span>
                </div>
              </div>

              <h4 className="roadmap-headline">{current.headline}</h4>
              <p className="roadmap-summary">{current.summary}</p>

              <div className="roadmap-points">
                {current.points.map((pt, i) => (
                  <div key={i} className="roadmap-point-item">
                    <CheckCircle2 size={16} className="roadmap-check-icon" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              <div className="roadmap-tech-strip">
                <span className="roadmap-tech-label">CORE STACK:</span>
                <div className="roadmap-tech-pills">
                  {current.tech.map((t) => (
                    <span key={t} className="roadmap-tech-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Footer Navigation Steps */}
        <div className="roadmap-footer-nav">
          {milestones.map((m, idx) => (
            <button
              key={m.id}
              className={`roadmap-step-dot ${activeTab === m.id ? 'active' : ''}`}
              onClick={() => setActiveTab(m.id)}
            >
              <span className="step-num">0{idx + 1}</span>
              <span className="step-year">{m.year}</span>
              {idx < milestones.length - 1 && <ChevronRight size={13} className="step-arrow" />}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
