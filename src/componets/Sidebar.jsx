import 'react';

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar-info">
        <figure className="avatar-box">
          <img 
            src="https://www.dropbox.com/scl/fi/rwceyjv47skmavdoyvtpz/IMG_20240319_080316.jpg?rlkey=6w7nhwx4yzf1g5x7rpyc89htm&st=hhqv5kp1&dl=1" 
            alt="Bernard Jr. Paular" 
          />
        </figure>
        <div className="info-content">
          <h1 className="name">Bernard Jr. V. Paular</h1>
          <p className="title">Web/App Developer</p>
        </div>
      </div>
      
      {/* ==========================================================================
         UPDATED: Premium Contact List Box Layout matching template icons
         ========================================================================== */}
      <div className="contact-list">
        
        {/* Email Item */}
        <div className="contact-item">
          <div className="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
              <polyline points="22,6 12,13 2,6"></polyline>
            </svg>
          </div>
          <div className="contact-info">
            <p className="contact-title">Email</p>
            <a href="mailto:bernardjr.paular@gmail.com" className="contact-link">bernardjr.paular@gmail.com</a>
          </div>
        </div>

        {/* Phone Item */}
        <div className="contact-item">
          <div className="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
              <line x1="12" y1="18" x2="12.01" y2="18"></line>
            </svg>
          </div>
          <div className="contact-info">
            <p className="contact-title">Phone</p>
            <p className="contact-text">0955-712-6751</p>
          </div>
        </div>

        {/* Location Item */}
        <div className="contact-item">
          <div className="icon-box">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
          </div>
          <div className="contact-info">
            <p className="contact-title">Location</p>
            <p className="contact-text">Parañaque City, Metro Manila</p>
          </div>
        </div>

      </div>

      {/* Social Media Footer Layout */}
      <div className="sidebar-socials">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
          </svg>
        </a>
        <a href="https://www.linkedin.com/in/benj-paular" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect x="2" y="9" width="4" height="12"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;