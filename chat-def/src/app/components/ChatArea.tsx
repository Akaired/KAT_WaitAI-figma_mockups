import { Send, User } from 'lucide-react';
import { useState } from 'react';
import waitIcon from 'figma:asset/a26f58a9f0c43a8a3280cdcc83ffa2c00e4430bd.png';
import { SafetyStatusIndicator } from './SafetyStatusIndicator';

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
      background: '#FAFAFA',
      position: 'relative'
    }}>
      {/* Chat Header */}
      <div style={{
        padding: '1.5rem 2rem',
        background: '#FFFFFF',
        borderBottom: '1px solid #E5E5E5',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <img 
            src={waitIcon} 
            alt="Wait AI" 
            style={{
              width: '56px',
              height: '56px',
              borderRadius: '50%'
            }}
          />
          <div>
            <h2 style={{
              fontSize: '1.25rem',
              fontWeight: '700',
              color: '#000000',
              margin: 0,
              fontFamily: 'Inter, sans-serif'
            }}>
              Wait AI
            </h2>
            <p style={{
              fontSize: '0.95rem',
              color: '#999999',
              margin: '2px 0 0',
              fontFamily: 'Inter, sans-serif'
            }}>
              Online
            </p>
          </div>
        </div>
        <div style={{
          width: '12px',
          height: '12px',
          background: '#10B981',
          borderRadius: '50%'
        }} />
      </div>

      {/* Messages Area */}
      <div style={{
        flex: 1,
        overflowY: 'auto',
        padding: '2rem',
        background: '#FAFAFA'
      }}>
        {messages.map((message) => (
          <div
            key={message.id}
            style={{
              display: 'flex',
              justifyContent: message.sender === 'ai' ? 'flex-start' : 'flex-start',
              marginBottom: '1.5rem'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'flex-start',
              maxWidth: '80%',
              gap: '12px'
            }}>
              {/* Avatar */}
              <div style={{
                width: '48px',
                height: '48px',
                flexShrink: 0,
                background: message.sender === 'user' ? '#F5F5F5' : 'transparent',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {message.sender === 'ai' ? (
                  <img 
                    src={waitIcon} 
                    alt="Wait AI" 
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%'
                    }}
                  />
                ) : (
                  <User size={24} style={{ color: '#999999' }} strokeWidth={2} />
                )}
              </div>
              
              {/* Message bubble */}
              <div style={{
                background: '#F5F5F5',
                borderRadius: '16px',
                padding: '1rem 1.25rem',
                maxWidth: '100%'
              }}>
                <p style={{
                  fontSize: '1rem',
                  color: '#000000',
                  margin: 0,
                  lineHeight: '1.6',
                  fontFamily: 'Inter, sans-serif'
                }}>
                  {message.text}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div style={{
        padding: '1.5rem 2rem',
        background: '#FFFFFF',
        borderTop: '1px solid #E5E5E5'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '0.75rem 1rem',
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
              padding: '0.5rem',
              fontFamily: 'Inter, sans-serif'
            }}
          />
          <button
            onClick={handleSend}
            style={{
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #FF6B9D, #A855F7)',
              border: 'none',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              marginLeft: '8px'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(255, 107, 157, 0.4)';
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

      {/* Safety Status Indicator */}
      <SafetyStatusIndicator />
    </div>
  );
}