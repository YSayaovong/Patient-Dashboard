export async function fetchAllPatients() {
  const url = "https://fedskillstest.coalitiontechnologies.workers.dev";

  const authHeader = "Basic " + btoa("coalition:skills-test");

  const res = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: authHeader,
    },
  });

  if (!res.ok) {
    throw new Error("Error fetching patient data");
  }

  const data = await res.json();
  return data;
}
