const stats = [
  {
    number: '100K+',
    label: 'Active Users',
    description: 'Protected worldwide',
  },
  {
    number: '5M+',
    label: 'Threats Blocked',
    description: 'In the last month',
  },
  {
    number: '99.7%',
    label: 'Accuracy Rate',
    description: 'In threat detection',
  },
  {
    number: '24/7',
    label: 'Protection',
    description: 'Always monitoring',
  },
];

export function Statistics() {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container py-4">
        <div className="row text-center g-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-lg-3">
              <div className="display-4 fw-bold mb-2">{stat.number}</div>
              <div className="h5 mb-1">{stat.label}</div>
              <div className="text-white-50">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
