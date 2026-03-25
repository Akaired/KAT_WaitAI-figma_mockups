import { ImageWithFallback } from './figma/ImageWithFallback';
import { Download, Settings, ShieldCheck, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Download,
    number: '01',
    title: 'Install & Connect',
    description: 'Download our browser extension or mobile app and connect your social media accounts securely.',
  },
  {
    icon: Settings,
    number: '02',
    title: 'Customize Settings',
    description: 'Set your protection preferences, define what content to filter, and configure alert levels.',
  },
  {
    icon: ShieldCheck,
    number: '03',
    title: 'Stay Protected',
    description: 'Our AI works 24/7 in the background, automatically blocking threats and harmful content.',
  },
  {
    icon: TrendingUp,
    number: '04',
    title: 'Review & Report',
    description: 'Monitor incidents in your dashboard and easily report serious violations to platforms or authorities.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-5 bg-light">
      <div className="container py-5">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold mb-3">How It Works</h2>
          <p className="lead text-muted mx-auto" style={{ maxWidth: '700px' }}>
            Get protected in minutes with our simple four-step process
          </p>
        </div>
        
        <div className="row g-4 mb-5">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="col-md-6 col-lg-3">
                <div className="text-center position-relative">
                  <div className="position-relative d-inline-block">
                    <div className="bg-primary bg-opacity-10 rounded-circle d-inline-flex p-4 mb-3">
                      <Icon className="text-primary" size={32} />
                    </div>
                    <div 
                      className="position-absolute top-0 end-0 bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" 
                      style={{ width: '32px', height: '32px', fontSize: '12px', fontWeight: 'bold' }}
                    >
                      {step.number}
                    </div>
                  </div>
                  <h5 className="fw-bold mb-3">{step.title}</h5>
                  <p className="text-muted">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="row align-items-center mt-5">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1675557570482-df9926f61d86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBSSUyMGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2UlMjBkaWdpdGFsfGVufDF8fHx8MTc3NDA0ODYyOXww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="AI technology"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6">
            <h3 className="fw-bold mb-4">Powered by Advanced AI Technology</h3>
            <p className="text-muted mb-3">
              Our platform uses state-of-the-art natural language processing and machine learning 
              to understand context, detect subtle threats, and identify harmful patterns that 
              traditional filters miss.
            </p>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className="text-primary me-2">✓</span>
                Continuously learning from millions of data points
              </li>
              <li className="mb-2">
                <span className="text-primary me-2">✓</span>
                Understands context and nuance in communication
              </li>
              <li className="mb-2">
                <span className="text-primary me-2">✓</span>
                Multi-language support for global protection
              </li>
              <li className="mb-2">
                <span className="text-primary me-2">✓</span>
                99.7% accuracy in threat detection
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
