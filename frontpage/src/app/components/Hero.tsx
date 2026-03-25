import { ArrowRight, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState, useEffect, useRef } from 'react';

export function Hero() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = 'Difenditi dalla violenza online';
  const gradientStartIndex = 16; // "Difenditi dalla " ha 16 caratteri
  
  const [cardRotation, setCardRotation] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const deltaX = (mouseX - centerX) / rect.width;
    const deltaY = (mouseY - centerY) / rect.height;
    
    const rotateY = deltaX * 5; // Ridotto da 15 a 5
    const rotateX = -deltaY * 5; // Ridotto da 15 a 5
    
    setCardRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setCardRotation({ x: 0, y: 0 });
  };

  return (
    <section 
      className="position-relative overflow-hidden" 
      style={{ 
        background: 'linear-gradient(135deg, #C5E063 0%, #E31C79 50%, #C5E063 100%)',
        backgroundSize: '400% 400%',
        animation: 'gradient 12s ease infinite',
        minHeight: '90vh',
        display: 'flex',
        alignItems: 'center'
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
      
      {/* Overlay opacizzato */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'rgba(255, 255, 255, 0.65)',
        backdropFilter: 'blur(120px)'
      }} />
      
      {/* Decorative circles */}
      <div style={{
        position: 'absolute',
        top: '10%',
        right: '10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(227,28,121,0.4) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(60px)',
        animation: 'pulse 8s ease-in-out infinite'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '20%',
        left: '5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(197,224,99,0.5) 0%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(80px)',
        animation: 'pulse 10s ease-in-out infinite reverse'
      }} />
      
      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
        }
      `}</style>

      <div className="container position-relative">
        <div className="row justify-content-center align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="d-inline-flex align-items-center px-3 py-2 mb-4" style={{
              background: 'rgba(10,10,10,0.08)',
              borderRadius: '100px',
              backdropFilter: 'blur(10px)'
            }}>
              <Sparkles size={16} style={{ color: '#E31C79', marginRight: '8px' }} />
              <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#0A0A0A' }}>
                Protezione AI in tempo reale
              </span>
            </div>
            
            <h1 style={{
              fontSize: 'clamp(2.5rem, 7vw, 4.5rem)',
              fontWeight: '700',
              color: '#0A0A0A',
              marginBottom: '1.5rem',
              lineHeight: '1.1',
              letterSpacing: '-0.02em',
              minHeight: 'clamp(5.5rem, 15vw, 10rem)'
            }}>
              {displayedText.substring(0, gradientStartIndex)}
              {displayedText.length > gradientStartIndex && (
                <span style={{ 
                  background: 'linear-gradient(135deg, #E31C79, #0A0A0A)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}>
                  {displayedText.substring(gradientStartIndex)}
                </span>
              )}
              {currentIndex < fullText.length && (
                <span style={{
                  display: 'inline-block',
                  width: '3px',
                  height: '0.9em',
                  background: '#E31C79',
                  marginLeft: '4px',
                  animation: 'blink 1s infinite',
                  verticalAlign: 'text-bottom'
                }} />
              )}
            </h1>
            
            <p style={{
              fontSize: '1.25rem',
              color: 'rgba(10,10,10,0.7)',
              marginBottom: '2.5rem',
              fontWeight: '400',
              lineHeight: '1.6'
            }}>
              Protezione automatica basata su intelligenza artificiale. 
              Blocca minacce, abusi e contenuti dannosi prima che ti raggiungano.
            </p>
            
            <div className="d-flex flex-column gap-4">
              <div>
                <button className="btn btn-primary d-inline-flex align-items-center" style={{
                  fontSize: '1.1rem',
                  padding: '1rem 2.5rem',
                  boxShadow: '0 8px 24px rgba(227,28,121,0.25)'
                }}>
                  Inizia gratis
                  <ArrowRight className="ms-2" size={20} />
                </button>
              </div>
              
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex">
                  {[
                    'https://images.unsplash.com/photo-1649589244330-09ca58e4fa64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc3Mzk5NjIxOHww&ixlib=rb-4.1.0&q=80&w=1080',
                    'https://images.unsplash.com/photo-1554765345-6ad6a5417cde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM5NjU3NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    'https://images.unsplash.com/photo-1657658691109-c4008c233a00?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHBlcnNvbiUyMHNtaWxpbmclMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzM5NDEyNzl8MA&ixlib=rb-4.1.0&q=80&w=1080',
                    'https://images.unsplash.com/photo-1655249493799-9cee4fe983bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBlcnNvbiUyMGhlYWRzaG90fGVufDF8fHx8MTc3NDA0OTMzMXww&ixlib=rb-4.1.0&q=80&w=1080'
                  ].map((url, i) => (
                    <ImageWithFallback
                      key={i}
                      src={url}
                      alt={`User ${i + 1}`}
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '50%',
                        border: '3px solid #FFFFFF',
                        marginLeft: i === 0 ? '0' : '-10px',
                        objectFit: 'cover'
                      }}
                    />
                  ))}
                </div>
                <span style={{ fontSize: '0.9rem', color: 'rgba(10,10,10,0.7)', fontWeight: '500' }}>
                  +100K utenti protetti
                </span>
              </div>
            </div>
          </div>
          
          <div className="col-lg-5 offset-lg-1">
            <div 
              ref={cardRef}
              style={{
                position: 'relative',
                transform: `perspective(1200px) rotateX(${cardRotation.x}deg) rotateY(${cardRotation.y}deg)`,
                transition: 'transform 0.2s ease-out', // Aumentato da 0.1s a 0.2s per maggiore fluidità
                transformStyle: 'preserve-3d'
              }}
            >
              <div style={{
                background: '#FFFFFF',
                borderRadius: '24px',
                padding: '2rem',
                boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
                backdropFilter: 'blur(10px)'
              }}>
                <div className="mb-3 d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FF5F57' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FFBD2E' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28CA42' }} />
                  </div>
                  <span style={{ fontSize: '0.8rem', color: '#666', fontWeight: '500' }}>Dashboard</span>
                </div>
                
                <div className="mb-3">
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>Minacce bloccate</span>
                    <span style={{ fontSize: '1.5rem', fontWeight: '700', color: '#E31C79' }}>247</span>
                  </div>
                  <div style={{ width: '100%', height: '8px', background: '#F0F0F0', borderRadius: '100px', overflow: 'hidden' }}>
                    <div style={{ width: '75%', height: '100%', background: 'linear-gradient(90deg, #E31C79, #C5E063)' }} />
                  </div>
                </div>
                
                {[
                  { label: 'Contenuti offensivi', value: '134', color: '#E31C79' },
                  { label: 'Spam rilevato', value: '89', color: '#C5E063' },
                  { label: 'Utenti bloccati', value: '24', color: '#0A0A0A' }
                ].map((stat, i) => (
                  <div key={i} className="d-flex justify-content-between align-items-center mb-2 p-2" style={{
                    background: i % 2 === 0 ? '#FAFAFA' : 'transparent',
                    borderRadius: '8px'
                  }}>
                    <span style={{ fontSize: '0.85rem', color: '#666' }}>{stat.label}</span>
                    <span style={{ fontSize: '1rem', fontWeight: '600', color: stat.color }}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}