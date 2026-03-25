import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, Settings, ShieldCheck } from 'lucide-react';

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Installa',
    description: 'Scarica l\'app o l\'estensione browser',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Configura',
    description: 'Personalizza le tue preferenze di protezione',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Sei protetto',
    description: 'L\'AI lavora in background per te',
  },
];

export function HowSection() {
  return (
    <section style={{ 
      background: 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      padding: 'clamp(5rem, 12vh, 10rem) 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Decorative gradient */}
      <div style={{
        position: 'absolute',
        top: '0',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(circle, rgba(197,224,99,0.1) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container position-relative">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-inline-block mb-3 px-4 py-2" style={{
              background: 'rgba(197,224,99,0.1)',
              borderRadius: '100px',
              border: '1px solid rgba(197,224,99,0.2)'
            }}>
              <span style={{ fontSize: '0.9rem', fontWeight: '600', color: '#C5E063' }}>
                🚀 Come funziona
              </span>
            </div>
            
            <h2 style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: '700',
              color: '#FFFFFF',
              marginBottom: '1.5rem',
              letterSpacing: '-0.01em',
              lineHeight: '1.1'
            }}>
              Protezione in<br />
              <span style={{ 
                background: 'linear-gradient(135deg, #C5E063, #E31C79)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                3 semplici passi
              </span>
            </h2>
            
            <div className="mt-5">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="d-flex align-items-start mb-4">
                    <div className="position-relative me-4 flex-shrink-0">
                      <div style={{
                        width: '60px',
                        height: '60px',
                        background: index === 0 
                          ? 'linear-gradient(135deg, #E31C79, #C5E063)'
                          : index === 1
                          ? 'linear-gradient(135deg, #C5E063, #E31C79)'
                          : 'linear-gradient(135deg, #E31C79, #0A0A0A)',
                        borderRadius: '16px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}>
                        <Icon size={28} style={{ color: '#FFFFFF' }} strokeWidth={2} />
                      </div>
                      <div style={{
                        position: 'absolute',
                        top: '-8px',
                        right: '-8px',
                        background: '#0A0A0A',
                        color: '#C5E063',
                        width: '28px',
                        height: '28px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '0.75rem',
                        fontWeight: '700',
                        border: '2px solid #1A1A1A'
                      }}>
                        {step.number}
                      </div>
                    </div>
                    <div>
                      <h4 style={{
                        fontSize: '1.5rem',
                        fontWeight: '600',
                        color: '#FFFFFF',
                        marginBottom: '0.5rem'
                      }}>
                        {step.title}
                      </h4>
                      <p style={{
                        fontSize: '1.05rem',
                        color: '#A0A0A0',
                        margin: 0,
                        lineHeight: '1.6'
                      }}>
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="col-lg-5 offset-lg-1">
            <div style={{
              position: 'relative',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0 30px 80px rgba(0,0,0,0.4)'
            }}>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1770871820934-daf713c304af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydHBob25lJTIwd29tYW4lMjBoYXBweSUyMHNhZmV8ZW58MXx8fHwxNzc0MDQ5MDE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Person using smartphone safely"
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(180deg, transparent 60%, rgba(10,10,10,0.8) 100%)'
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
