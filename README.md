# 📊 Patient Dashboard

A modern, responsive single-page patient dashboard built for a client
project.\
The UI is based on a provided Adobe XD design and populated using mock
API data to simulate real patient records.

This project demonstrates clean component architecture, responsive
layout design, and dynamic data visualization.

------------------------------------------------------------------------

## 🚀 Features

### 🔹 Adobe XD → React Conversion

The design provided by the client was fully reproduced using:

-   React + Vite
-   Modular, reusable components
-   Clean and semantic HTML
-   A fully responsive 3-column layout

### 🔹 Mock Patient Data Integration

The dashboard uses a mock API endpoint to supply:

-   Patient list\
-   Blood pressure history\
-   Temperature, heart rate, respiratory values\
-   Diagnostic history\
-   Lab results\
-   Profile information\
-   Insurance & contact details

The data is fetched on load and injected directly into the UI.

### 🔹 Interactive Blood Pressure Chart

The "Diagnosis History" section includes a dynamic line chart created
with:

-   **Chart.js**
-   **react-chartjs-2**

It visualizes mock systolic and diastolic values across multiple months,
matching the design.

### 🔹 Single-Page Responsive Layout

The entire interface is a single page with flexible responsiveness:

-   Large displays → 3-column layout (patients list, main content,
    profile panel)
-   Medium displays → auto-adjusting structure
-   Small displays → sidebar collapses, content stacks vertically

All non-essential UI interactions (search bar, dropdown menus, ellipsis
buttons) are intentionally non-functional and used for visual
completeness.

------------------------------------------------------------------------

## 🧩 Project Structure

    patient-dashboard/
    ├── public/
    ├── src/
    │   ├── api.js
    │   ├── App.jsx
    │   ├── main.jsx
    │   ├── index.css
    │   └── components/
    │       ├── Layout.jsx
    │       ├── TopBar.jsx
    │       ├── PatientsSidebar.jsx
    │       ├── DiagnosisHistory.jsx
    │       ├── BloodPressureChart.jsx
    │       ├── VitalsCards.jsx
    │       ├── DiagnosticList.jsx
    │       ├── ProfilePanel.jsx
    │       └── LabResults.jsx
    └── package.json

------------------------------------------------------------------------

## ⚙️ Installation & Setup

### 1. Clone the repository

``` bash
git clone https://github.com/YOUR_USERNAME/patient-dashboard.git
cd patient-dashboard
```

### 2. Install dependencies

``` bash
npm install
```

### 3. Start development server

``` bash
npm run dev
```

App will be available at:

    http://localhost:5173

### 4. Build for production

``` bash
npm run build
```

Production-ready files appear in:

    /dist

------------------------------------------------------------------------

## 🧰 Tech Stack

  Technology                   Purpose
  ---------------------------- ------------------------
  React (Vite)                 Component-driven UI
  Chart.js + react-chartjs-2   Data visualization
  HTML5 / CSS3                 Layout & styling
  JavaScript (ES6+)            App logic
  Mock REST API                Simulated patient data

------------------------------------------------------------------------

## 📌 Notes

-   All patient information is **mock data** and not associated with
    real individuals.
-   This project was completed as part of a **client request** requiring
    conversion of a provided design into a fully responsive web
    dashboard.
-   No real medical data is used.

------------------------------------------------------------------------

## 📷 Screenshot

![Dashboard
Preview](https://github.com/YSayaovong/Patient-Dashboard/blob/main/assets/jessica_taylor.png)

------------------------------------------------------------------------

## 📄 License

This project is provided for demonstration and client work purposes
only.
