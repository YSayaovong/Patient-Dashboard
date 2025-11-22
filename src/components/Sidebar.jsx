export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">TechHealth</div>

      <nav className="sidebar-nav">
        <button className="nav-item nav-item--active">Overview</button>
        <button className="nav-item">Patients</button>
        <button className="nav-item">Schedule</button>
        <button className="nav-item">Messages</button>
        <button className="nav-item">Settings</button>
      </nav>
    </aside>
  );
}
