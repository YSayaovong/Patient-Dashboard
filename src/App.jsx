import { useEffect, useState } from "react";
import { fetchAllPatients } from "./api";
import Layout from "./components/Layout";

export default function App() {
  const [patients, setPatients] = useState([]);
  const [jessica, setJessica] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchAllPatients()
      .then((patients) => {
        setPatients(patients);

        const jt = patients.find((p) => p.name === "Jessica Taylor");
        setJessica(jt);

        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load API data");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <span>Loading patient data…</span>
      </div>
    );
  }

  if (error || !jessica) {
    return (
      <div className="loading-screen">
        <span>{error || "Jessica Taylor not found"}</span>
      </div>
    );
  }

  return (
    <Layout
      patients={patients}
      patient={jessica}
    />
  );
}
