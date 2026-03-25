import { Shield, Eye, Lock, Zap, Bell, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Blocco automatico',
    description: 'Filtra contenuti dannosi prima che ti raggiungano, proteggendoti 24/7',
    color: '#E31C79'
  },
  {
    icon: Zap,
    title: 'Analisi istantanea',
    description: 'AI che rileva minacce in millisecondi con precisione del 99.7%',
    color: '#C5E063'
  },
  {
    icon: Eye,
    title: 'Monitoraggio completo',
    description: 'Supervisione su tutte le piattaforme social da un unico dashboard',
    color: '#E31C79'
  },
  {
    icon: Lock,
    title: 'Privacy garantita',
    description: 'I tuoi dati rimangono privati, crittografati end-to-end',
    color: '#C5E063'
  },
  {
    icon: Bell,
    title: 'Alert intelligenti',
    description: 'Notifiche smart solo per ciò che conta davvero',
    color: '#E31C79'
  },
  {
    icon: BarChart3,
    title: 'Report dettagliati',
    description: 'Statistiche e insights sulla tua sicurezza online',
    color: '#C5E063'
  },
];

export function Features() {
  return (
    <section style={{ 
      background: '#FFFFFF',
      padding: 'clamp(5rem, 12vh, 10rem) 0'
    }}>
      <div className="container">
        <div className="text-center mb-5">
          <div className="d-inline-block mb-3 px-4 py-2" style={{
            background: 'linear-gradient(135deg, rgba(227,28,121,0.1), rgba(197,224,99,0.1))',
            borderRadius: '100px',
            border: '1px solid rgba(227,28,121,0.2)'
          }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#E31C79' }}>
              ✨ Funzionalità
            </span>
          </div>
          <h2 style={{
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: '700',
            color: '#0A0A0A',
            marginBottom: '1rem',
            letterSpacing: '-0.01em'
          }}>
            Protezione completa
          </h2>
          <p style={{
            fontSize: '1.15rem',
            color: '#666',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Tutto ciò di cui hai bisogno per sentirti sicuro online
          </p>
        </div>

        <div className="row g-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="col-md-6 col-lg-4">
                <div className="h-100 p-4" style={{
                  background: '#FAFAFA',
                  borderRadius: '16px',
                  border: '1px solid #F0F0F0',
                  transition: 'all 0.3s ease',
                  cursor: 'default'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-8px)';
                  e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.08)';
                  e.currentTarget.style.borderColor = feature.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.borderColor = '#F0F0F0';
                }}>
                  <div className="d-inline-flex align-items-center justify-content-center mb-3" style={{
                    width: '56px',
                    height: '56px',
                    background: index % 2 === 0 
                      ? 'linear-gradient(135deg, rgba(227,28,121,0.1), rgba(227,28,121,0.05))'
                      : 'linear-gradient(135deg, rgba(197,224,99,0.3), rgba(197,224,99,0.1))',
                    borderRadius: '12px'
                  }}>
                    <Icon size={28} style={{ color: feature.color }} strokeWidth={1.5} />
                  </div>
                  <h3 style={{
                    fontSize: '1.35rem',
                    fontWeight: '600',
                    color: '#0A0A0A',
                    marginBottom: '0.75rem'
                  }}>
                    {feature.title}
                  </h3>
                  <p style={{
                    fontSize: '1rem',
                    color: '#666',
                    lineHeight: '1.6',
                    margin: 0
                  }}>
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
