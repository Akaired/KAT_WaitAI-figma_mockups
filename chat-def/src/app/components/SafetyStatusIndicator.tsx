import { useState } from 'react';

type ThreatLevel = 'safe' | 'warning' | 'danger' | 'critical';

interface StatusConfig {
  title: string;
  subtitle: string;
  cardBg: string;
  textColor: string;
  logoColor: string;
}

const statusConfigs: Record<ThreatLevel, StatusConfig> = {
  safe: {
    title: 'Tutto sicuro',
    subtitle: 'Stai tranquillo, sei protetto',
    cardBg: '#E8F5E9',
    textColor: '#1B5E20',
    logoColor: '#2E7D32'
  },
  warning: {
    title: 'Prime avvisaglie',
    subtitle: 'Respira, siamo qui quando vuoi',
    cardBg: '#FFF9C4',
    textColor: '#F57F17',
    logoColor: '#F9A825'
  },
  danger: {
    title: 'Situazione al limite',
    subtitle: 'Fai attenzione, siamo qui per aiutarti',
    cardBg: '#FFE0B2',
    textColor: '#E65100',
    logoColor: '#EF6C00'
  },
  critical: {
    title: 'Fermati, sei in pericolo',
    subtitle: 'Prendi provvedimenti immediati',
    cardBg: '#FFCDD2',
    textColor: '#B71C1C',
    logoColor: '#C62828'
  }
};

export function SafetyStatusIndicator() {
  const [threatLevel, setThreatLevel] = useState<ThreatLevel>('safe');
  const config = statusConfigs[threatLevel];

  // Simula cambio di stato per testing (da rimuovere in produzione)
  const cycleStatus = () => {
    const levels: ThreatLevel[] = ['safe', 'warning', 'danger', 'critical'];
    const currentIndex = levels.indexOf(threatLevel);
    const nextIndex = (currentIndex + 1) % levels.length;
    setThreatLevel(levels[nextIndex]);
  };

  return (
    null
  );
}
