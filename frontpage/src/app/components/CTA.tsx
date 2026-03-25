import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 order-lg-2 mb-4 mb-lg-0">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1642873965200-4dd3753336b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwdGVjaG5vbG9neSUyMHNhZmV0eXxlbnwxfHx8fDE3NzQwNDg2Mjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
              alt="People using technology safely"
              className="img-fluid rounded shadow"
            />
          </div>
          <div className="col-lg-6 order-lg-1">
            <h2 className="display-5 fw-bold mb-4">
              Everyone Deserves a Safe Online Experience
            </h2>
            <p className="lead text-muted mb-4">
              We believe the internet should be a place of connection, creativity, and growth—not 
              fear and harassment. That's why we built Wait.
            </p>
            <p className="text-muted mb-4">
              Our mission is to empower individuals with the tools they need to protect themselves 
              from online violence, harassment, and abuse. Using cutting-edge AI technology, we make 
              the internet safer, one user at a time.
            </p>
            <div className="mb-4">
              <h5 className="fw-bold mb-3">Why Choose Us?</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <span className="text-primary fw-bold me-2">→</span>
                  Free 30-day trial, no credit card required
                </li>
                <li className="mb-2">
                  <span className="text-primary fw-bold me-2">→</span>
                  Works across all major social platforms
                </li>
                <li className="mb-2">
                  <span className="text-primary fw-bold me-2">→</span>
                  Privacy-first approach with end-to-end encryption
                </li>
                <li className="mb-2">
                  <span className="text-primary fw-bold me-2">→</span>
                  24/7 support from our safety team
                </li>
              </ul>
            </div>
            <button className="btn btn-primary btn-lg d-flex align-items-center">
              Get Started for Free
              <ArrowRight className="ms-2" size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
