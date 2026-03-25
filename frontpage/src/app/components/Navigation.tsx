import { Shield } from 'lucide-react';

export function Navigation() {
  return (
    <nav className="navbar navbar-light bg-white py-3 position-sticky top-0" style={{ 
      borderBottom: '1px solid rgba(0,0,0,0.05)',
      backdropFilter: 'blur(10px)',
      backgroundColor: 'rgba(255,255,255,0.95) !important',
      zIndex: 1000
    }}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="#home">
          <div style={{
            background: 'linear-gradient(135deg, #E31C79, #C5E063)',
            padding: '8px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '12px'
          }}>
            <Shield size={24} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: '700', fontSize: '1.25rem', color: '#0A0A0A' }}>Wait</span>
        </a>
        
        <div className="d-flex gap-2">
          <button style={{
            padding: '0.65rem 1.5rem',
            background: 'transparent',
            border: '1.5px solid #E5E5E5',
            borderRadius: '100px',
            fontWeight: '500',
            fontSize: '0.95rem',
            color: '#0A0A0A',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = '#E31C79';
            e.currentTarget.style.color = '#E31C79';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = '#E5E5E5';
            e.currentTarget.style.color = '#0A0A0A';
          }}>
            Login
          </button>
          <button style={{
            padding: '0.65rem 1.5rem',
            background: 'linear-gradient(135deg, #E31C79, #C5E063)',
            border: 'none',
            borderRadius: '100px',
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
            Registrati
          </button>
        </div>
      </div>
    </nav>
  );
}