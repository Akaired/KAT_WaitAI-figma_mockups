import { Search, ChevronRight, AlertTriangle, Info, CheckSquare, MessageCircle, Edit2, Clock } from 'lucide-react';
import { useState } from 'react';

const categories = [
  { 
    id: 1, 
    label: 'Panoramica', 
    pages: ['Cos\'è SafeGuard AI', 'Come funziona']
  },
  { 
    id: 2, 
    label: 'Tipi di violenza', 
    pages: ['Cyberbullying', 'Stalking digitale', 'Revenge porn', 'Doxxing'],
    active: true
  },
  { 
    id: 3, 
    label: 'Difendersi', 
    pages: ['Primi passi', 'Cosa fare subito', 'Raccogliere prove']
  },
  { 
    id: 4, 
    label: 'Sicurezza digitale', 
    pages: ['Proteggere gli account', 'Privacy sui social', 'Password sicure']
  },
  { 
    id: 5, 
    label: 'Supporto e aiuto', 
    pages: ['Numeri utili', 'Associazioni', 'Supporto psicologico']
  },
  { 
    id: 6, 
    label: 'FAQ', 
    pages: []
  },
];

const sections = [
  { id: 'definizione', label: 'Definizione' },
  { id: 'segnali', label: 'Segnali di allarme' },
  { id: 'cosa-fare', label: 'Cosa fare subito' },
  { id: 'raccolta-prove', label: 'Raccolta prove' },
  { id: 'risorse', label: 'Risorse collegate' },
];

export function Documentation() {
  const [activeSection, setActiveSection] = useState('definizione');

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: '#F7F7F7' }}>
      {/* Secondary Sidebar - Documentation Navigation */}
      <aside style={{
        width: '280px',
        marginLeft: '240px',
        background: '#FFFFFF',
        borderRight: '1px solid #F0F0F0',
        padding: '2rem 1.5rem',
        position: 'fixed',
        height: '100vh',
        overflowY: 'auto'
      }}>
        {/* Search */}
        <div style={{
          position: 'relative',
          marginBottom: '2rem'
        }}>
          <Search size={18} style={{
            position: 'absolute',
            left: '12px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: '#999'
          }} strokeWidth={2} />
          <input
            type="text"
            placeholder="Cerca nella documentazione"
            style={{
              width: '100%',
              padding: '0.75rem 0.75rem 0.75rem 2.75rem',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              fontSize: '0.9rem',
              outline: 'none',
              transition: 'all 0.2s ease'
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = '#E31C79';
              e.currentTarget.style.boxShadow = '0 0 0 3px rgba(227,28,121,0.1)';
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = '#E5E5E5';
              e.currentTarget.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* Categories Navigation */}
        <nav>
          {categories.map((category) => (
            <div key={category.id} style={{ marginBottom: '1.5rem' }}>
              <div style={{
                fontSize: '0.8rem',
                fontWeight: '600',
                color: category.active ? '#E31C79' : '#0A0A0A',
                marginBottom: '0.75rem',
                textTransform: 'uppercase',
                letterSpacing: '0.5px'
              }}>
                {category.label}
              </div>
              {category.pages.length > 0 && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                  {category.pages.map((page, idx) => (
                    <a
                      key={idx}
                      href="#"
                      style={{
                        display: 'block',
                        padding: '0.5rem 0.75rem',
                        borderRadius: '6px',
                        textDecoration: 'none',
                        fontSize: '0.9rem',
                        color: idx === 0 && category.active ? '#E31C79' : '#666',
                        background: idx === 0 && category.active ? 'rgba(227,28,121,0.08)' : 'transparent',
                        fontWeight: idx === 0 && category.active ? '500' : '400',
                        transition: 'all 0.2s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (!(idx === 0 && category.active)) {
                          e.currentTarget.style.background = '#F7F7F7';
                          e.currentTarget.style.color = '#0A0A0A';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!(idx === 0 && category.active)) {
                          e.currentTarget.style.background = 'transparent';
                          e.currentTarget.style.color = '#666';
                        }
                      }}
                    >
                      {page}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main style={{
        flex: 1,
        marginLeft: '520px',
        marginRight: '300px',
        padding: '2.5rem 3rem',
        maxWidth: '800px'
      }}>
        {/* Breadcrumb */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          marginBottom: '1.5rem',
          fontSize: '0.85rem',
          color: '#666'
        }}>
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Documentazione</a>
          <ChevronRight size={14} />
          <a href="#" style={{ color: '#666', textDecoration: 'none' }}>Tipi di violenza</a>
          <ChevronRight size={14} />
          <span style={{ color: '#0A0A0A', fontWeight: '500' }}>Cyberbullying</span>
        </div>

        {/* Article Header */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '16px',
          padding: '2.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          border: '1px solid #F0F0F0',
          marginBottom: '1.5rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
            <div style={{ flex: 1 }}>
              <h1 style={{
                fontSize: '2.25rem',
                fontWeight: '700',
                color: '#0A0A0A',
                marginBottom: '1rem',
                lineHeight: '1.2'
              }}>
                Cyberbullying: riconoscere e difendersi
              </h1>
              <p style={{
                fontSize: '1.1rem',
                color: '#666',
                lineHeight: '1.6',
                marginBottom: '1.25rem'
              }}>
                Guida completa per identificare, documentare e contrastare episodi di bullismo digitale
              </p>
              <div style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: 'rgba(40,202,66,0.1)',
                color: '#28CA42',
                borderRadius: '100px',
                fontSize: '0.8rem',
                fontWeight: '600'
              }}>
                Pubblicata
              </div>
            </div>
            <button style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.25rem',
              background: 'transparent',
              border: '1px solid #E5E5E5',
              borderRadius: '8px',
              color: '#666',
              fontSize: '0.9rem',
              fontWeight: '500',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = '#E31C79';
              e.currentTarget.style.color = '#E31C79';
              e.currentTarget.style.background = 'rgba(227,28,121,0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = '#E5E5E5';
              e.currentTarget.style.color = '#666';
              e.currentTarget.style.background = 'transparent';
            }}>
              <Edit2 size={16} strokeWidth={2} />
              Modifica
            </button>
          </div>

          {/* Content Sections */}
          <section id="definizione" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '1rem'
            }}>
              Definizione
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              Il cyberbullying è una forma di violenza digitale perpetrata attraverso l'uso di tecnologie e social media. 
              Si manifesta con comportamenti aggressivi, molestie ripetute, diffamazione e intimidazione online, 
              spesso in forma anonima o attraverso profili falsi.
            </p>
            <p style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.7'
            }}>
              A differenza del bullismo tradizionale, il cyberbullying può avvenire 24 ore su 24, raggiungere un pubblico 
              molto ampio in pochi istanti e lasciare tracce digitali permanenti che amplificano il danno psicologico.
            </p>
          </section>

          {/* Warning Callout */}
          <div style={{
            background: 'rgba(227,28,121,0.05)',
            border: '1px solid rgba(227,28,121,0.2)',
            borderLeft: '4px solid #E31C79',
            borderRadius: '8px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <AlertTriangle size={20} style={{ color: '#E31C79', flexShrink: 0, marginTop: '2px' }} strokeWidth={2} />
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#E31C79', marginBottom: '0.5rem' }}>
                  Attenzione
                </div>
                <div style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.6' }}>
                  Se sei vittima di cyberbullying, non sei solo/a. È importante documentare tutto e chiedere aiuto 
                  immediatamente a persone di fiducia o autorità competenti.
                </div>
              </div>
            </div>
          </div>

          <section id="segnali" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '1rem'
            }}>
              Segnali di allarme
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              Riconoscere i segnali è il primo passo per proteggersi. Ecco i comportamenti più comuni:
            </p>
            <ul style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.8',
              paddingLeft: '1.5rem',
              margin: 0
            }}>
              <li style={{ marginBottom: '0.75rem' }}>Messaggi offensivi, minacce o insulti ricevuti ripetutamente</li>
              <li style={{ marginBottom: '0.75rem' }}>Diffusione di informazioni private o false sul tuo conto</li>
              <li style={{ marginBottom: '0.75rem' }}>Esclusione deliberata da gruppi online o community</li>
              <li style={{ marginBottom: '0.75rem' }}>Creazione di profili fake per impersonarti o deriderti</li>
              <li style={{ marginBottom: '0.75rem' }}>Pubblicazione non autorizzata di foto, video o conversazioni private</li>
            </ul>
          </section>

          {/* Info Callout */}
          <div style={{
            background: 'rgba(197,224,99,0.15)',
            border: '1px solid rgba(197,224,99,0.4)',
            borderLeft: '4px solid #C5E063',
            borderRadius: '8px',
            padding: '1.25rem 1.5rem',
            marginBottom: '2.5rem'
          }}>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <Info size={20} style={{ color: '#0A0A0A', flexShrink: 0, marginTop: '2px' }} strokeWidth={2} />
              <div>
                <div style={{ fontSize: '0.95rem', fontWeight: '600', color: '#0A0A0A', marginBottom: '0.5rem' }}>
                  Suggerimento
                </div>
                <div style={{ fontSize: '0.9rem', color: '#333', lineHeight: '1.6' }}>
                  SafeGuard AI può aiutarti a monitorare automaticamente i tuoi profili social e identificare 
                  comportamenti sospetti prima che la situazione peggiori.
                </div>
              </div>
            </div>
          </div>

          <section id="cosa-fare" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '1rem'
            }}>
              Cosa fare subito
            </h2>
            
            {/* Checklist Box */}
            <div style={{
              background: '#FAFAFA',
              border: '1px solid #E5E5E5',
              borderRadius: '12px',
              padding: '1.5rem',
              marginTop: '1.25rem'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <CheckSquare size={20} style={{ color: '#E31C79' }} strokeWidth={2} />
                <h3 style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0A0A0A', margin: 0 }}>
                  Checklist immediata
                </h3>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {[
                  'Non rispondere agli attacchi: evita di alimentare il conflitto',
                  'Blocca immediatamente i profili degli aggressori',
                  'Fai screenshot di ogni messaggio, post o commento offensivo',
                  'Segnala i contenuti alle piattaforme social',
                  'Informa persone di fiducia (familiari, amici, colleghi)',
                  'Se la situazione è grave, contatta le autorità competenti'
                ].map((item, idx) => (
                  <label key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', cursor: 'pointer' }}>
                    <input type="checkbox" style={{
                      width: '18px',
                      height: '18px',
                      marginTop: '2px',
                      accentColor: '#E31C79',
                      cursor: 'pointer'
                    }} />
                    <span style={{ fontSize: '0.95rem', color: '#333', lineHeight: '1.6', flex: 1 }}>
                      {item}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </section>

          <section id="raccolta-prove" style={{ marginBottom: '2.5rem' }}>
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '1rem'
            }}>
              Raccolta prove
            </h2>
            <p style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.7',
              marginBottom: '1rem'
            }}>
              Documentare gli episodi è fondamentale per eventuali azioni legali o segnalazioni formali. 
              Assicurati di conservare:
            </p>
            <ul style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.8',
              paddingLeft: '1.5rem',
              marginBottom: '1rem'
            }}>
              <li style={{ marginBottom: '0.75rem' }}>Screenshot completi con data, ora e URL visibili</li>
              <li style={{ marginBottom: '0.75rem' }}>Link diretti ai post o profili degli aggressori</li>
              <li style={{ marginBottom: '0.75rem' }}>Registrazioni di eventuali videochiamate o messaggi vocali</li>
              <li style={{ marginBottom: '0.75rem' }}>Email di segnalazione inviate alle piattaforme</li>
            </ul>
            <p style={{
              fontSize: '1rem',
              color: '#333',
              lineHeight: '1.7'
            }}>
              Conserva tutto in un luogo sicuro, preferibilmente su cloud protetto e con backup locali.
            </p>
          </section>

          {/* Related Resources */}
          <section id="risorse">
            <h2 style={{
              fontSize: '1.5rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '1.25rem'
            }}>
              Risorse collegate
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { title: 'Come proteggere i tuoi account', category: 'Sicurezza digitale' },
                { title: 'Supporto psicologico', category: 'Supporto e aiuto' },
                { title: 'Numeri utili e associazioni', category: 'Supporto e aiuto' },
                { title: 'Privacy sui social media', category: 'Sicurezza digitale' }
              ].map((resource, idx) => (
                <a
                  key={idx}
                  href="#"
                  style={{
                    display: 'block',
                    background: '#FAFAFA',
                    border: '1px solid #E5E5E5',
                    borderRadius: '10px',
                    padding: '1.25rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#E31C79';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(227,28,121,0.1)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#E5E5E5';
                    e.currentTarget.style.boxShadow = 'none';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <div style={{ fontSize: '0.75rem', color: '#999', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                    {resource.category}
                  </div>
                  <div style={{ fontSize: '0.95rem', fontWeight: '500', color: '#0A0A0A' }}>
                    {resource.title}
                  </div>
                </a>
              ))}
            </div>
          </section>
        </div>
      </main>

      {/* Right Sidebar - TOC & AI CTA */}
      <aside style={{
        width: '280px',
        position: 'fixed',
        right: '20px',
        top: '2.5rem',
        padding: '1.5rem 0'
      }}>
        {/* Table of Contents */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '1.5rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          border: '1px solid #F0F0F0',
          marginBottom: '1.5rem'
        }}>
          <h3 style={{
            fontSize: '0.85rem',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '1rem',
            textTransform: 'uppercase',
            letterSpacing: '0.5px'
          }}>
            In questa pagina
          </h3>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                style={{
                  fontSize: '0.9rem',
                  color: activeSection === section.id ? '#E31C79' : '#666',
                  textDecoration: 'none',
                  fontWeight: activeSection === section.id ? '500' : '400',
                  padding: '0.5rem 0',
                  borderLeft: activeSection === section.id ? '2px solid #E31C79' : '2px solid transparent',
                  paddingLeft: '0.75rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#E31C79';
                  e.currentTarget.style.paddingLeft = '1rem';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== section.id) {
                    e.currentTarget.style.color = '#666';
                  }
                  e.currentTarget.style.paddingLeft = '0.75rem';
                }}
              >
                {section.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Ask AI CTA */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(227,28,121,0.05), rgba(197,224,99,0.1))',
          border: '1px solid rgba(227,28,121,0.15)',
          borderRadius: '12px',
          padding: '1.5rem',
          marginBottom: '1.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '48px',
            height: '48px',
            background: 'rgba(227,28,121,0.1)',
            borderRadius: '12px',
            marginBottom: '1rem'
          }}>
            <MessageCircle size={24} style={{ color: '#E31C79' }} strokeWidth={2} />
          </div>
          <h4 style={{
            fontSize: '1rem',
            fontWeight: '600',
            color: '#0A0A0A',
            marginBottom: '0.75rem'
          }}>
            Chiedi all'AI
          </h4>
          <p style={{
            fontSize: '0.85rem',
            color: '#666',
            lineHeight: '1.5',
            marginBottom: '1.25rem'
          }}>
            Hai domande su questo argomento? La nostra AI può aiutarti.
          </p>
          <button style={{
            width: '100%',
            padding: '0.75rem',
            background: '#E31C79',
            border: 'none',
            borderRadius: '8px',
            color: '#FFFFFF',
            fontSize: '0.9rem',
            fontWeight: '600',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-2px)';
            e.currentTarget.style.boxShadow = '0 4px 12px rgba(227,28,121,0.3)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}>
            Avvia chat
          </button>
        </div>

        {/* Last Update */}
        <div style={{
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '1.25rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          border: '1px solid #F0F0F0'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
            <Clock size={16} style={{ color: '#999' }} strokeWidth={2} />
            <span style={{ fontSize: '0.8rem', color: '#999', fontWeight: '500' }}>
              Ultimo aggiornamento
            </span>
          </div>
          <div style={{ fontSize: '0.9rem', color: '#0A0A0A', fontWeight: '500' }}>
            15 marzo 2026
          </div>
        </div>
      </aside>
    </div>
  );
}
