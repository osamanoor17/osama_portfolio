import { Award } from 'lucide-react';
import { Reveal } from './Reveal';
import { certifications } from '../data/certifications';

export function Certifications() {
  return (
    <section id="certifications" className="certifications-section">
      <Reveal className="certifications">
        <div className="certification-heading">
          <div>
            <span className="eyebrow">SELECTED CERTIFICATIONS</span>
            <h3>Learning that supports the work.</h3>
          </div>
        </div>

        <div className="certification-grid">
          {certifications.map((c) => (
            <article className="certification-card direct-cert-card" key={c.id || c.title}>
              <div className="cert-img-box-direct">
                <img
                  className="certification-image-direct"
                  src={c.image}
                  alt={c.imageAlt}
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="certification-copy">
                <Award size={22} strokeWidth={1.5} className="cert-award-icon" />
                <span className="eyebrow">{c.topic}</span>
                <h4>{c.title}</h4>
                {c.issuer && <p className="cert-issuer-name">{c.issuer}</p>}
                {c.issued && <span className="certification-date">Issued {c.issued}</span>}
              </div>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
