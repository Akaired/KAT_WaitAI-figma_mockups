import { ArrowRight, Check } from 'lucide-react';

const benefits = [
  'Prova gratuita di 30 giorni',
  'Nessuna carta di credito richiesta',
  'Cancellazione in qualsiasi momento',
  'Supporto 24/7 incluso'
];

export function CTASection() {
  return (
    <section style={{ 
      background: '#FFFFFF',
      padding: 'clamp(5rem, 12vh, 10rem) 0'
    }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="text-center p-5" style={{
              background: 'linear-gradient(135deg, rgba(227,28,121,0.05), rgba(197,224,99,0.05))',
              borderRadius: '24px',
              border: '2px solid #F0F0F0'
            }}>
              <h2 style={{
                fontSize: 'clamp(2rem, 5vw, 3rem)',
                fontWeight: '700',
                color: '#0A0A0A',
                marginBottom: '1.5rem',
                letterSpacing: '-0.01em',
                lineHeight: '1.2'
              }}>
                Pronto a proteggerti?
              </h2>
              <p style={{
                fontSize: '1.15rem',
                color: '#666',
                marginBottom: '2.5rem',
                maxWidth: '550px',
                margin: '0 auto 2.5rem'
              }}>
                Unisciti a migliaia di persone che ogni giorno navigano più sicure grazie a Wait
              </p>
              
              <div className="mb-4">
                <div className="row g-3 justify-content-center">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="col-md-6">
                      <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                        <div className="d-flex align-items-center justify-content-center me-2" style={{
                          width: '24px',
                          height: '24px',
                          background: 'linear-gradient(135deg, #E31C79, #C5E063)',
                          borderRadius: '50%',
                          flexShrink: 0
                        }}>
                          <Check size={14} style={{ color: '#FFFFFF' }} strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: '0.95rem', color: '#666', fontWeight: '500' }}>
                          {benefit}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <button className="btn btn-primary d-inline-flex align-items-center" style={{
                fontSize: '1.15rem',
                padding: '1.15rem 3rem',
                boxShadow: '0 12px 32px rgba(227,28,121,0.3)'
              }}>
                Inizia gratis ora
                <ArrowRight className="ms-2" size={20} />
              </button>
              
              <p style={{
                fontSize: '0.85rem',
                color: '#999',
                marginTop: '1.5rem',
                marginBottom: 0
              }}>
                Più di 100.000 persone si fidano di noi
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
