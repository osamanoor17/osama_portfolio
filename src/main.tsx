import React from 'react';
import ReactDOM from 'react-dom/client';
import { MotionConfig } from 'framer-motion';
import '@fontsource/ibm-plex-mono/latin-400.css';
import App from './App';
import './styles/index.css';
import './styles/artwork.css';
import './styles/revamp.css';
import './styles/creative.css';
import './styles/cyberDeck.css';
import './styles/roadmapTimeline.css';

const origin = import.meta.env.VITE_SITE_URL?.replace(/\/$/, '');
const schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'Person', name: 'Muhammad Osama Noor', jobTitle: 'Software Engineer & Consultant', email: 'mosamanoor17@gmail.com', sameAs: ['https://github.com/osamanoor17', 'https://linkedin.com/in/mosamanoor', 'https://medium.com/@m.osamanoor'], ...(origin ? { url: origin } : {}) }); document.head.append(schema);
ReactDOM.createRoot(document.getElementById('root')!).render(<React.StrictMode><MotionConfig reducedMotion="user"><App /></MotionConfig></React.StrictMode>);

