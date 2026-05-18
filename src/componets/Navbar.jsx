import  { useState, useEffect, useRef } from 'react'; // <-- FIXES 'no-undef' errors

const Navbar = ({ activeTab, setActiveTab }) => {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const tabs = ['About', 'Resume', 'Portfolio'];
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
  const tabsRef = useRef([]);

  useEffect(() => {
    // Find the index of the currently active tab
    const activeIndex = tabs.indexOf(activeTab);
    const activeBtn = tabsRef.current[activeIndex];

    if (activeBtn) {
      // Measure the exact position and width of the active button
      setIndicatorStyle({
        left: `${activeBtn.offsetLeft}px`,
        width: `${activeBtn.offsetWidth}px`,
      });
    }
    // Adding 'tabs' here satisfies the ESLint exhaustive-deps rule
  }, [activeTab, tabs]); 

  return (
    <nav className="navbar" style={{ position: 'relative' }}>
      {/* This is the sliding background capsule */}
      <span className="nav-indicator" style={indicatorStyle} />

      {tabs.map((tab, idx) => (
        <button
          key={tab}
          ref={(el) => (tabsRef.current[idx] = el)}
          className={`nav-btn ${activeTab === tab ? 'active' : ''}`}
          onClick={() => setActiveTab(tab)}
          data-text={tab}
        >
          {tab}
        </button>
      ))}
    </nav>
  );
};

export default Navbar;