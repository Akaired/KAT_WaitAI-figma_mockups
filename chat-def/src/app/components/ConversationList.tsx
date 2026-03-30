import { useState } from 'react';

interface Conversation {
  id: number;
  title: string;
  date: string;
  preview: string;
}

const conversations: Conversation[] = [
  {
    id: 1,
    title: 'Protezione social media',
    date: 'Oggi',
    preview: 'Come posso proteggermi meglio su Instagram?'
  },
  {
    id: 2,
    title: 'Spam ricevuti',
    date: 'Ieri',
    preview: 'Ho ricevuto messaggi sospetti da un account...'
  },
  {
    id: 3,
    title: 'Configurazione avanzata',
    date: '2 giorni fa',
    preview: 'Vorrei attivare il blocco automatico per...'
  },
  {
    id: 4,
    title: 'Domande generali',
    date: '3 giorni fa',
    preview: 'Quali piattaforme supportate?'
  },
  {
    id: 5,
    title: 'Report minacce',
    date: '5 giorni fa',
    preview: 'Ho notato un comportamento anomalo...'
  }
];

export function ConversationList() {
  const [activeConversation, setActiveConversation] = useState(1);

  return (
    <div style={{
      width: '280px',
      height: '100vh',
      background: '#FFFFFF',
      borderRight: '1px solid rgba(168, 85, 247, 0.1)',
      marginLeft: '240px',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      overflowY: 'auto'
    }}>
      <div style={{
        padding: '1.5rem 1rem',
        borderBottom: '1px solid rgba(168, 85, 247, 0.08)'
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#0A0A0A',
          margin: 0,
          fontFamily: 'Inter, sans-serif'
        }}>
          Conversazioni
        </h2>
      </div>

      <div style={{ flex: 1 }}>
        {conversations.map((conv) => (
          <div
            key={conv.id}
            onClick={() => setActiveConversation(conv.id)}
            style={{
              padding: '1rem',
              cursor: 'pointer',
              background: activeConversation === conv.id 
                ? 'linear-gradient(135deg, rgba(255, 107, 157, 0.05), rgba(168, 85, 247, 0.05))' 
                : 'transparent',
              borderLeft: activeConversation === conv.id ? '3px solid #FF6B9D' : '3px solid transparent',
              transition: 'all 0.2s ease',
              borderBottom: '1px solid rgba(168, 85, 247, 0.05)'
            }}
            onMouseEnter={(e) => {
              if (activeConversation !== conv.id) {
                e.currentTarget.style.background = 'rgba(168, 85, 247, 0.03)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeConversation !== conv.id) {
                e.currentTarget.style.background = 'transparent';
              }
            }}
          >
            <div className="d-flex justify-content-between align-items-start mb-1">
              <h3 style={{
                fontSize: '0.95rem',
                fontWeight: '600',
                color: '#0A0A0A',
                margin: 0,
                lineHeight: '1.3',
                fontFamily: 'Inter, sans-serif'
              }}>
                {conv.title}
              </h3>
              <span style={{
                fontSize: '0.75rem',
                color: '#999',
                whiteSpace: 'nowrap',
                marginLeft: '8px',
                fontFamily: 'Inter, sans-serif'
              }}>
                {conv.date}
              </span>
            </div>
            <p style={{
              fontSize: '0.85rem',
              color: '#999',
              margin: 0,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              fontFamily: 'Inter, sans-serif'
            }}>
              {conv.preview}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
