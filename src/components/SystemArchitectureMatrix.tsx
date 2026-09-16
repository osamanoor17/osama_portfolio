import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Database,
  Globe,
  Layers,
  ShieldCheck,
  Zap,
  Smartphone,
  Server,
  Activity,
  CheckCircle2,
  Terminal,
  Sparkles,
  ChevronRight,
} from 'lucide-react';
import '../styles/systemMatrix.css';

interface ArchitectureNode {
  id: string;
  layer: 'client' | 'api' | 'ai' | 'data';
  title: string;
  subtitle: string;
  icon: any;
  tech: string[];
  metrics: { label: string; value: string }[];
  description: string;
  highlights: string[];
}

const architectureLayers: { id: 'client' | 'api' | 'ai' | 'data'; label: string; tag: string; icon: any }[] = [
  { id: 'client', label: 'CLIENT & INTERFACE LAYER', tag: 'LAYER 01', icon: Smartphone },
  { id: 'api', label: 'API & GATEWAY PIPELINE', tag: 'LAYER 02', icon: Server },
  { id: 'ai', label: 'INTELLIGENCE & REASONING ENGINE', tag: 'LAYER 03', icon: Cpu },
  { id: 'data', label: 'STORAGE & VECTOR PERSISTENCE', tag: 'LAYER 04', icon: Database },
];

const architectureNodes: ArchitectureNode[] = [
  {
    id: 'mobile-client',
    layer: 'client',
    title: 'Cross-Platform Mobile Suite',
    subtitle: 'Flutter, Dart, React Native',
    icon: Smartphone,
    tech: ['Flutter', 'React Native', 'GetX', 'Provider', 'BLoC'],
    metrics: [
      { label: 'FRAME RATE', value: '60 FPS Smooth UI' },
      { label: 'STATE SYNC', value: 'Reactive State Engine' },
      { label: 'SUPPORT', value: 'Android & iOS' },
    ],
    description:
      'High-performance cross-platform mobile architecture with reactive state management, modular component design, and responsive touch controls.',
    highlights: [
      'Built multi-client banking mobile apps (BAJK) with strict security standards',
      'Developed voice-first accessibility applications (Sahara AI) for low-literacy users',
      'Designed real-time gaming state loops with Flame game engine (One-Bullet)',
    ],
  },
  {
    id: 'web-client',
    layer: 'client',
    title: 'Enterprise Web & HRMS Systems',
    subtitle: 'Angular, React, TypeScript',
    icon: Globe,
    tech: ['Angular', 'React', 'TypeScript', 'CSS3', 'HTML5'],
    metrics: [
      { label: 'MODULARITY', value: 'Component Architecture' },
      { label: 'UX RATING', value: 'Accessible & Responsive' },
      { label: 'SCOPE', value: 'Enterprise Grant Thornton HRMS' },
    ],
    description:
      'Robust web application architecture engineered for corporate productivity, loan origination systems (LOS), and enterprise HR management.',
    highlights: [
      'Delivered Grant Thornton HRMS & productivity suite across Angular modules',
      'Constructed complex database assistance dashboards (SQL Helper)',
      'Optimized web interfaces for high-concurrency client navigation',
    ],
  },
  {
    id: 'fastapi-gateway',
    layer: 'api',
    title: 'High-Throughput REST & API Gateway',
    subtitle: 'Python FastAPI, Node.js, WebSockets',
    icon: Server,
    tech: ['FastAPI', 'Node.js', 'REST APIs', 'WebSockets', 'AsyncIO'],
    metrics: [
      { label: 'LATENCY', value: '< 45ms Response Time' },
      { label: 'CONCURRENCY', value: 'Async Event Loop' },
      { label: 'SECURITY', value: 'JWT & OAuth Verification' },
    ],
    description:
      'Asynchronous API routing layer handling secure request verification, payload validation, and real-time streaming sockets.',
    highlights: [
      'Built high-speed FastAPI endpoints for RAG document retrieval',
      'Integrated Firebase sub-100ms WebSocket sync for instant messaging (KnockUp)',
      'Constructed custom JSON/REST middleware pipelines for telemetry parsing',
    ],
  },
  {
    id: 'banking-gateway',
    layer: 'api',
    title: 'Core Banking & BDS Connectors',
    subtitle: 'CBS Integration, BDS Workflows, LOS & AML',
    icon: ShieldCheck,
    tech: ['CBS / BDS', 'LOS Workflows', 'AML Validation', 'UAT Testing'],
    metrics: [
      { label: 'COMPLIANCE', value: 'Banking & AML Audits' },
      { label: 'RELIABILITY', value: 'Zero-Data-Loss Pipeline' },
      { label: 'VERIFICATION', value: 'Strict SQL Validation' },
    ],
    description:
      'Consultancy & development integration for Core Banking Systems (CBS), customer onboarding, transaction validation, and Loan Origination System (LOS) workflows.',
    highlights: [
      'Participated in production client onboarding & transaction consultancy',
      'Executed SQL data validation & UAT auditing for anti-money laundering (AML)',
      'Mapped complex financial workflows into reliable application software',
    ],
  },
  {
    id: 'rag-engine',
    layer: 'ai',
    title: 'LangChain & Grounded RAG Pipeline',
    subtitle: 'LangChain, Groq LLM, Python NLP',
    icon: Cpu,
    tech: ['LangChain', 'Python', 'Groq API', 'RAG Engine', 'AST Parser'],
    metrics: [
      { label: 'ACCURACY', value: 'Source-Grounded Prompting' },
      { label: 'GROUNDING', value: 'Pakistani Statutory Laws' },
      { label: 'HALLUCINATION', value: 'Near-Zero Reduction' },
    ],
    description:
      'Retrieval-Augmented Generation (RAG) pipeline designed to extract, chunk, embed, and query domain-specific documents with strict source verification.',
    highlights: [
      'Engineered Haqooq AI to audit Pakistani legal codes with exact legal references',
      'Constructed TrustFin AI for evidence-backed multilingual financial query auditing',
      'Implemented AST parsing for automated document context & resume screening',
    ],
  },
  {
    id: 'agentic-ai',
    layer: 'ai',
    title: 'Gemini Agentic AI Commander',
    subtitle: 'Google Gemini 2.0 Flash, Function Calling',
    icon: Zap,
    tech: ['Google Gemini 2.0', 'Tool Calling', 'Telemetry Director', 'Fallback Engine'],
    metrics: [
      { label: 'INFERENCE', value: 'Real-Time Telemetry' },
      { label: 'DECISION', value: 'Structured Tool Calling' },
      { label: 'SAFETY', value: 'Rule-Based Local Fallback' },
    ],
    description:
      'Autonomous agentic decision engine consuming real-time telemetry and generating structured tool calls for dynamic interventions.',
    highlights: [
      'Engineered real-time game director outputting enemy difficulty & hazard spawns',
      'Built multi-turn conversational agents with custom system instructions',
      'Created local rule fallbacks to guarantee smooth execution under offline conditions',
    ],
  },
  {
    id: 'vector-store',
    layer: 'data',
    title: 'ChromaDB Vector Store & Embeddings',
    subtitle: 'ChromaDB, Semantic Embeddings, Document Chunking',
    icon: Database,
    tech: ['ChromaDB', 'Vector Search', 'Cosine Similarity', 'Embedding Pipeline'],
    metrics: [
      { label: 'SEARCH LATENCY', value: '< 15ms Similarity Search' },
      { label: 'RETRIEVAL', value: 'Top-K Semantic Chunking' },
      { label: 'INDEXING', value: 'Persistent Vector Index' },
    ],
    description:
      'High-speed vector persistence layer for semantic document indexing, similarity searches, and prompt context hydration.',
    highlights: [
      'Indexed statutory Pakistani legal texts for instant contextual retrieval',
      'Optimized document chunk size and overlap parameters for maximal relevance',
      'Integrated seamlessly with LangChain retrieval chains',
    ],
  },
  {
    id: 'db-cloud',
    layer: 'data',
    title: 'Relational & NoSQL Database Matrix',
    subtitle: 'SQL / MySQL, MongoDB, Firebase Firestore',
    icon: Layers,
    tech: ['SQL', 'MySQL', 'MongoDB', 'Firebase Firestore', 'Power BI'],
    metrics: [
      { label: 'SCHEMAS', value: 'Relational & Document DBs' },
      { label: 'ANALYTICS', value: 'Power BI & SQL Queries' },
      { label: 'SYNC', value: 'Realtime Document Listeners' },
    ],
    description:
      'Production database infrastructure spanning relational schema design (Careem DB), document stores (SmartHire AI MongoDB), and real-time cloud datastores.',
    highlights: [
      'Designed ride-hailing relational schemas & complex SQL query suites',
      'Managed MongoDB candidate profiles and recruitment analytics pipeline',
      'Built Power BI data visualizations and executive reporting models',
    ],
  },
];

const techMatrixCategories = [
  {
    name: 'AI & RAG ENGINEERING',
    icon: Cpu,
    skills: [
      { name: 'Python & FastAPI', level: 95, note: 'RAG Services & NLP Engines' },
      { name: 'LangChain & RAG', level: 92, note: 'Grounded Document Retrieval' },
      { name: 'ChromaDB Vector Store', level: 90, note: 'Semantic Embedding Search' },
      { name: 'Groq & Gemini APIs', level: 94, note: 'Agentic Tooling & LLM Prompts' },
    ],
  },
  {
    name: 'MOBILE & FRONTEND DECK',
    icon: Smartphone,
    skills: [
      { name: 'Flutter & Dart', level: 96, note: 'Cross-Platform Mobile Apps' },
      { name: 'React Native', level: 88, note: 'Digital Banking Production UI' },
      { name: 'Angular & React', level: 86, note: 'Enterprise HRMS & Web Apps' },
      { name: 'TypeScript & JavaScript', level: 92, note: 'Modular Architecture' },
    ],
  },
  {
    name: 'BANKING & ENTERPRISE SYSTEMS',
    icon: ShieldCheck,
    skills: [
      { name: 'CBS & BDS Workflows', level: 88, note: 'Onboarding & Transactions' },
      { name: 'LOS & AML Validation', level: 85, note: 'Loan & Risk Analysis' },
      { name: 'UAT & Quality Auditing', level: 90, note: 'Production Verification' },
      { name: 'SQL Query & Schema Design', level: 92, note: 'Relational Data Modeling' },
    ],
  },
  {
    name: 'DATABASE & DEPLOYMENT PIPELINE',
    icon: Database,
    skills: [
      { name: 'MySQL & Relational DBs', level: 90, note: 'Schema Architecture' },
      { name: 'MongoDB & Firestore', level: 88, note: 'NoSQL & Realtime Sync' },
      { name: 'Git & GitHub Workflows', level: 94, note: 'Version Control & CI' },
      { name: 'Power BI Analytics', level: 84, note: 'Data Visualization' },
    ],
  },
];

export function SystemArchitectureMatrix() {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(architectureNodes[4]); // Default RAG Engine
  const [activeTab, setActiveTab] = useState<'flow' | 'matrix'>('flow');

  return (
    <div className="system-matrix-container">
      {/* Matrix Mode Switcher Header */}
      <div className="system-matrix-header">
        <div className="matrix-title-group">
          <div className="matrix-badge">
            <Activity size={14} className="pulse-icon" />
            <span>SYSTEM ARCHITECTURE BLUEPRINT</span>
          </div>
          <h3>Full-Stack System Pipelines & Execution Matrix</h3>
          <p>
            An interactive breakdown of my software engineering capabilities: from client interfaces to high-throughput API gateways, grounded RAG LLM engines, and core banking infrastructure.
          </p>
        </div>

        <div className="matrix-tabs">
          <button
            className={`matrix-tab-btn ${activeTab === 'flow' ? 'active' : ''}`}
            onClick={() => setActiveTab('flow')}
          >
            <Layers size={15} />
            <span>ARCHITECTURE FLOW DIAGRAM</span>
          </button>
          <button
            className={`matrix-tab-btn ${activeTab === 'matrix' ? 'active' : ''}`}
            onClick={() => setActiveTab('matrix')}
          >
            <Sparkles size={15} />
            <span>TECH STACK PROFICIENCY MATRIX</span>
          </button>
        </div>
      </div>

      <AnimatePresence mode="wait">
        {activeTab === 'flow' ? (
          <motion.div
            key="flow-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="flow-view-layout"
          >
            {/* Left Side: Pipeline Diagram Layers */}
            <div className="pipeline-layers-column">
              {architectureLayers.map((layer) => {
                const LayerIcon = layer.icon;
                const layerNodes = architectureNodes.filter((n) => n.layer === layer.id);

                return (
                  <div key={layer.id} className="pipeline-layer">
                    <div className="layer-header">
                      <div className="layer-tag">
                        <LayerIcon size={12} />
                        <span>{layer.tag}</span>
                      </div>
                      <span className="layer-title">{layer.label}</span>
                    </div>

                    <div className="layer-nodes-grid">
                      {layerNodes.map((node) => {
                        const NodeIcon = node.icon;
                        const isSelected = selectedNode.id === node.id;

                        return (
                          <button
                            key={node.id}
                            className={`architecture-node-card ${isSelected ? 'selected' : ''}`}
                            onClick={() => setSelectedNode(node)}
                          >
                            <div className="node-icon-wrapper">
                              <NodeIcon size={18} />
                            </div>
                            <div className="node-info">
                              <h4>{node.title}</h4>
                              <span className="node-sub">{node.subtitle}</span>
                            </div>
                            <ChevronRight size={16} className="node-arrow" />
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Side: Selected Node Spec Inspector */}
            <div className="node-inspector-column">
              <div className="inspector-card">
                <div className="inspector-header">
                  <div className="inspector-badge">
                    <Terminal size={14} />
                    <span>INSPECTOR NODE SPECIFICATION</span>
                  </div>
                  <h3>{selectedNode.title}</h3>
                  <p className="inspector-sub">{selectedNode.subtitle}</p>
                </div>

                <div className="inspector-description">
                  <p>{selectedNode.description}</p>
                </div>

                {/* Metrics Grid */}
                <div className="inspector-metrics-grid">
                  {selectedNode.metrics.map((m, idx) => (
                    <div key={idx} className="metric-box">
                      <span className="metric-lbl">{m.label}</span>
                      <span className="metric-val">{m.value}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="inspector-tech-section">
                  <span className="section-micro-lbl">CORE TECHNOLOGIES & TOOLS</span>
                  <div className="inspector-tags">
                    {selectedNode.tech.map((t) => (
                      <span key={t} className="inspector-tag-chip">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Highlights */}
                <div className="inspector-highlights">
                  <span className="section-micro-lbl">REAL-WORLD PRODUCTION HIGHLIGHTS</span>
                  <ul>
                    {selectedNode.highlights.map((h, i) => (
                      <li key={i}>
                        <CheckCircle2 size={15} className="check-bullet" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="matrix-view"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="matrix-view-layout"
          >
            <div className="tech-matrix-grid">
              {techMatrixCategories.map((cat, idx) => {
                const CatIcon = cat.icon;
                return (
                  <div key={idx} className="matrix-cat-card">
                    <div className="cat-card-header">
                      <div className="cat-icon-box">
                        <CatIcon size={18} />
                      </div>
                      <h4>{cat.name}</h4>
                    </div>

                    <div className="cat-skills-list">
                      {cat.skills.map((skill, sIdx) => (
                        <div key={sIdx} className="skill-meter-row">
                          <div className="skill-title-meta">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-note">{skill.note}</span>
                          </div>
                          <div className="meter-track">
                            <motion.div
                              className="meter-fill"
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 0.8, delay: sIdx * 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
