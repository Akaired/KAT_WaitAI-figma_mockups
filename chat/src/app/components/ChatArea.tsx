import { Shield, Send } from 'lucide-react';
import { useState } from 'react';

interface Message {
  id: number;
  sender: 'ai' | 'user';
  text: string;
  time: string;
}

const initialMessages: Message[] = [
  {
    id: 1,
    sender: 'ai',
    text: 'Ciao! Sono l\'assistente AI di Wait. Come posso aiutarti oggi a migliorare la tua sicurezza online?',
    time: '10:30'
  },
  {
    id: 2,
    sender: 'user',
    text: 'Come posso proteggermi meglio su Instagram?',
    time: '10:32'
  },
  {
    id: 3,
    sender: 'ai',
    text: 'Ottima domanda! Su Instagram ti consiglio di: 1) Rendere privato il tuo profilo, 2) Filtrare i commenti offensivi, 3) Bloccare account sospetti, 4) Attivare Wait per il monitoraggio automatico dei DM. Vuoi che ti spieghi meglio uno di questi punti?',
    time: '10:32'
  },
  {
    id: 4,
    sender: 'user',
    text: 'Sì, come funziona il monitoraggio automatico dei DM?',
    time: '10:34'
  },
  {
    id: 5,
    sender: 'ai',
    text: 'Il monitoraggio automatico analizza tutti i messaggi diretti che ricevi in tempo reale. La nostra AI rileva contenuti potenzialmente dannosi, minacce, spam e messaggi inappropriati. Quando viene rilevata una minaccia, puoi scegliere di bloccare automaticamente il mittente o ricevere un avviso per decidere tu.',
    time: '10:35'
  }
];

export function ChatArea() {
  const [messages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (inputValue.trim()) {
      // Logic to send message would go here
      console.log('Sending:', inputValue);
      setInputValue('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div style={{
      marginLeft: '520px', // 240px sidebar + 280px conversation list
      flex: 1,
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
      background: '#F7F7F7'
    }}>
      {/* Chat Header */}
      <div style={{
        padding: '1.5rem 2rem',
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E5E5'
      }}>
        <h2 style={{
          fontSize: '1.25rem',
          fontWeight: '700',
          color: '#0A0A0A',
          margin: 0
        }}>
          Protezione social media
        </h2>
        <p style={{
          fontSize: '0.85rem',
          color: '#999',
          margin: '4px 0 0'
        }}>
          Assistente AI • Online
        </p>
      </div>

      {/* Messages Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '2rem'
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.sender === 'ai' ? 'flex-start' : 'flex-end',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{
              display: 'flex',
              flexDirection: message.sender === 'ai' ? 'row' : 'row-reverse',
              alignItems: 'flex-start',
              maxWidth: '70%',
              gap: '12px'
            }}>
              {message.sender === 'ai' && (
                <div style={{
                  width: '40px',
                  height: '40px',
                  background: '#FFFFFF',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
                }}>
                  <div style={{
                    background: 'linear-gradient(135deg, #E31C79, #C5E063)',
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Shield size={18} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
                  </div>
                </div>
              )}
              
              <div>
                <div style={{
                  background: message.sender === 'ai' ? '#FFFFFF' : '#EEEEEE',
                  borderRadius: message.sender === 'ai' ? '16px 16px 16px 4px' : '16px 16px 4px 16px',
                  padding: '1rem 1.25rem',
                  boxShadow: message.sender === 'ai' ? '0 2px 8px rgba(0,0,0,0.06)' : 'none'
                }}>
                  <p style={{
                    fontSize: '0.95rem',
                    color: '#0A0A0A',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    {message.text}
                  </p>
                </div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#999',
                  marginTop: '6px',
                  paddingLeft: message.sender === 'ai' ? '0' : '0',
                  textAlign: message.sender === 'ai' ? 'left' : 'right'
                }}>
                  {message.time}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div style={{
        padding: '1.5rem 2rem',
        background: '#F7F7F7',
        borderTop: '1px solid #E5E5E5'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#FFFFFF',
          borderRadius: '12px',
          padding: '0.75rem 1rem',
          boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
          border: '1px solid #E5E5E5'
        }}>
          <input
            type="text"
            placeholder="Scrivi il tuo messaggio..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            style={{
              flex: 1,
              border: 'none',
              outline: 'none',
              fontSize: '0.95rem',
              color: '#0A0A0A',
              background: 'transparent',
              padding: '0.5rem'
            }}
          />
          <button
            onClick={handleSend}
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #E31C79, #C5E063)',
              border: 'none',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginLeft: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(227,28,121,0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Send size={18} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
