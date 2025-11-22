export default function ProfilePanel({ patient }) {
  return (
    <section className="card profile-card">
      <div className="profile-photo-wrap">
        {patient.profile_picture ? (
          <img
            className="profile-photo"
            src={patient.profile_picture}
            alt={patient.name}
          />
        ) : (
          <div className="profile-photo-fallback">
            {patient.name.charAt(0)}
          </div>
        )}
      </div>

      <h2 className="profile-name-main">{patient.name}</h2>
      <div className="profile-age-gender">
        {patient.gender}, {patient.age}
      </div>

      <div className="profile-info-list">
        <ProfileInfoRow
          label="Date Of Birth"
          value={patient.date_of_birth}
          icon="📅"
        />
        <ProfileInfoRow
          label="Gender"
          value={patient.gender}
          icon="👤"
        />
        <ProfileInfoRow
          label="Contact Info."
          value={patient.phone_number}
          icon="📞"
        />
        <ProfileInfoRow
          label="Emergency Contacts"
          value={patient.emergency_contact}
          icon="📟"
        />
        <ProfileInfoRow
          label="Insurance Provider"
          value={patient.insurance_type}
          icon="🏥"
        />
      </div>

      <button className="profile-button">Show All Information</button>
    </section>
  );
}

function ProfileInfoRow({ label, value, icon }) {
  return (
    <div className="profile-info-row">
      <div className="profile-info-icon">{icon}</div>
      <div className="profile-info-text">
        <div className="profile-info-label">{label}</div>
        <div className="profile-info-value">{value || "—"}</div>
      </div>
    </div>
  );
}
