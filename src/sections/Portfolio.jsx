import 'react';

const Portfolio = () => {
  const projects = [
    {
      title: 'Automated Leave Management System',
      description: 'An internal HR administrative platform featuring role-based security filters and automated custom HTML email triggers. Streamlined communication and resulted in zero unauthorized access incidents.',
      tech: ['AppSheet', 'HTML Notifications', 'RBAC Security']
    },
    {
      title: 'IT Ticketing System & Trend Analysis',
      description: 'An enterprise ticketing tracker built for multi-company operations. Secured using dynamic access filters and equipped with custom UX dashboards for analyzing active task trends.',
      tech: ['AppSheet Engine', 'Data Security', 'Analytics Dashboards']
    },
    {
      title: 'Native Change Log Audit Trail',
      description: 'An internal database accountability system tracking administrative adjustments by mapping timestamps and active user IDs directly to modification records.',
      tech: ['Data Governance', 'Audit Tracking', 'Database Logic']
    }
  ];

  return (
    <section>
      <h2 className="section-title">Portfolio Achievements</h2>
      <p style={{ color: '#a0a0a0', fontSize: '0.9rem', marginBottom: '20px' }}>
        Projects and enterprise systems engineered during my professional IT engagement under strict data handling guidelines.
      </p>
      <div className="project-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <h4 style={{ color: '#ffdb70', marginBottom: '8px' }}>{project.title}</h4>
            <p style={{ fontSize: '0.85rem', color: '#d6d6d6', marginBottom: '15px', lineHeight: '1.5' }}>
              {project.description}
            </p>
            <div style={{ marginTop: 'auto' }}>
              {project.tech.map((t, i) => (
                <span key={i} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;