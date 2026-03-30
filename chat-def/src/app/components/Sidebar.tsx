import { LayoutDashboard, MessageCircle, Download } from 'lucide-react';
import { useState } from 'react';
import waitLogo from 'figma:asset/a26f58a9f0c43a8a3280cdcc83ffa2c00e4430bd.png';
import waitWordmark from 'figma:asset/43f203fd5bb49d0824a649367200f04df6358fa8.png';
import wLogoPath from '../imports/W-2.svg';

const menuItems = [
  { icon: LayoutDashboard, label: 'Dashboard', page: 'dashboard' },
  { icon: MessageCircle, label: 'Chat', page: 'chat' },
  { icon: Download, label: 'Scarica il plugin', page: 'plugin' },
];

interface SidebarProps {
  activePage?: string;
}

export function Sidebar({ activePage = 'dashboard' }: SidebarProps) {
  // Threat level: 'safe' | 'warning' | 'danger' | 'critical'
  const [threatLevel, setThreatLevel] = useState<'safe' | 'warning' | 'danger' | 'critical'>('safe');

  const getThreatColor = () => {
    switch(threatLevel) {
      case 'safe': return '#2E7D32'; // Verde protettivo
      case 'warning': return '#F9A825'; // Giallo attenzione
      case 'danger': return '#EF6C00'; // Arancione rischio
      case 'critical': return '#C62828'; // Rosso serio
      default: return '#2E7D32';
    }
  };

  const getThreatText = () => {
    switch(threatLevel) {
      case 'safe': return { title: 'Tutto sicuro', subtitle: 'Stai tranquillo, sei protetto' };
      case 'warning': return { title: 'Prime avvisaglie', subtitle: 'Respira, siamo qui quando vuoi' };
      case 'danger': return { title: 'Situazione al limite', subtitle: 'Fai attenzione, siamo qui per aiutarti' };
      case 'critical': return { title: 'Fermati, sei in pericolo', subtitle: 'Prendi provvedimenti immediati' };
      default: return { title: 'Tutto sicuro', subtitle: 'Stai tranquillo, sei protetto' };
    }
  };

  return (
    <aside style={{
      width: '240px',
      height: '100vh',
      background: '#FFFFFF',
      borderRight: '1px solid rgba(168, 85, 247, 0.1)',
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
          <img 
            src={waitLogo} 
            alt="Wait" 
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              marginRight: '12px'
            }}
          />
          <img 
            src={waitWordmark} 
            alt="Wait" 
            style={{
              height: '40px',
              width: 'auto'
            }}
          />
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '0 1rem' }}>
        {menuItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = item.page === activePage;
          return (
            <a
              key={index}
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0.75rem 1rem',
                marginBottom: '0.5rem',
                borderRadius: '12px',
                textDecoration: 'none',
                color: isActive ? '#FF6B9D' : '#666',
                background: isActive ? 'linear-gradient(135deg, rgba(255, 107, 157, 0.1), rgba(168, 85, 247, 0.1))' : 'transparent',
                fontWeight: isActive ? '600' : '500',
                fontSize: '0.95rem',
                transition: 'all 0.2s ease',
                fontFamily: 'Inter, sans-serif'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.background = 'rgba(168, 85, 247, 0.05)';
                  e.currentTarget.style.color = '#0A0A0A';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
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

      {/* Protection Status with W Logo */}
      <div style={{
        margin: '0 1rem 1.5rem',
        padding: '1rem',
        background: `${getThreatColor()}15`,
        borderRadius: '12px',
        border: `1px solid ${getThreatColor()}40`
      }}>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div style={{
            width: '64px',
            height: '64px',
            position: 'relative'
          }}>
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="64" 
              height="64" 
              viewBox="0 0 30 30"
              style={{
                filter: `drop-shadow(0 2px 8px ${getThreatColor()}40)`
              }}
            >
              <g transform="matrix(1, 0, 0, 1, 6, 3)">
                <g fill={getThreatColor()} fillOpacity="1">
                  <g transform="translate(6.458098, 16.250387)">
                    <path d="M 2.929688 -0.824219 C 2.402344 -0.589844 1.894531 -0.574219 1.398438 -0.773438 C 0.960938 -0.953125 0.472656 -1.328125 -0.0585938 -1.898438 L -1.941406 -3.953125 C -2.21875 -4.25 -2.378906 -4.601562 -2.429688 -5.011719 C -2.457031 -5.246094 -2.429688 -5.464844 -2.34375 -5.671875 C -2.261719 -5.871094 -2.132812 -6.054688 -1.953125 -6.214844 C -1.628906 -6.519531 -1.261719 -6.664062 -0.855469 -6.652344 C -0.449219 -6.636719 -0.09375 -6.46875 0.203125 -6.140625 L 2.238281 -3.917969 C 2.34375 -3.800781 2.433594 -3.710938 2.515625 -3.644531 C 2.574219 -3.597656 2.617188 -3.566406 2.648438 -3.558594 C 2.636719 -3.5625 2.625 -3.5625 2.613281 -3.558594 C 2.621094 -3.558594 2.640625 -3.570312 2.664062 -3.59375 C 2.664062 -3.59375 2.667969 -3.597656 2.667969 -3.597656 C 2.667969 -3.597656 2.667969 -3.597656 2.664062 -3.59375 C 2.667969 -3.601562 2.667969 -3.613281 2.664062 -3.636719 C 2.65625 -3.667969 2.625 -3.726562 2.566406 -3.8125 C 2.492188 -3.925781 2.378906 -4.0625 2.230469 -4.21875 L 1.203125 -5.351562 C 0.921875 -5.65625 0.761719 -6.015625 0.71875 -6.425781 C 0.671875 -6.886719 0.832031 -7.28125 1.203125 -7.617188 C 1.527344 -7.921875 1.894531 -8.066406 2.300781 -8.054688 C 2.707031 -8.042969 3.0625 -7.871094 3.359375 -7.542969 L 5.46875 -5.210938 C 5.554688 -5.117188 5.664062 -5.042969 5.789062 -4.984375 C 5.796875 -4.984375 5.804688 -4.980469 5.808594 -4.980469 C 5.804688 -4.980469 5.804688 -4.980469 5.800781 -4.980469 C 5.808594 -4.980469 5.824219 -4.992188 5.847656 -5.011719 L 6.132812 -4.679688 L 5.835938 -5 C 5.847656 -5.011719 5.855469 -5.019531 5.859375 -5.027344 C 5.859375 -5.03125 5.859375 -5.042969 5.859375 -5.054688 C 5.847656 -5.132812 5.796875 -5.222656 5.707031 -5.328125 C 5.527344 -5.53125 5.371094 -5.675781 5.230469 -5.765625 C 5.074219 -5.863281 4.929688 -5.949219 4.796875 -6.011719 C 4.617188 -6.097656 4.453125 -6.207031 4.308594 -6.332031 C 4.148438 -6.46875 4 -6.667969 3.859375 -6.933594 C 3.703125 -7.238281 3.644531 -7.550781 3.691406 -7.867188 C 3.734375 -8.167969 3.855469 -8.4375 4.046875 -8.683594 C 4.234375 -8.921875 4.476562 -9.109375 4.769531 -9.238281 C 5.234375 -9.445312 5.683594 -9.457031 6.121094 -9.273438 C 6.546875 -9.09375 6.851562 -8.792969 7.039062 -8.375 C 7.097656 -8.234375 7.15625 -8.050781 7.210938 -7.824219 C 7.261719 -7.601562 7.292969 -7.386719 7.308594 -7.183594 L 7.378906 -5.8125 C 7.398438 -5.511719 7.410156 -5.199219 7.410156 -4.867188 C 7.414062 -4.523438 7.382812 -4.191406 7.324219 -3.875 C 7.257812 -3.535156 7.144531 -3.230469 6.980469 -2.957031 C 6.792969 -2.652344 6.527344 -2.421875 6.183594 -2.269531 C 5.628906 -2.023438 5.109375 -1.972656 4.628906 -2.113281 C 4.167969 -2.253906 3.710938 -2.589844 3.257812 -3.128906 L 3.59375 -3.410156 L 3.769531 -3.007812 L 3.664062 -2.960938 L 3.484375 -3.363281 L 3.914062 -3.453125 C 4.03125 -2.910156 4.039062 -2.414062 3.9375 -1.972656 C 3.816406 -1.453125 3.480469 -1.066406 2.929688 -0.824219 Z M 2.574219 -1.621094 C 2.859375 -1.75 3.03125 -1.929688 3.085938 -2.167969 C 3.15625 -2.484375 3.148438 -2.851562 3.058594 -3.269531 L 2.984375 -3.617188 L 3.714844 -3.941406 L 3.925781 -3.691406 C 4.269531 -3.289062 4.585938 -3.042969 4.878906 -2.953125 C 5.15625 -2.871094 5.46875 -2.910156 5.828125 -3.066406 C 6.003906 -3.148438 6.140625 -3.261719 6.230469 -3.410156 C 6.339844 -3.59375 6.417969 -3.800781 6.464844 -4.039062 C 6.511719 -4.300781 6.539062 -4.574219 6.535156 -4.867188 C 6.535156 -5.175781 6.523438 -5.476562 6.503906 -5.769531 L 6.433594 -7.121094 C 6.425781 -7.28125 6.398438 -7.449219 6.355469 -7.625 C 6.316406 -7.800781 6.277344 -7.929688 6.238281 -8.019531 C 6.144531 -8.226562 5.992188 -8.375 5.78125 -8.464844 C 5.578125 -8.550781 5.359375 -8.542969 5.125 -8.4375 C 4.964844 -8.367188 4.832031 -8.269531 4.734375 -8.140625 C 4.636719 -8.019531 4.578125 -7.886719 4.558594 -7.738281 C 4.539062 -7.609375 4.566406 -7.476562 4.636719 -7.339844 C 4.722656 -7.175781 4.804688 -7.058594 4.878906 -6.996094 C 4.96875 -6.917969 5.066406 -6.851562 5.179688 -6.796875 C 5.339844 -6.71875 5.515625 -6.621094 5.703125 -6.5 C 5.910156 -6.367188 6.128906 -6.171875 6.359375 -5.910156 C 6.574219 -5.671875 6.695312 -5.421875 6.726562 -5.160156 C 6.746094 -5.003906 6.730469 -4.855469 6.675781 -4.71875 C 6.625 -4.582031 6.542969 -4.460938 6.425781 -4.355469 L 6.421875 -4.351562 L 6.417969 -4.34375 C 6.273438 -4.222656 6.117188 -4.148438 5.953125 -4.117188 C 5.777344 -4.085938 5.601562 -4.109375 5.429688 -4.1875 C 5.195312 -4.292969 4.992188 -4.4375 4.820312 -4.625 L 2.714844 -6.953125 C 2.582031 -7.097656 2.433594 -7.175781 2.269531 -7.179688 C 2.105469 -7.183594 1.945312 -7.113281 1.789062 -6.96875 C 1.640625 -6.832031 1.570312 -6.679688 1.589844 -6.515625 C 1.613281 -6.296875 1.699219 -6.105469 1.851562 -5.941406 L 2.871094 -4.816406 C 3.253906 -4.40625 3.472656 -4.066406 3.523438 -3.800781 C 3.554688 -3.636719 3.546875 -3.480469 3.503906 -3.339844 C 3.457031 -3.1875 3.371094 -3.054688 3.246094 -2.941406 C 3.117188 -2.824219 2.980469 -2.75 2.835938 -2.710938 C 2.671875 -2.667969 2.507812 -2.675781 2.347656 -2.734375 C 2.125 -2.816406 1.875 -3.011719 1.59375 -3.328125 L -0.445312 -5.550781 C -0.578125 -5.695312 -0.722656 -5.773438 -0.886719 -5.777344 C -1.050781 -5.78125 -1.210938 -5.710938 -1.367188 -5.566406 C -1.449219 -5.492188 -1.503906 -5.417969 -1.535156 -5.34375 C -1.5625 -5.273438 -1.570312 -5.199219 -1.558594 -5.117188 C -1.535156 -4.894531 -1.445312 -4.703125 -1.296875 -4.542969 L 0.582031 -2.496094 C 1.027344 -2.019531 1.410156 -1.714844 1.730469 -1.585938 C 1.992188 -1.476562 2.273438 -1.488281 2.574219 -1.621094 Z M 2.574219 -1.621094 "/>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ 
              fontSize: '0.85rem', 
              fontWeight: '700', 
              color: getThreatColor(),
              fontFamily: 'Inter, sans-serif',
              marginBottom: '2px'
            }}>
              {getThreatText().title}
            </div>
            <div style={{ 
              fontSize: '0.7rem', 
              color: '#666',
              fontFamily: 'Inter, sans-serif'
            }}>
              {getThreatText().subtitle}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}