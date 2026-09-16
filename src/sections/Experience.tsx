import { useState } from 'react';
import { Plus, Minus, Route, List } from 'lucide-react';
import { experience } from '../data/portfolio';
import { Reveal, SectionLabel } from '../components/Reveal';
import { AnimatedRoadmapTimeline } from '../components/AnimatedRoadmapTimeline';

export function Experience() {
  const [active, setActive] = useState(0);
  const [viewMode, setViewMode] = useState<'roadmap' | 'classic'>('roadmap');

  return (
    <section id="experience" className="section experience">
      <Reveal>
        <SectionLabel number="04">PROFESSIONAL EXPERIENCE</SectionLabel>
        <div className="section-heading">
          <div>
            <h2>
              Built through
              <br />
              <span className="muted">experience.</span>
            </h2>
          </div>
          <div>
            <p>
              From mobile interfaces to the complexity of banking systems. Working independently, and as part of a team.
            </p>
            <div className="view-mode-toggle" style={{ marginTop: '16px' }}>
              <button
                className="view-mode-btn"
                aria-pressed={viewMode === 'roadmap'}
                onClick={() => setViewMode('roadmap')}
              >
                <Route size={14} />
                <span>ROADMAP TRACK</span>
              </button>
              <button
                className="view-mode-btn"
                aria-pressed={viewMode === 'classic'}
                onClick={() => setViewMode('classic')}
              >
                <List size={14} />
                <span>TIMELINE LIST</span>
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {viewMode === 'roadmap' ? (
        <AnimatedRoadmapTimeline />
      ) : (
        <div className="experience-layout">
          <div className="experience-intro">
            <h2>
              Career
              <br />
              <span className="muted">Timeline</span>
            </h2>
            <p>
              Detailed breakdown of company projects, roles, and software delivery milestones.
            </p>
            <span className="eyebrow">KARACHI, PAKISTAN</span>
          </div>
          <div className="timeline">
            {experience.map((e, i) => (
              <article className={`experience-item ${active === i ? 'active' : ''}`} key={e.company}>
                <button
                  onClick={() => setActive(active === i ? -1 : i)}
                  aria-expanded={active === i}
                  aria-controls={`experience-${i}`}
                >
                  <span className="timeline-dot" />
                  <span className="eyebrow">{e.date}</span>
                  <h3>{e.company}</h3>
                  <span className="experience-role">{e.role}</span>
                  {active === i ? (
                    <Minus className="experience-toggle" size={20} />
                  ) : (
                    <Plus className="experience-toggle" size={20} />
                  )}
                </button>
                <div id={`experience-${i}`} hidden={active !== i} className="experience-detail">
                  <p>{e.summary}</p>
                  <ul>
                    {e.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                  <div className="tags">
                    {e.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
