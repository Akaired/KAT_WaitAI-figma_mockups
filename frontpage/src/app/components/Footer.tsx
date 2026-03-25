import { Shield, Mail, Twitter, Github, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer style={{
      background: '#0A0A0A',
      padding: '4rem 0 2rem',
      color: '#FFFFFF'
    }}>
      <div className="container">
        <div className="row g-5 mb-5">
          <div className="col-lg-4">
            <div className="d-flex align-items-center mb-3">
              <div style={{
                background: 'linear-gradient(135deg, #E31C79, #C5E063)',
                padding: '8px',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginRight: '12px'
              }}>
                <Shield size={24} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
              </div>
              <span style={{ fontWeight: '700', fontSize: '1.25rem' }}>Wait</span>
            </div>
            <p style={{
              color: '#A0A0A0',
              fontSize: '0.95rem',
              lineHeight: '1.6',
              marginBottom: '1.5rem'
            }}>
              Protezione intelligente contro la violenza online. 
              Sempre dalla tua parte, sempre attivi.
            </p>
            <div className="d-flex gap-3">
              {[
                { icon: Twitter, href: '#' },
                { icon: Github, href: '#' },
                { icon: Linkedin, href: '#' },
                { icon: Mail, href: '#' }
              ].map((social, i) => {
                const Icon = social.icon;
                return (
                  <a key={i} href={social.href} style={{
                    width: '40px',
                    height: '40px',
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#A0A0A0',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'linear-gradient(135deg, #E31C79, #C5E063)';
                    e.currentTarget.style.color = '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.color = '#A0A0A0';
                  }}>
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="col-lg-2 col-6">
            <h6 style={{ fontWeight: '600', marginBottom: '1rem', color: '#FFFFFF' }}>Prodotto</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Funzionalità', 'Prezzi', 'Sicurezza', 'API'].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{ color: '#A0A0A0', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-6">
            <h6 style={{ fontWeight: '600', marginBottom: '1rem', color: '#FFFFFF' }}>Azienda</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Chi siamo', 'Blog', 'Carriere', 'Press'].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{ color: '#A0A0A0', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-6">
            <h6 style={{ fontWeight: '600', marginBottom: '1rem', color: '#FFFFFF' }}>Risorse</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Documentazione', 'Guide', 'FAQ', 'Supporto'].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{ color: '#A0A0A0', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-2 col-6">
            <h6 style={{ fontWeight: '600', marginBottom: '1rem', color: '#FFFFFF' }}>Legale</h6>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {['Privacy', 'Termini', 'Cookie', 'Licenze'].map((item, i) => (
                <li key={i} style={{ marginBottom: '0.75rem' }}>
                  <a href="#" style={{ color: '#A0A0A0', textDecoration: 'none', fontSize: '0.9rem' }}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.1)',
          paddingTop: '2rem'
        }}>
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <p style={{ margin: 0, color: '#666', fontSize: '0.9rem' }}>
                © 2026 Wait. Tutti i diritti riservati.
              </p>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span style={{ color: '#666', fontSize: '0.9rem' }}>
                Made with ❤️ per un internet più sicuro
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
