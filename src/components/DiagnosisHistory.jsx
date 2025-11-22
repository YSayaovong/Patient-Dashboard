import BloodPressureChart from "./BloodPressureChart";

export default function DiagnosisHistory({ history, latest }) {
  const systolic = latest?.blood_pressure?.systolic;
  const diastolic = latest?.blood_pressure?.diastolic;

  return (
    <section className="card diagnosis-card">
      <div className="diagnosis-card-top">
        <div>
          <h2 className="card-title">Diagnosis History</h2>
          <p className="card-subtitle">Blood Pressure</p>
        </div>

        <div className="diagnosis-range">Last 6 months</div>
      </div>

      <div className="diagnosis-content">
        <div className="diagnosis-chart-wrap">
          <BloodPressureChart history={history} />
        </div>

        <div className="diagnosis-legend">
          <div className="legend-item">
            <span className="legend-dot legend-dot--systolic" />
            <div className="legend-text">
              <div className="legend-label">Systolic</div>
              <div className="legend-value">
                {systolic?.value ?? "--"}
                <span className="legend-unit"> mmHg</span>
              </div>
              <div className="legend-status">
                {systolic?.levels ?? "—"}
              </div>
            </div>
          </div>

          <div className="legend-item">
            <span className="legend-dot legend-dot--diastolic" />
            <div className="legend-text">
              <div className="legend-label">Diastolic</div>
              <div className="legend-value">
                {diastolic?.value ?? "--"}
                <span className="legend-unit"> mmHg</span>
              </div>
              <div className="legend-status">
                {diastolic?.levels ?? "—"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
