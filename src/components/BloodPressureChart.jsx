import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

export default function BloodPressureChart({ history }) {
  if (!history || history.length === 0) return null;

  // sort by year/month if provided; here we assume already in order
  const lastSix = history.slice(-6);

  const labels = lastSix.map((h) => h.month || h.year || "");
  const systolic = lastSix.map((h) => h.blood_pressure.systolic.value);
  const diastolic = lastSix.map((h) => h.blood_pressure.diastolic.value);

  const data = {
    labels,
    datasets: [
      {
        label: "Systolic",
        data: systolic,
        borderColor: "#ff6ad5", // pink line
        backgroundColor: "rgba(255, 106, 213, 0.18)",
        pointRadius: 4,
        tension: 0.4,
        fill: true,
      },
      {
        label: "Diastolic",
        data: diastolic,
        borderColor: "#8b5cf6", // purple line
        backgroundColor: "rgba(139, 92, 246, 0.18)",
        pointRadius: 4,
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: false,
        grid: {
          color: "rgba(148, 163, 184, 0.25)",
        },
      },
    },
  };

  return (
    <div className="bp-chart">
      <Line data={data} options={options} />
    </div>
  );
}
