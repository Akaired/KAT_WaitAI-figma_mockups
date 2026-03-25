import { Upload, FileText, FileCode, File, Trash2, Calendar, Download } from 'lucide-react';
import { useState } from 'react';

const documents = [
  {
    id: 1,
    name: 'Guida sicurezza online.pdf',
    size: '2.4 MB',
    type: 'pdf',
    active: true,
    icon: FileText,
    color: '#E31C79'
  },
  {
    id: 2,
    name: 'Policies moderazione.docx',
    size: '856 KB',
    type: 'docx',
    active: true,
    icon: File,
    color: '#0A0A0A'
  },
  {
    id: 3,
    name: 'Dataset training.txt',
    size: '1.2 MB',
    type: 'txt',
    active: false,
    icon: FileCode,
    color: '#666'
  },
  {
    id: 4,
    name: 'Linee guida contenuti.md',
    size: '512 KB',
    type: 'md',
    active: true,
    icon: FileText,
    color: '#C5E063'
  },
];

export function Training() {
  const [docs, setDocs] = useState(documents);

  const toggleDoc = (id: number) => {
    setDocs(docs.map(doc => 
      doc.id === id ? { ...doc, active: !doc.active } : doc
    ));
  };

  const deleteDoc = (id: number) => {
    setDocs(docs.filter(doc => doc.id !== id));
  };

  const activeDocsCount = docs.filter(d => d.active).length;
  const totalSize = docs.reduce((acc, doc) => {
    const size = parseFloat(doc.size);
    const unit = doc.size.includes('MB') ? 1 : 0.001;
    return acc + (size * unit);
  }, 0).toFixed(1);

  return (
    <main style={{
      marginLeft: '240px',
      flex: 1,
      padding: '2.5rem',
      minHeight: '100vh'
    }}>
      {/* Header */}
      <div className="mb-4">
        <h1 style={{
          fontSize: '2rem',
          fontWeight: '700',
          color: '#0A0A0A',
          marginBottom: '0.5rem'
        }}>
          Addestramento
        </h1>
        <p style={{ fontSize: '1rem', color: '#666', margin: 0 }}>
          Gestisci i documenti che l'AI utilizza per comprendere le tue policy di moderazione
        </p>
      </div>

      {/* Main Content */}
      <div className="row g-4">
        {/* Left Section - Documents Library (60%) */}
        <div className="col-lg-7">
          <div style={{
            background: '#FFFFFF',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            border: '1px solid #F0F0F0'
          }}>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '600',
              color: '#0A0A0A',
              marginBottom: '1.5rem'
            }}>
              Documenti di riferimento
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {docs.map((doc) => {
                const Icon = doc.icon;
                return (
                  <div key={doc.id} style={{
                    background: '#FAFAFA',
                    border: '1px solid #F0F0F0',
                    borderRadius: '12px',
                    padding: '1rem',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = '#E5E5E5';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.04)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = '#F0F0F0';
                    e.currentTarget.style.boxShadow = 'none';
                  }}>
                    <div className="d-flex align-items-start justify-content-between mb-3">
                      <div className="d-flex align-items-start gap-3 flex-grow-1">
                        <div style={{
                          width: '40px',
                          height: '40px',
                          background: `${doc.color}15`,
                          borderRadius: '8px',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0
                        }}>
                          <Icon size={20} style={{ color: doc.color }} strokeWidth={2} />
                        </div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <div style={{
                            fontSize: '0.95rem',
                            fontWeight: '500',
                            color: '#0A0A0A',
                            marginBottom: '4px',
                            wordBreak: 'break-word'
                          }}>
                            {doc.name}
                          </div>
                          <div style={{
                            fontSize: '0.85rem',
                            color: '#999'
                          }}>
                            {doc.size}
                          </div>
                        </div>
                      </div>
                      <div style={{
                        padding: '4px 10px',
                        borderRadius: '100px',
                        fontSize: '0.75rem',
                        fontWeight: '600',
                        background: doc.active ? 'rgba(40,202,66,0.1)' : 'rgba(0,0,0,0.05)',
                        color: doc.active ? '#28CA42' : '#999',
                        whiteSpace: 'nowrap'
                      }}>
                        {doc.active ? 'Attivo' : 'Inattivo'}
                      </div>
                    </div>

                    <div className="d-flex align-items-center justify-content-between">
                      <div className="d-flex align-items-center gap-2">
                        <label style={{
                          position: 'relative',
                          display: 'inline-block',
                          width: '44px',
                          height: '24px',
                          cursor: 'pointer'
                        }}>
                          <input
                            type="checkbox"
                            checked={doc.active}
                            onChange={() => toggleDoc(doc.id)}
                            style={{ opacity: 0, width: 0, height: 0 }}
                          />
                          <span style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            background: doc.active ? '#E31C79' : '#CCC',
                            borderRadius: '100px',
                            transition: 'all 0.3s ease'
                          }}>
                            <span style={{
                              position: 'absolute',
                              height: '18px',
                              width: '18px',
                              left: doc.active ? '23px' : '3px',
                              bottom: '3px',
                              background: '#FFFFFF',
                              borderRadius: '50%',
                              transition: 'all 0.3s ease'
                            }} />
                          </span>
                        </label>
                        <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500' }}>
                          {doc.active ? 'Attivo' : 'Disattivato'}
                        </span>
                      </div>
                      <div className="d-flex align-items-center gap-2">
                        <button
                          onClick={() => {/* Download logic */}}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#999',
                            cursor: 'pointer',
                            padding: '6px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(197,224,99,0.3)';
                            e.currentTarget.style.color = '#0A0A0A';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#999';
                          }}
                        >
                          <Download size={18} strokeWidth={2} />
                        </button>
                        <button
                          onClick={() => deleteDoc(doc.id)}
                          style={{
                            background: 'transparent',
                            border: 'none',
                            color: '#999',
                            cursor: 'pointer',
                            padding: '6px',
                            borderRadius: '6px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            transition: 'all 0.2s ease'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(227,28,121,0.1)';
                            e.currentTarget.style.color = '#E31C79';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'transparent';
                            e.currentTarget.style.color = '#999';
                          }}
                        >
                          <Trash2 size={18} strokeWidth={2} />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button style={{
              marginTop: '1.5rem',
              background: 'transparent',
              border: 'none',
              color: '#E31C79',
              fontWeight: '600',
              fontSize: '0.95rem',
              cursor: 'pointer',
              padding: '0.5rem 0',
              transition: 'opacity 0.2s ease'
            }}
            onMouseEnter={(e) => e.currentTarget.style.opacity = '0.7'}
            onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}>
              + Aggiungi documento
            </button>
          </div>
        </div>

        {/* Right Section - Upload + Stats (40%) */}
        <div className="col-lg-5">
          <div className="d-flex flex-column gap-4">
            {/* Upload Card */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '2rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              border: '1px solid #F0F0F0'
            }}>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '600',
                color: '#0A0A0A',
                marginBottom: '1.5rem'
              }}>
                Carica documento
              </h3>

              <div style={{
                border: '2px dashed #E5E5E5',
                borderRadius: '12px',
                background: 'rgba(227,28,121,0.04)',
                padding: '3rem 2rem',
                textAlign: 'center',
                marginBottom: '1.5rem',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#E31C79';
                e.currentTarget.style.background = 'rgba(227,28,121,0.08)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#E5E5E5';
                e.currentTarget.style.background = 'rgba(227,28,121,0.04)';
              }}>
                <div className="d-flex justify-content-center mb-3">
                  <div style={{
                    width: '56px',
                    height: '56px',
                    background: 'rgba(227,28,121,0.1)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Upload size={28} style={{ color: '#E31C79' }} strokeWidth={2} />
                  </div>
                </div>
                <div style={{
                  fontSize: '1rem',
                  fontWeight: '600',
                  color: '#0A0A0A',
                  marginBottom: '0.5rem'
                }}>
                  Trascina il file qui
                </div>
                <div style={{
                  fontSize: '0.85rem',
                  color: '#999'
                }}>
                  MD, PDF, TXT, DOCX
                </div>
              </div>

              <button style={{
                width: '100%',
                padding: '0.85rem 1.5rem',
                background: 'linear-gradient(135deg, #E31C79, #C5E063)',
                border: 'none',
                borderRadius: '8px',
                fontWeight: '600',
                fontSize: '0.95rem',
                color: '#FFFFFF',
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
                Sfoglia file
              </button>
            </div>

            {/* Knowledge Base Stats */}
            <div style={{
              background: '#FFFFFF',
              borderRadius: '16px',
              padding: '1.5rem',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              border: '1px solid #F0F0F0'
            }}>
              <h4 style={{
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#0A0A0A',
                marginBottom: '1.25rem'
              }}>
                Knowledge base
              </h4>

              <div className="d-flex flex-column gap-3">
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>
                    Documenti attivi
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0A0A0A' }}>
                    {activeDocsCount}
                  </span>
                </div>
                
                <div style={{ height: '1px', background: '#F0F0F0' }} />
                
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>
                    Peso totale
                  </span>
                  <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#0A0A0A' }}>
                    {totalSize} MB
                  </span>
                </div>
                
                <div style={{ height: '1px', background: '#F0F0F0' }} />
                
                <div className="d-flex justify-content-between align-items-center">
                  <span style={{ fontSize: '0.85rem', color: '#666' }}>
                    Ultimo aggiornamento
                  </span>
                  <div className="d-flex align-items-center gap-1">
                    <Calendar size={14} style={{ color: '#999' }} strokeWidth={2} />
                    <span style={{ fontSize: '0.9rem', fontWeight: '500', color: '#0A0A0A' }}>
                      Oggi
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}