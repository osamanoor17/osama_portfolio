import { Award, ArrowUpRight } from 'lucide-react';
import { Reveal } from './Reveal';
import { certifications } from '../data/certifications';
export function Certifications(){return <Reveal className="certifications"><div className="certification-heading"><div><span className="eyebrow">SELECTED CERTIFICATIONS</span><h3>Learning that supports the work.</h3></div><a className="text-link" href="https://www.linkedin.com/in/mosamanoor/details/certifications/" target="_blank" rel="noreferrer">View on LinkedIn <ArrowUpRight size={17}/></a></div><div className="certification-grid">{certifications.map(c=><article className="certification-card" key={c.title}><Award size={24} strokeWidth={1.5} aria-hidden="true"/><span className="eyebrow">{c.topic}</span><h4>{c.title}</h4>{c.issuer&&<p>{c.issuer}</p>}{c.issued&&<span className="certification-date">Issued {c.issued}</span>}</article>)}</div></Reveal>;}


