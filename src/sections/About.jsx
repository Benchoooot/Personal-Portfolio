import 'react';

const About = () => {
  const services = [
    {
      title: "Workflow Automation",
      description: "Designing streamlined business logic, custom automated approval steps, and data notifications to optimize operational efficiency.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="3"></circle>
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
        </svg>
      )
    },
    {
      title: "Access Security (RBAC)",
      description: "Implementing role-based access controls, robust multi-tenant security filters, and comprehensive system change log audits.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
        </svg>
      )
    },
    {
      title: "Full-Stack Development",
      description: "Building scalable web and backend capabilities using modern frameworks like React, Node.js, Express, and C# environments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
          <line x1="14" y1="4" x2="10" y2="20"></line>
        </svg>
      )
    },
    {
      title: "Technical Environments",
      description: "Managing enterprise platforms including Google Workspace, Microsoft Power Platform, and providing live system troubleshooting.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
        </svg>
      )
    }
  ];

  const testimonials = [
    {
      name: "Daniel Lewis",
      text: "Bernard deployed our automated tracking tools ahead of schedule. The role-based filter controls gave our department complete peace of mind.",
      avatar: "👨‍💻"
    },
    {
      name: "Jessica Miller",
      text: "The native audit change logs transformed our compliance visibility. An exceptionally detail-oriented developer to collaborate with.",
      avatar: "👩‍💻"
    }
  ];

  return (
    <section className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="about-text">
        I am a motivated and detail-oriented <strong>Information Technology Developer</strong> with a proven track record of designing, building, and deploying workflow solutions. I have hands-on experience working in high-security environments, collaborating directly with departments to streamline processes.
      </p>
      
      <p className="about-text" style={{ marginBottom: '40px' }}>
        My expertise centers around business process automation, role-based access architectures (RBAC), and backend logic. I enjoy turning complex corporate challenges into structured, highly efficient, and secure digital tools.
      </p>

      {/* "What I'm Doing" Section */}
      <h3 className="sub-section-title">What I'm Doing</h3>
      <div className="service-grid">
        {services.map((service, index) => (
          <div key={index} className="service-item-card">
            <div className="service-icon-box">{service.icon}</div>
            <div className="service-content-info">
              <h4>{service.title}</h4>
              <p>{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Testimonials Section */}
      <h3 className="sub-section-title" style={{ marginTop: '45px' }}>Testimonials</h3>
      <div className="testimonials-grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card">
            <div className="testimonial-avatar-box">{item.avatar}</div>
            <div className="testimonial-main-content">
              <h5>{item.name}</h5>
              <p>"{item.text}"</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;