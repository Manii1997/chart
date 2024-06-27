# Chart App

## Overview

This project is a Chart application built with React.Js, showcasing dynamic charts based on different timeframes.

## Features

- Dynamic Chart: Visualizes data dynamically based on daily, weekly, or monthly timeframes.
- Timeframe Selector: Allows users to switch between daily, weekly, and monthly views.
- Search: Provides a search functionality to filter data by date.
- Responsive Design: Utilizes ResponsiveContainer from Recharts for optimal display across devices.

## Setup Instructions

To run this project locally, follow these steps:

1. Clone the repository:
   git clone https://github.com/your/repository.git

2. Navigate into the project directory:
   cd dashboard-app

3. Install dependencies:
   npm install

4. Run the app:
   npm start

5. Open your browser:
   Open [http://localhost:3000] to view the app in the browser.

## Technology Stack

- React
- Recharts (for charting)
- date-fns (for date manipulation)
- Tailwind CSS (for styling)

## Folder Structure

/dashboard-app
├── public
├── src
│ ├── components
│ │ ├── Chart.js
│ │ ├── NavBar.js
│ │ ├── TimeframeSelector.js
│ ├── data
│ │ └── data.json
│ ├── App.js
│ ├── App.css
│ ├── index.js
│ └── ...
├── package.json
└── README.md
