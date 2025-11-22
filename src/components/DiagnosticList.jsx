export default function DiagnosticList({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <section className="card diagnostic-list-card">
      <div className="diagnostic-list-header">
        <h2 className="card-title">Diagnostic List</h2>
      </div>

      <div className="diagnostic-table-wrap">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, idx) => (
              <tr key={idx}>
                <td>{item.name || item.problem || "—"}</td>
                <td>{item.description || "—"}</td>
                <td>{item.status || "—"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
