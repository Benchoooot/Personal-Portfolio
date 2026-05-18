import { useState } from 'react';
import Sidebar from './componets/Sidebar.jsx';
import Navbar from './componets/Navbar.jsx';
import About from './sections/About.jsx';
import Resume from './sections/Resume.jsx';
import Portfolio from './sections/Portfolio.jsx';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('About');

  const renderSection = () => {
    switch (activeTab) {
      case 'About':
        return <About />;
      case 'Resume':
        return <Resume />;
      case 'Portfolio':
        return <Portfolio />;
      default:
        return <About />;
    }
  };

  return (
    <main className="main-container">
      <Sidebar />
      <div className="content-box">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <article style={{ marginTop: '40px' }}>
          {renderSection()}
        </article>
      </div>
    </main>
  );
}

export default App;