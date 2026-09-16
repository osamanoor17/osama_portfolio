import { useState } from 'react';
import { OpeningSequence } from './components/OpeningSequence';
import { Navigation } from './components/Navigation';
import { CaseStudy } from './components/CaseStudy';
import { ProfessionalWork } from './sections/ProfessionalWork';
import { Hero } from './sections/Hero';
import { Identity } from './sections/Identity';
import { Work } from './sections/Work';
import { Experience } from './sections/Experience';
import { Capabilities,Intersection } from './sections/Capabilities';
import { Publications } from './sections/Publications';
import { Contact } from './sections/Contact';
import type { Project } from './data/portfolio';
export default function App(){const[project,setProject]=useState<Project|null>(null);return <><a className="skip-link" href="#main">Skip to content</a><OpeningSequence/><Navigation/><main id="main"><Hero/><Work onProject={setProject}/><ProfessionalWork/><Identity/><Experience/><Intersection/><Capabilities/><Publications/><Contact/></main><CaseStudy project={project} onClose={()=>setProject(null)}/></>;}


