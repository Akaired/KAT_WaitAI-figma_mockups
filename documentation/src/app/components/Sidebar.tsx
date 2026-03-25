import { Shield, LayoutDashboard, MessageCircle, Download, BookOpen, FileText } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', active: false },
  { icon: MessageCircle, label: 'Chat', active: false },
  { icon: BookOpen, label: 'Addestramento', active: false },
  { icon: FileText, label: 'Documentazione', active: true },
  { icon: Download, label: 'Scarica il plugin', active: false },
];

export function Sidebar() {
  return (
    <aside style={{
      width: '240px',
      height: '100vh',
      background: '#FFFFFF',
      borderRight: '1px solid #E5E5E5',
      position: 'fixed',
      left: 0,
      top: 0,
      display: 'flex',
      flexDirection: 'column',
      padding: '1.5rem 0'
    }}>
      {/* Logo */}
      <div style={{ padding: '0 1.5rem', marginBottom: '2.5rem' }}>
        <div className="d-flex align-items-center">
          <div style={{
            background: 'linear-gradient(135deg, #E31C79, #C5E063)',
            padding: '8px',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginRight: '10px'
          }}>
            <Shield size={20} style={{ color: '#FFFFFF' }} strokeWidth={2.5} />
          </div>
          <span style={{ fontWeight: '700', fontSize: '1.1rem', color: '#0A0A0A' }}>SafeGuard AI</span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '0 1rem' }}>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <a
              key={index}
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                marginBottom: '0.5rem',
                borderRadius: '8px',
                textDecoration: 'none',
                color: item.active ? '#E31C79' : '#666',
                background: item.active ? 'rgba(227,28,121,0.08)' : 'transparent',
                fontWeight: item.active ? '600' : '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease'
              }}
              onMouseEnter={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = '#F7F7F7';
                  e.currentTarget.style.color = '#0A0A0A';
                }
              }}
              onMouseLeave={(e) => {
                if (!item.active) {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#666';
                }
              }}
            >
              <Icon size={18} style={{ marginRight: '12px' }} strokeWidth={2} />
              {item.label}
            </a>
          );
        })}
      </nav>

      {/* Protection Status */}
      <div style={{
        margin: '0 1rem 1.5rem',
        padding: '1rem',
        background: 'linear-gradient(135deg, rgba(40,202,66,0.08), rgba(197,224,99,0.08))',
        borderRadius: '12px',
        border: '1px solid rgba(40,202,66,0.15)'
      }}>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span style={{ fontSize: '0.85rem', fontWeight: '600', color: '#28CA42' }}>
            Protezione attiva
          </span>
          <div style={{
            width: '20px',
            height: '20px',
            background: '#28CA42',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.7rem',
            color: '#FFFFFF'
          }}>
            ✓
          </div>
        </div>
        <div style={{ fontSize: '0.75rem', color: '#666' }}>
          Monitoraggio in tempo reale
        </div>
      </div>
    </aside>
  );
}