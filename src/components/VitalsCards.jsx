export default function VitalsCards({ latest }) {
  if (!latest) return null;

  const resp = latest.respiratory_rate;
  const temp = latest.temperature;
  const hr = latest.heart_rate;

  return (
    <div className="vitals-grid">
      <div className="card vitals-card vitals-card--blue">
        <div className="vitals-icon">🫁</div>
        <div className="vitals-main">
          <div className="vitals-label">Respiratory Rate</div>
          <div className="vitals-value">
            {resp?.value ?? "--"} <span className="vitals-unit">bpm</span>
          </div>
          <div className="vitals-status">{resp?.levels ?? "—"}</div>
        </div>
      </div>

      <div className="card vitals-card vitals-card--aqua">
        <div className="vitals-icon">🌡️</div>
        <div className="vitals-main">
          <div className="vitals-label">Temperature</div>
          <div className="vitals-value">
            {temp?.value ?? "--"}
            <span className="vitals-unit">°F</span>
          </div>
          <div className="vitals-status">{temp?.levels ?? "—"}</div>
        </div>
      </div>

      <div className="card vitals-card vitals-card--pink">
        <div className="vitals-icon">❤️</div>
        <div className="vitals-main">
          <div className="vitals-label">Heart Rate</div>
          <div className="vitals-value">
            {hr?.value ?? "--"} <span className="vitals-unit">bpm</span>
          </div>
          <div className="vitals-status">{hr?.levels ?? "—"}</div>
        </div>
      </div>
    </div>
  );
}
