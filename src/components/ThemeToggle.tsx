import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';
export function ThemeToggle() {
 const [theme,setTheme]=useState(document.documentElement.dataset.theme || 'dark');
 useEffect(()=>{const media=matchMedia('(prefers-color-scheme: dark)');const sync=()=>{let saved;try{saved=localStorage.getItem('portfolio-theme');}catch{}if(saved!=='light'&&saved!=='dark')setTheme(media.matches?'dark':'light');};media.addEventListener('change',sync);return()=>media.removeEventListener('change',sync);},[]);
 useEffect(()=>{document.documentElement.dataset.theme=theme;document.querySelector('meta[name="theme-color"]')?.setAttribute('content',theme==='dark'?'#111210':'#f7f7f2');},[theme]);
 function toggle(){const next=theme==='dark'?'light':'dark';setTheme(next);try{localStorage.setItem('portfolio-theme',next);}catch{}}
 return <button className="icon-button theme-toggle" onClick={toggle} aria-label={theme==='dark'?'Switch to light mode':'Switch to dark mode'} title={theme==='dark'?'Switch to light mode':'Switch to dark mode'}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button>;
}
