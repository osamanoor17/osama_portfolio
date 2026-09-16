import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import type { Project } from '../data/portfolio';
import { ProjectVisual } from './ProjectVisual';
export function CaseStudy({project,onClose}:{project:Project|null;onClose:()=>void}) {
 const ref=useRef<HTMLDialogElement>(null);
 useEffect(()=>{const dialog=ref.current;if(!project||!dialog)return;const previous=document.activeElement as HTMLElement;dialog.showModal();const old=document.body.style.overflow;document.body.style.overflow='hidden';return()=>{dialog.close();document.body.style.overflow=old;previous?.focus();};},[project]);
 return <dialog ref={ref} className="case-dialog" aria-labelledby="case-title" onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget)onClose();}}>{project&&<article className="case-body"><div className="case-top"><span className="eyebrow">PROJECT NOTES / {project.category}</span><button autoFocus onClick={onClose} className="icon-button" aria-label="Close case study"><X/></button></div><h2 id="case-title">{project.name}</h2>{project.image && <figure className="case-artwork"><ProjectVisual project={project} detail/><figcaption>{project.imageCredit === "screenshot" ? (project.id === "driving" ? "Captured from the supplied live website" : "Application screenshot supplied by Muhammad Osama Noor") : project.imageCredit === "adapted" ? (project.id === "driving" ? "Studio mockup adapted from the live website capture" : project.id === "smarthire" ? "Supplied product mockup with blue interface accents" : (["knockup","sql","shop"].includes(project.id) ? `Refined concept based on the supplied ${project.name} screens` : "Product presentation adapted from the supplied Sahara interface")) : project.imageCredit === "supplied" ? (project.id === "onebullet" ? "Gameplay showcase from the One-Bullet repository" : "Project artwork supplied by Muhammad Osama Noor") : "AI-generated conceptual artwork · not an application screenshot"}</figcaption>{project.imageCredit === "screenshot" && <a className="screenshot-full" href={project.image} target="_blank" rel="noreferrer">Open full-size overview </a>}</figure>}{project.screenshots?.map(screen=><figure className="case-screenshot" key={screen.src}><figcaption>{screen.label}</figcaption><a href={screen.src} target="_blank" rel="noreferrer" aria-label={`Open full-size ${screen.label}`}><img src={screen.src} alt={screen.alt} width={screen.width} height={screen.height} loading="lazy" decoding="async"/></a><a className="screenshot-full" href={screen.src} target="_blank" rel="noreferrer">Open full-size screenshot </a></figure>)}<p className="case-lead">{project.description}</p>{project.approach&&<div className="case-section"><h3>Approach & experience</h3><p>{project.approach}</p></div>}<div className="case-section"><h3>Engineering contribution</h3><p>{project.contribution}</p></div><div className="case-section"><h3>Key capabilities</h3><ul>{project.capabilities.map(c=><li key={c}>{c}</li>)}</ul></div><div className="case-section"><h3>Technology & concepts</h3><div className="tags">{project.tech.map(t=><span key={t}>{t}</span>)}</div></div>{project.github&&<a className="button" href={project.github} target="_blank" rel="noreferrer">View repository </a>}{project.demo&&<a className="button" href={project.demo} target="_blank" rel="noreferrer">Explore live website </a>}{project.externalLinks?.map(link=><a className="button" key={link.url} href={link.url} target="_blank" rel="noreferrer">{link.label} </a>)}<div className="case-foot">Selected project · Muhammad Osama Noor</div></article>}</dialog>;
}










