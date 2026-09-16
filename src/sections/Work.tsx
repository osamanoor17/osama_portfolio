import { useState } from 'react';
import { GitFork, LayoutGrid } from 'lucide-react';
import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { Reveal, SectionLabel } from '../components/Reveal';
import { AdditionalWork } from '../components/AdditionalWork';
import { ProjectVisual } from '../components/ProjectVisual';
import { SystemArchitectureMatrix } from '../components/SystemArchitectureMatrix';

const selected = ['haqooq', 'knockup', 'smarthire'];
const filters = ['All', 'AI', 'Mobile', 'Web & data'];

export function Work({ onProject }: { onProject: (p: Project) => void }) {
  const [filter, setFilter] = useState('All');
  const [viewMode, setViewMode] = useState<'matrix' | 'classic'>('matrix');

  const archive = projects
    .filter((p) => !selected.includes(p.id))
    .filter(
      (p) =>
        filter === 'All' ||
        (filter === 'AI'
          ? p.category.includes('AI')
          : filter === 'Mobile'
          ? p.category.includes('MOBILE')
          : !p.category.includes('AI') && !p.category.includes('MOBILE'))
    );

  return (
    <section id="work" className="section work-section">
      <Reveal>
        <SectionLabel number="01">SELECTED WORK</SectionLabel>
        <div className="section-heading">
          <div>
            <h2>
              Useful ideas.
              <br />
              <span className="muted">Considered execution.</span>
            </h2>
          </div>
          <div>
            <p>
              A closer look at my work in AI and mobile engineering. The product, the decisions and my architecture details.
            </p>
            <div className="view-mode-toggle" style={{ marginTop: '16px' }}>
              <button
                className="view-mode-btn"
                aria-pressed={viewMode === 'matrix'}
                onClick={() => setViewMode('matrix')}
              >
                <GitFork size={14} />
                <span>SYSTEM ARCHITECTURE & TECH MATRIX</span>
              </button>
              <button
                className="view-mode-btn"
                aria-pressed={viewMode === 'classic'}
                onClick={() => setViewMode('classic')}
              >
                <LayoutGrid size={14} />
                <span>FEATURED CARDS STACK</span>
              </button>
            </div>
          </div>
        </div>
      </Reveal>

      {viewMode === 'matrix' ? (
        <SystemArchitectureMatrix />
      ) : (
        <div className="featured-stories">
          {selected.map((id, i) => {
            const p = projects.find((proj) => proj.id === id)!;
            return (
              <Reveal className="featured-story" key={id}>
                <button
                  className="featured-image"
                  onClick={() => onProject(p)}
                  aria-label={'Explore ' + p.name + ' case study'}
                >
                  <ProjectVisual project={p} />
                </button>
                <div className="featured-copy">
                  <span className="eyebrow">
                    0{i + 1} / {p.category}
                  </span>
                  <h3>{p.name}</h3>
                  <p>{p.description}</p>
                  <div className="tags">
                    {p.tech.slice(0, 4).map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                  <button className="text-link" onClick={() => onProject(p)}>
                    Inside the project{' '}
                  </button>
                </div>
              </Reveal>
            );
          })}
        </div>
      )}

      <div className="archive-intro">
        <h3>
          More things I’ve built
          <span>{projects.length - selected.length} PROJECTS</span>
        </h3>
        <div className="work-filters" aria-label="Filter projects">
          {filters.map((f) => (
            <button key={f} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f}
            </button>
          ))}
        </div>
      </div>
      <p className="filter-count" aria-live="polite">
        {archive.length} projects · {filter}
      </p>
      <AdditionalWork projects={archive} onProject={onProject} />
    </section>
  );
}
