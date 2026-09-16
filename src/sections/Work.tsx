import { projects } from '../data/portfolio';
import type { Project } from '../data/portfolio';
import { Reveal, SectionLabel } from '../components/Reveal';
import { AdditionalWork } from '../components/AdditionalWork';
export function Work({onProject}:{onProject:(p:Project)=>void}) {
 return <section id="work" className="section work-section"><Reveal><SectionLabel number="02">SELECTED WORK</SectionLabel><div className="section-heading"><h2>Ideas made<br/><span className="muted">into interfaces.</span></h2><p>AI, mobile, web and data. Twelve projects, each built around a useful idea.</p></div></Reveal><AdditionalWork projects={projects} onProject={onProject}/></section>;
}

