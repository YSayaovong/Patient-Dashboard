export default function PatientInfo({ patient }) {
  return (
    <section className="card patient-card">
      <h2 className="card-title">Patient Information</h2>

      <div className="info-grid">
        <div>
          <div className="info-label">Date of Birth</div>
          <div className="info-value">{patient.date_of_birth}</div>
        </div>

        <div>
          <div className="info-label">Gender</div>
          <div className="info-value">{patient.gender}</div>
        </div>

        <div>
          <div className="info-label">Contact</div>
          <div className="info-value">{patient.phone_number}</div>
        </div>

        <div>
          <div className="info-label">Emergency Contact</div>
          <div className="info-value">{patient.emergency_contact}</div>
        </div>

        <div>
          <div className="info-label">Insurance</div>
          <div className="info-value">{patient.insurance_type}</div>
        </div>
      </div>
    </section>
  );
}
