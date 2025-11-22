import TopBar from "./TopBar";
import PatientsSidebar from "./PatientsSidebar";
import DiagnosisHistory from "./DiagnosisHistory";
import VitalsCards from "./VitalsCards";
import DiagnosticList from "./DiagnosticList";
import ProfilePanel from "./ProfilePanel";
import LabResults from "./LabResults";

export default function Layout({ patients, patient }) {
  const history = patient.diagnosis_history || [];
  const latest = history.length > 0 ? history[history.length - 1] : null;

  const diagnosticList = patient.diagnostic_list || [];
  const labResults = patient.lab_results || [];

  return (
    <div className="root-shell">
      <TopBar />

      <div className="layout">
        {/* LEFT: patients list */}
        <PatientsSidebar patients={patients} activePatient={patient} />

        {/* MIDDLE: diagnosis + vitals + diagnostic list */}
        <main className="main-column">
          <section className="section-block">
            <DiagnosisHistory history={history} latest={latest} />
          </section>

          <section className="section-block">
            <VitalsCards latest={latest} />
          </section>

          <section className="section-block">
            <DiagnosticList items={diagnosticList} />
          </section>
        </main>

        {/* RIGHT: profile + lab results */}
        <aside className="right-column">
          <ProfilePanel patient={patient} />
          <LabResults results={labResults} />
        </aside>
      </div>
    </div>
  );
}
