export default function TopBar() {
  return (
    <header className="topbar">
      <div className="topbar-left">
        <div className="logo-icon" />
        <span className="logo-text">Tech.Care</span>
      </div>

      <nav className="topnav-center">
        <button className="topnav-item">Overview</button>
        <button className="topnav-item topnav-item--active">Patients</button>
        <button className="topnav-item">Schedule</button>
        <button className="topnav-item">Message</button>
        <button className="topnav-item">Transactions</button>
      </nav>

      <div className="topbar-right">
        <div className="doc-info">
          <div className="doc-name">Dr. Jose Simmons</div>
          <div className="doc-role">General Practitioner</div>
        </div>
        <div className="doc-avatar">JS</div>
      </div>
    </header>
  );
}
