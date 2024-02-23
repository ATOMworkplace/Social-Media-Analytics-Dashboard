import React from "react";
import { Line } from "react-chartjs-2";
import analyticData from "./analytic_data.json";
import Chart from 'chart.js/auto';

const Labels = [
  "Jan", "Feb", "March", "April", "May", "June",
  "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

function LineChart({ platform }) {
  const platformData = analyticData.socialMediaAnalytics[platform];
  const viewsPerMonth = Object.values(platformData.viewsPerMonth);
  const data = {
    labels: Labels,
    datasets: [
      {
        label:"Annual Views",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: viewsPerMonth,
      },
    ],
  };

  return (
    <div>
      <center><h2>{platform}</h2></center>
      <Line data={data} />
    </div>
  );
}

export default LineChart;
