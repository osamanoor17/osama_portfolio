import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { ProjectVisual } from './ProjectVisual';
import { Reveal } from './Reveal';

export function AdditionalWork({projects,onProject}:{projects:Project[];onProject:(p:Project)=>void}) {
 return <div className="additional-work">{projects.map((p,i)=><Reveal key={p.id} className={`additional-project additional-${p.id}`}><button className="additional-image" onClick={()=>onProject(p)} aria-label={`Explore ${p.name} case study`}><ProjectVisual project={p}/></button><div className="additional-copy"><span className="eyebrow">{String(i+1).padStart(2,'0')} / {p.category}</span><h3>{p.name}</h3><p className="additional-headline">{p.headline}</p><div className="project-actions"><button className="text-link" onClick={()=>onProject(p)}>Explore project <ArrowUpRight size={17}/></button>{p.demo&&<a className="text-link additional-external" href={p.demo} target="_blank" rel="noreferrer">Live website <ArrowUpRight size={17}/></a>}{p.github&&<a className="text-link additional-external" href={p.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={17}/></a>}{p.externalLinks?.map(link=><a className="text-link additional-external" key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} <ArrowUpRight size={17}/></a>)}</div></div></Reveal>)}</div>;
}




