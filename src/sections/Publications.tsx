
import { Reveal, SectionLabel } from '../components/Reveal';
import { publications } from '../data/publications';
import { links } from '../data/portfolio';
export function Publications(){return <section id="writing" className="section publications"><Reveal><SectionLabel number="06">SELECTED WRITING</SectionLabel><div className="section-heading"><h2>Beyond the code.<br/><span className="muted">A little perspective.</span></h2><p>Experiments, practical tools and reflections on building with AI.</p></div></Reveal><div className="publication-grid">{publications.map((article,i)=><Reveal key={article.url}><a className="publication-card" href={article.url} target="_blank" rel="noreferrer"><div className="publication-top"><span className="eyebrow">MEDIUM / {String(i+1).padStart(2,'0')}</span></div><span className="publication-topic">{article.topic}</span><h3>{article.title}</h3><p>{article.summary}</p><span className="publication-read">Read article </span></a></Reveal>)}</div><Reveal><a className="text-link publication-all" href={links.medium} target="_blank" rel="noreferrer">All writing on Medium </a></Reveal></section>;}

