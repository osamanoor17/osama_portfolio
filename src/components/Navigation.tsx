import { useEffect, useState } from 'react';
import { ArrowUpRight, X, Menu } from 'lucide-react';
import { links } from '../data/portfolio';
const items=[['about','About'],['work','Work'],['experience','Experience'],['capabilities','Capabilities'],['writing','Writing'],['contact','Contact']];
export function Navigation(){
 const [active,setActive]=useState('home'); const [open,setOpen]=useState(false);
 useEffect(()=>{const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting)setActive(e.target.id);},{rootMargin:'-15% 0px -65% 0px'});document.querySelectorAll('main > section[id]').forEach(e=>observer.observe(e));return()=>observer.disconnect();},[]);
 useEffect(()=>{if(!open)return; const old=document.body.style.overflow;document.body.style.overflow='hidden';const main=document.querySelector('main');main?.setAttribute('inert','');const key=(e:KeyboardEvent)=>{if(e.key==='Escape')setOpen(false);if(e.key==='Tab'){const focusable=Array.from(document.querySelectorAll<HTMLElement>('header a, header button')).filter(el=>el.getClientRects().length);const first=focusable[0],last=focusable[focusable.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}}};window.addEventListener('keydown',key);return()=>{document.body.style.overflow=old;main?.removeAttribute('inert');window.removeEventListener('keydown',key);};},[open]);
 return <header className={`navigation ${active!=='home'?'scrolled':''}`}><a className="wordmark" href="#home" aria-label="Muhammad Osama Noor, home" onClick={()=>setOpen(false)}>mon<span>✳</span></a><nav className="desktop-nav" aria-label="Main navigation">{items.map(([id,label])=><a key={id} href={`#${id}`} aria-current={active===id?'location':undefined}>{label}</a>)}</nav><a className="nav-contact" href={links.email}>Let’s talk <ArrowUpRight size={16}/></a><button className="mobile-toggle" aria-label={open?'Close navigation':'Open navigation'} aria-expanded={open} aria-controls="mobile-nav" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>{open&&<nav id="mobile-nav" className="mobile-nav" aria-label="Mobile navigation">{items.map(([id,label],i)=><a key={id} href={`#${id}`} onClick={()=>setOpen(false)}><span>0{i+1}</span>{label}<ArrowUpRight/></a>)}<p>MUHAMMAD OSAMA NOOR<br/>KARACHI, PAKISTAN</p></nav>}</header>;
}



