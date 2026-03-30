import { MessageCircle, Download, ShieldCheck, ArrowRight } from 'lucide-react';

export function Dashboard() {
  return (
    <main style={{
      marginLeft: '240px',
      flex: 1,
      padding: '2.5rem',
      minHeight: '100vh'
    }}>
      {/* Greeting */}
      <div className="mb-4">
        <h1 style={{ fontSize: '2.5rem', fontWeight: '700', color: '#0A0A0A', margin: 0 }}>
          Dashboard
        </h1>
        <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>
          Wait sta monitorando la tua attività online
        </p>
      </div>

      {/* Main Stats Card */}
      <div className="mb-4">
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '3rem 3rem 2.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          textAlign: 'center',
          border: '1px solid #F0F0F0'
        }}>
          <div style={{
            fontSize: 'clamp(5rem, 10vw, 8rem)',
            fontWeight: '700',
            color: '#0A0A0A',
            lineHeight: '1',
            marginBottom: '1rem'
          }}>
            0
          </div>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '500',
            color: '#666',
            marginBottom: '1.5rem'
          }}>
            minacce rilevate oggi
          </div>
          
          {/* Progress bar */}
          <div style={{
            maxWidth: '500px',
            margin: '0 auto 1.5rem',
            padding: '0 1rem'
          }}>
            <div style={{
              width: '100%',
              height: '6px',
              background: '#F0F0F0',
              borderRadius: '100px',
              overflow: 'hidden',
              marginBottom: '0.75rem'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                background: 'linear-gradient(90deg, #28CA42, #C5E063)'
              }} />
            </div>
            <p style={{
              fontSize: '0.9rem',
              color: '#999',
              margin: 0
            }}>
              Nessuna attività sospetta nelle ultime 24h
            </p>
          </div>
          
          <div className="d-flex justify-content-center align-items-center gap-2">
            <ShieldCheck size={20} style={{ color: '#28CA42' }} strokeWidth={2.5} />
            <span style={{ fontSize: '0.95rem', color: '#28CA42', fontWeight: '600' }}>
              Tutto procede bene
            </span>
          </div>
        </div>
      </div>

      {/* CTA Cards */}
      <div className="row g-4">
        <div className="col-md-6">
          <a href="#" style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            textDecoration: 'none',
            border: '1px solid #F0F0F0',
            transition: 'all 0.3s ease',
            height: '100%',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(227,28,121,0.15)';
            e.currentTarget.style.borderColor = '#E31C79';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            e.currentTarget.style.borderColor = '#F0F0F0';
          }}>
            <div className="d-flex align-items-center justify-content-center mb-3" style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, rgba(227,28,121,0.1), rgba(227,28,121,0.05))',
              borderRadius: '16px'
            }}>
              <MessageCircle size={32} style={{ color: '#E31C79' }} strokeWidth={2} />
            </div>
            <h3 style={{
              fontSize: '1.35rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '0.75rem'
            }}>
              Inizia una chat con l'AI
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
              flex: 1
            }}>
              Parla con il nostro assistente AI per ricevere supporto e consigli sulla tua sicurezza online
            </p>
            <div className="d-flex align-items-center justify-content-end" style={{
              color: '#E31C79',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Avvia <ArrowRight size={18} style={{ marginLeft: '6px' }} strokeWidth={2.5} />
            </div>
          </a>
        </div>

        <div className="col-md-6">
          <a href="#" style={{
            display: 'flex',
            flexDirection: 'column',
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            textDecoration: 'none',
            border: '1px solid #F0F0F0',
            transition: 'all 0.3s ease',
            height: '100%',
            position: 'relative'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-4px)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(197,224,99,0.3)';
            e.currentTarget.style.borderColor = '#C5E063';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
            e.currentTarget.style.borderColor = '#F0F0F0';
          }}>
            <div className="d-flex align-items-center justify-content-center mb-3" style={{
              width: '64px',
              height: '64px',
              background: 'linear-gradient(135deg, rgba(197,224,99,0.3), rgba(197,224,99,0.1))',
              borderRadius: '16px'
            }}>
              <Download size={32} style={{ color: '#0A0A0A' }} strokeWidth={2} />
            </div>
            <h3 style={{
              fontSize: '1.35rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '0.75rem'
            }}>
              Scarica il plugin
            </h3>
            <p style={{
              fontSize: '1rem',
              color: '#666',
              marginBottom: '1.5rem',
              lineHeight: '1.6',
              flex: 1
            }}>
              Installa la nostra estensione browser per una protezione completa su tutti i tuoi dispositivi
            </p>
            <div className="d-flex align-items-center justify-content-end" style={{
              color: '#E31C79',
              fontWeight: '600',
              fontSize: '0.95rem'
            }}>
              Vai <ArrowRight size={18} style={{ marginLeft: '6px' }} strokeWidth={2.5} />
            </div>
          </a>
        </div>
      </div>
    </main>
  );
}