import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Building2, Layers3 } from 'lucide-react';
import { Reveal } from '../components/Reveal';
import { companyProjects } from '../data/companyProjects';
export function ProfessionalWork(){
 const [active,setActive]=useState(companyProjects[0].id);
 const reduced=useReducedMotion();
 const company=companyProjects.find(c=>c.id===active)!;
 return <section id="professional-work" className="section office-section">
  <Reveal><div className="section-label"><span>02 /</span>BEYOND PERSONAL PROJECTS</div><div className="office-heading"><h2>Real teams.<br/>Real <span>products.</span></h2><div><p>Software I’ve contributed to inside companies — from employee experiences to banking systems.</p><a className="text-link" href="#experience">View career timeline </a></div></div></Reveal>
  <div className="office-layout"><div className="company-selector"><span className="eyebrow">THE COMPANIES</span><div role="tablist" aria-label="Company projects" aria-orientation="vertical">{companyProjects.map((c,i)=><button key={c.id} id={'company-tab-'+c.id} role="tab" aria-selected={active===c.id} aria-controls="company-project-panel" tabIndex={active===c.id?0:-1} onKeyDown={event=>{if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();const index=event.key==='Home'?0:event.key==='End'?companyProjects.length-1:(i+(event.key==='ArrowDown'?1:-1)+companyProjects.length)%companyProjects.length;setActive(companyProjects[index].id);document.getElementById('company-tab-'+companyProjects[index].id)?.focus();}}} onClick={()=>setActive(c.id)}><span className="company-number">0{i+1}</span><span>{c.name}<small>{c.projects.length} PRODUCTS</small></span></button>)}</div><div className="office-footnote"><Building2 size={20}/><p>Team contributions.<br/>Individual ownership described per project.</p></div></div>
  <div id="company-project-panel" role="tabpanel" aria-labelledby={'company-tab-'+company.id} tabIndex={0}>
   <AnimatePresence mode="wait"><motion.div key={company.id} initial={reduced?false:{opacity:0,y:22,filter:'blur(5px)'}} animate={{opacity:1,y:0,filter:'blur(0px)'}} exit={{opacity:0,y:-12,filter:reduced?'none':'blur(4px)'}} transition={{duration:reduced?0:.25}}>
    <div className="company-overview"><div><span className="eyebrow">{company.period}</span><h3>{company.name}</h3><span className="company-role">{company.role}</span></div><Layers3 size={38} strokeWidth={1}/><p>{company.summary}</p></div>
    <div className="office-project-grid">{company.projects.map((project,i)=><article className="office-project" key={project.name}><div className="office-project-top"><span>0{i+1}</span><span>{project.kind}</span></div><h4>{project.website ? <a className="organization-link" href={project.website} target="_blank" rel="noopener noreferrer" title="Visit official website">{project.name}</a> : project.name}</h4><p>{project.summary}</p><details><summary>My contribution <span>+</span></summary><div className="office-contribution"><p>{project.contribution}</p>{project.stack&&<div className="tags">{project.stack.map(t=><span key={t}>{t}</span>)}</div>}</div></details></article>)}</div>
   </motion.div></AnimatePresence>
  </div></div>
 </section>;
}
