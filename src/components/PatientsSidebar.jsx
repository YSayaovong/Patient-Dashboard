export default function PatientsSidebar({ patients, activePatient }) {
  return (
    <aside className="patients-sidebar">
      <div className="patients-sidebar-inner">
        <div className="patients-header">
          <h2 className="patients-title">Patients</h2>

          <div className="patients-search">
            <span className="patients-search-icon">🔍</span>
            <input
              className="patients-search-input"
              placeholder="Search"
              disabled
            />
          </div>
        </div>

        <div className="patients-list">
          {patients.map((p) => {
            const isActive = p.name === activePatient.name;

            return (
              <div
                key={p.name}
                className={
                  "patient-row" + (isActive ? " patient-row--active" : "")
                }
              >
                <div className="patient-avatar">
                  {p.profile_picture ? (
                    <img src={p.profile_picture} alt={p.name} />
                  ) : (
                    p.name.charAt(0)
                  )}
                </div>

                <div className="patient-row-text">
                  <div className="patient-row-name">{p.name}</div>
                  <div className="patient-row-meta">
                    {p.gender}, {p.age}
                  </div>
                </div>

                <div className="patient-row-menu">⋯</div>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
