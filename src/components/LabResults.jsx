export default function LabResults({ results }) {
  if (!results || results.length === 0) return null;

  return (
    <section className="card lab-card">
      <div className="lab-header">
        <h2 className="card-title">Lab Results</h2>
      </div>

      <div className="lab-list">
        {results.map((item, idx) => (
          <div key={idx} className="lab-row">
            <div className="lab-name">{item.name || "Result"}</div>
            <button className="lab-download" type="button">
              ⬇
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
