export default function Header({ patient }) {
  return (
    <header className="header">
      <div>
        <h1 className="header-title">Patient Details</h1>
        <p className="header-subtitle">Jessica Taylor</p>
      </div>

      <div className="header-profile">
        <div className="avatar">{patient.name.charAt(0)}</div>
        <div>
          <div className="profile-name">{patient.name}</div>
          <div className="profile-meta">
            {patient.gender} • {patient.age} yrs
          </div>
        </div>
      </div>
    </header>
  );
}
