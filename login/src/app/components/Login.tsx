import { ArrowRight, Mail, Lock, Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login submitted', { email, password });
  };

  return (
    <section className="position-relative overflow-hidden" style={{ 
      background: 'linear-gradient(135deg, #C5E063 0%, #E31C79 50%, #C5E063 100%)',
      backgroundSize: '400% 400%',
      animation: 'gradient 12s ease infinite',
      minHeight: 'calc(100vh - 80px)',
      display: 'flex',
      alignItems: 'center',
      padding: '3rem 0'
    }}>
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 0.6; }
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

      <div className="container position-relative">
        <div className="row justify-content-center">
          <div className="col-md-6 col-lg-5 col-xl-4">
            <div style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              padding: '3rem',
              boxShadow: '0 20px 60px rgba(0,0,0,0.15)',
              backdropFilter: 'blur(10px)'
            }}>
              {/* Header */}
              <div className="text-center mb-4">
                <h1 style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  color: '#0A0A0A',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em'
                }}>
                  Bentornato
                </h1>
                <p style={{
                  fontSize: '1rem',
                  color: '#666',
                  margin: 0
                }}>
                  Accedi al tuo account Wait
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                {/* Email Field */}
                <div className="mb-3">
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#0A0A0A',
                    marginBottom: '0.5rem'
                  }}>
                    Email
                  </label>
                  <div className="position-relative">
                    <div style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#999'
                    }}>
                      <Mail size={20} />
                    </div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="nome@esempio.com"
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 1rem 1rem 3rem',
                        border: '2px solid #F0F0F0',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        transition: 'all 0.2s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#E31C79';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(227,28,121,0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#F0F0F0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div className="mb-4">
                  <label style={{
                    display: 'block',
                    fontSize: '0.9rem',
                    fontWeight: '600',
                    color: '#0A0A0A',
                    marginBottom: '0.5rem'
                  }}>
                    Password
                  </label>
                  <div className="position-relative">
                    <div style={{
                      position: 'absolute',
                      left: '1rem',
                      top: '50%',
                      transform: 'translateY(-50%)',
                      color: '#999'
                    }}>
                      <Lock size={20} />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      required
                      style={{
                        width: '100%',
                        padding: '1rem 3rem 1rem 3rem',
                        border: '2px solid #F0F0F0',
                        borderRadius: '12px',
                        fontSize: '1rem',
                        fontFamily: 'inherit',
                        transition: 'all 0.2s ease',
                        outline: 'none'
                      }}
                      onFocus={(e) => {
                        e.currentTarget.style.borderColor = '#E31C79';
                        e.currentTarget.style.boxShadow = '0 0 0 4px rgba(227,28,121,0.1)';
                      }}
                      onBlur={(e) => {
                        e.currentTarget.style.borderColor = '#F0F0F0';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      style={{
                        position: 'absolute',
                        right: '1rem',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        background: 'transparent',
                        border: 'none',
                        cursor: 'pointer',
                        color: '#999',
                        padding: '0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>

                {/* Remember & Forgot */}
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <label className="d-flex align-items-center" style={{ cursor: 'pointer' }}>
                    <input
                      type="checkbox"
                      style={{
                        width: '18px',
                        height: '18px',
                        marginRight: '0.5rem',
                        cursor: 'pointer',
                        accentColor: '#E31C79'
                      }}
                    />
                    <span style={{ fontSize: '0.9rem', color: '#666' }}>Ricordami</span>
                  </label>
                  <a href="#" style={{
                    fontSize: '0.9rem',
                    color: '#E31C79',
                    textDecoration: 'none',
                    fontWeight: '500'
                  }}>
                    Password dimenticata?
                  </a>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="btn btn-primary d-flex align-items-center justify-content-center w-100 mb-4"
                  style={{
                    fontSize: '1.05rem',
                    padding: '1rem',
                    boxShadow: '0 8px 24px rgba(227,28,121,0.25)'
                  }}
                >
                  Accedi
                  <ArrowRight className="ms-2" size={20} />
                </button>

                {/* Divider */}
                <div className="position-relative mb-4">
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: 0,
                    right: 0,
                    height: '1px',
                    background: '#F0F0F0'
                  }} />
                  <div className="text-center position-relative">
                    <span style={{
                      background: '#FFFFFF',
                      padding: '0 1rem',
                      fontSize: '0.85rem',
                      color: '#999'
                    }}>
                      oppure
                    </span>
                  </div>
                </div>

                {/* Social Login */}
                <div className="d-grid gap-2 mb-4">
                  <button
                    type="button"
                    style={{
                      width: '100%',
                      padding: '0.875rem',
                      background: '#FFFFFF',
                      border: '2px solid #F0F0F0',
                      borderRadius: '12px',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      color: '#0A0A0A',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = '#E5E5E5';
                      e.currentTarget.style.background = '#FAFAFA';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = '#F0F0F0';
                      e.currentTarget.style.background = '#FFFFFF';
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    Continua con Google
                  </button>
                </div>

                {/* Sign up link */}
                <div className="text-center">
                  <span style={{ fontSize: '0.9rem', color: '#666' }}>
                    Non hai un account?{' '}
                    <a href="#" style={{
                      color: '#E31C79',
                      textDecoration: 'none',
                      fontWeight: '600'
                    }}>
                      Registrati
                    </a>
                  </span>
                </div>
              </form>
            </div>

            {/* Trust badges */}
            <div className="text-center mt-4">
              <div className="d-flex align-items-center justify-content-center gap-4 flex-wrap">
                <div className="d-flex align-items-center gap-2">
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#28CA42'
                  }} />
                  <span style={{ fontSize: '0.85rem', color: 'rgba(10,10,10,0.6)', fontWeight: '500' }}>
                    Connessione sicura
                  </span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#28CA42'
                  }} />
                  <span style={{ fontSize: '0.85rem', color: 'rgba(10,10,10,0.6)', fontWeight: '500' }}>
                    Crittografia end-to-end
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
