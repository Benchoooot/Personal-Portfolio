import 'react';

const Resume = () => {
  return (
    <div className="resume-section" style={{ width: '100%' }}>
      <h2 className="section-title">Resume</h2>

      {/* Education Timeline */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">🎓</div>
          <h3 className="timeline-item-title" style={{ fontSize: '1.3rem' }}>Education</h3>
        </div>

        <ul className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">National Teachers College</h4>
            <span>2022 — 2026</span>
            <p className="timeline-text">Bachelor of Science in Information Technology</p>
          </li>
          <li className="timeline-item">
            <h4 className="timeline-item-title">Olivarez College</h4>
            <span>2020 — 2022</span>
            <p className="timeline-text">Science, Technology, Engineering, and Mathematics (STEM) Strand</p>
          </li>
        </ul>
      </div>

      {/* Experience Timeline */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">💼</div>
          <h3 className="timeline-item-title" style={{ fontSize: '1.3rem' }}>Experience</h3>
        </div>

        <ul className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">IT Intern — GreenStreamCorp / LightStream8</h4>
            <span>Jan 2026 — Present</span>
            <div className="timeline-text">
              <ul>
                <li>Successfully deployed an automated Leave Management System and an IT Ticketing System with trend analysis.</li>
                <li>Implemented security filters and role-based access control (RBAC) to manage multi-company client data safely.</li>
                <li>Engineered a native Change Log audit trail mapping user IDs and timestamps, generating 100% data visibility.</li>
                <li>Designed automated approval workflows featuring custom HTML email notifications.</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>

      {/* Certifications Timeline */}
      <div className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 15l-2 5L9 9l11 4-5 2zm0 0l4 8 4-11-11 4 8 4z"></path>
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg>
          </div>
          <h3 className="timeline-item-title" style={{ fontSize: '1.3rem' }}>Certifications & Training</h3>
        </div>

        <ul className="timeline-list">
          <li className="timeline-item">
            <h4 className="timeline-item-title">Developing Back-End Apps with Node.js and Express</h4>
            <span>November 2025</span>
            <p className="timeline-text">IBM Professional Certification</p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Developing Front-End Apps with React</h4>
            <span>October 2025</span>
            <p className="timeline-text">IBM Professional Certification</p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Microsoft Power Platform Fundamentals</h4>
            <span>Business Process Automation</span>
            <p className="timeline-text">Microsoft Certified</p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Microsoft Azure Fundamentals (AZ-900)</h4>
            <span>Cloud Infrastructure</span>
            <p className="timeline-text">Microsoft Certified</p>
          </li>

          <li className="timeline-item">
            <h4 className="timeline-item-title">Accenture Skill Enhancement (SETIP)</h4>
            <span>Career Bridging Program</span>
            <p className="timeline-text">Skill Enhancement and Training Internship</p>
          </li>
        </ul>
      </div>

      {/* Skills Section */}
      <div className="skills-block" style={{ marginTop: '35px' }}>
        <h3 className="skills-title">My Skills</h3>
        <ul className="skills-list">
          <li className="skills-item">React</li>
          <li className="skills-item">Node.js / Express</li>
          <li className="skills-item">AppSheet Automation</li>
          <li className="skills-item">Role-Based Security (RBAC)</li>
          <li className="skills-item">Google Workspace & MS Office</li>
          <li className="skills-item">Process Automation (Power Platform)</li>
          <li className="skills-item">Predictive Modeling</li>
        </ul>
      </div>
    </div>
  );
};

export default Resume;